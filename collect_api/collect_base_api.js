/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const fs = require('fs');
const ts = require('typescript');
const ExcelJS = require('exceljs');
const path = require('path');
const { sys } = require('typescript');
// 是否统计type类型API的开关，true表示统计
const typeCollection = true;
// 是否不合并同名函数的开关，true不合并
const isNotMerge = true;

// 解析文件 文本内容并将结果push到列表中并去重
function parse(files) {
  const api = [];
  const exportApi = [];
  const returnDeclarationArr = new Set([]);
  const hash = new Set([]);
  const fileContentList = [];
  files.forEach(file => {
    let fileContent = fs.readFileSync(file, 'utf-8');
    fileContentList.push({
      fileName: path.basename(file).replace(/.d.ts$/g, '.ts'),
      fileContent: fileContent,
      fileRoot: file,
    });
  });
  fileContentList.forEach(item => {
    const fileName = item.fileName.replace(/\.d.ts$/g, '.ts');
    let packageName = item.fileRoot.indexOf('component\\ets\\') >= 0 ||
      item.fileRoot.indexOf('component/ets/') >= 0 ? 'ArkUI' : fileName.replace((/\@|.ts$/g), '').replace(/D:\\/g, '');
    ts.transpileModule(item.fileContent, {
      compilerOptions: {
        'target': ts.ScriptTarget.ES2017,
      },
      fileName: fileName,
      transformers: { before: [getReturnDeclarationArr(packageName, exportApi, returnDeclarationArr)] },
    });
  });

  fileContentList.forEach(item => {
    const fileName = item.fileName.replace(/\.d.ts$/g, '.ts');
    let packageName = item.fileRoot.indexOf('component\\ets\\') >= 0 ||
      item.fileRoot.indexOf('component/ets/') >= 0 ? 'ArkUI' : fileName.replace(/\@|.ts$/g, '').replace(/D:\\/g, '');
    ts.transpileModule(item.fileContent, {
      compilerOptions: {
        'target': ts.ScriptTarget.ES2017,
      },
      fileName: fileName,
      transformers: { before: [processDeclarationSourceFile(packageName, api, exportApi, returnDeclarationArr, hash, item.fileRoot)] },
    });
  });
  return api;
}

// 获取返回值类型
function visitAllNode(node, returnDeclarationArr) {
  if ((ts.isMethodDeclaration(node) || ts.isFunctionDeclaration(node)) && node && node.type &&
    ts.isTypeReferenceNode(node.type)) {
    returnDeclarationArr.add(node.type.typeName.getText());
  }
  node.getChildren().forEach(item => {
    visitAllNode(item, returnDeclarationArr);
  });
}

// 获取导入Api的数组
function getExportApi(node, packageName, exportApi) {
  node.statements.forEach(stat => {
    if (ts.isModuleDeclaration(stat)) {
      if (stat.getText().indexOf('namespace') > 0) {
        let apiInfo = {
          isSystemApi: '公开API',
          version: '',
          deprecated: '',
          permission: 'N/A',
          sysCap: 'N/A',
          model: '',
        };
        exportApi.push({
          packageName: packageName,
          className: stat.name.escapedText.toString(),
          methodName: '',
          apiInfo: getApiInfo(stat, apiInfo),
        });
      }
    }
  });
}

// 获取返回值类型和命名空间
const getReturnDeclarationArr = (packageName, exportApi, returnDeclarationArr) => {
  return (context) => {
    return (node) => {
      visitAllNode(node, returnDeclarationArr);
      getExportApi(node, packageName, exportApi);
      return node;
    };
  };
};


// 搜集API接口并去重
function processDeclarationSourceFile(packageName, api, exportApi, returnDeclarationArr, hash, dtsPath) {
  return (context) => {
    return (node) => {
      const statements = node.statements;
      const currentClassFuncSet = new Set([]);
      const currentTypeList = new Array();
      getCurrentTypeList(statements, currentTypeList);

      statements.forEach(stat => {
        let apiInfo = {
          isSystemApi: '公开API',
          version: '',
          deprecated: '',
          permission: 'N/A',
          sysCap: 'N/A',
          model: '',
          headimport: 'N/A',
          endexport: 'N/A',
        };
        collectApi(packageName, api, stat, apiInfo, exportApi, returnDeclarationArr, hash, dtsPath,
          currentTypeList, currentClassFuncSet);
      });
      return node;
    };
  };
}

function getCurrentTypeList(statements, currentTypeList) {
  statements.forEach(stat => {
    if (ts.isTypeAliasDeclaration(stat)) {
      if (stat.type.types) {
        let typeObj = {
          name: stat.name.escapedText,
          value: [],
        };
        stat.type.types.forEach(type => {
          if (type.literal && type.literal.text) {
            typeObj.value.push(type.literal.text);
          }
        });
        if (typeObj.value.length > 0) {
          currentTypeList.push(typeObj);
        }
      }
    }
  });
}

function collectApi(packageName, api, stat, apiInfo, exportApi, returnDeclarationArr, hash, dtsPath, currentTypeList,
  currentClassFuncSet) {
  if (ts.isInterfaceDeclaration(stat)) {
    collectInterfaceDeclaration(stat, packageName, api, exportApi, returnDeclarationArr, hash, apiInfo,
      currentTypeList, dtsPath);
  } else if (ts.isModuleDeclaration(stat)) {
    collectModuleDeclaration(stat, packageName, api, exportApi, returnDeclarationArr, hash, apiInfo,
      currentTypeList, dtsPath);
  } else if (ts.isClassDeclaration(stat)) {
    collectClassDeclaration(stat, packageName, api, exportApi, returnDeclarationArr, hash, apiInfo,
      currentTypeList, dtsPath);
  } else if (ts.isEnumDeclaration(stat)) {
    collectEnumDeclaration(stat, packageName, api, exportApi, returnDeclarationArr, hash, apiInfo,
      currentTypeList, dtsPath);
  } else if (ts.isVariableStatement(stat)) {
    const apiName = stat.declarationList.declarations[0].name.escapedText;
    addApi(packageName, 'global', apiName, stat.getText().trim(), getApiInfo(stat, apiInfo),
      'Decorator', api, hash, dtsPath, 8);
  } else {
    collectSpecialApi(stat, packageName, api, hash, currentClassFuncSet, dtsPath, exportApi, apiInfo);
  }
}

function collectSpecialApi(stat, packageName, api, hash, currentClassFuncSet, dtsPath, exportApi, apiInfo) {
  if (ts.isMethodDeclaration(stat) || ts.isMethodSignature(stat) || ts.isFunctionDeclaration(stat)) {
    const methodName = stat.name.escapedText ? stat.name.escapedText.toString() : stat.name.text.toString();
    let className = '';
    exportApi.forEach(item => {
      if (item.methodName === methodName && item.packageName === packageName) {
        className = item.className;
        if (item.apiInfo) {
          apiInfo = item.apiInfo;
        }
      }
    });
    addFunctionOnOffApi(packageName, className, methodName, getApiInfo(stat, apiInfo), 'Method', api,
      hash, currentClassFuncSet, stat, dtsPath);
  }
}

function collectInterfaceDeclaration(stat, packageName, api, exportApi, returnDeclarationArr, hash, apiInfo, currentTypeList, dtsPath) {
  const className = stat.name.escapedText.toString();
  const interfaceChildren = stat.members;
  let tmpApiInfo = getApiInfo(stat, apiInfo);
  collectEachChildNode(interfaceChildren, packageName, className, 'Field', api, exportApi, returnDeclarationArr, hash,
    tmpApiInfo, currentTypeList, dtsPath);
}

function collectClassDeclaration(stat, packageName, api, exportApi, returnDeclarationArr, hash, apiInfo, currentTypeList, dtsPath) {
  const className = stat.name.escapedText.toString();
  const classChildren = stat.members;
  let tmpApiInfo = getApiInfo(stat, apiInfo);
  collectEachChildNode(classChildren, packageName, className, 'Field', api, exportApi, returnDeclarationArr, hash,
    tmpApiInfo, currentTypeList, dtsPath);
}

function collectEnumDeclaration(stat, packageName, api, exportApi, returnDeclarationArr, hash, apiInfo, currentTypeList, dtsPath) {
  const className = stat.name.escapedText.toString();
  const enumChildren = stat.members;
  let tmpApiInfo = getApiInfo(stat, apiInfo);
  collectEachChildNode(enumChildren, packageName, className, 'Enum', api, exportApi, returnDeclarationArr, hash,
    tmpApiInfo, currentTypeList, dtsPath);
}

function collectModuleDeclaration(stat, packageName, api, exportApi, returnDeclarationArr, hash, apiInfo, currentTypeList, dtsPath) {
  const className = stat.name.escapedText ? stat.name.escapedText.toString() : stat.name.text.toString();
  const moduleChildren = stat.body.statements;
  let tmpApiInfo = getApiInfo(stat, apiInfo);
  collectEachChildNode(moduleChildren, packageName, className, 'Field', api, exportApi, returnDeclarationArr, hash,
    tmpApiInfo, currentTypeList, dtsPath);
}

function collectTypeApi(child, packageName, className, api, hash, apiInfo, dtsPath) {
  let typeObj = {
    name: child.name.escapedText,
    value: [],
  };
  if (child.type.types) {
    child.type.types?.forEach(type => {
      collectTypeApiInTypes(type, apiInfo, child, api, hash, dtsPath, typeObj, packageName);
    });
  } else if (child.type.members) {
    child.type.members?.forEach(member => {
      collectTypeApiInMembers(member, apiInfo, child, api, hash, dtsPath, typeObj, packageName, className);
    });
  }
  return typeObj;
}

function collectTypeApiInTypes(type, apiInfo, child, api, hash, dtsPath, typeObj, packageName) {
  if (type.literal && type.literal.text) {
    typeObj.value.push(type.literal.text);
    if (typeCollection && type.literal) {
      let faterApiInfo = JSON.parse(JSON.stringify(apiInfo));
      addApi(packageName, child.name.escapedText, type.literal.text, child.getText(),
        getApiInfo(child, faterApiInfo), 'Type', api, hash, dtsPath, 1);
    }
  } else {
    if (type.getText() !== '') {
      typeObj.value.push(type.getText());
      if (typeCollection && type.literal) {
        let faterApiInfo = JSON.parse(JSON.stringify(apiInfo));
        addApi(packageName, child.name.escapedText, type.getText(), child.getText(),
          getApiInfo(child, faterApiInfo), 'Type', api, hash, dtsPath, 2);
      }
    }
  }
}

function collectTypeApiInMembers(member, apiInfo, child, api, hash, dtsPath, typeObj, packageName, className) {
  member.type.types?.forEach(type => {
    if (type.literal && type.literal.text) {
      typeObj.value.push(type.literal.text);
      if (typeCollection) {
        let faterApiInfo = JSON.parse(JSON.stringify(apiInfo));
        addApi(packageName, child.name.escapedText, type.literal.text, child.getText(),
          getApiInfo(child, faterApiInfo), 'Type', api, hash, dtsPath, 3);
      }
    } else {
      if (type.getText() !== '') {
        typeObj.value.push(type.getText());
        if (typeCollection) {
          let faterApiInfo = JSON.parse(JSON.stringify(apiInfo));
          addApi(packageName, className, child.name.escapedText, child.getText(),
            getApiInfo(child, faterApiInfo), 'Type', api, hash, dtsPath, 4);
        }
      }
    }
  });
}

function collectEachChildNode(children, packageName, className, faterApiType, api, exportApi, returnDeclarationArr,
  hash, apiInfo, currentTypeList, dtsPath) {
  const currentClassFunSet = new Set([]);
  children.forEach(child => {
    if (ts.isTypeAliasDeclaration(child)) {
      if (child.type) {
        let typeObj = collectTypeApi(child, packageName, className, api, hash, apiInfo, dtsPath);
        if (typeObj.value.length > 0) {
          currentTypeList.push(typeObj);
        }
      }
    }
  });
  children.forEach(child => {
    let faterApiInfo = JSON.parse(JSON.stringify(apiInfo));
    let apiType = new String(faterApiType);
    if (/export.*\{.*\}/g.test(child.getText())) {
      exportApi.push({
        packageName: packageName,
        className: className,
        methodName: child.getText().replace('export', '').replace('{', '').replace('}', '').replace(';', '').trim(),
        apiInfo: faterApiInfo,
      });
      return;
    }
    if (ts.isInterfaceDeclaration(child)) {
      collectInterfaceDeclaration(child, packageName, api, exportApi, returnDeclarationArr, hash, faterApiInfo, currentTypeList, dtsPath);
    } else if (ts.isModuleDeclaration(child)) {
      collectModuleDeclaration(child, packageName, api, exportApi, returnDeclarationArr, hash, faterApiInfo, currentTypeList, dtsPath);
    } else if (ts.isClassDeclaration(child)) {
      collectClassDeclaration(child, packageName, api, exportApi, returnDeclarationArr, hash, faterApiInfo, currentTypeList, dtsPath);
    } else if (ts.isEnumDeclaration(child)) {
      collectEnumDeclaration(child, packageName, api, exportApi, returnDeclarationArr, hash, faterApiInfo, currentTypeList, dtsPath);
    } else {
      if ((ts.isMethodDeclaration(child) || ts.isMethodSignature(child) || ts.isFunctionDeclaration(child)) &&
        (child.name.escapedText === 'on' || child.name.escapedText === 'off') && child.parameters && child.parameters.length > 0) {
        apiType = 'Method';
        collectSubscriptionTypeApi(child, apiType, packageName, className, faterApiType, api, currentTypeList,
          hash, currentClassFunSet, dtsPath);
      } else {
        collectOtherApi(child, packageName, className, faterApiInfo, apiType, api,
          hash, currentClassFunSet, child, dtsPath, returnDeclarationArr);
      }
    }
  });
}

function collectOtherApi(child, packageName, className, faterApiInfo, apiType, api,
  hash, currentClassFunSet, child, dtsPath, returnDeclarationArr) {
  let methodName = '';
  if (isSpecialMethod(child)) {
    if (child.name) {
      methodName = child.name.getText();
    } else {
      methodName = className;
    }
    apiType = 'Method';
  } else if (ts.isPropertyDeclaration(child) || ts.isPropertySignature(child)) {
    if (child.type && child.type.parameters) {
      methodName = child.name.escapedText;
      apiType = 'Method';
    } else {
      methodName = child.name.escapedText;
      apiType = 'Field';
    }
  } else {
    if (child.name) {
      methodName = child.name.getText();
    }
  }
  if (methodName !== '') {
    addFunctionOnOffApi(packageName, className, methodName, faterApiInfo, apiType, api,
      hash, currentClassFunSet, child, dtsPath);
  } else {
    if (child.getText().indexOf('constructor') === 0) {
      methodName = 'constructor';
      apiType = 'Method';
    } else if (child.getText().indexOf('const') === 0) {
      const infoObj = collectFieleOrConstant(apiType, methodName, child, returnDeclarationArr);
      methodName = infoObj.methodName;
      apiType = infoObj.apiType;
    } else if (/\w+:\s*\w+/g.test(child.getText())) {
      apiType = 'Field';
      methodName = child.getText().split(':')[0].trim();
    }
    if (methodName !== '') {
      addApi(packageName, className, methodName, child.getText(),
        getApiInfo(child, faterApiInfo), apiType, api, hash, dtsPath, 5);
    }
  }
}

function isSpecialMethod(child){
  return ts.isMethodDeclaration(child) || ts.isMethodSignature(child) || ts.isFunctionDeclaration(child) ||
  ts.isCallSignatureDeclaration(child) || ts.isConstructSignatureDeclaration(child) ||
  ts.isIndexSignatureDeclaration(child);
}

function collectFieleOrConstant(apiType, methodName, child, returnDeclarationArr) {
  if (child.getText().replace('const', '').indexOf(':') > 0) {
    if (returnDeclarationArr.has(child.getText().replace('const', '').split(':')[1].trim())) {
      apiType = 'Field';
    } else {
      apiType = 'Constant';
    }
    methodName = child.getText().replace('const', '').split(':')[0].trim();
  } else if (child.getText().replace('const', '').indexOf('=') > 0) {
    if (returnDeclarationArr.has(child.getText().replace('const', '').split('=')[1].trim())) {
      apiType = 'Field';
    } else {
      apiType = 'Constant';
    }
    methodName = child.getText().replace('const', '').split('=')[0].trim();
  }
  return { apiType, methodName };
}

function collectSubscriptionTypeApi(child, apiType, packageName, className, faterApiInfo, api, currentTypeList,
  hash, currentClassFunSet, dtsPath) {
  for (let i = 0; i < child.parameters.length; i++) {
    const param = child.parameters[i];
    if (isCommonSubscriptionType(param)) {
      if (param.type && param.type.literal && param.type.literal.text) {
        collectTypeOrEventApi(packageName, className, faterApiInfo, apiType, api,
          hash, currentClassFunSet, child, dtsPath, param);
      } else if (param.type && param.type.types && param.type.types.length > 0) {
        collectSpecialSubscriptionTypeApi(param, packageName, className, faterApiInfo, apiType, api,
          hash, currentClassFunSet, child, dtsPath);
      } else if (param.type && param.type.typeName && param.type.typeName.escapedText) {
        inCurrentTypeListApi(packageName, className, faterApiInfo, apiType, api,
          hash, currentClassFunSet, child, dtsPath, currentTypeList, param);
      } else if (param.type && param.type.typeName && param.type.typeName.left &&
        param.type.typeName.right) {
        let methodName = child.name.escapedText + '_' + param.type.typeName.left.escapedText + '_' +
          param.type.typeName.right.escapedText;
        addFunctionOnOffApi(packageName, className, methodName, faterApiInfo, apiType, api,
          hash, currentClassFunSet, child, dtsPath);
      } else {
        let methodName = child.name.escapedText;
        addFunctionOnOffApi(packageName, className, methodName, faterApiInfo, apiType, api,
          hash, currentClassFunSet, child, dtsPath);
      }
      break;
    } else {
      let methodName = child.name.escapedText;
      addFunctionOnOffApi(packageName, className, methodName, faterApiInfo, apiType, api,
        hash, currentClassFunSet, child, dtsPath);
    }
  }
}

function isCommonSubscriptionType(param) {
  return param.name.escapedText === 'type' || param.name.escapedText === 'event' ||
    param.name.escapedText === 'eventType';
}

function collectSpecialSubscriptionTypeApi(param, packageName, className, faterApiInfo, apiType, api,
  hash, currentClassFunSet, child, dtsPath) {
  param.type.types.forEach(type => {
    if (type.literal && type.literal.text) {
      const methodName = child.name.escapedText + '_' + type.literal.text;
      addFunctionOnOffApi(packageName, className, methodName, faterApiInfo, apiType, api,
        hash, currentClassFunSet, child, dtsPath);
    }
  });
}

function inCurrentTypeListApi(packageName, className, faterApiInfo, apiType, api, hash, currentClassFunSet, child,
  dtsPath, currentTypeList, param) {
  if (currentTypeList && currentTypeList.length > 0) {
    currentTypeList.forEach(type => {
      if (type.name === param.type.typeName.escapedText) {
        type.value.forEach(typeString => {
          let methodName = child.name.escapedText + '_' + typeString;
          addFunctionOnOffApi(packageName, className, methodName, faterApiInfo, apiType, api,
            hash, currentClassFunSet, child, dtsPath);
        });
      }
    });
  } else {
    let methodName = child.name.escapedText;
    addFunctionOnOffApi(packageName, className, methodName, faterApiInfo, apiType, api,
      hash, currentClassFunSet, child, dtsPath);
  }
}

function collectTypeOrEventApi(packageName, className, faterApiInfo, apiType, api,
  hash, currentClassFunSet, child, dtsPath, param) {
  const typeTextArr = param.getText().replace(/\s*/g, '').split(':');
  if (typeTextArr[0] === 'type' || typeTextArr[0] === 'event') {
    let methodName = child.name.escapedText + '_' + param.type.literal.text;
    addFunctionOnOffApi(packageName, className, methodName, faterApiInfo, apiType, api,
      hash, currentClassFunSet, child, dtsPath);
  } else {
    let methodName = child.name.escapedText + '_' + param.type.literal.text;
    addFunctionOnOffApi(packageName, className, methodName, faterApiInfo, apiType, api,
      hash, currentClassFunSet, child, dtsPath);
  }
}

function addFunctionOnOffApi(packageName, className, methodName, apiInfo, apiType, api,
  hash, currentClassFunSet, childNode, dtsPath) {
  // 合并同名函数
  if (currentClassFunSet.has(methodName) && !isNotMerge) {
    collectSameNameApiText(api, packageName, className, methodName, childNode);
  } else {
    notMergeSameNameFun(packageName, className, methodName, apiInfo, apiType, api,
      hash, currentClassFunSet, childNode, dtsPath);
  }
}

function collectSameNameApiText(api, packageName, className, methodName, childNode) {
  for (let i = 0; i < api.length; i++) {
    const curApi = api[i];
    if (curApi.packageName === packageName && curApi.className === className &&
      curApi.methodName === methodName) {
      if (curApi.methodText.indexOf(`${childNode.getText().replace('declare', '').trim()}`) < 0) {
        curApi.methodText += `\n${childNode.getText().replace('declare', '').replace(/\r|\n/ig, '').trim()}`;
        break;
      }
    }
  }
}

function notMergeSameNameFun(packageName, className, methodName, apiInfo, apiType, api,
  hash, currentClassFunSet, childNode, dtsPath) {
  if (!currentClassFunSet.has(methodName)) {
    currentClassFunSet.add(methodName);
    addApi(packageName, className, methodName, childNode.getText().replace('declare', '').trim(),
      getApiInfo(childNode, apiInfo), apiType, api, hash, dtsPath, 6);
  } else {
    if (childNode.getFullText().indexOf('\/**') >= 0) {
      addApi(packageName, className, methodName, childNode.getText().replace('declare', '').trim(),
        getApiInfo(childNode, apiInfo), apiType, api, hash, dtsPath, 7);
    } else {
      let firstApiInfo = {};
      handleSameNameApiJsDoc(api, firstApiInfo, packageName, className, methodName);
      addApi(packageName, className, methodName, childNode.getText().replace('declare', '').trim(),
        firstApiInfo, apiType, api, hash, dtsPath, 8);
    }
  }
}

function handleSameNameApiJsDoc(api, firstApiInfo, packageName, className, methodName) {
  for (let i = 0; i < api.length; i++) {
    const curApi = api[i];
    if (curApi.packageName === packageName && curApi.className === className &&
      curApi.methodName === methodName) {
      firstApiInfo.isSystemApi = curApi.isSystemApi;
      firstApiInfo.version = curApi.version;
      firstApiInfo.sysCap = curApi.sysCap;
      firstApiInfo.permission = curApi.permission;
      firstApiInfo.model = curApi.model;
      firstApiInfo.deprecated = curApi.deprecated;
    }
  }
}

function getApiInfo(node, apiInfo) {
  const notesStr = node.getFullText().replace(node.getText(), '');
  apiInfo.model = getModelInfo(notesStr);
  apiInfo.errorCode = getErrorCode(notesStr);
  apiInfo.deprecated = getDeprecatedInfo(notesStr);
  apiInfo.permission = getPermissionInfo(notesStr);
  apiInfo.isSystemApi = getSystemApi(notesStr);
  apiInfo.version = getSinceVersion(notesStr);
  apiInfo.sysCap = getSyscap(notesStr);
  apiInfo.formInfo = isForm(notesStr);
  apiInfo.isCrossPlatform = isCrossPlatform(notesStr);
  return apiInfo;
}

function getSystemApi(notesStr) {
  let isSystemApi = '';
  if (/\@[S|s][Y|y][S|s][T|t][E|e][M|m][A|a][P|p][I|i]/g.test(notesStr)) {
    isSystemApi = '系统API';
  } else {
    isSystemApi = '公开API';
  }
  return isSystemApi;
}

function getSinceVersion(notesStr) {
  let version;
  if (/\@[S|s][I|i][N|n][C|c][E|e]\s*(\d+)/g.test(notesStr)) {
    notesStr.replace(/\@[S|s][I|i][N|n][C|c][E|e]\s*(\d+)/g, (versionInfo) => {
      version = versionInfo.replace(/\@[S|s][I|i][N|n][C|c][E|e]/g, '').trim();
    });
  } else {
    version = 'N/A';
  }
  return version;
}

function getSyscap(notesStr) {
  let syscap = '';
  if (/\@[S|s][Y|y][S|s][C|c][A|a][P|p]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(notesStr)) {
    notesStr.replace(/\@[S|s][Y|y][S|s][C|c][A|a][P|p]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g, sysCapInfo => {
      syscap = sysCapInfo.replace(/\@[S|s][Y|y][S|s][C|c][A|a][P|p]/g, '').trim();
    });
  }
  return syscap;
}

function isForm(notesStr) {
  let formInfo = '';
  if (/\@form/g.test(notesStr)) {
    formInfo = '是';
  } else {
    formInfo = '否';
  }
  return formInfo;
}

function getPermissionInfo(notesStr) {
  let permission = '';
  if (/\@[P|p][E|e][R|r][M|m][I|i][S|s][S|s][I|i][O|o][N|n]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(notesStr)) {
    notesStr.replace(/\@[P|p][E|e][R|r][M|m][I|i][S|s][S|s][I|i][O|o][N|n]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g,
      permissionInfo => {
        permission = permissionInfo.replace(
          /\@[P|p][E|e][R|r][M|m][I|i][S|s][S|s][I|i][O|o][N|n]/g, '').trim();
        return permission;
      });
  } else {
    permission = 'N/A';
  }
  return permission;
}

function getDeprecatedInfo(notesStr) {
  let deprecated = '';
  if (/\@[D|d][E|e][P|p][R|r][E|e][C|c][A|a][T|t][E|e][D|d].*[S|s][I|i][N|n][C|c][E|e]\s*(\d+)/g.test(notesStr)) {
    notesStr.replace(/\@[D|d][E|e][P|p][R|r][E|e][C|c][A|a][T|t][E|e][D|d].*[S|s][I|i][N|n][C|c][E|e]\s*(\d+)/g,
      deprecatedInfo => {
        deprecated = deprecatedInfo.replace(
          /\@[D|d][E|e][P|p][R|r][E|e][C|c][A|a][T|t][E|e][D|d].*[S|s][I|i][N|n][C|c][E|e]\s*/g, '').trim();

      });
  } else {
    deprecated = 'N/A';
  }
  return deprecated;
}

function getErrorCode(notesStr) {
  let errorCode = '';
  if (/\@throws { BusinessError } \d{2,18}/g.test(notesStr)) {
    notesStr.replace(/\@throws { BusinessError } \d{2,18}/g, (code) => {
      if (errorCode === '') {
        errorCode += `${code.replace(/\@throws { BusinessError } /, '')}`;
      } else {
        errorCode += `,${code.replace(/\@throws { BusinessError } /, '')}`;
      }
    });
  } else {
    errorCode = 'N/A';
  }
  return errorCode;
}

function getModelInfo(notesStr) {
  let model = '';
  if (/\@[F|f][A|a][M|m][O|o][D|d][E|e][L|l][O|o][N|n][L|l][Y|y]/g.test(notesStr)) {
    notesStr.replace(/\@[F|f][A|a][M|m][O|o][D|d][E|e][L|l][O|o][N|n][L|l][Y|y]/g, modelInfo => {
      model = modelInfo;
    });
  } else if (/\@[S|s][T|t][A|a][G|g][E|e][M|m][O|o][D|d][E|e][L|l][O|o][N|n][L|l][Y|y]/g.test(notesStr)) {
    notesStr.replace(/\@[S|s][T|t][A|a][G|g][E|e][M|m][O|o][D|d][E|e][L|l][O|o][N|n][L|l][Y|y]/g, modelInfo => {
      model = modelInfo;
    });
  } else {
    model = 'N/A';
  }
  return model;
}

function isCrossPlatform(notesStr) {
  let isCrossPlatform = '';
  if (/\@crossplatform/g.test(notesStr)) {
    isCrossPlatform = '是';
  } else {
    isCrossPlatform = '否';
  }
  return isCrossPlatform;
}

function addApi(packageName, className, methodName, methodText, apiInfo, apiType, api, hash, dtsPath, type) {
  let recard = isNotMerge ? `${packageName}.${className}/${methodName}/${methodText}` :
    `${packageName}.${className}/${methodName}`;
  if (!hash.has(recard)) {
    hash.add(recard);
    api.push({
      packageName: packageName,
      className: className,
      methodName: methodName,
      methodText: methodText.replace(/export\s/g, ''),
      isSystemApi: apiInfo.isSystemApi,
      version: apiInfo.version,
      deprecated: apiInfo.deprecated,
      apiType: apiType,
      sysCap: apiInfo.sysCap,
      permission: apiInfo.permission,
      model: apiInfo.model,
      dtsPath: dtsPath,
      errorCode: apiInfo.errorCode,
      formInfo: apiInfo.formInfo,
      isCrossPlatform: apiInfo.isCrossPlatform,
    });
  }
}

function readFile(dir, utFiles) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach((element) => {
      const filePath = path.join(dir, element);
      const status = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else {
        if (/\.d\.ts/.test(filePath)) {
          utFiles.push(filePath);
        }
      }
    });
  } catch (e) {
    console.error('ETS ERROR: ' + e);
  }
}

function exportData() {
  const dir = path.resolve(__dirname, './API');
  let fileList = [];
  readFile(dir, fileList);
  let api = parse(fileList);
  excel(api);
}

async function excel(api) {
  let buffer = await getExcelBuffer(api);
  fs.writeFile('Js_Api.xlsx', buffer, function (err) {
    if (err) {
      console.error(err);
      return;
    }
  });
}

async function getExcelBuffer(api) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Js Api', { views: [{ xSplit: 1 }] });
  sheet.getRow(1).values = ['模块名', '类名', '方法名', '函数', '类型', 'SysCap',
    '权限', '支持起始版本', '访问级别', '是否为卡片', '是否支持跨平台'];
  for (let i = 1; i <= api.length; i++) {
    const apiData = api[i - 1];
    sheet.getRow(i + 1).values = [apiData.packageName, apiData.className, apiData.methodName,
      apiData.methodText, apiData.apiType, apiData.sysCap, apiData.permission,
      apiData.version, apiData.isSystemApi, apiData.formInfo, apiData.isCrossPlatform];
  }
  const buffer = await workbook.xlsx.writeBuffer();
  return buffer;
}

exportData();