import { SceneConfig, Scene, Stmt, AbstractFieldRef, ClassSignature } from 'arkanalyzer';
import * as fs from 'fs';
import * as path from 'path';
import * as ExcelJS from 'exceljs';

export interface PermissionResult {
  projectName: string;
  declaredPermissions: string[];
  usedPermissions: string[];
  unusedPermissions: string[];
}
interface ApiInfo {
  methodName: string;
  moduleName: string;
  permission: string;
}

export class PermissionAnalyzer {
  private scene: Scene;
  private config: SceneConfig;
  private projectPath: string;
  private apisPath: string
  private apis: Set<ApiInfo> = new Set();


  constructor(apisPath: string, configJsonPath: string) {
    this.apisPath = apisPath
    this.config = new SceneConfig()
    this.config.buildFromJson(configJsonPath)
    this.config.buildFromProjectDir(this.config.getTargetProjectDirectory()),
    this.projectPath = this.config.getTargetProjectDirectory()
    this.scene = new Scene()
    this.scene.buildSceneFromProjectDir(this.config)
    this.scene.inferTypes()

  }
  private async buildApis(filePath: string, declaredPermissions: string[]) {
    try {
      if (declaredPermissions.length === 0) {
        console.log('未找到声明的权限，无法构建API列表');
        return;
      }
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.readFile(filePath);
      const worksheet = workbook.getWorksheet('Js_Api');
      if (!worksheet) {
        throw new Error('无法找到工作表 "Js_Api"');
      }

      const apisMap: Map<string, ApiInfo> = new Map();

      worksheet.eachRow((row, rowNumber) => {
        if (rowNumber > 1) {
          const moduleName = row.getCell(1).text.trim(); // 模块名
          const methodName = row.getCell(3).text.trim(); // 方法名
          const permission = row.getCell(7).text.trim(); // 权限

          if (moduleName && methodName && permission && declaredPermissions.includes(permission)) {
            const apiKey = `${moduleName}-${methodName}-${permission}`;


            if (!apisMap.has(apiKey)) {
              apisMap.set(apiKey, {
                methodName: methodName,
                moduleName: moduleName,
                permission: permission
              });
            }
          }
        }
      });
      this.apis = new Set(apisMap.values());
      console.log('获取的api长度:',this.apis.size)
    } catch (error) {
      console.error('Error building APIs:', error);
    }
  }
  /**
   * 分析项目中的权限使用情况
   */
  public async analyzePermissions(): Promise<PermissionResult> {

    console.log(`分析项目：${path.basename(this.projectPath)}`);
    // 分析权限
    const result: PermissionResult = {
      projectName: path.basename(this.config.getTargetProjectDirectory()),
      declaredPermissions: this.getDeclaredPermissions(),
      usedPermissions: this.getUsedPermissions(),
      unusedPermissions: []
    };
    await this.buildApis(this.apisPath, result.declaredPermissions);
    result.unusedPermissions = result.declaredPermissions.filter(
      perm => !result.usedPermissions.includes(perm)
    );

    return result;
  }

  /**
   * 获取项目声明的权限
   */
  private getDeclaredPermissions(): string[] {
    let declaredPermissions: string[] = [];
    const manifestPath = path.join(this.projectPath, 'entry/src/main/module.json5');
    console.log('解析路径:', manifestPath);

    if (fs.existsSync(manifestPath)) {
      try {
        const content = fs.readFileSync(manifestPath, 'utf-8');
        try {
          // 尝试直接解析JSON
          const manifest = JSON.parse(content);
          declaredPermissions = [...declaredPermissions, ...this.extractPermissionsFromManifest(manifest)];
        } catch (jsonError) {
          // 如果直接JSON解析失败，可能是JSON5格式，尝试处理常见的JSON5语法
          const cleanedContent = content
            .replace(/\/\/.*$/gm, '') // 移除单行注释
            .replace(/\/\*[\s\S]*?\*\//g, '') // 移除多行注释
            .replace(/,\s*([}\]])/g, '$1'); // 移除尾随逗号

          try {
            const manifest = JSON.parse(cleanedContent);
            declaredPermissions = [...declaredPermissions, ...this.extractPermissionsFromManifest(manifest)];
          } catch (cleanJsonError) {
            console.error(`无法解析文件 ${manifestPath} 的内容，它可能不是有效的JSON或JSON5`);
          }
        }
      } catch (error) {
        console.error(`读取清单文件 ${manifestPath} 时出错:`, error);
      }
    }

    // 过滤重复权限
    return Array.from(new Set(declaredPermissions));
  }

  /**
   * 从manifest提取权限信息
   */
  private extractPermissionsFromManifest(manifest: any): string[] {
    let permissions: string[] = [];

    try {
      // 检查manifest.requestPermissions并提取权限
      if (manifest.module && manifest.module.requestPermissions && Array.isArray(manifest.module.requestPermissions)) {
        for (const perm of manifest.module.requestPermissions) {
          if (perm.name) {
            permissions.push(perm.name);
          }
        }
      }
    } catch (error) {
      console.error('从清单中提取权限时出错:', error);
    }

    return permissions;
  }

  /**
   * 分析代码中使用的API并映射到权限
   */
  private getUsedPermissions(): string[] {

    const usedPermissions = new Set<string>();
    const methods = this.scene.getMethods();

    for (const method of methods) {
      const body = method.getBody();
      if (!body) continue;

      const stmts = body.getCfg().getStmts();
      if (!stmts || stmts.length === 0) continue;

      for (const stmt of stmts) {
        if (stmt.containsFieldRef())
          this.fieldAPIForPermissions(stmt, usedPermissions);
        else
          this.methodAPIForPermissions(stmt, usedPermissions);
      }
    }

    return Array.from(usedPermissions);
  }

  /**
   * 处理方法API调用并提取权限
   */
  private methodAPIForPermissions(stmt: Stmt, usedPermissions: Set<string>): void {
    const invokeExpr = stmt.getInvokeExpr();
    if (!invokeExpr) return;

    const methodName = invokeExpr.getMethodSignature().getMethodSubSignature().getMethodName();
    // const className = invokeExpr.getMethodSignature().getDeclaringClassSignature().getClassName();
    const fileName = invokeExpr.getMethodSignature().getDeclaringClassSignature().getDeclaringFileSignature().getProjectName()

    // 构建API签名
    const apiSignature = `${fileName}.${methodName}`;


    for (const api of this.apis) {
      if (api.methodName === methodName && fileName.includes(api.moduleName)) {
        console.log(`找到匹配API: ${apiSignature}, 权限: ${api.permission}`);
        usedPermissions.add(api.permission);
        break;
      }
    }
  }

  /**
   * 处理字段API调用并提取权限
   */
  private fieldAPIForPermissions(stmt: Stmt, usedPermissions: Set<string>): void {
    for (const use of stmt.getUses()) {
      if (use instanceof AbstractFieldRef) {

        const abstractFieldRef = use as AbstractFieldRef;
        const name = abstractFieldRef.getFieldSignature().getFieldName();
        // const declaration = abstractFieldRef.getFieldSignature().getDeclaringSignature();   
        // let className = "";
        // if (declaration instanceof ClassSignature) {
        //   className = (declaration as ClassSignature).getClassName();
        // }
        const fileName = abstractFieldRef.getFieldSignature().getDeclaringSignature().getDeclaringFileSignature().getFileName();
        // 构建API签名
        const apiSignature = `${fileName}.${name}`;

        for (const api of this.apis) {
          if (api.methodName === name && fileName.includes(api.moduleName)) {
            console.log(`找到匹配API: ${apiSignature}, 权限: ${api.permission}`);
            usedPermissions.add(api.permission);
            break;
          }
        }
      }
    }
  }

}
