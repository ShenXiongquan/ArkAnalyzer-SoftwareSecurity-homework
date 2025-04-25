import * as ExcelJS from 'exceljs';
import * as path from 'path';
import { PermissionResult } from '../PermissionAnalyzer';

export class ExcelUtils {
   
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
