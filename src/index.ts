import { PermissionAnalyzer, PermissionResult } from './PermissionAnalyzer';
import { FileUtils } from './utils/FileUtils';
import { ExcelUtils } from './utils/ExcelUtils';
import * as path from 'path';

// 配置参数
const CONFIG = './projectConfig.json'; 
const OUTPUT_DIR = './output/';
const APIS_PATH = './Js_Api.xlsx';


async function main() {
    console.log('开始分析项目权限...');
    FileUtils.ensureDirectoryExists(OUTPUT_DIR);
  
//   // 获取所有项目目录
//   const projectDirs = FileUtils.getProjectDirectories(PROJECT_DIRECTORY);
//   if (projectDirs.length === 0) {
//     console.log(`未在${PROJECT_DIRECTORY}目录下找到鸿蒙项目`);
//     return;
//   }
//   console.log(`找到${projectDirs.length}个项目，开始分析...`);

  // 初始化权限分析器
    const analyzer = new PermissionAnalyzer(APIS_PATH,CONFIG);
  
    const result =await analyzer.analyzePermissions();
    console.log(`项目${result.projectName}分析完成:`);
    console.log(`- 声明的权限: ${result.declaredPermissions.length}`);
    console.log(`- 使用的权限: ${result.usedPermissions.length}`);
    console.log(`- 未使用的权限: ${result.unusedPermissions.length}`);
    // 生成报告
    await ExcelUtils.generateExcelReport([result], OUTPUT_DIR);
    
}

main().catch(error => {
  console.error('分析过程中出错:', error);
});
