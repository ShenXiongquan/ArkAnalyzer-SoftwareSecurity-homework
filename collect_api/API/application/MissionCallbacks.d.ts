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
 * MissionCallback registered by app.
 *
 * @interface MissionCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 9
 */
export interface MissionCallback {
  /**
   * Called by system when mission changed.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Indicates the deviceId mission changed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9
   */
  notifyMissionsChanged(deviceId: string): void;

  /**
   * Called by system when snapshot changed.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Indicates the deviceId mission changed.
   * @param { number } mission - Indicates the id of destroyed mission.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9
   */
  notifySnapshot(deviceId: string, mission: number): void;

  /**
   * Called by system when network disconnect.
   *
   * @permission ohos.permission.MANAGE_MISSIONS
   * @param { string } deviceId - Indicates the deviceId mission changed.
   * @param { number } state - Indicates the state of network
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9
   */
  notifyNetDisconnect(deviceId: string, state: number): void;
}
