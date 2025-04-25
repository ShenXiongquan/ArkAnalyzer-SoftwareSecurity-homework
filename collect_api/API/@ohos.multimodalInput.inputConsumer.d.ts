/*
 * Copyright (C) 2021-2023 Huawei Device Co., Ltd.
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

import { Callback } from './@ohos.base';
import { KeyEvent } from './@ohos.multimodalInput.keyEvent';

/**
 * The event of key input management module is configured to subscribe and unsubscribe system keys.
 *
 * @namespace inputConsumer
 * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
 * @since 14
 */
declare namespace inputConsumer {
  /**
   * Defines event of key that user want to subscribe or unsubscribe.
   *
   * @interface KeyOptions
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 8
   */
  interface KeyOptions {
    /**
     * The pre-keys that want to subscribe or unsubscribe.
     *
     * @type { Array<number> }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8
     */
    preKeys: Array<number>;

    /**
     * The post position key that want to subscribe or unsubscribe.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8
     */
    finalKey: number;

    /**
     * The final key press down or up.
     *
     * @type { boolean }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8
     */
    isFinalKeyDown: boolean;

    /**
     * Duration of final key press.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8
     */
    finalKeyDownDuration: number;

    /**
     * Whether to report repeated key events. By default, the value is true if it is left unspecified.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 18
     */
    isRepeat?: boolean;
  }

  /**
   * Defines the shortcut key structure.
   *
   * @typedef HotkeyOptions
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14
   */
  interface HotkeyOptions {
    /**
     * Defines modifier keys. One or two modifier keys are supported.
     *
     * @type { Array<number> }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 14
     */
    preKeys: Array<number>;

    /**
     * Defines modified keys.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 14
     */
    finalKey: number;

    /**
     * Whether to report repeated key events. By default, the value is true if it is left unspecified.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 14
     */
    isRepeat?: boolean;
  }

  /**
   * Key consunption settings.
   *
   * @typedef KeyPressedConfig
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 16
   */
  interface KeyPressedConfig {
    /**
     * Key value. Currently listening is supported only for KEYCODE_VOLUME_UP and KEYCODE_VOLUME_DOWN keys.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 16
     */
    key: number;

    /**
     * Key event type. The value 1 indicates key press and the value 2 indicates key release. Currently
     * listening is supported only for key press events.
     *
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 16
     */
    action: number;

    /**
     * Whether to report repeated key events.
     *
     * @type { boolean }
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 16
     */
    isRepeat: boolean;
  }

  /**
   * Shield mode.
   *
   * @enum { number }
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 11
   */
  enum ShieldMode {
    /**
     * Factory mode shield all key events
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 11
     */
    FACTORY_MODE
  }

  /**
   * Subscribe system keys.
   *
   * @param { 'key' } type - type of the inputevent about input which is to be subscribed.
   * @param { KeyOptions } keyOptions - the key events about input which is to be subscribed.
   * @param { Callback<KeyOptions> } callback - callback function, receive reported data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 8
   */
  /**
   * Subscribe system keys.
   *
   * @param { 'key' } type - type of the inputevent about input which is to be subscribed.
   * @param { KeyOptions } keyOptions - the key events about input which is to be subscribed.
   * @param { Callback<KeyOptions> } callback - callback function, receive reported data.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 12
   */
  function on(type: 'key', keyOptions: KeyOptions, callback: Callback<KeyOptions>): void;

  /**
   * Subscribe system keys.
   *
   * @param { 'key' } type - type of the inputevent about input which is to be subscribed.
   * @param { KeyOptions } keyOptions - the key events about input which is to be subscribed.
   * @param { Callback<KeyOptions> } callback - callback function, receive reported data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 8
   */
  /**
   * Subscribe system keys.
   *
   * @param { 'key' } type - type of the inputevent about input which is to be subscribed.
   * @param { KeyOptions } keyOptions - the key events about input which is to be subscribed.
   * @param { Callback<KeyOptions> } callback - callback function, receive reported data.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 12
   */
  function off(type: 'key', keyOptions: KeyOptions, callback?: Callback<KeyOptions>): void;

  /**
   * Sets whether shield key event interception, only support shield key event.
   *
   * @permission ohos.permission.INPUT_CONTROL_DISPATCHING
   * @param { ShieldMode } shieldMode - According the shield mode select shield key event range.
   * @param { boolean } isShield - Indicates whether control key event dispatch. The value <b>true</b> indicates
   * all key events directly dispatch to window, if the value <b>false</b> indicates not shield shortcut key.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use.
   * @since 11
   */
  function setShieldStatus(shieldMode: ShieldMode, isShield: boolean): void;

  /**
   * Gets shield event interception status corresponding to shield mode
   *
   * @permission ohos.permission.INPUT_CONTROL_DISPATCHING
   * @param { ShieldMode } shieldMode - According the shield mode select shield key event range.
   * @returns { boolean } Returns true if shield event interception, returns false otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use.
   * @since 11
   */
  function getShieldStatus(shieldMode: ShieldMode): boolean;

  /**
   * Obtains all system hotkeys. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<HotkeyOptions>> } All system hotkeys.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14
   */
  function getAllSystemHotkeys(): Promise<Array<HotkeyOptions>>;

  /**
   * Listening for hotkey event changes.
   *
   * @param { 'hotkeyChange' } type - Type of the hotkey events.
   * @param { HotkeyOptions } hotkeyOptions - hotkey events.
   * @param { Callback<HotkeyOptions> } callback - Callback used to return hotkey events.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 4200002 - The hotkey has been used by the system.
   * @throws { BusinessError } 4200003 - The hotkey has been subscribed to by another.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14
   */
  function on(type: 'hotkeyChange', hotkeyOptions: HotkeyOptions, callback: Callback<HotkeyOptions>): void;

  /**
   * Unsubscribe from hotkey event changes.
   *
   * @param { 'hotkeyChange' } type - Type of the hotkey events.
   * @param { HotkeyOptions } hotkeyOptions - Hotkey events.
   * @param { Callback<HotkeyOptions> } callback - Callback used to return hotkey events.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14
   */
  function off(type: 'hotkeyChange', hotkeyOptions: HotkeyOptions, callback?: Callback<HotkeyOptions>): void;

  /**
   * Consumed key events. Only the VolumeUp and VolumeDown keys are supported. When the current application process
   * is the focus window's process, a callback will be triggered if the user operates the specified key.
   *
   * @param { 'keyPressed' } type - Type of the key events.
   * @param { KeyPressedConfig } options - Key consumption settings.
   * @param { Callback<KeyEvent> } callback - Callback used to return key events.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 16
   */
  function on(type: 'keyPressed', options: KeyPressedConfig, callback: Callback<KeyEvent>): void;

  /**
   * Cancels consumption of key events.
   *
   * @param { 'keyPressed' } type - Type of the hotkey events.
   * @param { Callback<KeyEvent> } callback - Callback used to return hotkey events.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 16
   */
  function off(type: 'keyPressed', callback?: Callback<KeyEvent>): void;
}

export default inputConsumer;