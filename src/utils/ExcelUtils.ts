import * as ExcelJS from 'exceljs';
import * as path from 'path';
import { PermissionResult } from '../PermissionAnalyzer';

export class ExcelUtils {
    public static async loadMappingsFromExcel(filePath: string): Promise<{ [key: string]: string }> {
        const apiPermissionMap: { [key: string]: string } = {};
        try {
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.readFile(filePath);
    
            // 获取指定工作表，直接检查是否存在
            const worksheet = workbook.getWorksheet('Js_Api');
            if (!worksheet) {
                throw new Error('无法找到工作表 "Js_Api"');
            }

            worksheet.eachRow((row, rowNumber) => {
                if (rowNumber > 1) { // 忽略表头
                    const className = row.getCell(2).text.trim(); // 类名
                    const methodName = row.getCell(3).text.trim(); // 方法名
                    const permission = row.getCell(7).text.trim(); // 权限
    
                    // 如果类名、方法名和权限都有效，构建API签名并保存
                    if (className && methodName && permission) {
                        const apiSignature = `${className}.${methodName}`;
                        apiPermissionMap[apiSignature] = permission;
                    }
                }
            });
    
            console.log(`成功从Excel加载了 ${Object.keys(apiPermissionMap).length} 个API权限映射`);
        } catch (error) {
            console.error(`加载Excel文件失败: ${error}`);
            throw error;
        }
        
        return apiPermissionMap;
    }

  /**
   * 生成Excel权限报告
   */
  public static async generateExcelReport(results: PermissionResult[], outputDir: string): Promise<string> {
    const workbook = new ExcelJS.Workbook();
    const filteredSheet = workbook.addWorksheet('权限分析');

    filteredSheet.columns = [
      { header: '项目', key: 'project', width: 20 },
      { header: '权限', key: 'permission', width: 40 },
      { header: '是否使用', key: 'status', width: 15 },
      { header: '是否声明', key: 'isDeclared', width: 15 }
    ];
    
    for (const result of results) {
      // 处理声明但未使用的权限
      for (const perm of result.unusedPermissions) {
        if (perm.startsWith('ohos')) {  
          filteredSheet.addRow({
            project: result.projectName,
            permission: perm,
            status: '否',
            isDeclared: result.declaredPermissions.includes(perm) ? '是' : '否'  
          });
        }
      }
      // 处理已使用的权限
      for (const perm of result.usedPermissions) {
         if (perm && typeof perm === 'string' &&perm.startsWith('ohos')) { 
          filteredSheet.addRow({
            project: result.projectName,
            permission: perm,
            status: '是',
            isDeclared: result.declaredPermissions.includes(perm) ? '是' : '否'   
          });
         }
      }
    }
    
    // 保存Excel
    const outputFilePath = path.join(outputDir, '权限分析.xlsx');
    await workbook.xlsx.writeFile(outputFilePath);
    console.log(`Excel报告已保存到：${outputFilePath}`);
    
    return outputFilePath;
  }
}
