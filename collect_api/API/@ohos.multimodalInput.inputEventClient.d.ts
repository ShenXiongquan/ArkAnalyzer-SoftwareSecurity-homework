/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
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

import { MouseEvent } from './@ohos.multimodalInput.mouseEvent';
import { TouchEvent } from './@ohos.multimodalInput.touchEvent';
/**
 * Global Key Event Injection
 *
 * @namespace inputEventClient
 * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
 * @systemapi hide for inner use
 * @since 8
 */
declare namespace inputEventClient {
  /**
   * Defines event of key that user want to inject.
   *
   * @interface KeyEvent
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 8
   */
  interface KeyEvent {
    /**
     * The status of key.
     * @type { boolean }
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8
     */
    isPressed: boolean;

    /**
     * The keyCode value of key.
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8
     */
    keyCode: number;

    /**
     * Key hold duration.
     * @type { number }
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8
     */
    keyDownDuration: number;

    /**
     * Whether the key is blocked.
     * @type { boolean }
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8
     */
    isIntercepted: boolean;
  }

  /**
   * Defines event of mouse that user want to inject.
   *
   * @interface MouseEventData
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11
   */
  interface MouseEventData {
    /**
     * Inject mouse event.
     *
     * @type { MouseEvent }
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 11
     */
    mouseEvent: MouseEvent;
  }

  /**
   * Defines event of touch that user want to inject.
   *
   * @interface TouchEventData
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11
   */
  interface TouchEventData {
    /**
     * Inject touch event.
     *
     * @type { TouchEvent }
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 11
     */
    touchEvent: TouchEvent;
  }

  /**
   * Defines event of key that user want to inject.
   *
   * @interface KeyEventData
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11
   */
  interface KeyEventData {
    /**
     * Inject key event.
     *
     * @type { KeyEvent }
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 11
     */
    keyEvent: KeyEvent;
  }

  /**
   * Inject system keys.
   *
   * @param { KeyEventData } keyEvent - the key event to be injected.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11
   */
  /**
   * Inject system keys.
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT
   * @param { KeyEventData } keyEvent - the key event to be injected.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 12
   */
  function injectKeyEvent(keyEvent: KeyEventData): void;

  /**
   * Inject system keys.
   *
   * @param { { KeyEvent } } KeyEvent - the key event to be injected.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 8
   */
  /**
   * Inject system keys.
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT
   * @param { { KeyEvent } } KeyEvent - the key event to be injected.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 12
   */
  function injectEvent({ KeyEvent: KeyEvent }): void;

  /**
   * Inject mouse event.
   *
   * @param { MouseEventData } mouseEvent - the mouse event to be injected.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11
   */
  /**
   * Inject mouse event.
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT
   * @param { MouseEventData } mouseEvent - the mouse event to be injected.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 12
   */
  function injectMouseEvent(mouseEvent: MouseEventData): void;

  /**
   * Inject touch event.
   *
   * @param { TouchEventData } touchEvent - the touch event to be injected.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 11
   */
  /**
   * Inject touch event.
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT
   * @param { TouchEventData } touchEvent - the touch event to be injected.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 12
   */
  function injectTouchEvent(touchEvent: TouchEventData): void;

  /**
   * Permit event injection permission.
   *
   * @permission ohos.permission.INJECT_INPUT_EVENT
   * @param { boolean } result - Authorization result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 12
   */
   function permitInjection(result: boolean): void;
}

export default inputEventClient;
