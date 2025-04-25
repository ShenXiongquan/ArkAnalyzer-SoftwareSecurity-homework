/*
 * Copyright (c) 2023-2023 Huawei Device Co., Ltd.
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
 * @kit AudioKit
 */

import type systemSoundManager from '../@ohos.multimedia.systemSoundManager';
import { ErrorCallback, Callback } from '../@ohos.base';
/**
 * System tone player object.
 * @typedef SystemTonePlayer
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 * @since 11
 */
export interface SystemTonePlayer {
  /**
   * Gets the title of system tone.
   * @returns { Promise<string> } Promise used to return the title.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 5400103 - I/O error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11
   */
  getTitle(): Promise<string>;

  /**
   * Sets the volume scale of audio.
   * @param { number } scale - Audio volume scale, should be float in [0,1]
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                 1.Mandatory parameters are left unspecified;
   *                                 2.Incorrect parameter types.
   * @throws { BusinessError } 5400102 - Operation not allowed.
   * @throws { BusinessError } 20700002 - Parameter check error. For example, value is outside [0,1].
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13
   */
  setAudioVolumeScale(scale: number): void;

  /**
   * Gets the volume scale of audio.
   * @returns { number } Audio volume scale.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13
   */
  getAudioVolumeScale(): number;

  /**
   * Get supported haptics features currently.
   * @returns { Promise<Array<systemSoundManager.ToneHapticsFeature>> } Promise used to return result of this call.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 20700003 - Unsupported operation.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13
   */
  getSupportedHapticsFeatures(): Promise<Array<systemSoundManager.ToneHapticsFeature>>;

  /**
   * Set haptic feature that is used when playing.
   * @param { systemSoundManager.ToneHapticsFeature } hapticsFeature - haptics Feature.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                 1.Mandatory parameters are left unspecified;
   *                                 2.Incorrect parameter types.
   * @throws { BusinessError } 5400102 - Operation not allowed.
   * @throws { BusinessError } 20700003 - Unsupported operation.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13
   */
  setHapticsFeature(hapticsFeature: systemSoundManager.ToneHapticsFeature): void;

  /**
   * Get haptic feature that is used when playing.
   * @returns { systemSoundManager.ToneHapticsFeature } haptics feature that is used when playing.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 20700003 - Unsupported operation.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 13
   */
  getHapticsFeature(): systemSoundManager.ToneHapticsFeature;

  /**
   * Prepare to play.
   * @returns { Promise<void> } Promise used to return result of prepare.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 5400102 - Operation not allowed.
   * @throws { BusinessError } 5400103 - I/O error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11
   */
  prepare(): Promise<void>;

  /**
   * Start playing the system tone. By default, the audio and haptic will not be muted. Using tone options to mute audio
   * or haptics. If haptics is needed, caller should have the permission of ohos.permission.VIBRATE.
   * @permission ohos.permission.VIBRATE
   * @param { SystemToneOptions } toneOptions - Tone options used for this play.
   * @returns { Promise<number> } Promise used to return the id of this playback.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                 1.Mandatory parameters are left unspecified;
   *                                 2.Incorrect parameter types.
   * @throws { BusinessError } 5400102 - Operation not allowed.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11
   */
  start(toneOptions?: SystemToneOptions): Promise<number>;

  /**
   * Stop with playback id.
   * @param { number } id - The Playback id to stop.
   * @returns { Promise<void> } Promise used to return result of this stop.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                 1.Mandatory parameters are left unspecified;
   *                                 2.Incorrect parameter types.
   * @throws { BusinessError } 5400102 - Operation not allowed.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11
   */
  stop(id: number): Promise<void>;

  /**
   * Release this system tone player.
   * @returns { Promise<void> } Promise used to return result of release.
   * @throws { BusinessError } 202 - Caller is not a system application.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11
   */
  release(): Promise<void>;

  /**
   * Subscribes the play finished events.
   * @param { 'playFinished' } type - Type of the event to listen for.
   * @param { number } streamId - Stream id, received from start().
   * @param { Callback<number> } callback - Callback used to obtain the finished event. The callback info is the stream
   * id that is finished.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 18
   */
  on(type: 'playFinished', streamId: number, callback: Callback<number>): void;

  /**
   * Unsubscribes the play finished events.
   * @param { 'playFinished' } type - Type of the event to listen for.
   * @param { Callback<number> } callback - Callback used to obtain the finished event.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 18
   */
  off(type: 'playFinished', callback?: Callback<number>): void;

  /**
   * Subscribes the error events.
   * @param { 'error'} type - Type of the event to listen for.
   * @param { ErrorCallback } callback - Error callback while receiving the error event.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 18
   */
  on(type: 'error', callback: ErrorCallback): void;

  /**
   * Unsubscribes the error events.
   * @param { 'error'} type - Type of the event to listen for.
   * @param { ErrorCallback } callback - Error callback while receiving the error event.
   * @throws { BusinessError } 202 - Not system App.
   * @throws { BusinessError } 20700002 -Parameter check error.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 18
   */
  off(type: 'error', callback?: ErrorCallback): void
}

/**
 * System tone options used when SystemTonePlayer start playing.
 * @typedef SystemToneOptions
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 * @since 11
 */
export interface SystemToneOptions {
  /**
   * Mute audio.
   * @type {?boolean}
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11
   */
  muteAudio?: boolean;

  /**
   * Mute haptics.
   * @type {?boolean}
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 11
   */
  muteHaptics?: boolean;
}