/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * Continuable information corresponding to ability.
 *
 * @typedef ContinuableInfo
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi Hide this for inner system use.
 * @since 10
 */
export interface ContinuableInfo {
  /**
   * Indicates the original deviceId to continue mission.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @since 10
   */
  srcDeviceId: string;
  /**
   * Indicates the bundle name of the destination to continue.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @since 10
   */
  bundleName: string;
  /**
   * Indicates the original bundle name to continue mission.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @since 12
   */
  srcBundleName?: string;
  /**
   * Indicates continue type.
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi Hide this for inner system user.
   * @since 12
   */
  continueType?: string;
}