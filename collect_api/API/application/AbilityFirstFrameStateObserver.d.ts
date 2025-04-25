/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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

import AbilityFirstFrameStateData from './AbilityFirstFrameStateData';

/**
 * The ability first frame state observer.
 * 
 * @interface AbilityFirstFrameStateObserver
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 12
 */
export interface AbilityFirstFrameStateObserver {

    /**
     * Will be called when an ability first frame drawing completed.
     * 
     * @param { AbilityFirstFrameStateData } data - The ability first frame state data.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 12
     */
    onAbilityFirstFrameDrawn(data: AbilityFirstFrameStateData): void;
}