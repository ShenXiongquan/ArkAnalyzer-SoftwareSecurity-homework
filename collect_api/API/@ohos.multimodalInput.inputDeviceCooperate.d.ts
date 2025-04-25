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

import { AsyncCallback } from "./@ohos.base";

/**
 * Events for input devices
 * 
 * @namespace inputDeviceCooperate
 * @syscap SystemCapability.MultimodalInput.Input.Cooperator
 * @since 9
 */


declare namespace inputDeviceCooperate {
  /**
   * Enumerates mouse traversal events.
   * @enum { number }
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use.
   * @since 9
   */
  enum EventMsg {
    /**
     * Mouse traversal message: mouse traversal is enabled.
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9
    */
    MSG_COOPERATE_INFO_START = 200,

    /**
     * Mouse traversal message: mouse traversal is successful.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9
    */
    MSG_COOPERATE_INFO_SUCCESS = 201,

    /**
     * Mouse traversal message: mouse traversal fails.
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9
    */
    MSG_COOPERATE_INFO_FAIL = 202,

    /**
     * Mouse traversal status: mouse traversal is enabled.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9
    */
    MSG_COOPERATE_STATE_ON = 500,

    /**
     * Mouse traversal status: mouse traversal is disabled.
     *
     * @syscap SystemCapability.MultimodalInput.Input.Cooperator
     * @systemapi hide for inner use
     * @since 9
    */
    MSG_COOPERATE_STATE_OFF = 501,
  }

  /**
   * Enable or disable the mouse traversal.
   *
   * @param { boolean } enable Whether to enable mouse traversal.
   * @param { AsyncCallback<void> } callback Asynchronous callback function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Enable or disable the mouse traversal.
   *
   * @param { boolean } enable Whether to enable mouse traversal.
   * @param { AsyncCallback<void> } callback Asynchronous callback function.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12
   */
  function enable(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Enable or disable the mouse traversal.
   *
   * @param enable Whether to enable mouse traversal.
   * @returns { Promise<void> } Promise returned by this function
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Enable or disable the mouse traversal.
   *
   * @param enable Whether to enable mouse traversal.
   * @returns { Promise<void> } Promise returned by this function
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12
   */
  function enable(enable: boolean): Promise<void>;

  /**
   * Starts mouse traversal.
   *
   * @param { string } sinkDeviceDescriptor Descriptor of the target network for mouse traversal.
   * @param { number } srcInputDeviceId Identifier of the peripheral device for mouse traversal.
   * @param { AsyncCallback<void> } callback Asynchronous callback function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 4400001 - Incorrect descriptor for the target device.
   * @throws { BusinessError } 4400002 - Screen hop failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Starts mouse traversal.
   *
   * @param { string } sinkDeviceDescriptor Descriptor of the target network for mouse traversal.
   * @param { number } srcInputDeviceId Identifier of the peripheral device for mouse traversal.
   * @param { AsyncCallback<void> } callback Asynchronous callback function.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 4400001 - Incorrect descriptor for the target device.
   * @throws { BusinessError } 4400002 - Screen hop failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12
   */
  function start(sinkDeviceDescriptor: string, srcInputDeviceId: number, callback: AsyncCallback<void>): void;

  /**
   * Starts mouse traversal.
   *
   * @param { string } sinkDeviceDescriptor Descriptor of the target network for mouse traversal.
   * @param { number } srcInputDeviceId Identifier of the peripheral device for mouse traversal.
   * @returns { Promise<void> } Promise returned by this function
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 4400001 - Incorrect descriptor for the target device.
   * @throws { BusinessError } 4400002 - Screen hop failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use 
   * @since 9
  */
  /**
   * Starts mouse traversal.
   *
   * @param { string } sinkDeviceDescriptor Descriptor of the target network for mouse traversal.
   * @param { number } srcInputDeviceId Identifier of the peripheral device for mouse traversal.
   * @returns { Promise<void> } Promise returned by this function
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 4400001 - Incorrect descriptor for the target device.
   * @throws { BusinessError } 4400002 - Screen hop failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use 
   * @since 12
  */
  function start(sinkDeviceDescriptor: string, srcInputDeviceId: number): Promise<void>;

  /**
   * Stops mouse traversal.
   *
   * @param { AsyncCallback<void> } callback Asynchronous callback function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Stops mouse traversal.
   *
   * @param { AsyncCallback<void> } callback Asynchronous callback function.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12
   */
  function stop(callback: AsyncCallback<void>): void;

  /**
   * Stops mouse traversal.
   * 
   * @returns { Promise<void> } Promise returned by this function
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Stops mouse traversal.
   * 
   * @returns { Promise<void> } Promise returned by this function
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12
   */
  function stop(): Promise<void>;

  /**
   * Obtains the status of the mouse traversal switch.
   *
   * @param {string} deviceDescriptor Descriptor of the target network for mouse traversal.
   * @param {AsyncCallback<{ state: boolean }>} callback Asynchronous callback used to receive the status of the mouse traversal switch.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Obtains the status of the mouse traversal switch.
   *
   * @param {string} deviceDescriptor Descriptor of the target network for mouse traversal.
   * @param {AsyncCallback<{ state: boolean }>} callback Asynchronous callback used to receive the status of the mouse traversal switch.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12
   */
  function getState(deviceDescriptor: string, callback: AsyncCallback<{ state: boolean }>): void;

  /**
   * Obtains the status of the mouse traversal switch.
   *
   * @param deviceDescriptor Descriptor of the target network for mouse traversal.
   * @returns { Promise<{ state: boolean }> } A promise used by returning state
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Obtains the status of the mouse traversal switch.
   *
   * @param deviceDescriptor Descriptor of the target network for mouse traversal.
   * @returns { Promise<{ state: boolean }> } A promise used by returning state
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12
   */
  function getState(deviceDescriptor: string): Promise<{ state: boolean }>;

  /**
   * Enables listening for mouse traversal events.
   * 
   * @param { 'cooperation' } type Registration type.
   * @param { AsyncCallback<{ deviceDescriptor: string, eventMsg: EventMsg }> } callback Asynchronous callback used to receive mouse traversal events.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Enables listening for mouse traversal events.
   * 
   * @param { 'cooperation' } type Registration type.
   * @param { AsyncCallback<{ deviceDescriptor: string, eventMsg: EventMsg }> } callback Asynchronous callback used to receive mouse traversal events.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12
   */
  function on(type: 'cooperation', callback: AsyncCallback<{ deviceDescriptor: string, eventMsg: EventMsg }>): void;

  /**
   * Disables listening for mouse traversal events.
   * 
   * @param { 'cooperation' } type Registration type.
   * @param { AsyncCallback<void> } callback Asynchronous callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 9
   */
  /**
   * Disables listening for mouse traversal events.
   * 
   * @param { 'cooperation' } type Registration type.
   * @param { AsyncCallback<void> } callback Asynchronous callback used to return the result.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.Cooperator
   * @systemapi hide for inner use
   * @since 12
   */
  function off(type: 'cooperation', callback?: AsyncCallback<void>): void;

}

export default inputDeviceCooperate;