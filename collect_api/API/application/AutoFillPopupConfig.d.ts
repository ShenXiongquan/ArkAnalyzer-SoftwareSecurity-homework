/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * Auto Fill Popup config.
 *
 * @interface AutoFillPopupConfig
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 12
 */
 export default interface AutoFillPopupConfig {
  /**
   * The size of the popup.
   *
   * @type { ?PopupSize }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  popupSize?: PopupSize;

  /**
   * The placement of the popup.
   *
   * @type { ?PopupPlacement }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  placement?: PopupPlacement;
}

/**
 * Popup size.
 *
 * @interface PopupSize
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 12
 */
 export interface PopupSize {
  /**
   * The width of the popup.
   *
   * @type { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  width: number;

  /**
   * The height of the popup.
   *
   * @type { number }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  height: number;
}

/**
 * Popup placement.
 *
 * @enum { number }
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 12
 */
export declare enum PopupPlacement {
  /**
   * The left of the popup.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  LEFT = 0,

  /**
   * The right of the popup.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  RIGHT = 1,

  /**
   * The top of the popup.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  TOP = 2,

  /**
   * The bottom of the popup.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  BOTTOM = 3,

  /**
   * The top_left of the popup.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  TOP_LEFT = 4,

  /**
   * The top_right of the popup.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  TOP_RIGHT = 5,

  /**
   * The bottom_left of the popup.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  BOTTOM_LEFT = 6,

  /**
   * The bottom_right of the popup.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  BOTTOM_RIGHT = 7,

  /**
   * The left_top of the popup.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  LEFT_TOP = 8,

  /**
   * The left_bottom of the popup.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  LEFT_BOTTOM = 9,

  /**
   * The right_top of the popup.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  RIGHT_TOP = 10,

  /**
   * The right_bottom of the popup.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  RIGHT_BOTTOM = 11,

  /**
   * Not set placement of the popup.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  NONE = 12
}