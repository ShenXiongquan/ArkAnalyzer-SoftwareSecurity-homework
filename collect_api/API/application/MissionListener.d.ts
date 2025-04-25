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

import image from '../@ohos.multimedia.image';

/**
 * MissionListener registered by app.
 *
 * @interface MissionListener
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 8
 */
export interface MissionListener {
  /**
   * Called by system when mission created.
   *
   * @param { number } mission - Indicates the id of created mission.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   */
  onMissionCreated(mission: number): void;

  /**
   * Called by system when mission destroyed.
   *
   * @param { number } mission - Indicates the id of destroyed mission.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   */
  onMissionDestroyed(mission: number): void;

  /**
   * Called by system when mission snapshot changed.
   *
   * @param { number } mission - Indicates the id of the mission which the snapshot changes
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   */
  onMissionSnapshotChanged(mission: number): void;

  /**
   * Called by system when mission moved to front.
   *
   * @param { number } mission - Indicates the id of the mission being moved to the foreground.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   */
  onMissionMovedToFront(mission: number): void;

  /**
   * Called by system when mission label has changed.
   *
   * @param { number } mission - Indicates the id of the mission whose label has changed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9
   */
  onMissionLabelUpdated(mission: number): void;

  /**
   * Called by system when mission icon has changed.
   *
   * @param { number } mission - Indicates the id of the mission whose icon has changed.
   * @param { image.PixelMap } icon - Indicates the icon of the mission whose icon has changed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9
   */
  onMissionIconUpdated(mission: number, icon: image.PixelMap): void;

  /**
   * Called by system when target mission is closed.
   *
   * @param { number } mission - Indicates the id of the mission whose ability instance is destroyed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 9
   */
  onMissionClosed(mission: number): void;
}
