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

import { ElementName } from '../bundleManager/ElementName';
import image from '../@ohos.multimedia.image';

/**
 * Mission snapshot corresponding to mission.
 *
 * @typedef MissionSnapshot
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi
 * @since 8
 */
export interface MissionSnapshot {
  /**
   * Indicates the ability elementName of the mission.
   *
   * @type { ElementName }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   */
  /**
   * Indicates the ability elementName of the mission. The elementName is an ohos.bundleManager.ElementName object.
   *
   * @type { ElementName }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 12
   */
  ability: ElementName;

  /**
   * Indicates mission snapshot.
   *
   * @type { image.PixelMap }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 8
   */
  snapshot: image.PixelMap;
}
