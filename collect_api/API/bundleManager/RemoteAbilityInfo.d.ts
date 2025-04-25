/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { ElementName } from './ElementName';

/**
 * Contains basic remote ability information.
 *
 * @typedef RemoteAbilityInfo
 * @syscap SystemCapability.BundleManager.DistributedBundleFramework
 * @systemapi
 * @since 9
 */
export interface RemoteAbilityInfo {
  /**
   * Indicates the ability information
   *
   * @type { ElementName }
   * @readonly
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9
   */
  readonly elementName: ElementName;

  /**
   * Indicates the label of the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9
   */
  readonly label: string;

  /**
   * Indicates the icon of the ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9
   */
  readonly icon: string;
}
