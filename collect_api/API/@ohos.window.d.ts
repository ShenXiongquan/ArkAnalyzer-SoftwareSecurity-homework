/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit ArkUI
 */

import { AsyncCallback, BusinessError } from './@ohos.base';
import BaseContext from './application/BaseContext';
import image from './@ohos.multimedia.image';
import rpc from './@ohos.rpc';
import dialogRequest from './@ohos.app.ability.dialogRequest';
import { UIContext } from './@ohos.arkui.UIContext';
import ConfigurationConstant from './@ohos.app.ability.ConfigurationConstant';
import bundleManager from './@ohos.bundle.bundleManager';
import { ColorMetrics } from './@ohos.arkui.node';

/**
 * Defines the window callback.
 *
 * @typedef Callback<T, V = void>
 * @syscap SystemCapability.Window.SessionManager
 * @atomicservice
 * @since 15
 */
declare interface Callback<T, V = void> {
  /**
   * Defines the callback info.
   *
   * @param { T } data - the data will be used in the callback.
   * @returns { V } - Returns result of the callback.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15
   */
  (data: T): V;
}

/**
 * Window manager.
 *
 * @namespace window
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 */
/**
 * Window manager.
 *
 * @namespace window
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @crossplatform
 * @since 10
 */
/**
 * Window manager.
 *
 * @namespace window
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare namespace window {
  /**
   * The type of a window.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * The type of a window.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  enum WindowType {
    /**
     * App.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @FAModelOnly
     * @since 7
     */
    TYPE_APP,
    /**
     * System alert.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 11
     */
    TYPE_SYSTEM_ALERT,
    /**
     * Input method.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     * @deprecated since 13
     */
    TYPE_INPUT_METHOD,
    /**
     * Status bar.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    TYPE_STATUS_BAR,
    /**
     * Panel.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    TYPE_PANEL,
    /**
     * Keyguard.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    TYPE_KEYGUARD,
    /**
     * Volume.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    TYPE_VOLUME_OVERLAY,
    /**
     * Navigation bar.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    TYPE_NAVIGATION_BAR,
    /**
     * Float.
     *
     * @permission ohos.permission.SYSTEM_FLOAT_WINDOW
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Float.
     * Require "ohos.permission.SYSTEM_FLOAT_WINDOW" permission
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @atomicservice
     * @since 12
     */
    TYPE_FLOAT,
    /**
     * Wallpaper.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    TYPE_WALLPAPER,
    /**
     * Desktop.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    TYPE_DESKTOP,
    /**
     * Recent.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    TYPE_LAUNCHER_RECENT,
    /**
     * Dock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    TYPE_LAUNCHER_DOCK,
    /**
     * Voice interaction.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    TYPE_VOICE_INTERACTION,
    /**
     * Pointer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    TYPE_POINTER,
    /**
     * Float camera.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    TYPE_FLOAT_CAMERA,
    /**
     * Dialog.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 10
     */
    /**
     * Dialog.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @atomicservice
     * @since 12
     */
    TYPE_DIALOG,
    /**
     * Screenshot.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    TYPE_SCREENSHOT,
    /**
     * System Toast.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11
     */
    TYPE_SYSTEM_TOAST,
    /**
     * Divider.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11
     */
    TYPE_DIVIDER,
    /**
     * Global Search.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11
     */
    TYPE_GLOBAL_SEARCH,
    /**
     * Handwrite.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 12
     */
    TYPE_HANDWRITE,
    /**
     * TYPE_WALLET_SWIPE_CARD.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 15
     */
    TYPE_WALLET_SWIPE_CARD,
    /**
     * Screen Control
     * 
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 15
     */
    TYPE_SCREEN_CONTROL,
    /**
     * TYPE_FLOAT_NAVIGATION.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 17
     */
    TYPE_FLOAT_NAVIGATION,
    /**
     * Main.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 18
     */
    TYPE_MAIN = 32
  }

  /**
   * Describes the type of avoid area
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * Describes the type of avoid area
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Describes the type of avoid area
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  enum AvoidAreaType {
    /**
     * Default area of the system
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Default area of the system
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Default area of the system
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    TYPE_SYSTEM,

    /**
     * Notch
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Notch
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Notch
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    TYPE_CUTOUT,

    /**
     * Area for system gesture
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Area for system gesture
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Area for system gesture
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    TYPE_SYSTEM_GESTURE,

    /**
     * Area for keyboard
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Area for keyboard
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Area for keyboard
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    TYPE_KEYBOARD,

    /**
     * Area for navigation indicator
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Area for navigation indicator
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    TYPE_NAVIGATION_INDICATOR
  }
  /**
   * Describes the window mode of an application
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  enum WindowMode {
    /**
     * Undefined mode of the window
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     */
    UNDEFINED = 1,
    /**
     * Fullscreen mode of the window
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     */
    FULLSCREEN,
    /**
     * Primary mode of the window
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     */
    PRIMARY,
    /**
     * Secondary mode of the window
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     */
    SECONDARY,
    /**
     * Floating mode of the window
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     */
    FLOATING
  }

  /**
   * Describes the mode of window layout
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  enum WindowLayoutMode {
    /**
     * CASCADE
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    WINDOW_LAYOUT_MODE_CASCADE,
    /**
     * TILE
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    WINDOW_LAYOUT_MODE_TILE
  }

  /**
   * Describes the window status of an application
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Describes the window status of an application
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  enum WindowStatusType {
    /**
     * Undefined status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Undefined status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    UNDEFINED = 0,
    /**
     * Full screen status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Full screen status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    FULL_SCREEN,
    /**
     * Maximize status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Maximize status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    MAXIMIZE,
    /**
     * Minimize status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Minimize status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    MINIMIZE,
    /**
     * Floating status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Floating status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    FLOATING,
    /**
     * Split screen status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Split screen status of the window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    SPLIT_SCREEN
  }

  /**
   * Properties of status bar and navigation bar, it couldn't update automatically
   *
   * @interface SystemBarProperties
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 6
   */
  /**
   * Properties of status bar and navigation bar, it couldn't update automatically
   *
   * @interface SystemBarProperties
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  interface SystemBarProperties {
    /**
     * The color of the status bar.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    /**
     * The color of the status bar.
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    statusBarColor?: string;

    /**
     * The light icon of the status bar.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The light icon of the status bar.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    isStatusBarLightIcon?: boolean;

    /**
     * The content color of the status bar
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     */
    /**
     * The content color of the status bar
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    statusBarContentColor?: string;

    /**
     * The color of the navigation bar.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    /**
     * The color of the navigation bar.
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    navigationBarColor?: string;

    /**
     * The light icon of the navigation bar.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The light icon of the navigation bar.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    isNavigationBarLightIcon?: boolean;

    /**
     * The content color of the navigation bar
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     */
    /**
     * The content color of the navigation bar
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    navigationBarContentColor?: string;

    /**
     * Enable the animation of the status bar.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    enableStatusBarAnimation?: boolean;

    /**
     * Enable the animation of the navigation bar.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    enableNavigationBarAnimation?: boolean;
  }

  /**
   * Properties of status bar.
   *
   * @interface StatusBarProperty
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18
   */
  interface StatusBarProperty {
    /**
     * The content color of the status bar.
     *
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    contentColor: string;
  }
  
  /**
   * Properties of status bar, it couldn't update automatically
   *
   * @interface SystemBarStyle
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  interface SystemBarStyle {
    /**
     * The content color of the status bar
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    statusBarContentColor?: string;
  }

  /**
   * System bar tint of region
   *
   * @interface SystemBarRegionTint
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  interface SystemBarRegionTint {
    /**
     * System bar type
     *
     * @type { WindowType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8
     */
    type: WindowType;

    /**
     * The visibility of system bar
     *
     * @type { ?boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8
     */
    isEnable?: boolean;

    /**
     * The region of system bar
     *
     * @type { ?Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8
     */
    region?: Rect;

    /**
     * The background color of the system bar.
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8
     */
    backgroundColor?: string;

    /**
     * The content color of the system bar.
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8
     */
    contentColor?: string;
  }

  /**
   * System bar tint state for systemui
   *
   * @interface SystemBarTintState
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  interface SystemBarTintState {
    /**
     * Id of display
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8
     */
    displayId: number;
    /**
     * Region tint of systembar
     *
     * @type { Array<SystemBarRegionTint> }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8
     */
    regionTint: Array<SystemBarRegionTint>;
  }

  /**
   * Rectangle
   *
   * @interface Rect
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * Rectangle
   *
   * @interface Rect
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Rectangle
   *
   * @interface Rect
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  interface Rect {

    /**
     * The left of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The left of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The left of the Rect.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    left: number;

    /**
     * The top of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The top of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The top of the Rect.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    top: number;

    /**
     * The width of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The width of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The width of the Rect.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    width: number;

    /**
     * The height of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The height of the Rect.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The height of the Rect.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    height: number;
  }

  /**
   * Avoid area
   *
   * @interface AvoidArea
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * Avoid area
   *
   * @interface AvoidArea
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Avoid area
   *
   * @interface AvoidArea
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  interface AvoidArea {
    /**
     * Whether avoidArea is visible on screen
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Whether avoidArea is visible on screen
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    visible: boolean;

    /**
     * Rectangle on the left of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Rectangle on the left of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Rectangle on the left of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    leftRect: Rect;

    /**
     * Rectangle on the top of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Rectangle on the top of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Rectangle on the top of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    topRect: Rect;

    /**
     * Rectangle on the right of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Rectangle on the right of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Rectangle on the right of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    rightRect: Rect;

    /**
     * Rectangle on the bottom of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Rectangle on the bottom of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Rectangle on the bottom of the screen
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    bottomRect: Rect;
  }

  /**
   * Window size
   *
   * @interface Size
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  /**
   * Window size
   *
   * @interface Size
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Window size
   *
   * @interface Size
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  interface Size {
    /**
     * The width of the window.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The width of the window.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The width of the window.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    width: number;

    /**
     * The height of the window.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The height of the window.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The height of the window.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    height: number;
  }

  /**
   * The info of window
   *
   * @interface WindowInfo
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi
   * @since 12
   */
  /**
   * The info of window
   *
   * @interface WindowInfo
   * @syscap SystemCapability.Window.SessionManager
   * @since 18
   */
  interface WindowInfo {
    /**
     * The position and size of the window
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12
     */
    /**
     * The position and size of the window
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @since 18
     */
    rect: Rect;

    /**
     * bundleName of window
     *
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12
     */
    /**
     * bundleName of window
     *
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @since 18
     */
    bundleName: string;

    /**
     * abilityName of window
     *
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12
     */
    /**
     * abilityName of window
     *
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @since 18
     */
    abilityName: string;

    /**
     * Indicates target window id.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12
     */
    /**
     * Indicates target window id.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @since 18
     */
    windowId: number;

    /**
     * The window status of an application.
     *
     * @type { WindowStatusType }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12
     */
    /**
     * The window status of an application.
     *
     * @type { WindowStatusType }
     * @syscap SystemCapability.Window.SessionManager
     * @since 18
     */
    windowStatusType: WindowStatusType;

    /**
     * Whether the window is focused. The default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 14
     */
    /**
     * Whether the window is focused. The default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @since 18
     */
    isFocused?: boolean;
  }

  /**
   * The info of window density
   *
   * @interface WindowDensityInfo
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15
   */
  interface WindowDensityInfo {
    /**
     * System density
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    systemDensity: number;

    /**
     * Default density
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    defaultDensity: number;

    /**
     * Custom density
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    customDensity: number;
  }

  /**
   * Properties of window, it couldn't update automatically
   *
   * @interface WindowProperties
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 6
   */
  /**
   * Properties of window, it couldn't update automatically
   *
   * @interface WindowProperties
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Properties of window, it couldn't update automatically
   *
   * @interface WindowProperties
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  interface WindowProperties {
    /**
     * The position and size of the window
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * The position and size of the window
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * The position and size of the window
     *
     * @type { Rect }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    windowRect: Rect;

    /**
     * The position relative to the window and size of drawable area
     *
     * @type { Rect } 
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 11
     */
    /**
     * The position relative to the window and size of drawable area
     *
     * @type { Rect } 
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    drawableRect: Rect;
    
    /**
     * Window type
     *
     * @type { WindowType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Window type
     *
     * @type { WindowType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    type: WindowType;

    /**
     * Whether the window is displayed in full screen mode. The default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    /**
     * Whether the window is displayed in full screen mode. The default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    isFullScreen: boolean;

    /**
     * Whether the window layout is in full screen mode(whether the window is immersive). The default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Whether the window layout is in full screen mode(whether the window is immersive). The default value is false.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    isLayoutFullScreen: boolean;

    /**
     * Whether the window can gain focus. The default value is true
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Whether the window can gain focus. The default value is true
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    focusable: boolean;

    /**
     * Whether the window is touchable. The default value is false
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Whether the window is touchable. The default value is false
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    touchable: boolean;

    /**
     * Brightness value of window.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    /**
     * Brightness value of window.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Brightness value of window.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    brightness: number;

    /**
     * The dimbehind value of window.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     */
    dimBehindValue: number;

    /**
     * Whether keep screen on.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    /**
     * Whether keep screen on.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Whether keep screen on.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    isKeepScreenOn: boolean;

    /**
     * Whether make window in privacy mode or not.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Whether make window in privacy mode or not.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    isPrivacyMode: boolean;

    /**
     * Whether is round corner or not.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     */
    isRoundCorner: boolean;

    /**
     * Whether is transparent or not.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Whether is transparent or not.
     *
     * @type { boolean }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    isTransparent: boolean;

    /**
     * Window id.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Window id.
     *
     * @type { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    id: number;

    /**
     * display id.
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    displayId?: number;

    /**
     * window name.
     *
     * @type { ?string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 18
     */
    name?: string;
  }

  /**
   * The decor button style of the window.
   *
   * @interface DecorButtonStyle
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 14
   */
  interface DecorButtonStyle {
    /**
     * color mode.
     *
     * @type { ?colorMode }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    colorMode?: ConfigurationConstant.ColorMode;

    /**
     * button background size when hover.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    buttonBackgroundSize? : number;

    /**
     * button spacing.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    spacingBetweenButtons? : number;

    /**
     * close button right Margin.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    closeButtonRightMargin? : number;

    /**
     * button icon size.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20
     */
    buttonIconSize? : number;

    /**
     * corner radius of button background when hover.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20
     */
    buttonBackgroundCornerRadius? : number;
  }

  /**
   * Type of allowing the specified of color space.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8
   */
  /**
   * Type of allowing the specified of color space.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 11
   */
  /**
   * Type of allowing the specified of color space.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  enum ColorSpace {
    /**
     * Default color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     */
    /**
     * Default color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 11
     */
    /**
     * Default color space.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    DEFAULT,
    /**
     * Wide gamut color space. The specific wide color gamut depends on thr screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     */
    /**
     * Wide gamut color space. The specific wide color gamut depends on thr screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 11
     */
    /**
     * Wide gamut color space. The specific wide color gamut depends on thr screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    WIDE_GAMUT
  }
  /**
   * Describes the scale Transition Options of window
   *
   * @interface ScaleOptions
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9
   */
  interface ScaleOptions {
    /**
     * The scale param of x direction. Default is 1.f
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    x?: number;

    /**
     * The scale param of y direction. Default is 1.f
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    y?: number;

    /**
     * The scale param of pivot point of x. Default is 0.5f, Interval is 0.f - 1.f
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    pivotX?: number;

    /**
     * The scale param of pivot point of y. Default is 0.5f, Interval is 0.f - 1.f
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    pivotY?: number;
  }

  /**
   * Describes the rotate Transition Options of window
   *
   * @interface RotateOptions
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9
   */
  interface RotateOptions {
    /**
     * The rotate degree of x direction. Default value is 0.f
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    x?: number;

    /**
     * The rotate degree of y direction. Default value is 0.f
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    y?: number;

    /**
     * The rotate degree of z direction. Default value is 0.f
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    z?: number;

    /**
     * The param of pivot point of x. Default is 0.5f, Interval is 0.f - 1.f
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    pivotX?: number;

    /**
     * The param of pivot point of y. Default is 0.5f, Interval is 0.f - 1.f
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    pivotY?: number;
  }

  /**
   * Describes the translate Transition Options of window
   *
   * @interface TranslateOptions
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9
   */
  interface TranslateOptions {
    /**
     * The translate pixel param of x direction. Default is 0.f
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    x?: number;

    /**
     * The translate pixel param of y direction. Default is 0.f
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    y?: number;

    /**
     * The translate pixel param of z direction. Default is 0.f
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    z?: number;
  }

  /**
   * Transition Context
   *
   * @interface TransitionContext
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9
   */
  interface TransitionContext {
    /**
     * The target window with animation
     *
     * @type { Window }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    toWindow: Window;

    /**
     * Set complete state of animation transition
     *
     * @param { boolean } isCompleted - Whether the transition is complete. The value true means that the transition is complete, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Set complete state of animation transition
     *
     * @param { boolean } isCompleted - Whether the transition is complete. The value true means that the transition is complete, and false means the opposite.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12
     */
    completeTransition(isCompleted: boolean): void;
  }

  /**
   * Transition Controller
   *
   * @interface TransitionController
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9
   */
  interface TransitionController {
    /**
     * Animation configuration when showing window
     *
     * @param { TransitionContext } context - The transition context.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Animation configuration when showing window
     *
     * @param { TransitionContext } context - The transition context.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12
     */
    animationForShown(context: TransitionContext): void;
    /**
     * Animation configuration when hiding window
     *
     * @param { TransitionContext } context - The transition context.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Animation configuration when hiding window
     *
     * @param { TransitionContext } context - The transition context.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12
     */
    animationForHidden(context: TransitionContext): void;
  }

  /**
   * Configuration parameters for window creation.
   *
   * @interface Configuration
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Configuration parameters for window creation.
   *
   * @interface Configuration
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  interface Configuration {
    /**
     * Indicates window id.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Indicates window id.
     *
     * @type { string }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    name: string;

    /**
     * Indicates window type
     *
     * @type { WindowType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Indicates window type
     *
     * @type { WindowType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    windowType: WindowType;

    /**
     * Indicates window context.
     *
     * @type { ?BaseContext }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Indicates window context.
     *
     * @type { ?BaseContext }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    ctx?: BaseContext;

    /**
     * Indicates display ID.
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Indicates display ID.
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    displayId?: number;

    /**
     * Indicates Parent window id
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Indicates Parent window id
     *
     * @type { ?number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    parentId?: number;

    /**
     * Indicates whether enable window decor, only support dialog, The default value is false.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    decorEnabled?: boolean;

    /**
     * Indicates dialog window title when decor enabled.
     *
     * @type { ?string }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    title?: string;
  }

  /**
   * Limits of window.
   *
   * @interface WindowLimits
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Limits of window.
   *
   * @interface WindowLimits
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  interface WindowLimits {
    
    /**
     * The maximum width of the window.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The maximum width of the window.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    maxWidth?: number;

    /**
     * The maximum height of the window.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The maximum height of the window.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    maxHeight?: number;

    /**
     * The minimum width of the window.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The minimum width of the window.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    minWidth?: number;

    /**
     * The minimum height of the window.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The minimum height of the window.
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    minHeight?: number;
  }

  /**
   * Rectangular area of the title buttons relative to the upper right corner of the window.
   *
   * @interface TitleButtonRect
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Rectangular area of the title buttons relative to the upper right corner of the window.
   *
   * @interface TitleButtonRect
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  interface TitleButtonRect {

    /**
     * The right of the Rect.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The right of the Rect.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    right: number;

    /**
     * The top of the Rect.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The top of the Rect.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    top: number;

    /**
     * The width of the Rect.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The width of the Rect.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    width: number;

    /**
     * The height of the Rect.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * The height of the Rect.
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    height: number;
  }

  /**
   * Rect change options
   *
   * @interface RectChangeOptions
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  interface RectChangeOptions {
    /**
     * Rect
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    rect: Rect,

    /**
     * Rect change reason
     *
     * @type { RectChangeReason }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    reason: RectChangeReason
  }

  /**
   * Avoid area options
   *
   * @interface AvoidAreaOptions
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  interface AvoidAreaOptions {
    /**
     * Avoid area type
     *
     * @type { AvoidAreaType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    type: AvoidAreaType,

    /**
     * Avoid area
     *
     * @type { AvoidArea }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    area: AvoidArea
  }

  /**
   * Window rect change reason.
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  enum RectChangeReason {
    /**
     * Default RectChangeReason.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    UNDEFINED = 0,

    /**
     * Window maximize.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    MAXIMIZE,

    /**
     * Window recover.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    RECOVER,

    /**
     * Window move.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    MOVE,

    /**
     * Window drag.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    DRAG,

    /**
     * Window drag start.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    DRAG_START,

    /**
     * Window drag end.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    DRAG_END,
  }

  /**
   * Create a window with a specific configuration
   *
   * @param { Configuration } config - Parameters for window creation.
   * @param { AsyncCallback<Window> } callback - Callback used to return the window created.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300001 - Repeated operation.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300008 - The display device is abnormal.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Create a window with a specific configuration
   * When config.windowType == TYPE_FLOAT, the "ohos.permission.SYSTEM_FLOAT_WINDOW" permission is required
   *
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW
   * @param { Configuration } config - Parameters for window creation.
   * @param { AsyncCallback<Window> } callback - Callback used to return the window created.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300001 - Repeated operation.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300008 - The display device is abnormal.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Create a window with a specific configuration
   * When config.windowType == TYPE_FLOAT, the "ohos.permission.SYSTEM_FLOAT_WINDOW" permission is required
   *
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW
   * @param { Configuration } config - Parameters for window creation.
   * @param { AsyncCallback<Window> } callback - Callback used to return the window created.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.createWindow can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300001 - Repeated operation.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 17
   */
  function createWindow(config: Configuration, callback: AsyncCallback<Window>): void;

  /**
   * Create a window with a specific configuration
   *
   * @param { Configuration } config - Parameters for window creation.
   * @returns { Promise<Window> } Promise used to return the window created.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300001 - Repeated operation.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300008 - The display device is abnormal.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Create a window with a specific configuration
   * When config.windowType == TYPE_FLOAT, the "ohos.permission.SYSTEM_FLOAT_WINDOW" permission is required
   *
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW
   * @param { Configuration } config - Parameters for window creation.
   * @returns { Promise<Window> } Promise used to return the window created.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300001 - Repeated operation.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300008 - The display device is abnormal.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12
   */
  /**
   * Create a window with a specific configuration
   * When config.windowType == TYPE_FLOAT, the "ohos.permission.SYSTEM_FLOAT_WINDOW" permission is required
   *
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW
   * @param { Configuration } config - Parameters for window creation.
   * @returns { Promise<Window> } Promise used to return the window created.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.createWindow can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300001 - Repeated operation.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 17
   */
  function createWindow(config: Configuration): Promise<Window>;

  /**
   * Create a sub window with a specific id and type, only support 7.
   *
   * @param { string } id - Indicates window id.
   * @param { WindowType } type - Indicates window type.
   * @param { AsyncCallback<Window> } callback - Callback used to return the subwindow created.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.window#createWindow
   */
  function create(id: string, type: WindowType, callback: AsyncCallback<Window>): void;

  /**
   * Create a sub window with a specific id and type, only support 7.
   *
   * @param { string } id - Indicates window id.
   * @param { WindowType } type - Indicates window type.
   * @returns { Promise<Window> } Promise used to return the subwindow created.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.window#createWindow
   */
  function create(id: string, type: WindowType): Promise<Window>;

  /**
   * Create a system or float window with a specific id and type.
   *
   * @param { BaseContext } ctx - Indicates the context on which the window depends
   * @param { string } id - Indicates window id.
   * @param { WindowType } type - Indicates window type.
   * @returns { Promise<Window> } Promise used to return the window created.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.window#createWindow
   */
  function create(ctx: BaseContext, id: string, type: WindowType): Promise<Window>;

  /**
   * Create a system or float window with a specific id and type.
   *
   * @param { BaseContext } ctx - Indicates the context on which the window depends
   * @param { string } id - Indicates window id.
   * @param { WindowType } type - Indicates window type.
   * @param { AsyncCallback<Window> } callback - Callback used to return the window created.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.window#createWindow
   */
  function create(ctx: BaseContext, id: string, type: WindowType, callback: AsyncCallback<Window>): void;

  /**
   * Find the window by id.
   *
   * @param { string } id - Indicates window id.
   * @param { AsyncCallback<Window> } callback - Callback used to return the window found.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.window#findWindow
   */
  function find(id: string, callback: AsyncCallback<Window>): void;

  /**
   * Find the window by id.
   *
   * @param { string } id - Indicates window id.
   * @returns { Promise<Window> } Window found.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.window#findWindow
   */
  function find(id: string): Promise<Window>;

  /**
   * Find the window by name.
   *
   * @param { string } name - Indicates window name.
   * @returns { Window } Window found.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Find the window by name.
   *
   * @param { string } name - Indicates window name.
   * @returns { Window } Window found.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Find the window by name.
   *
   * @param { string } name - Indicates window name.
   * @returns { Window } Window found.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  function findWindow(name: string): Window;

  /**
   * Get the final show window.
   *
   * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.window#getLastWindow
   */
  function getTopWindow(callback: AsyncCallback<Window>): void;

  /**
   * Get the final show window.
   *
   * @returns { Promise<Window> } Promise used to return the top window obtained.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 6
   * @deprecated since 9
   * @useinstead ohos.window#getLastWindow
   */
  function getTopWindow(): Promise<Window>;

  /**
   * Get the final show window.
   *
   * @param { BaseContext } ctx - Indicates the context on which the window depends
   * @returns { Promise<Window> } Promise used to return the top window obtained.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.window#getLastWindow
   */
  function getTopWindow(ctx: BaseContext): Promise<Window>;

  /**
   * Get the final show window.
   *
   * @param { BaseContext } ctx - Indicates the context on which the window depends
   * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.window#getLastWindow
   */
  function getTopWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void;

  /**
   * Get the final show window.
   *
   * @param { BaseContext } ctx - Current application context.
   * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Get the final show window.
   *
   * @param { BaseContext } ctx - Current application context.
   * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Get the top window.
   *
   * @param { BaseContext } ctx - Current application context.
   * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal. Top window or main window is null or destroyed.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  function getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void;

  /**
   * Get the final show window.
   *
   * @param { BaseContext } ctx - Current application context.
   * @returns { Promise<Window> } Promise used to return the top window obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Get the final show window.
   *
   * @param { BaseContext } ctx - Current application context.
   * @returns { Promise<Window> } Promise used to return the top window obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Get the top window.
   *
   * @param { BaseContext } ctx - Current application context.
   * @returns { Promise<Window> } Promise used to return the top window obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal. Top window or main window is null or destroyed.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  function getLastWindow(ctx: BaseContext): Promise<Window>;

  /**
   * Minimize all app windows.
   *
   * @param { number } id - ID of the display.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types;
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Minimize all app windows.
   *
   * @param { number } id - ID of the display.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types;
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function minimizeAll(id: number, callback: AsyncCallback<void>): void;

  /**
   * Minimize all app windows.
   *
   * @param { number } id - ID of the display.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types;
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Minimize all app windows.
   *
   * @param { number } id - ID of the display.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types;
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function minimizeAll(id: number): Promise<void>;

  /**
   * Toggle shown state for all app windows. Minimize or restore all app windows.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Toggle shown state for all app windows. Minimize or restore all app windows.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function toggleShownStateForAllAppWindows(callback: AsyncCallback<void>): void;

  /**
   * Toggle shown state for all app windows. Minimize or restore all app windows.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Toggle shown state for all app windows. Minimize or restore all app windows.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function toggleShownStateForAllAppWindows(): Promise<void>;

  /**
   * Set the layout mode of a window.
   *
   * @param { WindowLayoutMode } mode - The layout mode of a window.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types; 
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Set the layout mode of a window.
   *
   * @param { WindowLayoutMode } mode - The layout mode of a window.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types; 
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function setWindowLayoutMode(mode: WindowLayoutMode, callback: AsyncCallback<void>): void;

  /**
   * Set the layout mode of a window.
   *
   * @param { WindowLayoutMode } mode - The layout mode of a window.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types; 
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  /**
   * Set the layout mode of a window.
   *
   * @param { WindowLayoutMode } mode - The layout mode of a window.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types; 
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function setWindowLayoutMode(mode: WindowLayoutMode): Promise<void>;

  /**
   * Sets whether to enable gesture navigation.
   *
   * @param { boolean } enable - Gesture navigation if true, or disable if false.
   * @param { AsyncCallback<void> } callback - The callback of setGestureNavigationEnabled.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setGestureNavigationEnabled(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether to enable gesture navigation.
   *
   * @param { boolean } enable - Gesture navigation if true, or disable if false.
   * @returns { Promise<void> } - The promise returned by the function.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setGestureNavigationEnabled(enable: boolean): Promise<void>;

  /**
   * Set watermark image.
   *
   * @param { image.PixelMap } pixelMap - Watermark image.
   * @param { boolean } enable - Show watermark if true.
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean): Promise<void>;

  /**
   * Set watermark image.
   *
   * @param { image.PixelMap } pixelMap - Watermark image.
   * @param { boolean } enable - Show watermark if true.
   * @param { AsyncCallback<void> } callback - The callback of setWaterMarkImage.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Shift window focus within the same application. And the window type contains only main window and subwindow.
   *
   * @param { number } sourceWindowId - Window id which the focus shift from.
   * @param { number } targetWindowId - Window id which the focus shift to.
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Shift window focus within the same application. And the window type contains only main window and subwindow.
   *
   * @param { number } sourceWindowId - Window id which the focus shift from.
   * @param { number } targetWindowId - Window id which the focus shift to.
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  function shiftAppWindowFocus(sourceWindowId: number, targetWindowId: number): Promise<void>;

  /**
   * Shift window pointer event within the same application. And the window type contains only main window and subwindow.
   *
   * @param { number } sourceWindowId - Window id which the pointer event shift from.
   * @param { number } targetWindowId - Window id which the pointer event shift to.
   * @returns { Promise<void> } - Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15
   */
  function shiftAppWindowPointerEvent(sourceWindowId: number, targetWindowId: number): Promise<void>;

  /**
   * Get info of visible windows.
   *
   * @returns { Promise<Array<WindowInfo>> } - Promise that returns windowInfo list.
   * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  /**
   * Get info of visible windows.
   *
   * @permission ohos.permission.VISIBLE_WINDOW_INFO
   * @returns { Promise<Array<WindowInfo>> } - Promise that returns windowInfo list.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported. Function getVisibleWindowInfo can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 18
   */
  function getVisibleWindowInfo(): Promise<Array<WindowInfo>>;

  /**
   * gets snapshot of window
   *
   * @param { number } windowId - Indicates target window id.
   * @returns { Promise<image.PixelMap> } - Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - This operation is not accessible.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12
   */
  function getSnapshot(windowId: number): Promise<image.PixelMap>;

  /**
   * Get windows by coordinate.
   *
   * @param { number } displayId - Indicate the id of display.
   * @param { number } windowNumber - Indicate the Number of query windows.
   * @param { number } x - Indicate the X-coordinate of the window.
   * @param { number } y - Indicate the Y-coordinate of the window.
   * @returns { Promise<Array<Window>> } Promise used to return the window.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 14
   */
  function getWindowsByCoordinate(displayId: number, windowNumber?: number, x?: number, y?: number): Promise<Array<Window>>;

  /**
   * Get Layout info of all windows on the selected display.
   *
   * @param { number } displayId - Indicate the id of display.
   * @returns { Promise<Array<WindowLayoutInfo>> } Promise used to return the WindowLayoutInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types; 
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15
   */
  /**
   * Get Layout info of all windows on the selected display.
   *
   * @param { number } displayId - Indicate the id of display.
   * @returns { Promise<Array<WindowLayoutInfo>> } Promise used to return the WindowLayoutInfo.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types; 
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. function getAllWindowLayoutInfo can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19
   */
  function getAllWindowLayoutInfo(displayId: number): Promise<Array<WindowLayoutInfo>>;

  /**
   * Register the callback of systemBarTintChange
   *
   * @param { 'systemBarTintChange' } type - The value is fixed at 'systemBarTintChange', indicating the property change event of the system bar.
   * @param { Callback<SystemBarTintState> } callback - Callback used to return the properties of the system bar.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types; 
   *                                                                  3. Parameter verification failed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function on(type: 'systemBarTintChange', callback: Callback<SystemBarTintState>): void;

  /**
   * Unregister the callback of systemBarTintChange
   *
   * @param { 'systemBarTintChange' } type - The value is fixed at 'systemBarTintChange', indicating the property change event of the system bar.
   * @param { Callback<SystemBarTintState> } callback - Callback used to return the properties of the system bar.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
   *                                                                  2. Parameter verification failed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function off(type: 'systemBarTintChange', callback?: Callback<SystemBarTintState>): void;

  /**
   * Register the callback for gesture navigation enabled changes.
   *
   * @param { 'gestureNavigationEnabledChange' } type the event of gesture navigation enabled changes.
   * @param { Callback<boolean> } callback Callback used to return the result whether gesture navigation enabled or not.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
   *                                                                  2. Incorrect parameter types.
   *                                                                  3. Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function on(type: 'gestureNavigationEnabledChange', callback: Callback<boolean>): void;

  /**
   * Unregister the callback for gesture navigation enabled changes.
   *
   * @param { 'gestureNavigationEnabledChange' } type the event of gesture navigation enabled changes.
   * @param { Callback<boolean> } callback Callback used to return the result whether gesture navigation enabled or not.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
   *                                                                  2. Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function off(type: 'gestureNavigationEnabledChange', callback?: Callback<boolean>): void;

  /**
   * Register the callback for watermark flag change.
   *
   * @param { 'waterMarkFlagChange' } type the event of watermark flag change.
   * @param { Callback<boolean> } callback Callback used to return the result whether watermark flag change or not.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function on(type: 'waterMarkFlagChange', callback: Callback<boolean>): void;

  /**
   * Unregister the callback for watermark flag change.
   *
   * @param { 'waterMarkFlagChange' } type the event of watermark flag change.
   * @param { Callback<boolean> } callback Callback used to return the result whether watermark flag change or not.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
   * <br>2. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function off(type: 'waterMarkFlagChange', callback?: Callback<boolean>): void;
  /**
   * Display orientation
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * Display orientation
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * Display orientation
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  enum Orientation {
    /**
     * Default value. The direction mode is not clearly defined. It is determined by the system.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Default value. The direction mode is not clearly defined. It is determined by the system.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Default value. The direction mode is not clearly defined. It is determined by the system.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    UNSPECIFIED = 0,

    /**
     * Display in portrait orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Display in portrait orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Display in portrait orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    PORTRAIT = 1,

    /**
     * Display in landscape orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Display in landscape orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Display in landscape orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    LANDSCAPE = 2,

    /**
     * Display in inverted portrait orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Display in inverted portrait orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Display in inverted portrait orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    PORTRAIT_INVERTED = 3,

    /**
     * Display in inverted landscape orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Display in inverted landscape orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Display in inverted landscape orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    LANDSCAPE_INVERTED = 4,

    /**
     * Follow the rotation of the sensor, ignore auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Follow the rotation of the sensor, ignore auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    AUTO_ROTATION = 5,

    /**
     * Follow the rotation of the sensor, only work in the vertical direction, ignore auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Follow the rotation of the sensor, only work in the vertical direction, ignore auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    AUTO_ROTATION_PORTRAIT = 6,

    /**
     * Follow the rotation of the sensor, only work in the horizontal direction, ignore auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Follow the rotation of the sensor, only work in the horizontal direction, ignore auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    AUTO_ROTATION_LANDSCAPE = 7,

    /**
     * Follow the rotation of the sensor, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Follow the rotation of the sensor, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    AUTO_ROTATION_RESTRICTED = 8,

    /**
     * Follow the rotation of the sensor, only work in the vertical direction, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Follow the rotation of the sensor, only work in the vertical direction, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    AUTO_ROTATION_PORTRAIT_RESTRICTED = 9,

    /**
     * Follow the rotation of the sensor, only work in the horizontal direction, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Follow the rotation of the sensor, only work in the horizontal direction, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    AUTO_ROTATION_LANDSCAPE_RESTRICTED = 10,

    /**
     * Locked mode, keep the same direction as previous one.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Locked mode, keep the same direction as previous one.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    LOCKED = 11,

    /**
     * Follow the rotation of the sensor, determined by the system, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    AUTO_ROTATION_UNSPECIFIED = 12,

    /**
     * Display in portrait orientation, and then, follow the rotation of the sensor, determined by the system, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    USER_ROTATION_PORTRAIT = 13,

    /**
     * Display in landscape orientation, and then, follow the rotation of the sensor, determined by the system, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    USER_ROTATION_LANDSCAPE = 14,

    /**
     * Display in inverted portrait orientation, and then, follow the rotation of the sensor, determined by the system, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    USER_ROTATION_PORTRAIT_INVERTED = 15,

    /**
     * Display in inverted landscape orientation, and then, follow the rotation of the sensor, determined by the system, controlled by auto rotation lock.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    USER_ROTATION_LANDSCAPE_INVERTED = 16,

    /**
     * Follow the desktop rotate mode.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    FOLLOW_DESKTOP = 17
  }

  /**
   * Type of blur style
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  enum BlurStyle {
    /**
     * Close blur.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    OFF,
    /**
     * Blur style thin.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    THIN,
    /**
     * Blur style regular.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    REGULAR,
    /**
     * Blur style thick.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    THICK
  }

  /**
   * Enum for window callback event type
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 10
   */
  /**
   * Enum for window callback event type
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  enum WindowEventType {
    /**
     * The value of window event is window show
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * The value of window event is window show
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    WINDOW_SHOWN = 1,
    /**
     * The value of window event is window active
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * The value of window event is window active
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    WINDOW_ACTIVE = 2,
    /**
     * The value of window event is window inactive
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * The value of window event is window inactive
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    WINDOW_INACTIVE = 3,
    /**
     * The value of window event is window hide
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * The value of window event is window hide
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    WINDOW_HIDDEN = 4,
    /**
     * The value of window event is window destroy
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 11
     */
    WINDOW_DESTROYED = 7
  }

  /**
   * Enum for window maximize presentation
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  enum MaximizePresentation {
    /**
     * The value means follow immersive state which set by app
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    FOLLOW_APP_IMMERSIVE_SETTING = 0,
    /**
     * The value means exit immersive state 
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    EXIT_IMMERSIVE = 1,
    /**
     * The value means enter immersive state 
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    ENTER_IMMERSIVE = 2,
    /**
     * The value means enter immersive state and the title bar and dock bar cannot be shown, when the mouse hovers over hot area.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    ENTER_IMMERSIVE_DISABLE_TITLE_AND_DOCK_HOVER = 3,
  }

  /**
   * the optional move configuration used in moveWindowToAsync/moveWindowToGlobal
   *
   * @interface MoveConfiguration
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15
   */
  interface MoveConfiguration {
    /**
     * The display id of the screen
     *
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    displayId?: number;
  }

  /**
   * Specific system bar type.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 11
   */
  /**
   * Specific system bar type.
   *
   * @typedef {'status' | 'navigation' | 'navigationIndicator'}
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  type SpecificSystemBar = 'status' | 'navigation' | 'navigationIndicator';

  /**
   * The information of keyboard
   *
   * @interface KeyboardInfo
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18
   */
  interface KeyboardInfo {
    /**
     * The position and size of keyboard before animation.
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    beginRect: Rect;

    /**
     * The position and size of keyboard after animation completed.
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    endRect: Rect;
  }

  /**
   * Window
   *
   * @interface Window
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 6
   */
  /**
   * Window
   *
   * @interface Window
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  interface Window {
    /**
     * Hide window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     */
    /**
     * Hide window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    hide(callback: AsyncCallback<void>): void;

    /**
     * Hide window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     */
    /**
     * Hide window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    hide(): Promise<void>;

    /**
     * Hide window with animation.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Hide window with animation.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12
     */
    hideWithAnimation(callback: AsyncCallback<void>): void;

    /**
     * Hide window with animation.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Hide window with animation.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12
     */
    hideWithAnimation(): Promise<void>;

    /**
     * Show window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#showWindow
     */
    show(callback: AsyncCallback<void>): void;

    /**
     * Show window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#showWindow
     */
    show(): Promise<void>;

    /**
     * Show window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Show window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Show window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    showWindow(callback: AsyncCallback<void>): void;

    /**
     * Show window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Show window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Show window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    showWindow(): Promise<void>;

    /**
     * Show window with animation.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Show window with animation.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12
     */
    showWithAnimation(callback: AsyncCallback<void>): void;

    /**
     * Show window with animation.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Show window with animation.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12
     */
    showWithAnimation(): Promise<void>;

    /**
     * Destroy the window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#destroyWindow
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     * Destroy the window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#destroyWindow
     */
    destroy(): Promise<void>;

    /**
     * Destroy the window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Destroy the window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Destroy the window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    destroyWindow(callback: AsyncCallback<void>): void;

    /**
     * Destroy the window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Destroy the window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Destroy the window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    destroyWindow(): Promise<void>;

    /**
     * Set the position of a window.
     *
     * @param { number } x - Indicate the X-coordinate of the window.
     * @param { number } y - Indicate the Y-coordinate of the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#moveWindowTo
     */
    moveTo(x: number, y: number): Promise<void>;

    /**
     * Set the position of a window.
     *
     * @param { number } x - Indicate the X-coordinate of the window.
     * @param { number } y - Indicate the Y-coordinate of the window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#moveWindowTo
     */
    moveTo(x: number, y: number, callback: AsyncCallback<void>): void;

    /**
     * Set the position of a window.
     *
     * @param { number } x - Indicate the X-coordinate of the window.
     * @param { number } y - Indicate the Y-coordinate of the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the position of a window.
     *
     * @param { number } x - Indicate the X-coordinate of the window.
     * @param { number } y - Indicate the Y-coordinate of the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Set the position of a window.
     *
     * @param { number } x - Indicate the X-coordinate of the window.
     * @param { number } y - Indicate the Y-coordinate of the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    moveWindowTo(x: number, y: number): Promise<void>;

    /**
     * Set the position of a window.
     *
     * @param { number } x - Indicate the X-coordinate of the window.
     * @param { number } y - Indicate the Y-coordinate of the window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the position of a window.
     *
     * @param { number } x - Indicate the X-coordinate of the window.
     * @param { number } y - Indicate the Y-coordinate of the window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Set the position of a window.
     *
     * @param { number } x - Indicate the X-coordinate of the window.
     * @param { number } y - Indicate the Y-coordinate of the window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    moveWindowTo(x: number, y: number, callback: AsyncCallback<void>): void;

    /**
     * Move window to the position.
     *
     * @param { number } x - Indicate the X-coordinate of the window.
     * @param { number } y - Indicate the Y-coordinate of the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    moveWindowToAsync(x: number, y: number): Promise<void>;

    /**
     * Move window to the position.
     *
     * @param { number } x - Indicate the X-coordinate of the window.
     * @param { number } y - Indicate the Y-coordinate of the window.
     * @param { ?MoveConfiguration } moveConfiguration - Indicate the window move configuration.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    moveWindowToAsync(x: number, y: number, moveConfiguration?: MoveConfiguration): Promise<void>;

    /**
     * Move window to the position relative to current screen.
     * 
     * @param { number } x - Indicate the X-coordinate of the window relative to current screen.
     * @param { number } y - Indicate the Y-coordinate of the window relative to current screen.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13
     */
    moveWindowToGlobal(x: number, y: number): Promise<void>;

    /**
     * Move window to the position relative to current screen.
     * 
     * @param { number } x - Indicate the X-coordinate of the window relative to current screen.
     * @param { number } y - Indicate the Y-coordinate of the window relative to current screen.
     * @param { ?MoveConfiguration } moveConfiguration - Indicate the window move configuration.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    moveWindowToGlobal(x: number, y: number, moveConfiguration?: MoveConfiguration): Promise<void>;

    /**
     * Set the size of a window .
     *
     * @param { number } width - Indicates the width of the window.
     * @param { number } height - Indicates the height of the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#resize
     */
    resetSize(width: number, height: number): Promise<void>;

    /**
     * Set the size of a window .
     *
     * @param { number } width - Indicates the width of the window.
     * @param { number } height - Indicates the height of the window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#resize
     */
    resetSize(width: number, height: number, callback: AsyncCallback<void>): void;

    /**
     * Set the size of a window .
     *
     * @param { number } width - Indicates the width of the window. The width should be greater than 0.
     * @param { number } height - Indicates the height of the window. The height should be greater than 0.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the size of a window .
     *
     * @param { number } width - Indicates the width of the window. The width should be greater than 0.
     * @param { number } height - Indicates the height of the window. The height should be greater than 0.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Set the size of a window .
     *
     * @param { number } width - Indicates the width of the window. The width should be greater than 0.
     * @param { number } height - Indicates the height of the window. The height should be greater than 0.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    resize(width: number, height: number): Promise<void>;

    /**
     * Set the size of a window .
     *
     * @param { number } width - Indicates the width of the window. The width should be greater than 0.
     * @param { number } height - Indicates the height of the window. The height should be greater than 0.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the size of a window .
     *
     * @param { number } width - Indicates the width of the window. The width should be greater than 0.
     * @param { number } height - Indicates the height of the window. The height should be greater than 0.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Set the size of a window .
     *
     * @param { number } width - Indicates the width of the window. The width should be greater than 0.
     * @param { number } height - Indicates the height of the window. The height should be greater than 0.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    resize(width: number, height: number, callback: AsyncCallback<void>): void;

    /**
     * Set the size of a window.
     *
     * @param { number } width - Indicates the width of the window. The width should be greater than 0.
     * @param { number } height - Indicates the height of the window. The height should be greater than 0.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    resizeAsync(width: number, height: number): Promise<void>;

    /**
     * Set whether to follow parent window layout. Only sub windows and dialogs are available.
     *
     * @param { boolean } enabled - If true, this window updates the layout follow the parent window.
     *                              If false, this window does not update the layout follow the parent window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 17
     */
    setFollowParentWindowLayoutEnabled(enabled: boolean): Promise<void>;

    /**
     * Set the type of a window.
     *
     * @param { WindowType } type - Indicate the type of a window.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     * @deprecated since 9
     */
    setWindowType(type: WindowType): Promise<void>;

    /**
     * Set the type of a window.
     *
     * @param { WindowType } type - Indicate the type of a window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     * @deprecated since 9
     */
    setWindowType(type: WindowType, callback: AsyncCallback<void>): void;

    /**
     * Set the mode of a window.
     *
     * @param { WindowMode } mode - Indicate the mode of a window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Set the mode of a window.
     *
     * @param { WindowMode } mode - Indicate the mode of a window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    setWindowMode(mode: WindowMode): Promise<void>;

    /**
     * Set the mode of a window.
     *
     * @param { WindowMode } mode - Indicate the mode of a window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Set the mode of a window.
     *
     * @param { WindowMode } mode - Indicate the mode of a window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    setWindowMode(mode: WindowMode, callback: AsyncCallback<void>): void;

    /**
     * Get the properties of current window
     *
     * @param { AsyncCallback<WindowProperties> } callback - Callback used to return the window properties.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.window.Window#getWindowProperties
     */
    getProperties(callback: AsyncCallback<WindowProperties>): void;

    /**
     * Get the window rectangular area quadruple {left,top,weight,height}, left and top represent relative to screen coordinates 
     * and are affected by parent window scaling, weight and height are the scaling width and height.
     * 
     * @returns { Rect } The quadruple {left,top,weight,height} represents respectively the X-coordinate
     * and Y-coordinate of the window relative to current screen, the scaled window width and scaled window height.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13
     */
    getGlobalRect(): Rect;

    /**
     * Get the properties of current window
     *
     * @returns { Promise<WindowProperties> } Promise used to return the window properties.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.window.Window#getWindowProperties
     */
    getProperties(): Promise<WindowProperties>;

    /**
     * Get the properties of current window
     *
     * @returns { WindowProperties } Return the window properties.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Get the properties of current window
     *
     * @returns { WindowProperties } Return the window properties.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Get the properties of current window
     *
     * @returns { WindowProperties } Return the window properties.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getWindowProperties(): WindowProperties;

    /**
     * Get the window density of current window.
     *
     * @returns { WindowDensityInfo } Return system density, default density and custom density of window.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    getWindowDensityInfo(): WindowDensityInfo;

    /**
     * Get the avoid area
     *
     * @param { AvoidAreaType } type - Type of the area
     * @param { AsyncCallback<AvoidArea> } callback - Callback used to return the area.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#getWindowAvoidArea
     */
    getAvoidArea(type: AvoidAreaType, callback: AsyncCallback<AvoidArea>): void;

    /**
     * Get the avoid area
     *
     * @param { AvoidAreaType } type - Type of the area
     * @returns { Promise<AvoidArea> } Area where the window cannot be displayed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#getWindowAvoidArea
     */
    getAvoidArea(type: AvoidAreaType): Promise<AvoidArea>;

    /**
     * Get the avoid area
     *
     * @param { AvoidAreaType } type - Type of the area
     * @returns { AvoidArea } Area where the window cannot be displayed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Get the avoid area
     *
     * @param { AvoidAreaType } type - Type of the area
     * @returns { AvoidArea } Area where the window cannot be displayed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get the avoid area
     *
     * @param { AvoidAreaType } type - Type of the area
     * @returns { AvoidArea } Area where the window cannot be displayed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getWindowAvoidArea(type: AvoidAreaType): AvoidArea;

    /**
     * Set whether system window type could obtain avoid area.
     *
     * @param { boolean } enabled - If true, the system window type can obtain avoid area. If false, the avoid area obtained by the system window type will always be empty.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    setSystemAvoidAreaEnabled(enabled: boolean): Promise<void>;

    /**
     * Get whether system window type could obtain avoid area.
     *
     * @returns { boolean } enable - If true, the system window type can obtain avoid area. If false, the avoid area obtained by the system window type will always be empty.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    isSystemAvoidAreaEnabled(): boolean;

    /**
     * Set the flag of the window is shown full screen
     *
     * @param { boolean } isFullScreen - The flag of the window is shown full screen
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowSystemBarEnable
     */
    setFullScreen(isFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * Set the flag of the window is shown full screen
     *
     * @param { boolean } isFullScreen - The flag of the window is shown full screen
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowSystemBarEnable
     */
    setFullScreen(isFullScreen: boolean): Promise<void>;

    /**
     * Set the property of the window can layout in full screen
     *
     * @param { boolean } isLayoutFullScreen - The window can layout in full screen
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowLayoutFullScreen
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * Set the property of the window can layout in full screen
     *
     * @param { boolean } isLayoutFullScreen - The window can layout in full screen
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowLayoutFullScreen
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>;

    /**
     * Set the property of the window can layout in full screen
     *
     * @param { boolean } isLayoutFullScreen - The window can layout in full screen
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the property of the window can layout in full screen
     *
     * @param { boolean } isLayoutFullScreen - The window can layout in full screen
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 12
     * @useinstead ohos.window.Window#setWindowLayoutFullScreen
     */
    setWindowLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * Set the property of the window can layout in full screen
     *
     * @param { boolean } isLayoutFullScreen - The window can layout in full screen
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the property of the window can layout in full screen
     *
     * @param { boolean } isLayoutFullScreen - The window can layout in full screen
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setWindowLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>;

    /**
     * Set the system bar to have visible.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowSystemBarEnable
     */
    setSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void;

    /**
     * Set the system bar to have visible.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowSystemBarEnable
     */
    setSystemBarEnable(names: Array<'status' | 'navigation'>): Promise<void>;

    /**
     * Set the system bar to have visible.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the system bar to have visible.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Set the system bar to have visible.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;
     *                                                                  2.Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     * @deprecated since 12
     * @useinstead ohos.window.Window#setWindowSystemBarEnable
     */
    setWindowSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void;

    /**
     * Set the system bar to have visible.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the system bar to have visible.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Set the system bar to have visible.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;
     *                                                                  2.Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setWindowSystemBarEnable(names: Array<'status' | 'navigation'>): Promise<void>;

    /**
     * Set specific system bar to have visible.
     *
     * @param {SpecificSystemBar} name - the set of system bar
     * @param {boolean} enable - Show specific system bar if true, or hide specific system bar if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws {BusinessError} 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                2. Incorrect parameter types.
     * @throws {BusinessError} 1300002 - This window state is abnormal.
     * @throws {BusinessError} 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 11
     */
    /**
     * Set specific system bar to have visible.
     *
     * @param {SpecificSystemBar} name - the set of system bar
     * @param {boolean} enable - Show specific system bar if true, or hide specific system bar if false.
     * @param {boolean} enableAnimation - Whether using animation during this setting, using animation if true or not using animation if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws {BusinessError} 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                2. Incorrect parameter types.
     * @throws {BusinessError} 1300002 - This window state is abnormal.
     * @throws {BusinessError} 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setSpecificSystemBarEnabled(name: SpecificSystemBar, enable: boolean, enableAnimation?: boolean): Promise<void>;

    /**
     * Set the properties of system bar
     *
     * @param { SystemBarProperties } systemBarProperties - The properties of system bar
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowSystemBarProperties
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;

    /**
     * Set the properties of system bar
     *
     * @param { SystemBarProperties } systemBarProperties - The properties of system bar
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowSystemBarProperties
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;

    /**
     * Set the properties of system bar
     *
     * @param { SystemBarProperties } systemBarProperties - The properties of system bar
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the properties of system bar
     *
     * @param { SystemBarProperties } systemBarProperties - The properties of system bar
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     * @deprecated since 12
     * @useinstead ohos.window.Window#setWindowSystemBarProperties
     */
    setWindowSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;

    /**
     * Set the properties of system bar
     *
     * @param { SystemBarProperties } systemBarProperties - The properties of system bar
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the properties of system bar
     *
     * @param { SystemBarProperties } systemBarProperties - The properties of system bar
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    setWindowSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;

    /**
     * Get the properties of system bar
     *
     * @returns { SystemBarProperties } Return system bar properties.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    getWindowSystemBarProperties(): SystemBarProperties;

    /**
     * Set the color of the status bar.
     *
     * @param { ColorMetrics } color - Color metrics.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported on this device.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    setStatusBarColor(color: ColorMetrics): Promise<void>;

    /**
     * Get the properties of the status bar.
     *
     * @returns { StatusBarProperty } Return status bar properties.
     * @throws { BusinessError } 801 - Capability not supported on this device.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    getStatusBarProperty(): StatusBarProperty;

    /**
     * Set whether to disable the gesture back function.
     *
     * @param { boolean } enabled - If true then enable the gesture back function, false then disable the gesture back function.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13
     */
    setGestureBackEnabled(enabled: boolean): Promise<void>;

    /**
     * Get whether the gesture back function is currently disabled.
     * 
     * @returns { boolean } enabled - If true then the gesture back function is currently enabled, false then the gesture back function is currently disabled.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13
     */
    isGestureBackEnabled(): boolean;

    /**
     * Set the preferred orientation config of the window
     *
     * @param { Orientation } orientation - The orientation config of the window
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the preferred orientation config of the window
     *
     * @param { Orientation } orientation - The orientation config of the window
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Set the preferred orientation config of the window
     *
     * @param { Orientation } orientation - The orientation config of the window
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    setPreferredOrientation(orientation: Orientation): Promise<void>;

    /**
     * Set the preferred orientation config of the window
     *
     * @param { Orientation } orientation - The orientation config of the window
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Set the preferred orientation config of the window
     *
     * @param { Orientation } orientation - The orientation config of the window
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Set the preferred orientation config of the window
     *
     * @param { Orientation } orientation - The orientation config of the window
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>): void;

    /**
     * Get the preferred orientation config of the window
     *
     * @returns { Orientation } orientation - The orientation config of the window
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    getPreferredOrientation(): Orientation;

    /**
     * Loads the content of a page, with its path in the current project specified, to this window, and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to this window, and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to this window, and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * Loads the content of a page, with its path in the current project specified, to this window, and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to this window, and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to this window, and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    loadContent(path: string, storage: LocalStorage): Promise<void>;

    /**
     * Loads content from a page to this window. This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#setUIContent
     */
    loadContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * Loads content from a page to this window. This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#setUIContent
     */
    loadContent(path: string): Promise<void>;

    /**
     * Get the UIContext associate with the window content.
     *
     * @returns { UIContext } the object of UIContext.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 
     *                                                                   2. Incorrect parameter types; 
     *                                                                   3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Get the UIContext associate with the window content.
     *
     * @returns { UIContext } the object of UIContext.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getUIContext() : UIContext;

    /**
     * Loads content
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Loads content
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Loads content
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    setUIContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * Loads content
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Loads content
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Loads content
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    setUIContent(path: string): Promise<void>;

    /**
     * Loads content by named router
     *
     * @param { string } name - name of the page to which the content will be loaded.
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * Loads content by named router
     *
     * @param { string } name - name of the page to which the content will be loaded.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    loadContentByName(name: string, callback: AsyncCallback<void>): void;

    /**
     * Loads content by named router
     *
     * @param { string } name - name of the page to which the content will be loaded.
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    loadContentByName(name: string, storage?: LocalStorage): Promise<void>;

    /**
     * Checks whether the window is displayed
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#isWindowShowing
     */
    isShowing(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether the window is displayed
     *
     * @returns { Promise<boolean> } Whether the window is displayed. The value true means that the window is displayed, and false means the opposite.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#isWindowShowing
     */
    isShowing(): Promise<boolean>;

    /**
     * Checks whether the window is displayed
     *
     * @returns { boolean } Whether the window is displayed. The value true means that the window is displayed, and false means the opposite.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Checks whether the window is displayed
     *
     * @returns { boolean } Whether the window is displayed. The value true means that the window is displayed, and false means the opposite.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Checks whether the window is displayed
     *
     * @returns { boolean } Whether the window is displayed. The value true means that the window is displayed, and false means the opposite.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    isWindowShowing(): boolean;

    /**
     * Register the callback of windowSizeChange
     *
     * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
     * @param { Callback<Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Register the callback of windowSizeChange
     *
     * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
     * @param { Callback<Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Register the callback of windowSizeChange
     *
     * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
     * @param { Callback<Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    on(type: 'windowSizeChange', callback: Callback<Size>): void;

    /**
     * Unregister the callback of windowSizeChange
     *
     * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
     * @param { Callback<Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Unregister the callback of windowSizeChange
     *
     * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
     * @param { Callback<Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Unregister the callback of windowSizeChange
     *
     * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
     * @param { Callback<Size> } callback - Callback used to return the window size.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    off(type: 'windowSizeChange', callback?: Callback<Size>): void;

    /**
     * Register the callback of systemAvoidAreaChange
     *
     * @param { 'systemAvoidAreaChange' } type - The value is fixed at 'systemAvoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<AvoidArea> } callback - Callback used to return the area.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#on_avoidAreaChange
     */
    on(type: 'systemAvoidAreaChange', callback: Callback<AvoidArea>): void;

    /**
     * Unregister the callback of systemAvoidAreaChange
     *
     * @param { 'systemAvoidAreaChange' } type - The value is fixed at 'systemAvoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<AvoidArea> } callback - Callback used to return the area.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#off_avoidAreaChange
     */
    off(type: 'systemAvoidAreaChange', callback?: Callback<AvoidArea>): void;

    /**
     * Register the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 
     *                                                                   2. Incorrect parameter types; 
     *                                                                   3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Register the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 
     *                                                                   2. Incorrect parameter types; 
     *                                                                   3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Register the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<AvoidAreaOptions> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 
     *                                                                   2. Incorrect parameter types; 
     *                                                                   3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>): void;

    /**
     * Unregister the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 
     *                                                                   2. Parameter verification failed.  
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Unregister the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 
     *                                                                   2. Parameter verification failed.  
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Unregister the callback of avoidAreaChange
     *
     * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
     * @param { Callback<AvoidAreaOptions> } callback - Callback used to return the area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types; 
     *                                                                   2. Parameter verification failed.  
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>): void;

    /**
     * Register the callback of keyboardHeightChange
     *
     * @param { 'keyboardHeightChange' } type - The value is fixed at 'keyboardHeightChange', indicating the keyboard height change event.
     * @param { Callback<number> } callback - Callback used to return the current keyboard height.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Register the callback of keyboardHeightChange
     *
     * @param { 'keyboardHeightChange' } type - The value is fixed at 'keyboardHeightChange', indicating the keyboard height change event.
     * @param { Callback<number> } callback - Callback used to return the current keyboard height.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    on(type: 'keyboardHeightChange', callback: Callback<number>): void;

    /**
     * Unregister the callback of keyboardHeightChange
     *
     * @param { 'keyboardHeightChange' } type - The value is fixed at 'keyboardHeightChange', indicating the keyboard height change event.
     * @param { Callback<number> } callback - Callback used to return the current keyboard height.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Unregister the callback of keyboardHeightChange
     *
     * @param { 'keyboardHeightChange' } type - The value is fixed at 'keyboardHeightChange', indicating the keyboard height change event.
     * @param { Callback<number> } callback - Callback used to return the current keyboard height.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    off(type: 'keyboardHeightChange', callback?: Callback<number>): void;

    /**
     * Register the callback of keyboardDidShow
     *
     * @param { 'keyboardDidShow' } type - The value is fixed at 'keyboardDidShow', indicating the completion of the keyboard show animation event.
     * @param { Callback<KeyboardInfo> } callback - Callback invoked when the keyboard show animation is completed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *                                                                   2. Incorrect parameter types;
     *                                                                   3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardDidShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    on(type: 'keyboardDidShow', callback: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboardDidShow
     *
     * @param { 'keyboardDidShow' } type - The value is fixed at 'keyboardDidShow', indicating the completion of the keyboard show animation event.
     * @param { Callback<KeyboardInfo> } callback - Callback invoked when the keyboard show animation is completed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
     *                                                                   2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardDidShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    off(type: 'keyboardDidShow', callback?: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboardDidHide
     *
     * @param { 'keyboardDidHide' } type - The value is fixed at 'keyboardDidHide', indicating the completion of the keyboard hide animation event.
     * @param { Callback<KeyboardInfo> } callback - Callback invoked when the keyboard hide animation is completed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *                                                                   2. Incorrect parameter types;
     *                                                                   3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardDidHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    on(type: 'keyboardDidHide', callback: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboardDidHide
     *
     * @param { 'keyboardDidHide' } type - The value is fixed at 'keyboardDidHide', indicating the completion of the keyboard hide animation event.
     * @param { Callback<KeyboardInfo> } callback - Callback invoked when the keyboard hide animation is completed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
     *                                                                   2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardDidHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    off(type: 'keyboardDidHide', callback?: Callback<KeyboardInfo>): void;

    /**
     * Touch outside callback on.
     *
     * @param { 'touchOutside' } type - The value is fixed at 'touchOutside', indicating the click event outside this window.
     * @param { Callback<void> } callback - Callback used to return the click event outside this window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    on(type: 'touchOutside', callback: Callback<void>): void;

    /**
     * Touch outside callback off.
     *
     * @param { 'touchOutside' } type - The value is fixed at 'touchOutside', indicating the click event outside this window.
     * @param { Callback<void> } callback - Callback used to return the click event outside this window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    off(type: 'touchOutside', callback?: Callback<void>): void;

    /**
     * Window displayId change callback on.
     *
     * @param { 'displayIdChange' } type - The value is fixed at 'displayIdChange', indicating the Display this window is current showing has changed.
     * @param { Callback<number> } callback - Callback used to notify the Display this window is current showing has changed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */   
    on(type: 'displayIdChange', callback: Callback<number>): void;

    /**
     * Window displayId change callback off.
     *
     * @param { 'displayIdChange' } type - The value is fixed at 'displayIdChange', indicating the Display this window is current showing has changed.
     * @param { Callback<number> } callback - Callback used to notify the Display this window is current showing has changed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    off(type: 'displayIdChange', callback?: Callback<number>): void;

    /**
     * Window visibility change callback on.
     *
     * @param { 'windowVisibilityChange' } type - The value is fixed at 'windowVisibilityChange', indicating the window visibility change.
     * @param { Callback<boolean> } callback - Callback used to notify the window visibility change.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Window visibility change callback on.
     *
     * @param { 'windowVisibilityChange' } type - The value is fixed at 'windowVisibilityChange', indicating the window visibility change.
     * @param { Callback<boolean> } callback - Callback used to notify the window visibility change.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    on(type: 'windowVisibilityChange', callback: Callback<boolean>): void;

    /**
     * Window visibility change callback off.
     *
     * @param { 'windowVisibilityChange' } type - The value is fixed at 'windowVisibilityChange', indicating the window visibility change.
     * @param { Callback<boolean> } callback - Callback used to notify the window visibility change.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Window visibility change callback off.
     *
     * @param { 'windowVisibilityChange' } type - The value is fixed at 'windowVisibilityChange', indicating the window visibility change.
     * @param { Callback<boolean> } callback - Callback used to notify the window visibility change.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    off(type: 'windowVisibilityChange', callback?: Callback<boolean>): void;

    /**
     * System density change callback on.
     *
     * @param { 'systemDensityChange' } type - The value is fixed at 'systemDensityChange', indicating the system density is current has changed.
     * @param { Callback<number> } callback - Callback used to notify the system density is current has changed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */   
    on(type: 'systemDensityChange', callback: Callback<number>): void;

    /**
     * System density change callback off.
     *
     * @param { 'systemDensityChange' } type - The value is fixed at 'systemDensityChange', indicating the system density is current showing has changed.
     * @param { Callback<number> } callback - Callback used to notify the system density is current has changed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    off(type: 'systemDensityChange', callback?: Callback<number>): void;

    /**
     * Register the callback function that has no interaction for a long time.
     *
     * @param { 'noInteractionDetected' } type - The value is fixed at 'noInteractionDetected', indicating the window has no interaction for a long time.
     * @param { number } timeout - The timeout(in seconds) of no interaction detection.
     * @param { Callback<void> } callback - Callback used to notify the window has no interaction for a long time.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    on(type: 'noInteractionDetected', timeout: number, callback: Callback<void>): void;

    /**
     * Unregister the callback function that has no interaction for a long time.
     *
     * @param { 'noInteractionDetected' } type - The value is fixed at 'noInteractionDetected', indicating the window has no interaction for a long time.
     * @param { Callback<void> } callback - Callback used to notify the window has no interaction for a long time.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    off(type: 'noInteractionDetected', callback?: Callback<void>): void;

    /**
     * Register the callback of screenshot, only the focused window called back
     *
     * @param { 'screenshot' } type - The value is fixed at 'screenshot', indicating the screenshot event.
     * @param { Callback<void> } callback - Callback invoked when a screenshot event occurs.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Register the callback of screenshot, only the focused window called back
     *
     * @param { 'screenshot' } type - The value is fixed at 'screenshot', indicating the screenshot event.
     * @param { Callback<void> } callback - Callback invoked when a screenshot event occurs.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    on(type: 'screenshot', callback: Callback<void>): void;

    /**
     * Unregister the callback of screenshot
     *
     * @param { 'screenshot' } type - The value is fixed at 'screenshot', indicating the screenshot event.
     * @param { Callback<void> } callback - Callback invoked when a screenshot event occurs.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Unregister the callback of screenshot
     *
     * @param { 'screenshot' } type - The value is fixed at 'screenshot', indicating the screenshot event.
     * @param { Callback<void> } callback - Callback invoked when a screenshot event occurs.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    off(type: 'screenshot', callback?: Callback<void>): void;

    /**
     * Register the callback of dialogTargetTouch
     *
     * @param { 'dialogTargetTouch' } type - The value is fixed at 'dialogTargetTouch', indicating the click event of the target window in the modal window mode.
     * @param { Callback<void> } callback - Callback invoked when the click event occurs in the target window of the modal window mode.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Register the callback of dialogTargetTouch
     *
     * @param { 'dialogTargetTouch' } type - The value is fixed at 'dialogTargetTouch', indicating the click event of the target window in the modal window mode.
     * @param { Callback<void> } callback - Callback invoked when the click event occurs in the target window of the modal window mode.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    on(type: 'dialogTargetTouch', callback: Callback<void>): void;

    /**
     * Unregister the callback of dialogTargetTouch
     *
     * @param { 'dialogTargetTouch' } type - The value is fixed at 'dialogTargetTouch',
     *  indicating the click event of the target window in the modal window mode.
     * @param { Callback<void> } callback - Callback invoked when the click event occurs in the target window of the modal window mode.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Unregister the callback of dialogTargetTouch
     *
     * @param { 'dialogTargetTouch' } type - The value is fixed at 'dialogTargetTouch',
     *  indicating the click event of the target window in the modal window mode.
     * @param { Callback<void> } callback - Callback invoked when the click event occurs in the target window of the modal window mode.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    off(type: 'dialogTargetTouch', callback?: Callback<void>): void;

    /**
     * Register the callback of windowEvent
     *
     * @param { 'windowEvent' } type - The value is fixed at 'windowEvent', indicating the window lifecycle change event.
     * @param { Callback<WindowEventType> } callback - the callback of window event
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Register the callback of windowEvent
     *
     * @param { 'windowEvent' } type - The value is fixed at 'windowEvent', indicating the window lifecycle change event.
     * @param { Callback<WindowEventType> } callback - the callback of window event
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    on(type: 'windowEvent', callback: Callback<WindowEventType>): void;

    /**
     * Unregister the callback of windowEvent
     *
     * @param { 'windowEvent' } type - The value is fixed at 'windowEvent', indicating the window lifecycle change event.
     * @param { Callback<WindowEventType> } callback - the callback of window event
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Unregister the callback of windowEvent
     *
     * @param { 'windowEvent' } type - The value is fixed at 'windowEvent', indicating the window lifecycle change event.
     * @param { Callback<WindowEventType> } callback - the callback of window event
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    off(type: 'windowEvent', callback?: Callback<WindowEventType>): void;

    /**
     * Register the callback of windowStatusChange
     *
     * @param { 'windowStatusChange' } type - The value is fixed at 'windowStatusChange', indicating the window status change event.
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Register the callback of windowStatusChange
     *
     * @param { 'windowStatusChange' } type - The value is fixed at 'windowStatusChange', indicating the window status change event.
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    on(type: 'windowStatusChange', callback: Callback<WindowStatusType>): void;

    /**
     * Unregister the callback of windowStatusChange
     *
     * @param { 'windowStatusChange' } type - The value is fixed at 'windowStatusChange', indicating the window status change event.
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Unregister the callback of windowStatusChange
     *
     * @param { 'windowStatusChange' } type - The value is fixed at 'windowStatusChange', indicating the window status change event.
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    off(type: 'windowStatusChange', callback?: Callback<WindowStatusType>): void;

    /**
     * Register the callback of subWindowClose
     *
     * @param { 'subWindowClose' } type - The value is fixed at 'subWindowClose', indicating the subwindow close event.
     * @param { Callback<void> } callback - Callback used to return whether to terminate the subwindow close process.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    on(type: 'subWindowClose', callback: Callback<void>): void;

    /**
     * Unregister the callback of subWindowClose
     *
     * @param { 'subWindowClose' } type - The value is fixed at 'subWindowClose', indicating the subwindow close event.
     * @param { Callback<void> } callback - Callback used to return whether to terminate the subwindow close process.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    off(type: 'subWindowClose', callback?: Callback<void>): void;

    /**
     * Asynchronous callback event for closing the registration window.
     *
     * @param { 'windowWillClose' } type - The value is fixed at 'windowWillClose', indicating the window close event.
     * @param { Callback<void, Promise<boolean>> } callback - The callback function returns a Promise<boolean> to decide whether to close the window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>): void;

    /**
     * Cancel the asynchronous callback event for closing the registration window.
     *
     * @param { 'windowWillClose' } type - The value is fixed at 'windowWillClose', indicating the window close event.
     * @param { Callback<void, Promise<boolean>> } callback - The callback function returns a Promise<boolean> to decide whether to close the window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    off(type: 'windowWillClose', callback?: Callback<void, Promise<boolean>>): void;

    /**
     * Register the callback of window highlight state change
     *
     * @param { 'windowHighlightChange' } type - The value is fixed at 'windowHighlightChange', indicating the window highlight state change event.
     * @param { Callback<boolean> } callback - Callback used to return the highlight status of the window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    on(type: 'windowHighlightChange', callback: Callback<boolean>): void;

    /**
     * Unregister the callback of window highlight state change
     *
     * @param { 'windowHighlightChange' } type - The value is fixed at 'windowHighlightChange', indicating the window highlight change event.
     * @param { Callback<boolean> } callback - Callback used to return the highlight status of the window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    off(type: 'windowHighlightChange', callback?: Callback<boolean>): void;
  
    /**
     * Bind dialog to the target window.
     *
     * @param { rpc.RemoteObject } token - token of the target window.
     * @param { Callback<void> } deathCallback - the callback of dialogDeath.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Bind dialog to the target window.
     *
     * @param { rpc.RemoteObject } token - token of the target window.
     * @param { Callback<void> } deathCallback - the callback of dialogDeath.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    bindDialogTarget(token: rpc.RemoteObject, deathCallback: Callback<void>): Promise<void>;

    /**
     * Bind dialog to the target window.
     *
     * @param { rpc.RemoteObject } token token of the target window.
     * @param { Callback<void> } deathCallback the callback of dialogDeath.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Bind dialog to the target window.
     *
     * @param { rpc.RemoteObject } token token of the target window.
     * @param { Callback<void> } deathCallback the callback of dialogDeath.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    bindDialogTarget(token: rpc.RemoteObject, deathCallback: Callback<void>, callback: AsyncCallback<void>): void;

    /**
     * Bind dialog to the target window.
     *
     * @param { dialogRequest.RequestInfo } requestInfo requestInfo of the target window.
     * @param { Callback<void> } deathCallback the callback of dialogDeath.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Bind dialog to the target window.
     *
     * @param { dialogRequest.RequestInfo } requestInfo requestInfo of the target window.
     * @param { Callback<void> } deathCallback the callback of dialogDeath.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    bindDialogTarget(requestInfo: dialogRequest.RequestInfo, deathCallback: Callback<void>): Promise<void>;

    /**
     * Bind dialog to the target window.
     *
     * @param { dialogRequest.RequestInfo } requestInfo requestInfo of the target window.
     * @param { Callback<void> } deathCallback the callback of dialogDeath.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Bind dialog to the target window.
     *
     * @param { dialogRequest.RequestInfo } requestInfo requestInfo of the target window.
     * @param { Callback<void> } deathCallback the callback of dialogDeath.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    bindDialogTarget(
      requestInfo: dialogRequest.RequestInfo,
      deathCallback: Callback<void>,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Set whether the dialog window responds to back gesture.
     *
     * @param { boolean } enabled - Responds to back gesture if true, or ignore back gesture if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    setDialogBackGestureEnabled(enabled: boolean): Promise<void>;

    /**
     * Whether the window supports thr wide gamut setting.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value true means that the wide-gamut color space is supported, and false means the opposite.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.window.Window#isWindowSupportWideGamut
     */
    isSupportWideGamut(): Promise<boolean>;

    /**
     * Whether the window supports thr wide gamut setting.
     *
     * @param { AsyncCallback<boolean> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.window.Window#isWindowSupportWideGamut
     */
    isSupportWideGamut(callback: AsyncCallback<boolean>): void;

    /**
     * Whether the window supports thr wide gamut setting.
     *
     * @returns { Promise<boolean> } Promise used to return the result.
     *  The value true means that the wide-gamut color space is supported, and false means the opposite.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Whether the window supports thr wide gamut setting.
     *
     * @returns { Promise<boolean> } Promise used to return the result.
     *  The value true means that the wide-gamut color space is supported, and false means the opposite.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    isWindowSupportWideGamut(): Promise<boolean>;

    /**
     * Whether the window supports thr wide gamut setting.
     *
     * @param { AsyncCallback<boolean> } callback Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Whether the window supports thr wide gamut setting.
     *
     * @param { AsyncCallback<boolean> } callback Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    isWindowSupportWideGamut(callback: AsyncCallback<boolean>): void;

    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowColorSpace
     */
    setColorSpace(colorSpace: ColorSpace): Promise<void>;

    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowColorSpace
     */
    setColorSpace(colorSpace: ColorSpace, callback: AsyncCallback<void>): void;

    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 11
     */
    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setWindowColorSpace(colorSpace: ColorSpace): Promise<void>;

    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 11
     */
    /**
     * Sets the specified color space.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setWindowColorSpace(colorSpace: ColorSpace, callback: AsyncCallback<void>): void;

    /**
     * Obtains the set color space.
     *
     * @returns { Promise<ColorSpace> } Promise used to return the current color space.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.window.Window#getWindowColorSpace
     */
    getColorSpace(): Promise<ColorSpace>;

    /**
     * Obtains the set color space.
     *
     * @param { AsyncCallback<ColorSpace> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.window.Window#getWindowColorSpace
     */
    getColorSpace(callback: AsyncCallback<ColorSpace>): void;

    /**
     * Obtains the set color space.
     *
     * @returns { ColorSpace } Color space obtained.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Obtains the set color space.
     *
     * @returns { ColorSpace } Color space obtained.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 11
     */
    /**
     * Obtains the set color space.
     *
     * @returns { ColorSpace } Color space obtained.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getWindowColorSpace(): ColorSpace;

    /**
     * Sets the background color of window.
     *
     * @param { string } color the specified color.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowBackgroundColor
     */
    setBackgroundColor(color: string): Promise<void>;

    /**
     * Sets the background color of window.
     *
     * @param { string } color the specified color.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowBackgroundColor
     */
    setBackgroundColor(color: string, callback: AsyncCallback<void>): void;

    /**
     * Sets the background color of window.
     *
     * @param { string } color the specified color.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets the background color of window.
     *
     * @param { string } color the specified color.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the background color of window.
     *
     * @param { string } color the specified color.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the background color of window.
     *
     * @param { string | ColorMetrics } color - the specified color.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    setWindowBackgroundColor(color: string | ColorMetrics): void;

    /**
     * Sets the brightness of window.
     *
     * @param { number } brightness the specified brightness value.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowBrightness
     */
    setBrightness(brightness: number): Promise<void>;

    /**
     * Sets the brightness of window.
     *
     * @param { number } brightness the specified brightness value.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowBrightness
     */
    setBrightness(brightness: number, callback: AsyncCallback<void>): void;

    /**
     * Set whether the main window is topmost.
     *
     * @param { boolean } isTopmost - Main window is topmost if true.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12
     */
    setTopmost(isTopmost: boolean): Promise<void>;

    /**
     * Set whether the main window is topmost.
     *
     * @permission ohos.permission.WINDOW_TOPMOST
     * @param { boolean } isWindowTopmost - Main window is topmost if true.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    setWindowTopmost(isWindowTopmost: boolean): Promise<void>;

    /**
     * Sets the brightness of window.
     *
     * @param { number } brightness the specified brightness value.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets the brightness of window.
     *
     * @param { number } brightness the specified brightness value.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the brightness of window.
     *
     * @param { number } brightness the specified brightness value.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    setWindowBrightness(brightness: number): Promise<void>;

    /**
     * Sets the brightness of window.
     *
     * @param { number } brightness the specified brightness value.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets the brightness of window.
     *
     * @param { number } brightness the specified brightness value.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the brightness of window.
     *
     * @param { number } brightness the specified brightness value.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    setWindowBrightness(brightness: number, callback: AsyncCallback<void>): void;

    /**
     * Sets the dimBehind of window.
     *
     * @param { number } dimBehindValue - The specified dimBehind.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     */
    setDimBehind(dimBehindValue: number, callback: AsyncCallback<void>): void;

    /**
     * Sets the dimBehind of window.
     *
     * @param { number } dimBehindValue - The specified dimBehind.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     */
    setDimBehind(dimBehindValue: number): Promise<void>;

    /**
     * Sets whether focusable or not.
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowFocusable
     */
    setFocusable(isFocusable: boolean): Promise<void>;

    /**
     * Sets whether focusable or not.
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowFocusable
     */
    setFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether focusable or not.
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether focusable or not.
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    setWindowFocusable(isFocusable: boolean): Promise<void>;

    /**
     * Sets whether focusable or not.
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether focusable or not.
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Window requests to get focus or lose focus.
     *
     * @param { boolean } isFocused - Window requests to get focus if true, requests to lose focus if false.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 13
     */
    requestFocus(isFocused: boolean): Promise<void>;

    /**
     * Sets whether exclusively highlighted or not.
     *
     * @param { boolean } exclusivelyHighlighted Whether the window can become highlight exclusively when it gain focus. The value
     *                                           true means that the window can cause the window outside the current window link to 
     *                                           lose its highlight state, and false means the opposite.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    setExclusivelyHighlighted(exclusivelyHighlighted: boolean): Promise<void>;

    /**
     * Checks whether the window is highlighted.
     *
     * @returns { boolean } - Whether the window is highlighted. The value true means that the window is highlighted, and false means the opposite.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    isWindowHighlighted(): boolean;

    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @returns { Promise<void> } that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowKeepScreenOn
     */
    setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;

    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowKeepScreenOn
     */
    setKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    setWindowKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;

    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets whether keep screen on or not.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether to wake up the screen when this ability is restored.
     *
     * @param { boolean } wakeUp Specifies whether to wake up the screen. True means to wake it up, false means not.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Sets whether to wake up the screen when this ability is restored.
     *
     * @param { boolean } wakeUp Specifies whether to wake up the screen. True means to wake it up, false means not.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    setWakeUpScreen(wakeUp: boolean): void;

    /**
     * Sets whether outside can be touch or not.
     *
     * @param { boolean } touchable outside can be touch if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     */
    setOutsideTouchable(touchable: boolean): Promise<void>;

    /**
     * Sets whether outside can be touch or not.
     *
     * @param { boolean } touchable outside can be touch if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     */
    setOutsideTouchable(touchable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether is private mode or not.
     *
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowPrivacyMode
     */
    setPrivacyMode(isPrivacyMode: boolean): Promise<void>;

    /**
     * Sets whether is private mode or not.
     *
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowPrivacyMode
     */
    setPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether is private mode or not.
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether is private mode or not.
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    setWindowPrivacyMode(isPrivacyMode: boolean): Promise<void>;

    /**
     * Sets whether is private mode or not.
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether is private mode or not.
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;

    /**
     * Ignore this window during screenshot.
     *
     * @param { boolean } isSkip skip if true, or not if false.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Ignore this window during screenshot.
     *
     * @param { boolean } isSkip skip if true, or not if false.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    setSnapshotSkip(isSkip: boolean): void;

    /**
     * Sets whether is touchable or not.
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowTouchable
     */
    setTouchable(isTouchable: boolean): Promise<void>;

    /**
     * Sets whether is touchable or not.
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window.Window#setWindowTouchable
     */
    setTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether is touchable or not.
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether is touchable or not.
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    setWindowTouchable(isTouchable: boolean): Promise<void>;

    /**
     * Sets whether is touchable or not.
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Sets whether is touchable or not.
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Set handwrite flag on the window. This flag means only response handwrite event.
     *
     * @param { boolean } enable - Add handwrite flag to window if true, or remove flag if false.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    setHandwritingFlag(enable: boolean): Promise<void>;

    /**
     * Sets the flag of the window is forbidden to move in split screen mode
     *
     * @param { boolean } isForbidSplitMove the flag of the window is forbidden to move in split screen mode
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    setForbidSplitMove(isForbidSplitMove: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets the flag of the window is forbidden to move in split screen mode
     *
     * @param { boolean } isForbidSplitMove the flag of the window is forbidden to move in split screen mode
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    setForbidSplitMove(isForbidSplitMove: boolean): Promise<void>;

    /**
     * Obtains snapshot of window
     *
     * @param { AsyncCallback<image.PixelMap> } callback Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Obtains snapshot of window
     *
     * @param { AsyncCallback<image.PixelMap> } callback Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    snapshot(callback: AsyncCallback<image.PixelMap>): void;

    /**
     * Obtains snapshot of window
     *
     * @returns { Promise<image.PixelMap> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Obtains snapshot of window
     *
     * @returns { Promise<image.PixelMap> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    snapshot(): Promise<image.PixelMap>;

    /**
     * Obtains snapshot of window even set the privacy mode.
     *
     * @returns { Promise<image.PixelMap> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Function snapshotIgnorePrivacy can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    snapshotIgnorePrivacy(): Promise<image.PixelMap>;

    /**
     * Sets opacity  of window
     *
     * @param { number } opacity Interval is 0.f-1.f.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Sets opacity  of window
     *
     * @param { number } opacity Interval is 0.f-1.f.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12
     */
    opacity(opacity: number): void;

    /**
     * Sets scale options of window.
     *
     * @param { ScaleOptions } scaleOptions scale param of window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Sets scale options of window.
     *
     * @param { ScaleOptions } scaleOptions scale param of window.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12
     */
    scale(scaleOptions: ScaleOptions): void;

    /**
     * Sets rotate options of window.
     *
     * @param { RotateOptions } rotateOptions rotate param of window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Sets rotate options of window.
     *
     * @param { RotateOptions } rotateOptions rotate param of window.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12
     */
    rotate(rotateOptions: RotateOptions): void;

    /**
     * Sets translate options of window.
     *
     * @param { TranslateOptions } translateOptions translate param of window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Sets translate options of window.
     *
     * @param { TranslateOptions } translateOptions translate param of window.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12
     */
    translate(translateOptions: TranslateOptions): void;

    /**
     * Get Transition Controller.
     *
     * @returns { TransitionController }
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9
     */
    /**
     * Get Transition Controller.
     *
     * @returns { TransitionController }
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 12
     */
    getTransitionController(): TransitionController;

    /**
     * Sets the window blur radius.
     *
     * @param { number } radius the blur radius.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Sets the window blur radius.
     *
     * @param { number } radius the blur radius.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    setBlur(radius: number): void;

    /**
     * Sets the window backdrop blur radius.
     *
     * @param { number } radius the blur radius.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Sets the window backdrop blur radius.
     *
     * @param { number } radius the blur radius.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    setBackdropBlur(radius: number): void;

    /**
     * Sets the window backdrop blur style.
     *
     * @param { BlurStyle } blurStyle the specified blur style.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Sets the window backdrop blur style.
     *
     * @param { BlurStyle } blurStyle the specified blur style.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    setBackdropBlurStyle(blurStyle: BlurStyle): void;

    /**
     * Sets shadow.
     *
     * @param { number } radius the radius of the shadow.
     * @param { string } color the color of the shadow.
     * @param { number } offsetX the offset of the shadow on the x-axis.
     * @param { number } offsetY the offset of the shadow on the y-axis.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Sets shadow.
     *
     * @param { number } radius the radius of the shadow.
     * @param { string } color the color of the shadow.
     * @param { number } offsetX the offset of the shadow on the x-axis.
     * @param { number } offsetY the offset of the shadow on the y-axis.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    setShadow(radius: number, color?: string, offsetX?: number, offsetY?: number): void;

    /**
     * Sets window shadow radius.
     *
     * @param { number } radius the radius of the shadow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17
     */
    setWindowShadowRadius(radius: number): void;

    /**
     * Sets corner radius.
     *
     * @param { number } cornerRadius the corner radius.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Sets corner radius.
     *
     * @param { number } cornerRadius the corner radius.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    setCornerRadius(cornerRadius: number): void;

    /**
     * Sets sub window or floating window corner radius.
     *
     * @param { number } cornerRadius - Indicate the corner radius of the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17
     */
    setWindowCornerRadius(cornerRadius: number): Promise<void>;

    /**
     * Get sub window or floating window corner radius.
     *
     * @returns { number } - The corner radius of window.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17
     */
    getWindowCornerRadius(): number;

    /**
     * Raise app sub window to app top
     *
     * @param { AsyncCallback<void> } callback - The callback of raiseToAppTop
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    raiseToAppTop(callback: AsyncCallback<void>): void;

    /**
     * Raise app sub window to app top
     *
     * @returns { Promise<void> } - The promise returned by the function
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 14
     */
    raiseToAppTop(): Promise<void>;

    /**
     * Sets the aspect ratio of window
     *
     * @param { number } ratio - The aspect ratio of window except decoration
     * @param { AsyncCallback<void> } callback - The callback of setAspectRatio.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Sets the aspect ratio of window
     *
     * @param { number } ratio - The aspect ratio of window except decoration
     * @param { AsyncCallback<void> } callback - The callback of setAspectRatio.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    setAspectRatio(ratio: number, callback: AsyncCallback<void>): void;

    /**
     * Sets the aspect ratio of window
     *
     * @param { number } ratio - The aspect ratio of window except decoration
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Sets the aspect ratio of window
     *
     * @param { number } ratio - The aspect ratio of window except decoration
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    setAspectRatio(ratio: number): Promise<void>;

    /**
     * Resets the aspect ratio of window
     *
     * @param { AsyncCallback<void> } callback - The callback of setAspectRatio.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Resets the aspect ratio of window
     *
     * @param { AsyncCallback<void> } callback - The callback of setAspectRatio.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    resetAspectRatio(callback: AsyncCallback<void>): void;

    /**
     * Resets the aspect ratio of window
     *
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Resets the aspect ratio of window
     *
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    resetAspectRatio(): Promise<void>;

    /**
     * Set the watermark flag on the window.
     *
     * @param { boolean } enable - Add water mark flag to window if true, or remove flag if false.
     * @param { AsyncCallback<void> } callback - The callback of setWaterMarkFlag.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Set the watermark flag on the window.
     *
     * @param { boolean } enable - Add water mark flag to window if true, or remove flag if false.
     * @param { AsyncCallback<void> } callback - The callback of setWaterMarkFlag.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    setWaterMarkFlag(enable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Set the watermark flag on the window
     *
     * @param { boolean } enable - Add water mark flag to window if true, or remove flag if false
     * @returns { Promise<void> } - The promise returned by the function
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    /**
     * Set the watermark flag on the window
     *
     * @param { boolean } enable - Add water mark flag to window if true, or remove flag if false
     * @returns { Promise<void> } - The promise returned by the function
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    setWaterMarkFlag(enable: boolean): Promise<void>;

    /**
     * Raise one app sub window above another.
     *
     * @param { number } windowId - Indicates target window id.
     * @param { AsyncCallback<void> } callback - The callback of raiseAboveTarget.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Mandatory parameters are left unspecified.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    raiseAboveTarget(windowId: number, callback: AsyncCallback<void>): void;

    /**
     * Raise one app sub window above another.
     *
     * @param { number } windowId - Indicates target window id.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Mandatory parameters are left unspecified.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    raiseAboveTarget(windowId: number): Promise<void>;

    /**
     * Set whether to enable an app sub window to raise itself by click.
     *
     * @param { boolean } enable - Disable app sub window to raise itself by by click if false.
     * @param { AsyncCallback<void> } callback - The callback of setRaiseByClickEnabled.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    setRaiseByClickEnabled(enable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Set whether to enable an app sub window to raise itself by click.
     *
     * @param { boolean } enable - Disable app sub window to raise itself by by click if false.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @since 14
     */
    setRaiseByClickEnabled(enable: boolean): Promise<void>;

    /**
     * Minimize app main window and hide app subWindow.
     *
     * @param { AsyncCallback<void> } callback - The callback of Minimize.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Minimize app main window and hide app subWindow.
     *
     * @param { AsyncCallback<void> } callback - The callback of Minimize.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    minimize(callback: AsyncCallback<void>): void;

    /**
     * Minimize app main window and hide app subWindow.
     *
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Minimize app main window and hide app subWindow.
     *
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    minimize(): Promise<void>;

    /**
     * Maximize app main window.
     * @param { MaximizePresentation } presentation - set window presentation when maximize.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Maximize app main window.
     * @param { ?MaximizePresentation } presentation - set window presentation when maximize.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported. Function maximize can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20
     */
    maximize(presentation?: MaximizePresentation): Promise<void>;

    /**
     * Set whether to enable a window to resize by drag.
     *
     * @param { boolean } enable - Disable window to resize by drag if false.
     * @param { AsyncCallback<void> } callback - The callback of setResizeByDragEnabled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    setResizeByDragEnabled(enable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Set whether to enable a window to resize by drag.
     *
     * @param { boolean } enable - Disable window to resize by drag if false.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    setResizeByDragEnabled(enable: boolean): Promise<void>;

    /**
     * Hide the non-system floating windows.
     *
     * @param { boolean } shouldHide - Hide the non-system floating windows if true, otherwise means the opposite.
     * @param { AsyncCallback<void> } callback - The callback of hideNonSystemFloatingWindows.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    hideNonSystemFloatingWindows(shouldHide: boolean, callback: AsyncCallback<void>): void;

    /**
     * Hide the non-system floating windows.
     *
     * @param { boolean } shouldHide - Hide the non-system floating windows if true, otherwise means the opposite.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    hideNonSystemFloatingWindows(shouldHide: boolean): Promise<void>;

    /**
     * Get the window limits of current window.
     *
     * @returns { WindowLimits } - The limits of window.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Get the window limits of current window.
     *
     * @returns { WindowLimits } - The limits of window.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    getWindowLimits(): WindowLimits;

    /**
     * Set the window limits of a window.
     *
     * @param { WindowLimits } windowLimits - window limits of the window.
     * @returns { Promise<WindowLimits> } - Promise is used to return the limits of window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Set the window limits of a window.
     *
     * @param { WindowLimits } windowLimits - window limits of the window.
     * @returns { Promise<WindowLimits> } - Promise is used to return the limits of window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    setWindowLimits(windowLimits: WindowLimits): Promise<WindowLimits>;

    /**
     * Set the window limits of a window.
     *
     * @param { WindowLimits } windowLimits - Window limits of the window.
     * @param { boolean } isForcible - Ignore system limits.
     * @returns { Promise<WindowLimits> } - Promise is used to return the limits of window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    setWindowLimits(windowLimits: WindowLimits, isForcible: boolean): Promise<WindowLimits>;

    /**
     * Set whether to enable the single frame composer.
     *
     * @param { boolean } enable - Enable the single frame composer if true, otherwise means the opposite.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11
     */
    setSingleFrameComposerEnabled(enable: boolean): Promise<void>;

    /**
     * When get focused, keep the keyboard created by other windows, support system window and app subwindow.
     *
     * @param { boolean } keepKeyboardFlag - keep the keyboard if true, otherwise means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * When get focused, keep the keyboard created by other windows, support system window and app subwindow.
     *
     * @param { boolean } keepKeyboardFlag - keep the keyboard if true, otherwise means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    keepKeyboardOnFocus(keepKeyboardFlag: boolean): void;

    /**
     * Recover app main window.
     *
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Recover app main window.
     *
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    recover(): Promise<void>;

    /**
     * After the app main window is minimized, if the Ability is not in the background state, you can restore app main window.
     *
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    restore(): Promise<void>;

    /**
     * Set the visibility of the window decor.
     *
     * @param { boolean } - Enable the decor visible if true, otherwise means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Set the visibility of the window decor.
     *
     * @param { boolean } isVisible - Enable the decor visible if true, otherwise means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Set the visibility of the window decor.
     *
     * @param { boolean } isVisible - Enable the decor visible if true, otherwise means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20
     */
    setWindowDecorVisible(isVisible: boolean): void;

    /**
     * Get the visibility of the window decor.
     *
     * @returns { boolean } - The visibility of window decor, true if the decor is visible, otherwise means the.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    getWindowDecorVisible(): boolean;

    /**
     * Set whether window can be moved by drag title.
     *
     * @param { boolean } enabled - Enable the window title move if true, otherwise means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    setWindowTitleMoveEnabled(enabled: boolean): void;

    /**
     * Set the title bar name of the window
     * 
     * @param { string } titleName - The name of the title bar that needs to be set
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    setWindowTitle(titleName: string): Promise<void>;

    /**
     * Set the modality of the window.
     *
     * @param { boolean } isModal - Enable the window modal if true, otherwise means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    /**
     * Set the modality of the window.
     *
     * @param { boolean } isModal - Enable the window modal if true, otherwise means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20
     */
    setSubWindowModal(isModal: boolean): Promise<void>;

    /**
     * Set the modality of the window.
     *
     * @param { boolean } isModal - Enable the window modal if true, otherwise means the opposite.
     * @param { ModalityType } modalityType - Set modality type when the window modal is true. 
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    /**
     * Set the modality of the window.
     *
     * @param { boolean } isModal - Enable the window modal if true, otherwise means the opposite.
     * @param { ModalityType } modalityType - Set modality type when the window modal is true. 
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20
     */
    setSubWindowModal(isModal: boolean, modalityType: ModalityType): Promise<void>;

    /**
     * Set the height of the window decor.
     *
     * @param { number } - The height of window decor.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Set the height of the window decor.
     *
     * @param { number } height - The height of window decor.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    setWindowDecorHeight(height: number): void;
	
    /**
     * Get the height of the window decor.
     *
     * @returns { number } - The height of window decor.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Get the height of the window decor.
     *
     * @returns { number } - The height of window decor.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    getWindowDecorHeight(): number;

    /**
     * Set the style of the window decor.
     *
     * @param { DecorButtonStyle } dectorStyle - The style of window decor.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    setDecorButtonStyle(dectorStyle: DecorButtonStyle): void;

    /**
     * Get the style of the window decor.
     *
     * @returns { DecorButtonStyle } - The style of window decor.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    getDecorButtonStyle(): DecorButtonStyle;
    
    /**
     * Set touchable areas. By default, the entire window area is touchable.
     * If touchable areas are set in the window, touch events outside the areas will be transparent transmitted.
     * If the window area changes, you need to reset it.
     *
     * @param { Array<Rect> } rects - Touchable areas. The maximum size cannot exceed 10, touchable area cannot exceed the window's area.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12
     */
    setTouchableAreas(rects: Array<Rect>): void;
	
    /**
     * Get the area of window title buttons.
     *
     * @returns { TitleButtonRect } - The area of window title buttons.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Get the area of window title buttons.
     *
     * @returns { TitleButtonRect } - The area of window title buttons.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    getTitleButtonRect(): TitleButtonRect;

    /**
     * Set whether to display the maximize, minimize, split buttons of main window.
     *
     * @param { boolean } isMaximizeVisible - Display maximize button if true, or hide maximize button if false.
     * @param { boolean } isMinimizeVisible - Display minimize button if true, or hide minimize button if false.
     * @param { boolean } isSplitVisible - Display split button if true, or hide split button if false.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    setTitleButtonVisible(isMaximizeVisible: boolean, isMinimizeVisible: boolean, isSplitVisible: boolean): void;
    
    /**
     * Set whether to display the maximize, minimize, close buttons of main window.
     *
     * @param { boolean } isMaximizeButtonVisible - Display maximize button if true, or hide maximize button if false.
     * @param { boolean } isMinimizeButtonVisible - Display minimize button if true, or hide minimize button if false.
     * @param { boolean } isCloseButtonVisible - Display close button if true, or hide close button if false.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    setWindowTitleButtonVisible(isMaximizeButtonVisible: boolean, isMinimizeButtonVisible: boolean, isCloseButtonVisible?: boolean): void;

    /**
     * Checks whether the window title buttons is visible.
     *
     * @returns { boolean } - The value true means the window title buttons is visible, and false means the opposite.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    isWindowTitleButtonVisible(): boolean;

    /**
     * Enable landscape multiWindow
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws {BusinessError} 1300002 - This window state is abnormal.
     * @throws {BusinessError} 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    enableLandscapeMultiWindow(): Promise<void>;

    /**
     * Start moving window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    startMoving(): Promise<void>;

    /**
     * Start moving window.
     *
     * @param { number } offsetX - Expected pointer position x-axis offset in window when start moving.
     * @param { number } offsetY - Expected pointer position y-axis offset in window when start moving.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    startMoving(offsetX: number, offsetY: number): Promise<void>;

    /**
     * Stop moving window.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    stopMoving(): Promise<void>;

    /**
     * Enable drag window.
     *
     * @param { boolean } enable - The value true means to enable window dragging, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 14
     */
    enableDrag(enable: boolean): Promise<void>;

    /**
     * Disable landscape multiWindow
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws {BusinessError} 1300002 - This window state is abnormal.
     * @throws {BusinessError} 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    disableLandscapeMultiWindow(): Promise<void>;

    /**
     * Register the callback of title buttons area change.
     *
     * @param { 'windowTitleButtonRectChange' } type - The value is fixed at 'windowTitleButtonRectChange', indicating the title buttons area change event.
     * @param { Callback<TitleButtonRect> } callback - Callback used to return the current title buttons area.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Register the callback of title buttons area change.
     *
     * @param { 'windowTitleButtonRectChange' } type - The value is fixed at 'windowTitleButtonRectChange', indicating the title buttons area change event.
     * @param { Callback<TitleButtonRect> } callback - Callback used to return the current title buttons area.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    on(type: 'windowTitleButtonRectChange', callback: Callback<TitleButtonRect>): void;

    /**
     * Unregister the callback of title buttons area change.
     *
     * @param { 'windowTitleButtonRectChange' } type - The value is fixed at 'windowTitleButtonRectChange', indicating the title buttons area change event.
     * @param { Callback<TitleButtonRect> } callback - Callback used to return the current title buttons area.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Unregister the callback of title buttons area change.
     *
     * @param { 'windowTitleButtonRectChange' } type - The value is fixed at 'windowTitleButtonRectChange', indicating the title buttons area change event.
     * @param { Callback<TitleButtonRect> } callback - Callback used to return the current title buttons area.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    off(type: 'windowTitleButtonRectChange', callback?: Callback<TitleButtonRect>): void;

    /**
     * Register the callback of title buttons visible change.
     *
     * @param { 'windowTitleButtonVisibleChange' } type - The value is fixed at 'windowTitleButtonVisibleChange', indicating the title buttons visible change event.
     * @param { Callback<boolean> } callback - Callback used to return the current title buttons visibility.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    on(type: 'windowTitleButtonVisibleChange', callback: Callback<boolean>): void;

    /**
     * Unregister the callback of title buttons visible change.
     *
     * @param { 'windowTitleButtonVisibleChange' } type - The value is fixed at 'windowTitleButtonVisibleChange', indicating the title buttons visible change event.
     * @param { Callback<boolean> } callback - Callback used to return the current title buttons visibility.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    off(type: 'windowTitleButtonVisibleChange', callback?: Callback<boolean>): void;

    /**
     *  Set the window mask of window
     *
     * @param { Array<Array<number>> } windowMask - The mask of window. The value of the array is 0 and 1, the other number is illegal value.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
     setWindowMask(windowMask: Array<Array<number>>): Promise<void>;

    /**
     * Register the callback of windowRectChange
     *
     * @param { 'windowRectChange' } type - The value is fixed at 'windowRectChange', indicating the window rect change event.
     * @param { Callback<RectChangeOptions> } callback - Callback used to return the RectChangeOptions.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    on(type: 'windowRectChange', callback: Callback<RectChangeOptions>): void;

    /**
     * Unregister the callback of windowRectChange
     *
     * @param { 'windowRectChange' } type - The value is fixed at 'windowRectChange', indicating the window rect change event.
     * @param { Callback<RectChangeOptions> } callback - Callback used to return the RectChangeOptions.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    off(type: 'windowRectChange', callback?: Callback<RectChangeOptions>): void;

    /**
     * Register the callback of rotation change
     *
     * @param { 'rotationChange' } type - The value is fixed at 'rotationChange', indicating the window rotation change event.
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void> } callback - Callback used to return the rotation change result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    on(type: 'rotationChange', callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void;

    /**
     * Unregister the callback of rotationChange
     *
     * @param { 'rotationChange' } type - The value is fixed at 'rotationChange', indicating the window rotation change event.
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void> } callback - Callback used to return the RectChangeOptions.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    off(type: 'rotationChange', callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void;    

    /**
     * Set gray scale of window.
     *
     * @param { number } grayScale - The value of gray scale.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    setWindowGrayScale(grayScale: number): Promise<void>;

    /**
     * Set whether to enable immersive mode.
     *
     * @param { boolean } enabled - The value true means to enable immersive mode, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    setImmersiveModeEnabledState(enabled: boolean): void;

    /**
     * Get whether the immersive mode is enabled or not.
     *
     * @returns { boolean } - The value true means the immersive mode is enabled, and false means the opposite.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    getImmersiveModeEnabledState(): boolean;

    /**
     * Get the window status of current window.
     *
     * @returns { WindowStatusType } - The status of window.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    getWindowStatus(): WindowStatusType;

    /**
     * Checks whether the window is focused.
     *
     * @returns { boolean } - Whether the window is focused. The value true means that the window is focused, and false means the opposite.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12
     */
    isFocused(): boolean;

    /**
     * Create sub window with options.
     *
     * @param { string } name - window name of sub window
     * @param { SubWindowOptions } options - options of sub window creation
     * @returns { Promise<Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 12
     */
    createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>;

    /**
     * Set the parent window of the child window.
     *
     * @param { number } windowId - Indicates parent window id.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invaild.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    setParentWindow(windowId: number): Promise<void>;

    /**
     * Get the parent window.
     *
     * @returns { Window } Parent Window.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invaild.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    getParentWindow(): Window;

    /**
     * Set whether the sub window supports simultaneous display on multiple screens when the parent window is dragged to move or dragged to zoom.
     *
     * @param { boolean } enabled - The value true means sub window supports simultaneous display on multiple screens when the parent window
     *                              is dragged to move or dragged to zoom, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.Function setFollowParentMultiScreenPolicy can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17
     */
    setFollowParentMultiScreenPolicy(enabled: boolean): Promise<void>;

    /**
     * Set whether the title bar and dock bar will show, when the mouse hovers over hot area.
     *
     * @param { boolean } isTitleHoverShown - The value true means to display the title bar, and false means the opposite.
     * @param { boolean } isDockHoverShown - The value true means to display the dock bar, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    /**
     * Set whether the title bar and dock bar will show, when the mouse hovers over hot area.
     *
     * @param { boolean } isTitleHoverShown - The value true means to display the title bar, and false means the opposite.
     * @param { boolean } isDockHoverShown - The value true means to display the dock bar, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20
     */
    setTitleAndDockHoverShown(isTitleHoverShown?: boolean, isDockHoverShown?: boolean): Promise<void>;

    /**
     * Set window container active and inactive color.
     *
     * @param { string } activeColor - window container color in active.
     * @param { string } inactiveColor - window container color in inactive.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @atomicservice
     * @since 15
     */
    setWindowContainerColor(activeColor: string, inactiveColor: string): void;

    /**
     * Set whether window delay raise is enabled.
     *
     * @param { boolean } isEnabled - The value true means to enable window delay raise, and false means disable window delay raise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.function setWindowDelayRaiseOnDrag can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    setWindowDelayRaiseOnDrag(isEnabled: boolean): void;

    /**
     * Set the zlevel of current sub window.
     *
     * @param { number } zLevel - the zlevel of current sub window.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Function setSubWindowZLevel can not work correctly due to limited device capabilities. 
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    setSubWindowZLevel(zLevel: number): Promise<void>;

    /**
     * Get the zlevel of current sub window.
     *
     * @returns { number } - the zlevel of current sub window.
     * @throws { BusinessError } 801 - Capability not supported. Function setSubWindowZLevel can not work correctly due to limited device capabilities. 
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    getSubWindowZLevel(): number;
  }

  /**
   * Window stage callback event type
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * Window stage callback event type
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  /**
   * Window stage callback event type
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @StageModelOnly
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  enum WindowStageEventType {
    /**
     * The window stage is running in the foreground.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * The window stage is running in the foreground.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * The window stage is running in the foreground.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    SHOWN = 1,
    /**
     * The window stage gains focus.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * The window stage gains focus.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * The window stage gains focus.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    ACTIVE,
    /**
     * The window stage loses focus.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * The window stage loses focus.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * The window stage loses focus.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    INACTIVE,
    /**
     * The window stage is running in the background.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * The window stage is running in the background.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * The window stage is running in the background.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    HIDDEN,
    /**
     * The window stage is interactive in the foreground.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    RESUMED,
    /**
     * The window stage is not interactive in the foreground.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    PAUSED
  }

  /**
   * Enum for window modality Type
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 14
   */
  enum ModalityType {
    /**
     * The value means window modality.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    WINDOW_MODALITY = 0,
    /**
     * The value means application modality.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    APPLICATION_MODALITY = 1,
  }

  /**
   * Options for subwindow creation
   * 
   * @interface SubWindowOptions
   * @syscap SystemCapability.Window.SessionManager
   * @since 11
   */
  /**
   * Options for subwindow creation
   * 
   * @interface SubWindowOptions
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12
   */
  interface SubWindowOptions {
    /**
     * Indicates subwindow title
     * 
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Indicates subwindow title
     * 
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    title: string;
    /**
     * Indicates decor of subwindow
     * 
     * @type { boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    /**
     * Indicates decor of subwindow
     * 
     * @type { boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    decorEnabled: boolean;
    /**
     * Indicates modality of subwindow
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12
     */
    isModal?: boolean;
    /**
     * Indicates whether subwindow is topmost
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 12
     */
    isTopmost?: boolean;
    /**
     * Indicates modality type of subwindow
     * 
     * @type { ?ModalityType }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14
     */
    modalityType?: ModalityType;
    /**
     * Indicates position and size of subwindow
     * 
     * @type { ?Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    windowRect?: Rect;
    /**
     * Indicates whether subwindow support fullscreen
     * 
     * @type { ?boolean }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17
     */
    maximizeSupported?: boolean;
    /**
     * Indicates zlevel of subwindow
     * 
     * @type { ?number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    zLevel?: number;
  }
  /**
   * WindowStage
   *
   * @interface WindowStage
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 9
   */
  /**
   * WindowStage
   *
   * @interface WindowStage
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 10
   */
  /**
   * WindowStage
   *
   * @interface WindowStage
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  interface WindowStage {
    /**
     * Get main window of the stage.
     *
     * @returns { Promise<Window> } Callback used to return the subwindow.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Get main window of the stage.
     *
     * @returns { Promise<Window> } Callback used to return the subwindow.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Get main window of the stage.
     *
     * @returns { Promise<Window> } Callback used to return the subwindow.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getMainWindow(): Promise<Window>;
    /**
     * Get main window of the stage.
     *
     * @param { AsyncCallback<Window> } callback Callback used to return the main window.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Get main window of the stage.
     *
     * @param { AsyncCallback<Window> } callback Callback used to return the main window.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Get main window of the stage.
     *
     * @param { AsyncCallback<Window> } callback Callback used to return the main window.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getMainWindow(callback: AsyncCallback<Window>): void;
    /**
     * Get main window of the stage.
     *
     * @returns { Window }
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Get main window of the stage.
     *
     * @returns { Window }
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Get main window of the stage.
     *
     * @returns { Window }
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getMainWindowSync(): Window;
    /**
     * Create sub window of the stage.
     *
     * @param { string } name window name of sub window
     * @returns { Promise<Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Create sub window of the stage.
     *
     * @param { string } name window name of sub window
     * @returns { Promise<Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Create sub window of the stage.
     *
     * @param { string } name window name of sub window
     * @returns { Promise<Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    createSubWindow(name: string): Promise<Window>;
    /**
     * Create sub window of the stage.
     *
     * @param { string } name window name of sub window
     * @param { AsyncCallback<Window> } callback Callback used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Create sub window of the stage.
     *
     * @param { string } name window name of sub window
     * @param { AsyncCallback<Window> } callback Callback used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Create sub window of the stage.
     *
     * @param { string } name window name of sub window
     * @param { AsyncCallback<Window> } callback Callback used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    createSubWindow(name: string, callback: AsyncCallback<Window>): void;
    /**
     * Create sub window of the stage.
     *
     * @param { string } name - window name of sub window
     * @param { SubWindowOptions } options - options of sub window creation
     * @returns { Promise<Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @since 11
     */
    /**
     * Create sub window of the stage.
     *
     * @param { string } name - window name of sub window
     * @param { SubWindowOptions } options - options of sub window creation
     * @returns { Promise<Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 12
     */
    createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>;
    /**
     * Get sub window of the stage.
     *
     * @returns { Promise<Array<Window>> }
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Get sub window of the stage.
     *
     * @returns { Promise<Array<Window>> }
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Get sub window of the stage.
     *
     * @returns { Promise<Array<Window>> }
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getSubWindow(): Promise<Array<Window>>;
    /**
     * Get sub window of the stage.
     *
     * @param { AsyncCallback<Array<Window>> } callback Callback used to return all the subwindows.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Get sub window of the stage.
     *
     * @param { AsyncCallback<Array<Window>> } callback Callback used to return all the subwindows.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Get sub window of the stage.
     *
     * @param { AsyncCallback<Array<Window>> } callback Callback used to return all the subwindows.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getSubWindow(callback: AsyncCallback<Array<Window>>): void;
    /**
     * Loads the content of a page, with its path in the current project specified, to the main window of this window stage, and transfers the state attribute to the page through a local storage.
     * This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path Path of the page to which the content will be loaded
     * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to the main window of this window stage, and transfers the state attribute to the page through a local storage.
     * This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path Path of the page to which the content will be loaded
     * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to the main window of this window stage, and transfers the state attribute to the page through a local storage.
     * This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path Path of the page to which the content will be loaded
     * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void;
    /**
     * Loads the content of a page, with its path in the current project specified, to the main window of this window stage, and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path of the page to which the content will be loaded
     * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
     * @returns { Promise<void> }
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to the main window of this window stage, and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path of the page to which the content will be loaded
     * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
     * @returns { Promise<void> }
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Loads the content of a page, with its path in the current project specified, to the main window of this window stage, and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path of the page to which the content will be loaded
     * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
     * @returns { Promise<void> }
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    loadContent(path: string, storage?: LocalStorage): Promise<void>;
    /**
     * Loads content from a page to this window stage. This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Loads content from a page to this window stage. This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Loads content from a page to this window stage. This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     *
     * @param { string } path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     *                                                                  3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    loadContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * Loads content by named router
     *
     * @param { string } name - name of the page to which the content will be loaded.
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * Loads content by named router
     *
     * @param { string } name - name of the page to which the content will be loaded.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    loadContentByName(name: string, callback: AsyncCallback<void>): void;

    /**
     * Loads content by named router
     *
     * @param { string } name - name of the page to which the content will be loaded.
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    loadContentByName(name: string, storage?: LocalStorage): Promise<void>;

    /**
     * Window stage event callback on.
     *
     * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Window stage event callback on.
     *
     * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Window stage event callback on.
     *
     * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    on(eventType: 'windowStageEvent', callback: Callback<WindowStageEventType>): void;
    /**
     * Window stage event callback off.
     *
     * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Window stage event callback off.
     *
     * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Window stage event callback off.
     *
     * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types; 
     *                                                                  2. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    off(eventType: 'windowStageEvent', callback?: Callback<WindowStageEventType>): void;

    /**
     * Window stage close callback on.
     * 
     * @param { 'windowStageClose' } eventType The value is fixed at 'windowStageClose', indicating the window stage close event.
     * @param { Callback<void> } callback Callback function requires a boolean return value to determine whether to close the current main window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 14
     */
    on(eventType: 'windowStageClose', callback: Callback<void>): void;

    /**
     * Window stage close callback off.
     *
     * @param { 'windowStageClose' } eventType The value is fixed at 'windowStageClose', indicating the window stage close event.
     * @param { Callback<void> } callback Callback function requires a boolean return value to determine whether to close the current main window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types; 
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 14
     */
    off(eventType: 'windowStageClose', callback?: Callback<void>): void;

    /**
     * Disable window decoration. It must be called before loadContent.
     *
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Disable window decoration. It must be called before loadContent.
     *
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @StageModelOnly
     * @since 12
     */
    disableWindowDecor(): void;

    /**
     * Sets whether can show on lock screen or not
     *
     * @param { boolean } showOnLockScreen can show on lock screen if true, or not if false
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9
     */
    /**
     * Sets whether can show on lock screen or not
     *
     * @param { boolean } showOnLockScreen can show on lock screen if true, or not if false
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 12
     */
    setShowOnLockScreen(showOnLockScreen: boolean): void;

    /**
     * Set whether to use default density.
     *
     * @param { boolean } enabled - Use default density if true, or follow system density change if false
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 12
     */
    setDefaultDensityEnabled(enabled: boolean): void;

    /**
     * Sets the custom density of ability.
     *
     * @param { number } density - the specified custom density value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 15
     */
    setCustomDensity(density: number): void;

    /**
     * Remove the starting window, it must be used with configuration "enable.remove.starting.window".
     *
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14
     */
    removeStartingWindow(): Promise<void>;

    /**
     * Set the application modality of the windowStage.
     *
     * @param { boolean } isModal - Enable the window modal if true, otherwise means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14
     */
    /**
     * Set the application modality of the windowStage.
     *
     * @param { boolean } isModal - Enable the window modal if true, otherwise means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 20
     */
    setWindowModal(isModal: boolean): Promise<void>;

    /**
     * Set to automatically save the window rect.
     *
     * @param { boolean } enabled - Enable the window rect auto-save if true, otherwise means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14
     */
    setWindowRectAutoSave(enabled: boolean): Promise<void>;

    /**
     * Set to automatically save the window rect and whether to enable specifiedFlag. 
     * Through the specifiedFlag flag, the window is marked and its rect is saved. 
     *
     * @param { boolean } enabled - Enable the window rect auto-save if true, otherwise means the opposite.
     * @param { boolean } isSaveBySpecifiedFlag - Enable the specifiedFlag if true, otherwise means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 
     *                                                                   2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Function setWindowRectAutoSave can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 17
     */
    setWindowRectAutoSave(enabled: boolean, isSaveBySpecifiedFlag: boolean): Promise<void>;

    /**
     * Whether the window supports the window rect auto-save.
     *
     * @returns { Promise<boolean> } Promise used to return the result.
     *  The value true means that the window rect auto-save is supported, and false means the opposite.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14
     */
    /**
     * Whether the window supports the window rect auto-save.
     *
     * @returns { Promise<boolean> } Promise used to return the result.
     *  The value true means that the window rect auto-save is supported, and false means the opposite.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 20
     */
    isWindowRectAutoSave(): Promise<boolean>;

    /**
     * Sets the supported window modes.
     *
     * @param { Array<bundleManager.SupportWindowMode> } supportedWindowModes - The supported modes of window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 15
     */
    setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>): Promise<void>;
  }

  /**
   * Attribute of the window for UI service extension ability.
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14
   */
   enum ExtensionWindowAttribute {
    /**
     * System window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14
     */
    SYSTEM_WINDOW,

    /**
     * Sub window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14
     */
    SUB_WINDOW
  }

  /**
   * Options for system window creation.
   *
   * @interface SystemWindowOptions
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14
   */
  interface SystemWindowOptions {
    /**
     * Indicates window type.
     *
     * @type { WindowType }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14
     */
    windowType: WindowType;
  }

  /**
   * Configuration of the window for UI service extension ability.
   *
   * @interface ExtensionWindowConfig
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14
   */
  interface ExtensionWindowConfig {
    /**
     * Window name.
     *
     * @type { string }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14
     */
    windowName: string;

    /**
     * Defines whether the window is a subwindow or a system window.
     *
     * @type { ExtensionWindowAttribute }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14
     */
    windowAttribute: ExtensionWindowAttribute;

    /**
     * The position and size of window.
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14
     */
    windowRect: Rect;

    /**
     * The options of sub window creation.
     *
     * @type { ?SubWindowOptions }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14
     */
    subWindowOptions?: SubWindowOptions;

    /**
     * The options of system window creation.
     *
     * @type { ?SystemWindowOptions }
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14
     */
    systemWindowOptions?: SystemWindowOptions;
  }

  /**
   * The layout info of Window.
   *
   * @interface WindowLayoutInfo
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15
   */
  interface WindowLayoutInfo {
    /**
     * The position and size of window.
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15
     */
    windowRect: Rect;
  }

  /**
   * Rotation change type
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18
   */
  enum RotationChangeType {
    /**
     * Rotation will begin
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    WINDOW_WILL_ROTATE = 0,

    /**
     * Rotation end
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    WINDOW_DID_ROTATE = 1
  }

  /**
   * Rect type
   *
   * @enum { number }
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18
   */
  enum RectType {
    /**
     * Rect relative to screen
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    RELATIVE_TO_SCREEN = 0,
    /**
     * Rect relative to parent window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    RELATIVE_TO_PARENT_WINDOW = 1
  }

  /**
   * Rotation change info
   *
   * @interface RotationChangeInfo
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18
   */
  interface RotationChangeInfo {
    /**
     * Rotation change type
     *
     * @type { RotationChangeType }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    type: RotationChangeType;
    /**
     * Orientation
     *
     * @type { Orientation }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    orientation: Orientation;
    /**
     * Display id
     *
     * @type { number }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    displayId: number;
    /**
     * Display rect
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    displayRect: Rect;
  }

  /**
   * Rotation change result
   *
   * @interface RotationChangeResult
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18
   */
  interface RotationChangeResult {
    /**
     * Rect type
     *
     * @type { RectType }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    rectType: RectType;
    /**
     * Window rect
     *
     * @type { Rect }
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    windowRect: Rect;
  }

  /**
   * Rotation Change callback
   *
   * @typedef RotationChangeCallback<T, U>
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18
   */
  interface RotationChangeCallback<T, U> {
    /**
     * Defines the rotation change callback
     *
     * @param { T } info
     * @returns { U } result
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18
     */
    (info: T): U;
  }
}

export default window;
