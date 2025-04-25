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

/**
 * @file
 * @kit AbilityKit
 */

import bundleManager from './../@ohos.bundle.bundleManager';

/**
 * Indicates the RecoverableApplicationInfo
 *
 * @typedef RecoverableApplicationInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 11
 */
export interface RecoverableApplicationInfo {
  /**
   * Indicates the bundle name
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11
   */
  readonly bundleName: string;

  /**
   * Indicates the module name
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11
   */
  readonly moduleName: string;

  /**
   * Indicates the label id
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11
   */
  readonly labelId: number;

  /**
   * Indicates the icon id
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 11
   */
  readonly iconId: number;

  /**
   * Indicates whether the application is a system application
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12
   */
  readonly systemApp: boolean;

  /**
   * Indicates the type of application.
   *
   * @type { bundleManager.BundleType }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12
   */
  readonly bundleType: bundleManager.BundleType;

  /**
   * Indicates the application source code path.
   *
   * @type { Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 12
   */
  readonly codePaths: Array<string>;
}
