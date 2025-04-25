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

import { ApplicationInfo } from './applicationInfo';
import { ElementName } from './elementName';

/**
 * Contains basic Ability information, which uniquely identifies an ability.
 * You can use this class to obtain values of the fields set in an AbilityInfo,
 * such as the application Info , elementName, labelId, iconId, userId, installTime.
 *
 * Contains basic launcher Ability information, which uniquely identifies an LauncherAbilityInfo
 *
 * @typedef LauncherAbilityInfo
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @systemapi Hide this for inner system use
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.bundle.bundleManager.LauncherAbilityInfo
 */
export interface LauncherAbilityInfo {
  /**
   * Obtains application info information about an launcher ability.
   *
   * @type { ApplicationInfo }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   */
  readonly applicationInfo: ApplicationInfo;

  /**
   * Obtains element name about an launcher ability.
   *
   * @type { ElementName }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   */
  readonly elementName: ElementName;

  /**
   * Obtains labelId about an launcher ability.
   *
   * @type { number }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   */
  readonly labelId: number;

  /**
   * Obtains iconId about an launcher ability.
   *
   * @type { number }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   */
  readonly iconId: number;

  /**
   * Obtains userId about an launcher ability.
   *
   * @type { number }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   */
  readonly userId: number;

  /**
   * Obtains installTime about an launcher ability.
   *
   * @type { number }
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi Hide this for inner system use
   * @since 8
   * @deprecated since 9
   */
  readonly installTime: number;
}
