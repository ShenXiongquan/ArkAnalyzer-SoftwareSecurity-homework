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

import { Dependency } from './HapModuleInfo';
import bundleManager from '../@ohos.bundle.bundleManager';

/**
 * Provides information about a shared bundle.
 *
 * @typedef SharedBundleInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 10
 */
export interface SharedBundleInfo {
  /**
   * Indicates the name of the shared bundle
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  readonly name: string;

  /**
   * Enumerates types of the compatible policy of the shared bundle
   *
   * @type { bundleManager.CompatiblePolicy }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  readonly compatiblePolicy: bundleManager.CompatiblePolicy;

  /**
   * Obtains configuration information about a shared module
   *
   * @type { Array<SharedModuleInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  readonly sharedModuleInfo: Array<SharedModuleInfo>;
}

/**
 * Indicates the shared module info.
 *
 * @typedef SharedModuleInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 10
 */
export interface SharedModuleInfo {
  /**
   * Indicates the moduleName of the shared bundle
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  readonly name: string;

  /**
   * Indicates the version code of the shared module
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  readonly versionCode: number;

  /**
   * Indicates the version name of the shared module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  readonly versionName: string;

  /**
   * Describes the shared module
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  readonly description: string;

  /**
   * Indicates the description of this shared module
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  readonly descriptionId: number;
}
