# 全屏启动原子化服务测试用例

## 用例表

| 测试功能                                             | 预置条件   | 输入                       | 预期输出                    | 是否自动 | 测试结果 |
| -------------------------------------------------- | -------- | -------------------------- | ------------------------- | ------| ------ |
| 验证通过arkui接口FullScreenLaunchComponent嵌入式全屏启动原子化服务 | 位于启动页面 | 点击"全屏启动原子化服务组件"按钮 | 页面通过嵌入式启动方式跳转至原子化服务应用 | 是 | Pass |
| 验证通过UIAbilityContext.openAtomicService接口跳出式启动原子化服务 | 位于启动页面 | 点击"UIAbility启动原子化服务"按钮 | 页面通过跳出式启动方式跳转至原子化服务应用 | 是 | Pass |
| 验证通过UIExtensionContext.openAtomicService接口跳出式启动原子化服务 | 位于启动页面 | 点击"UIExtension启动原子化服务"按钮 | 页面通过跳出式启动方式跳转至原子化服务应用 | 是 | Pass |