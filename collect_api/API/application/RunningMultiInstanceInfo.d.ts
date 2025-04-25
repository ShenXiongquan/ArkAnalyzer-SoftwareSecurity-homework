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

/**
 * The class of app running instance information.
 *
 * @typedef RunningMultiInstanceInfo
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 14
 */
export interface RunningMultiInstanceInfo {
    /**
     * The index of current instance.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 14
     */
     instanceKey: string;
  
    /**
     * The uid of current app instance.
     *
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 14
     */
    uid: number;
  
    /**
     * All pids of current app instance.
     *
     * @type { Array<number> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 14
     */
    pids: Array<number>;
  }