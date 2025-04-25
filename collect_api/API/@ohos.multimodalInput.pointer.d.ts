/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @kit InputKit
 */

import type { AsyncCallback } from './@ohos.base';
import type image from './@ohos.multimedia.image';

/**
 * Declares interfaces related to mouse pointer attributes.
 *
 * @namespace pointer
 * @syscap SystemCapability.MultimodalInput.Input.Pointer
 * @since 9
 */
/**
 * Declares interfaces related to mouse pointer attributes.
 *
 * @namespace pointer
 * @syscap SystemCapability.MultimodalInput.Input.Pointer
 * @atomicservice
 * @since 12
 */
declare namespace pointer {
  /**
   * Pointer style.
   *
   * @enum { number }
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9
   */
  /**
   * Pointer style.
   *
   * @enum { number }
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @atomicservice
   * @since 12
   */
  enum PointerStyle {
    /**
     * Default
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    DEFAULT,

    /**
     * East arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    EAST,

    /**
     * West arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    WEST,

    /**
     * South arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    SOUTH,

    /**
     * North arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    NORTH,

    /**
     * East-west arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    WEST_EAST,

    /**
     * North-south arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    NORTH_SOUTH,

    /**
     * North-east arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    NORTH_EAST,

    /**
     * North-west arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    NORTH_WEST,

    /**
     * South-east arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    SOUTH_EAST,

    /**
     * South-west arrow
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    SOUTH_WEST,

    /**
     * Northeast and southwest adjustment
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    NORTH_EAST_SOUTH_WEST,

    /**
     * Northwest and southeast adjustment
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    NORTH_WEST_SOUTH_EAST,

    /**
     * Cross (accurate selection)
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    CROSS,

    /**
     * Copy
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    CURSOR_COPY,

    /**
     * Forbid
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    CURSOR_FORBID,

    /**
     * Sucker
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    COLOR_SUCKER,

    /**
     * Grabbing hand
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    HAND_GRABBING,

    /**
     * Opening hand
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    HAND_OPEN,

    /**
     * Hand-shaped pointer
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    HAND_POINTING,

    /**
     * Help
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    HELP,

    /**
     * Move
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    MOVE,

    /**
     * Left and right resizing
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    RESIZE_LEFT_RIGHT,

    /**
     * Up and down resizing
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    RESIZE_UP_DOWN,

    /**
     * Screenshot crosshair
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    SCREENSHOT_CHOOSE,

    /**
     * Screenshot
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    SCREENSHOT_CURSOR,

    /**
     * Text selection
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    TEXT_CURSOR,

    /**
     * Zoom in
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    ZOOM_IN,

    /**
     * Zoom out
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    ZOOM_OUT,

    /**
     * Scrolling east
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    MIDDLE_BTN_EAST,

    /**
     * Scrolling west
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    MIDDLE_BTN_WEST,

    /**
     * Scrolling south
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    MIDDLE_BTN_SOUTH,

    /**
     * Scrolling north
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    MIDDLE_BTN_NORTH,

    /**
     * Scrolling north and south
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    MIDDLE_BTN_NORTH_SOUTH,

    /**
     * Scrolling northeast
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    MIDDLE_BTN_NORTH_EAST,

    /**
     * Scrolling northwest
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    MIDDLE_BTN_NORTH_WEST,

    /**
     * Scrolling southeast
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    MIDDLE_BTN_SOUTH_EAST,

    /**
     * Scrolling southwest
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    MIDDLE_BTN_SOUTH_WEST,

    /**
     * Moving as a cone in four directions
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 9
     */
    MIDDLE_BTN_NORTH_SOUTH_WEST_EAST,

    /**
     * Horizontal text selection
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10
     */
    HORIZONTAL_TEXT_CURSOR,

    /**
     * Precise selection
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10
     */
    CURSOR_CROSS,

    /**
     * Cursor with circle style
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10
     */
    CURSOR_CIRCLE,

    /**
     * Loading state with dynamic cursor
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10
     */
    /**
     * Loading state with dynamic cursor
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @atomicservice
     * @since 12
     */
    LOADING,

    /**
     * Running state with dynamic cursor
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10
     */
    /**
     * Running state with dynamic cursor
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @atomicservice
     * @since 12
     */
    RUNNING,

    /**
     * Scrolling east and west
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 18
     */
    MIDDLE_BTN_EAST_WEST
  }

  /**
   * Mouse button.
   *
   * @enum { number }
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10
   */
  enum PrimaryButton {
    /**
     * Left mouse button
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10
     */
    LEFT = 0,
    /**
     * Right mouse button
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10
     */
    RIGHT = 1
  }

  /**
   * Device right menu type.
   *
   * @enum { number }
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10
   */
  enum RightClickType {
    /**
     * Touchpad right button
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10
     */
    TOUCHPAD_RIGHT_BUTTON = 1,
    /**
     * Touchpad left button
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10
     */
    TOUCHPAD_LEFT_BUTTON = 2,
    /**
     * Touchpad two fingers tap
     *
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 10
     */
    TOUCHPAD_TWO_FINGER_TAP = 3,
  }

  /**
   * Defines a custom cursor.
   *
   * @interface CustomCursor
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 15
   */
  interface CustomCursor {
    /**
     * pixelMap - Custom cursor. The size limit is 256 x 256.
     * @type { image.PixelMap }
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15
     */
    pixelMap: image.PixelMap;
    /**
     * focusX - Horizontal coordinate of the focus of the custom cursor. It is subject to the size of the custom cursor.
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15
     */
    focusX?: number;
    /**
     * focusY - Vertical coordinate of the focus of the custom cursor. It is subject to the size of the custom cursor.
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15
     */
    focusY?: number;
  }
  
  /**
   * Specifies custom cursor config.
   *
   * @interface CursorConfig
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 15
   */
  interface CursorConfig {
    /**
     * followSystem - Whether to adjust the cursor size based on the system settings.
     * @type { boolean }
     * @syscap SystemCapability.MultimodalInput.Input.Pointer
     * @since 15
     */
    followSystem : boolean;
  }

  /**
   * Sets the pointer moving speed.
   *
   * @param { number } speed - Pointer moving speed, which is any number.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Sets the pointer moving speed.
   *
   * @param { number } speed - Pointer moving speed, which is any number.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 12
   */
  function setPointerSpeed(speed: number, callback: AsyncCallback<void>): void;

  /**
   * Sets the pointer moving speed.
   *
   * @param { number } speed - Pointer moving speed, which is any number.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Sets the pointer moving speed.
   *
   * @param { number } speed - Pointer moving speed, which is any number.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 12
   */
  function setPointerSpeed(speed: number): Promise<void>;

  /**
   * Sets the pointer moving speed through sync mode.
   *
   * @param { number } speed - Pointer moving speed, which is any number.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 10
   */
  function setPointerSpeedSync(speed: number): void;

  /**
   * Queries the pointer moving speed.
   *
   * @param { AsyncCallback<number> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Queries the pointer moving speed.
   *
   * @param { AsyncCallback<number> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 12
   */
  function getPointerSpeed(callback: AsyncCallback<number>): void;

  /**
   * Queries the pointer moving speed.
   *
   * @returns { Promise<number> } Returns the result through a promise.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Queries the pointer moving speed.
   *
   * @returns { Promise<number> } Returns the result through a promise.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 12
   */
  function getPointerSpeed(): Promise<number>;

  /**
   * Queries the pointer moving speed through sync mode.
   * @returns { number } Returns the pointer speed through sync mode.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use
   * @since 10
   */
  function getPointerSpeedSync(): number;

  /**
   * Sets the pointer style.
   *
   * @param { number } windowId - Window ID.
   * @param { PointerStyle } pointerStyle - Pointer style.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9
   */
  function setPointerStyle(windowId: number, pointerStyle: PointerStyle, callback: AsyncCallback<void>): void;

  /**
   * Sets the pointer style.
   *
   * @param { number } windowId - Window ID.
   * @param { PointerStyle } pointerStyle - Pointer style.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9
   */
  function setPointerStyle(windowId: number, pointerStyle: PointerStyle): Promise<void>;

  /**
   * Sets the pointer style through sync mode.
   *
   * @param { number } windowId - Window ID.
   * @param { PointerStyle } pointerStyle - Pointer style.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10
   */
  function setPointerStyleSync(windowId: number, pointerStyle: PointerStyle): void;

  /**
   * Queries the pointer style.
   *
   * @param { number } windowId - Window ID.
   * @param { AsyncCallback<PointerStyle> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9
   */
  function getPointerStyle(windowId: number, callback: AsyncCallback<PointerStyle>): void;

  /**
   * Queries the pointer style.
   *
   * @param { number } windowId - Window ID.
   * @returns { Promise<PointerStyle> } Returns the result through a promise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9
   */
  function getPointerStyle(windowId: number): Promise<PointerStyle>;

  /**
   * Queries the pointer style through sync mode.
   *
   * @param { number } windowId - Window ID.
   * @returns { PointerStyle } Returns the pointerStyle.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10
   */
  function getPointerStyleSync(windowId: number): PointerStyle;

  /**
   * Sets whether the pointer icon is visible.
   *
   * @param { boolean } visible Whether the pointer icon is visible. The value true indicates that the pointer
   * icon is visible, and the value false indicates the opposite.
   * @param { AsyncCallback<void> } callback - Callback for the input device event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9
   */
  /**
   * Sets whether the pointer icon is visible.
   *
   * @param { boolean } visible Whether the pointer icon is visible. The value true indicates that the pointer
   * icon is visible, and the value false indicates the opposite.
   * @param { AsyncCallback<void> } callback - Callback for the input device event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported;
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 18
   */
  function setPointerVisible(visible: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether the pointer icon is visible.
   *
   * @param { boolean } visible Whether the pointer icon is visible. The value true indicates that the pointer
   * icon is visible, and the value false indicates the opposite.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9
   */
  /**
   * Sets whether the pointer icon is visible.
   *
   * @param { boolean } visible Whether the pointer icon is visible. The value true indicates that the pointer
   * icon is visible, and the value false indicates the opposite.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported;
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 18
   */
  function setPointerVisible(visible: boolean): Promise<void>;

  /**
   * Sets whether the pointer icon is visible through sync mode.
   *
   * @param { boolean } visible Whether the pointer icon is visible. The value true indicates that the pointer
   * icon is visible, and the value false indicates the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10
   */
  function setPointerVisibleSync(visible: boolean): void;

  /**
   * Checks whether the pointer icon is visible.
   *
   * @param { AsyncCallback<boolean> } callback - Returns <b>true</b> if the pointer icon is visible,
   * returns <b>false</b> otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9
   */
  function isPointerVisible(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the pointer icon is visible.
   *
   * @returns { Promise<boolean> } Returns <b>true</b> if the pointer icon is visible; returns <b>false</b> otherwise.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 9
   */
  function isPointerVisible(): Promise<boolean>;

  /**
   * Checks whether the pointer icon is visible through sync mode.
   *
   * @returns { boolean } Returns true if the pointer icon is visible, returns false otherwise.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 10
   */
  function isPointerVisibleSync(): boolean;

  /**
   * Set the color of pointer.
   *
   * @param { number } color - Indicates the color of pointer.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setPointerColor(color: number, callback: AsyncCallback<void>): void;

  /**
   * Set the color of pointer.
   *
   * @param { number } color - Indicates the color of pointer.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setPointerColor(color: number): Promise<void>;

  /**
   * Set the color of pointer.
   *
   * @param { number } color - Indicates the color of pointer.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setPointerColorSync(color: number): void;

  /**
   * Get the color of pointer.
   *
   * @param { AsyncCallback<number> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getPointerColor(callback: AsyncCallback<number>): void;

  /**
   * Get the color of pointer.
   *
   * @returns { Promise<number> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getPointerColor(): Promise<number>;

  /**
   * Get the color of pointer.
   *
   * @returns { number } Returns the pointer color through sync mode.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getPointerColorSync(): number;

  /**
   * Set the size of pointer.
   *
   * @param { number } size - Indicates the size of pointer.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setPointerSize(size: number, callback: AsyncCallback<void>): void;

  /**
   * Set the size of pointer.
   *
   * @param { number } size - Indicates the size of pointer.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setPointerSize(size: number): Promise<void>;

  /**
   * Set the size of pointer.
   *
   * @param { number } size - Indicates the size of pointer.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setPointerSizeSync(size: number): void;

  /**
   * Get the size of pointer.
   *
   * @param { AsyncCallback<number> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getPointerSize(callback: AsyncCallback<number>): void;

  /**
   * Get the size of pointer.
   *
   * @returns { Promise<number> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getPointerSize(): Promise<number>;

  /**
   * Get the size of pointer.
   *
   * @returns { number } Returns the pointer size through sync mode.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getPointerSizeSync(): number;

  /**
   * Sets mouse primary button.
   *
   * @param { PrimaryButton } primary - Indicates mouse primary button. The value LEFT indicates that mouse primary
   * button is left button, and the value RIGHT indicates that mouse primary button is right button.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setMousePrimaryButton(primary: PrimaryButton, callback: AsyncCallback<void>): void;

  /**
   * Sets mouse primary button.
   *
   * @param { PrimaryButton } primary - Indicates mouse primary button. The value LEFT indicates that mouse primary
   * button is left button, and the value RIGHT indicates that mouse primary button is right button.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setMousePrimaryButton(primary: PrimaryButton): Promise<void>;

  /**
   * Gets mouse primary button.
   *
   * @param { AsyncCallback<PrimaryButton> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getMousePrimaryButton(callback: AsyncCallback<PrimaryButton>): void;

  /**
   * Gets mouse primary button.
   *
   * @returns { Promise<PrimaryButton> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getMousePrimaryButton(): Promise<PrimaryButton>;

  /**
   * Sets whether the mouse hover scroll is enabled in inactive window.
   *
   * @param { boolean } state - Indicates whether the mouse hover scroll is enabled in inactive window. The value true
   * indicates that the mouse hover scroll is enabled, and the value false indicates the opposite.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setHoverScrollState(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether mouse hover scroll is enabled in inactive window.
   *
   * @param { boolean } state - Indicates whether the mouse hover scroll is enabled in inactive window. The value true
   * indicates that the mouse hover scroll is enabled, and the value false indicates the opposite.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setHoverScrollState(state: boolean): Promise<void>;

  /**
   * Gets a status whether the mouse hover scroll is enabled in inactive window.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getHoverScrollState(callback: AsyncCallback<boolean>): void;

  /**
   * Gets a status whether mouse hover scroll is enabled in inactive window.
   *
   * @returns { Promise<boolean> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getHoverScrollState(): Promise<boolean>;

  /**
   * Set the number of mouse scrolling rows.
   *
   * @param { number } rows - Indicates the number of mouse scrolling rows.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setMouseScrollRows(rows: number, callback: AsyncCallback<void>): void;

  /**
   * Set the number of mouse scrolling rows.
   *
   * @param { number } rows - Indicates the number of mouse scrolling rows.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setMouseScrollRows(rows: number): Promise<void>;

  /**
   * Get the number of mouse scrolling rows.
   *
   * @param { AsyncCallback<number> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getMouseScrollRows(callback: AsyncCallback<number>): void;

  /**
   * Get the number of mouse scrolling rows.
   *
   * @returns { Promise<number> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getMouseScrollRows(): Promise<number>;

  /**
   * Set touchpad scroll switch.
   *
   * @param { boolean } state - Indicates whether the touchpad scroll switch is enabled
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setTouchpadScrollSwitch(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set touchpad scroll switch.
   *
   * @param { boolean } state - Indicates whether the touchpad scroll switch is enabled
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setTouchpadScrollSwitch(state: boolean): Promise<void>;

  /**
   * Get touchpad scroll switch state.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getTouchpadScrollSwitch(callback: AsyncCallback<boolean>): void;

  /**
   * Get touchpad scroll switch state.
   *
   * @returns { Promise<boolean> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getTouchpadScrollSwitch(): Promise<boolean>;

  /**
   * Set touchpad scroll direction.
   *
   * @param { boolean } state - Indicates whether the touchpad scroll direction is forward or reverse
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setTouchpadScrollDirection(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set touchpad scroll direction.
   *
   * @param { boolean } state - Indicates whether the touchpad scroll direction is forward or reverse
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setTouchpadScrollDirection(state: boolean): Promise<void>;

  /**
   * Get touchpad scroll direction.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getTouchpadScrollDirection(callback: AsyncCallback<boolean>): void;

  /**
   * Get touchpad scroll direction.
   *
   * @returns { Promise<boolean> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getTouchpadScrollDirection(): Promise<boolean>;

  /**
   * Set touchpad tap switch.
   *
   * @param { boolean } state - Indicates whether the touchpad tap switch is enabled
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setTouchpadTapSwitch(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set touchpad tap switch.
   *
   * @param { boolean } state - Indicates whether the touchpad tap switch is enabled
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setTouchpadTapSwitch(state: boolean): Promise<void>;

  /**
   * Get touchpad tap switch state.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getTouchpadTapSwitch(callback: AsyncCallback<boolean>): void;

  /**
   * Get touchpad tap switch state.
   *
   * @returns { Promise<boolean> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getTouchpadTapSwitch(): Promise<boolean>;

  /**
   * Set touchpad pointer speed.
   *
   * @param { number } speed - Indicates the number of touchpad pointer speed.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setTouchpadPointerSpeed(speed: number, callback: AsyncCallback<void>): void;

  /**
   * Set touchpad pointer speed.
   *
   * @param { number } speed - Indicates the number of touchpad pointer speed.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setTouchpadPointerSpeed(speed: number): Promise<void>;

  /**
   * Get touchpad pointer speed.
   *
   * @param { AsyncCallback<number> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getTouchpadPointerSpeed(callback: AsyncCallback<number>): void;

  /**
   * Get touchpad pointer speed.
   *
   * @returns { Promise<number> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getTouchpadPointerSpeed(): Promise<number>;

  /**
   * Set touchpad pinch switch.
   *
   * @param { boolean } state - Indicates whether the touchpad pinch switch is enabled
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setTouchpadPinchSwitch(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set touchpad pinch switch.
   *
   * @param { boolean } state - Indicates whether the touchpad pinch switch is enabled
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setTouchpadPinchSwitch(state: boolean): Promise<void>;

  /**
   * Get touchpad pinch switch state.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
  */
  function getTouchpadPinchSwitch(callback: AsyncCallback<boolean>): void;

  /**
   * Get touchpad pinch switch state.
   *
   * @returns { Promise<boolean> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getTouchpadPinchSwitch(): Promise<boolean>;

  /**
   * Set touchpad swipe switch.
   *
   * @param { boolean } state - Indicates whether the touchpad swipe switch is enabled
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setTouchpadSwipeSwitch(state: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set touchpad swipe switch.
   *
   * @param { boolean } state - Indicates whether the touchpad swipe switch is enabled
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setTouchpadSwipeSwitch(state: boolean): Promise<void>;
 
  /**
   * Get touchpad swipe switch state.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getTouchpadSwipeSwitch(callback: AsyncCallback<boolean>): void;
 
  /**
   * Get touchpad swipe switch state.
   *
   * @returns { Promise<boolean> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getTouchpadSwipeSwitch(): Promise<boolean>;

  /**
   * Set touchpad right click type.
   *
   * @param { RightClickType } type - Indicates the type of touchpad right button menu.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setTouchpadRightClickType(type: RightClickType, callback: AsyncCallback<void>): void;

  /**
   * Set touchpad right click type.
   *
   * @param { RightClickType } type - Indicates the type of touchpad right click.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function setTouchpadRightClickType(type: RightClickType): Promise<void>;

  /**
   * Get touchpad right click type.
   *
   * @param { AsyncCallback<RightClickType> } callback - Callback used to return the result of right click type.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getTouchpadRightClickType(callback: AsyncCallback<RightClickType>): void;

  /**
   * Get touchpad right click type.
   *
   * @returns { Promise<RightClickType> } Returns the result of right click type through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 10
   */
  function getTouchpadRightClickType(): Promise<RightClickType>;

  /**
   * Sets the custom cursor.
   *
   * @param { number } windowId - Window ID.
   * @param { image.PixelMap } pixelMap - the cursor of pixelMap.
   * @param { number } focusX - focus x.
   * @param { number } focusY - focus y.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 11
   */
  function setCustomCursor(windowId: number, pixelMap: image.PixelMap, focusX?: number, focusY?: number): Promise<void>;

  /**
   * Sets the custom cursor through sync mode.
   *
   * @param { number } windowId - Window ID.
   * @param { image.PixelMap } pixelMap - the cursor of pixelMap.
   * @param { number } focusX - focus x.
   * @param { number } focusY - focus y.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 11
   */
  function setCustomCursorSync(windowId: number, pixelMap: image.PixelMap, focusX?: number, focusY?: number): void;

  /**
   * Sets the custom cursor. You can set whether to adjust the cursor size based on the system settings.
   *
   * @param { number } windowId - Window ID.
   * @param { CustomCursor } cursor - Custom cursor, including the custom cursor resource and focus position.
   * @param { CursorConfig } config - Custom cursor config.
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Abnormal windowId parameter passed in;
   * <br>2. Abnormal pixelMap parameter passed in; 3. Abnormal focusX parameter passed in;
   * <br>4. Abnormal focusY parameter passed in.
   * @throws { BusinessError } 26500001 - Invalid windowId.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @since 15
   */
  function setCustomCursor(windowId: number, cursor: CustomCursor, config: CursorConfig): Promise<void>;

  /**
   * Set touchpad double tap and drag state.
   *
   * @param { boolean } isOpen - Indicates whether the touchpad double tap and drag is enabled
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 14
   */
  function setTouchpadDoubleTapAndDragState(isOpen: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set touchpad double tap and drag state.
   *
   * @param { boolean } isOpen - Indicates whether the touchpad double tap and drag is enabled
   * @returns { Promise<void> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 14
   */
  function setTouchpadDoubleTapAndDragState(isOpen: boolean): Promise<void>;

  /**
   * Get touchpad double tap and drag state.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 14
   */
  function getTouchpadDoubleTapAndDragState(callback: AsyncCallback<boolean>): void;

  /**
   * Get touchpad double tap and drag state.
   *
   * @returns { Promise<boolean> } Returns the result through a promise.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @syscap SystemCapability.MultimodalInput.Input.Pointer
   * @systemapi hide for inner use.
   * @since 14
   */
  function getTouchpadDoubleTapAndDragState(): Promise<boolean>;
}
export default pointer;