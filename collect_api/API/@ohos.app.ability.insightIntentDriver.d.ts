/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import Want from './@ohos.app.ability.Want';
import wantConstant from './@ohos.app.ability.wantConstant';
import type { AsyncCallback } from './@ohos.base';
import type insightIntent from './@ohos.app.ability.insightIntent';

/**
 * Insight intent driver.
 *
 * @namespace insightIntentDriver
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @StageModelOnly
 * @since 11
 */
declare namespace insightIntentDriver {
  /**
   * Param when execute insight intent.
   *
   * @typedef ExecuteParam
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  interface ExecuteParam {
    /**
     * Indicates the bundle name.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11
     */
    bundleName: string;

    /**
     * Indicates the module name.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11
     */
    moduleName: string;

    /**
     * Indicates the ability name.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11
     */
    abilityName: string;

    /**
     * Indicates the insight intent name.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11
     */
    insightIntentName: string;

    /**
     * Indicates the insight intent param.
     *
     * @type { Record<string, Object> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11
     */
    insightIntentParam: Record<string, Object>;

    /**
     * Indicates the execute mode.
     *
     * @type { insightIntent.ExecuteMode }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 11
     */
    executeMode: insightIntent.ExecuteMode;

    /**
     * Indicates the display Id, only works when executeMode is UIAbility foreground.
     *
     * @type { ?number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 12
     */
    displayId?: number;

    /**
     * Indicates the URIs will be authorized to the insight intent executor.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 18
     */
    uris?: Array<string>;

    /**
     * Indicates the URIs read and write permissions which consistent with {@link Want#flags},
     * flags must be one of {@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION},
     * {@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION},
     * {@link wantConstant#Flags#FLAG_AUTH_READ_URI_PERMISSION}|
     * {@link wantConstant#Flags#FLAG_AUTH_WRITE_URI_PERMISSION}.
     *
     * @type { ?number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 18
     */
    flags?: number;
  }

  /**
   * Execute insight intent.
   * If the caller application is in foreground, you can use this method to execute insight intent;
   * If the caller application is in background, you need to apply for permission: ohos.permission.START_ABILITIES_FROM_BACKGROUND;
   * If the execute mode is UI_ABILITY_BACKGROUND, you need to apply for permission: ohos.permission.ABILITY_BACKGROUND_COMMUNICATION.
   *
   * @permission ohos.permission.EXECUTE_INSIGHT_INTENT
   * @param { ExecuteParam } param - Execute parameter.
   * @param { AsyncCallback<insightIntent.ExecuteResult> } callback - The callback of executeIntent.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Failed to start the invisible ability.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  function execute(param: ExecuteParam, callback: AsyncCallback<insightIntent.ExecuteResult>): void;

  /**
   * Execute insight intent.
   * If the caller application is in foreground, you can use this method to execute insight intent;
   * If the caller application is in background, you need to apply for permission: ohos.permission.START_ABILITIES_FROM_BACKGROUND;
   * If the execute mode is UI_ABILITY_BACKGROUND, you need to apply for permission: ohos.permission.ABILITY_BACKGROUND_COMMUNICATION.
   *
   * @permission ohos.permission.EXECUTE_INSIGHT_INTENT
   * @param { ExecuteParam } param - Execute parameter.
   * @returns { Promise<insightIntent.ExecuteResult> } Returns the execute result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Failed to start the invisible ability.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000009 - An ability cannot be started or stopped in Wukong mode.
   * @throws { BusinessError } 16000010 - The call with the continuation flag is forbidden.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  function execute(param: ExecuteParam): Promise<insightIntent.ExecuteResult>;
}

export default insightIntentDriver;
