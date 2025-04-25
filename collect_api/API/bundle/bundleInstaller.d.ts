/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit AbilityKit
 */

import { AsyncCallback } from './../@ohos.base';
import bundle from './../@ohos.bundle';

/**
 * Provides parameters required for installing or uninstalling an application.
 *
 * @typedef InstallParam
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.bundle.installer#InstallParam
 */
export interface InstallParam {
  /**
   * @type { number }
   * @default Indicates the user id
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.bundle.installer.InstallParam#userId
   */
  userId: number;

  /**
   * @type { number }
   * @default Indicates the install flag
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.bundle.installer.InstallParam#installFlag
   */
  installFlag: number;

  /**
   * @type { boolean }
   * @default Indicates whether the param has data
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.bundle.installer.InstallParam#isKeepData
   */
  isKeepData: boolean;
}

/**
 * Indicates the install or uninstall status
 *
 * @typedef InstallStatus
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 7
 * @deprecated since 9
 */
export interface InstallStatus {
  /**
   * @type { bundle.InstallErrorCode }
   * @default Indicates the install or uninstall error code
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7
   * @deprecated since 9
   */
  status: bundle.InstallErrorCode;

  /**
   * @type { string }
   * @default Indicates the install or uninstall result string message
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7
   * @deprecated since 9
   */
  statusMessage: string;
}

/**
 * Offers install, upgrade, and remove bundles on the devices.
 *
 * @interface BundleInstaller
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.bundle.installer#BundleInstaller
 */
export interface BundleInstaller {
  /**
   * Install an application in a HAP.
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { Array<string> } bundleFilePaths Indicates the path where the bundle of the application is stored. The path should be the
   *                                   relative path to the data directory of the current application.
   * @param { InstallParam } param Indicates other parameters required for the installation.
   * @param { AsyncCallback<InstallStatus> } callback
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.bundle.installer.BundleInstaller#install
   */
  install(bundleFilePaths: Array<string>, param: InstallParam, callback: AsyncCallback<InstallStatus>): void;

  /**
   * Uninstall an application.
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { string } bundleName Indicates the bundle name of the application to be uninstalled.
   * @param { InstallParam } param Indicates other parameters required for the uninstall.
   * @param { AsyncCallback<InstallStatus> } callback
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.bundle.installer.BundleInstaller#uninstall
   */
  uninstall(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void;

  /**
   * recover an application.
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { string } bundleName Indicates the bundle name of the application to be recovered.
   * @param { InstallParam } param Indicates other parameters required for the recover.
   * @param { AsyncCallback<InstallStatus> } callback
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.bundle.installer.BundleInstaller#recover
   */
  recover(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void;
}
