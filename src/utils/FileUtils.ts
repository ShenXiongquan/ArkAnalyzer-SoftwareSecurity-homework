import * as fs from 'fs';
import * as path from 'path';

export class FileUtils {
  /**
   * 确保目录存在，如果不存在则创建
   */
  public static ensureDirectoryExists(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }
  
  /**
   * 获取包含鸿蒙项目的目录列表
   */
  public static getProjectDirectories(rootDir: string): string[] {
    const projectDirs: string[] = [];
    
    if (fs.existsSync(rootDir) && fs.statSync(rootDir).isDirectory()) {
      // 检查rootDir是否自身是一个项目
      if (this.hasEntryDirectory(rootDir)) {
        projectDirs.push(rootDir);
      } else {
        // 检查rootDir下的子目录
        const entries = fs.readdirSync(rootDir);
        
        for (const entry of entries) {
          const fullPath = path.join(rootDir, entry);
          if (fs.statSync(fullPath).isDirectory()) {
            if (this.hasEntryDirectory(fullPath)) {
              projectDirs.push(fullPath);
            } else {
              // 递归检查子目录
              const subDirs = this.getProjectDirectories(fullPath);
              projectDirs.push(...subDirs);
            }
          }
        }
      }
    }
    
    return projectDirs;
  }

  /**
   * 检查目录是否包含entry子目录
   */
  private static hasEntryDirectory(dir: string): boolean {
    const entryPath = path.join(dir, 'entry');
    return fs.existsSync(entryPath) && fs.statSync(entryPath).isDirectory();
  }
}
