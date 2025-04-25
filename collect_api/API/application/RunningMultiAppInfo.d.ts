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

import { MultiAppMode } from './MultiAppMode';
import { RunningAppClone } from './RunningAppClone';
import { RunningMultiInstanceInfo } from './RunningMultiInstanceInfo';

/**
 * The class of running multi app information.
 *
 * @typedef RunningMultiAppInfo
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 12
 */
export interface RunningMultiAppInfo {


  /**
   * The name of the bundle.
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12
   */
  bundleName: string;

  /**
   * The app multi mode.
   *
   * @type { MultiAppMode }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12
   */
  mode: MultiAppMode;

  /**
   * All running instance info for bundle if mode is {@link MULTI_INSTANCE}.
   *
   * @type { ?Array<RunningMultiInstanceInfo> }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14
   */
  runningMultiInstances?: Array<RunningMultiInstanceInfo>;

  /**
   * All running app info for bundle if mode is {@link APP_CLONE}.
   *
   * @type { ?Array<RunningAppClone> }
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12
   */
  runningAppClones?: Array<RunningAppClone>;
}