/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * Parameters corresponding to continue mission.
 *
 * @typedef ContinueDeviceInfo
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 9
 */
export interface ContinueDeviceInfo {
  /**
   * Indicates the original deviceId to continue mission.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9
   */
  srcDeviceId: string;
  /**
   * Indicates the target deviceId to continue mission.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9
   */
  dstDeviceId: string;
  /**
   * Indicates the mission to continue.
   *
   * @type { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9
   */
  missionId: number;
  /**
   * Indicates the extended param.
   *
   * @type { object }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9
   */
  /**
   * Indicates the extended param.
   *
   * @type { Record<string, Object> }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 11
   */
  wantParam: Record<string, Object>;
}
