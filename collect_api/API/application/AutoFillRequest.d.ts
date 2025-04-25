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

import type { AutoFillType } from './AutoFillType';
import type CustomData from './CustomData';
import type AutoFillPopupConfig from './AutoFillPopupConfig';
import type ViewData from './ViewData';

/**
 * Fill request for automatic filling.
 *
 * @interface FillRequest
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11
 */
export interface FillRequest {
  /**
   * The auto fill type.
   *
   * @type { AutoFillType }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  type: AutoFillType;

  /**
   * The view data. Indicates the basic page information for the fill request.
   *
   * @type { ViewData }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  viewData: ViewData;

  /**
   * The custom data.
   *
   * @type { CustomData }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 13
   */
  customData: CustomData;

  /**
   * Whether the UI extension window type is popup window.
   *
   * @type { boolean }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  isPopup: boolean;
}

/**
 * Save request for automatic filling.
 *
 * @interface SaveRequest
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11
 */
export interface SaveRequest {
  /**
   * The view data. Indicates the basic page information for the save request.
   *
   * @type { ViewData }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  viewData: ViewData;
}

/**
 * Update request for automatic filling.
 *
 * @interface UpdateRequest
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 12
 */
export interface UpdateRequest {
  /**
   * The view data. Indicates the basic page information for the update request.
   *
   * @type { ViewData }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  viewData: ViewData;
}

/**
 * Fill response for automatic filling.
 *
 * @interface FillResponse
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11
 */
export interface FillResponse {
  /**
   * The view data. Contains basic page information and backfill information.
   *
   * @type { ViewData }
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  viewData: ViewData;
}

/**
 * Fill request callback for automatic filling.
 *
 * @interface FillRequestCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11
 */
export interface FillRequestCallback {
  /**
   * Notify the system that a fill request is successfully filled.
   *
   * @param { FillResponse } response - Indicates the fill response.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Mandatory parameters are left unspecified.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  onSuccess(response: FillResponse): void;

  /**
   * Notification system a fill request failed to be filled.
   *
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  onFailure(): void;

  /**
   * Notification system that filling has been cancelled.
   *
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  /**
   * Notification system that filling has been cancelled.
   *
   * @param { string } [fillContent] - Indicates the content to be filled in.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: <br>1.The input parameter is not valid parameter; 
   * <br>2. Mandatory parameters are left unspecified.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
  onCancel(fillContent?: string): void;

  /**
   * autofill popup config.
   *
   * @param { AutoFillPopupConfig } autoFillPopupConfig - Indicates the autofill popup config.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Mandatory parameters are left unspecified.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 12
   */
   setAutoFillPopupConfig(autoFillPopupConfig: AutoFillPopupConfig): void;
}

/**
 * Save request callback for automatic filling.
 *
 * @interface SaveRequestCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @systemapi
 * @stagemodelonly
 * @since 11
 */
export interface SaveRequestCallback {
  /**
   * Notify the system that a save request is successfully handled.
   *
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  onSuccess(): void;

  /**
   * Notify the system that a save request is failed to be handled.
   *
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  onFailure(): void;
}