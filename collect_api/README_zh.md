# 基础API解析工具

## 简介

该工具可用于解析d.ts文件中的API，并汇总成表格，提供给应用开发者

## 目录

```
└─API          #存放需要扫描的d.ts文件的目录
```

## 使用方法

### 目录配置

新建API文件夹，放置d.ts文件。

### 安装

需要安装npm依赖环境，在package.json同级目录下执行：npm install。

### 使用工具

在package.json同级目录下执行：npm run collect。

## 相关文件夹

[collect_api](https://gitee.com/openharmony/interface_sdk-js/tree/master/build-tools/collect_api)