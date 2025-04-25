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

/**
 * Indicates the defined permission details in file config.json
 *
 * @typedef PermissionDef
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.bundle.bundleManager.PermissionDef
 */
export interface PermissionDef {
  /**
   * @type { string }
   * @default Indicates the name of this permission
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi
   * @since 8
   * @deprecated since 9
   */
  permissionName: string;

  /**
   * @type { number }
   * @default Indicates the grant mode of this permission
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi
   * @since 8
   * @deprecated since 9
   */
  grantMode: number;

  /**
   * @type { number }
   * @default Indicates the labelId of this permission
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi
   * @since 8
   * @deprecated since 9
   */
  labelId: number;

  /**
   * @type { number }
   * @default Indicates the descriptionId of this permission
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi
   * @since 8
   * @deprecated since 9
   */
  descriptionId: number;
}
