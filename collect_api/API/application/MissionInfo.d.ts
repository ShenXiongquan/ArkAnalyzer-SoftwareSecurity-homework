/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

import Want from '../@ohos.app.ability.Want';

/**
 * Mission information corresponding to ability.
 *
 * @typedef MissionInfo
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 8
 */
export interface MissionInfo {
  /**
   * Indicates mission id.
   *
   * @type { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   */
  missionId: number;

  /**
   * Indicates running state.
   *
   * @type { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   */
  runningState: number;

  /**
   * Indicates locked state.
   *
   * @type { boolean }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   */
  lockedState: boolean;

  /**
   * Indicates the recent created or updated time of the mission.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   */
  timestamp: string;

  /**
   * Indicates want of the mission.
   *
   * @type { Want }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   */
  want: Want;

  /**
   * Indicates label of the mission.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   */
  label: string;

  /**
   * Indicates icon path of the mission.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   */
  iconPath: string;

  /**
   * Indicates whether the mission is continuable.
   *
   * @type { boolean }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   */
  continuable: boolean;

  /**
   * Indicates the ability state of this mission.
   *
   * @type { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10
   */
  abilityState: number;

  /**
   * Indicates whether the mission is unclearable.
   *
   * @type { boolean }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10
   */
  unclearable: boolean;
}
