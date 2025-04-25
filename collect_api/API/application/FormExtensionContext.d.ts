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
 * @kit FormKit
 */

import { AsyncCallback } from '../@ohos.base';
import type { ConnectOptions } from '../ability/connectOptions';
import ExtensionContext from './ExtensionContext';
import Want from '../@ohos.app.ability.Want';

/**
 * The context of form extension. It allows access to
 * formExtension-specific resources.
 *
 * @extends ExtensionContext
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @since 9
 */
/**
 * The context of form extension. It allows access to
 * formExtension-specific resources.
 *
 * @extends ExtensionContext
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @atomicservice
 * @since 11
 */
export default class FormExtensionContext extends ExtensionContext {
  /**
   * Start an ability within the same bundle.
   *
   * @param { Want } want - includes ability name, parameters and relative info sending to an ability.
   * @param { AsyncCallback<void> } callback - The callback of startAbility.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16500101 - The application is not a system application.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  /**
   * Start an ability.
   *
   * @param { Want } want - includes ability name, parameters and relative info sending to an ability.
   * @param { AsyncCallback<void> } callback - The callback of startAbility.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  startAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * Start an ability within the same bundle.
   *
   * @param { Want } want - includes ability name, parameters and relative info sending to an ability.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16500101 - The application is not a system application.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  /**
   * Start an ability.
   *
   * @param { Want } want - includes ability name, parameters and relative info sending to an ability.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  startAbility(want: Want): Promise<void>;

  /**
   * Connect a service extension ability.
   * If the target service extension ability is visible, you can connect the target service extension ability;
   * If the target service extension ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to connect target invisible service extension ability.
   * If the target service extension ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   * <p>This method can be called by an ability or service extension, but the destination of the connection must be a
   * service extension. You must implement the {@link ConnectOptions} interface to obtain the proxy of the target
   * service extension when the Service extension is connected.</p>
   *
   * @param { Want } want - Indicates the service extension to connect.
   * @param { ConnectOptions } options - Indicates the callback of connection.
   * @returns { number } Returns the connection id.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  connectServiceExtensionAbility(want: Want, options: ConnectOptions): number;

  /**
   * Disconnect an ability to a service extension, in contrast to {@link connectServiceExtensionAbility}.
   *
   * @param { number } connection - the connection id returned from connectServiceExtensionAbility api.
   * @param { AsyncCallback<void> } callback - The callback of disconnectServiceExtensionAbility.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  disconnectServiceExtensionAbility(connection: number, callback: AsyncCallback<void>): void;

  /**
   * Disconnect an ability to a service extension, in contrast to {@link connectServiceExtensionAbility}.
   *
   * @param { number } connection - the connection id returned from connectServiceExtensionAbility api.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  disconnectServiceExtensionAbility(connection: number): Promise<void>;
}
