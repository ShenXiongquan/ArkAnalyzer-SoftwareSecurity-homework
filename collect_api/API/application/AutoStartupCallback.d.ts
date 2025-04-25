/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import type { AutoStartupInfo } from './AutoStartupInfo';

/**
 * The class of auto startup callback.
 *
 * @typedef AutoStartupCallback
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @StageModelOnly
 * @since 11
 */
export interface AutoStartupCallback {
  /**
   * When the application's auto startup state is set to on, this function is called.
   *
   * @param { AutoStartupInfo } info - Auto startup info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  onAutoStartupOn(info: AutoStartupInfo): void;

  /**
   * When the application's auto startup state is set to off, this function is called.
   *
   * @param { AutoStartupInfo } info - Auto startup info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  onAutoStartupOff(info: AutoStartupInfo): void;
}

export default AutoStartupCallback;
