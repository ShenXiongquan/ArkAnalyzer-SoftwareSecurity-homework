/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit AudioKit
 */

import type { Callback, AsyncCallback } from '../@ohos.base';
import type audio from '../@ohos.multimedia.audio';
import type media from '../@ohos.multimedia.media';

/**
 * Interface for ringtone options.
 * @typedef RingtoneOptions
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 * @since 10
 */
export interface RingtoneOptions {
  /**
   * Ringtone volume.
   * @type { number }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  volume: number;
  /**
   * Loop value.
   * @type { boolean }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  loop: boolean;
}

/**
 * Ringtone player object.
 * @typedef RingtonePlayer
 * @syscap SystemCapability.Multimedia.SystemSound.Core
 * @systemapi
 * @since 10
 */
export interface RingtonePlayer {
  /**
   * Gets player state.
   * @type { media.AVPlayerState }
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  readonly state: media.AVPlayerState;

  /**
   * Gets the title of ringtone.
   * @param { AsyncCallback<string> } callback - Callback used to return the title.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  getTitle(callback: AsyncCallback<string>): void;
  /**
   * Gets the title of ringtone.
   * @returns { Promise<string> } Promise used to return the title.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  getTitle(): Promise<string>;

  /**
   * Gets audio renderer info.
   * @param { AsyncCallback<audio.AudioRendererInfo> } callback - Callback used to return AudioRendererInfo value.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  getAudioRendererInfo(callback: AsyncCallback<audio.AudioRendererInfo>): void;
  /**
   * Gets audio renderer info.
   * @returns { Promise<audio.AudioRendererInfo> } Promise used to return AudioRendererInfo value.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  getAudioRendererInfo(): Promise<audio.AudioRendererInfo>;

  /**
   * Configure ringtone options.
   * @param { RingtoneOptions } options - Ringtone configure options.
   * @param { AsyncCallback<void> } callback - Callback used to return configuration result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  configure(options: RingtoneOptions, callback: AsyncCallback<void>): void;
  /**
   * Configure ringtone options.
   * @param { RingtoneOptions } options - Ringtone configure options.
   * @returns { Promise<void> } Promise used to return configuration result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  configure(options: RingtoneOptions): Promise<void>;

  /**
   * Starts playing ringtone.
   * @param { AsyncCallback<void> } callback - Callback used to return the starting result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  start(callback: AsyncCallback<void>): void;
  /**
   * Starts playing ringtone.
   * @returns { Promise<void> } Promise used to return the starting result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  start(): Promise<void>;

  /**
   * Stop playing ringtone.
   * @param { AsyncCallback<void> } callback - Callback used to return the stopping result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  stop(callback: AsyncCallback<void>): void;
  /**
   * Stop playing ringtone.
   * @returns { Promise<void> } Promise used to return the stopping result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  stop(): Promise<void>;

  /**
   * Release ringtone player resource.
   * @param { AsyncCallback<void> } callback - Callback used to return the releasing result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  release(callback: AsyncCallback<void>): void;
  /**
   * Release ringtone player resource.
   * @returns { Promise<void> } Promise used to return the releasing result.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  release(): Promise<void>;

  /**
   * Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is
   * triggered when audio playback is interrupted.
   * @param { 'audioInterrupt' } type - Type of the event to listen for. Only the audioInterrupt event is supported.
   * @param { Callback<audio.InterruptEvent> } callback - Callback used to listen for interrupt callback.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                 1.Mandatory parameters are left unspecified;
   *                                 2.Incorrect parameter types.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void;

  /**
   * Unsubscribes to audio interrupt events.
   * @param { 'audioInterrupt' } type - Type of the event to listen for. Only the audioInterrupt event is supported.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *                                 1.Mandatory parameters are left unspecified;
   *                                 2.Incorrect parameter types.
   * @throws { BusinessError } 6800101 - Parameter verification failed.
   * @syscap SystemCapability.Multimedia.SystemSound.Core
   * @systemapi
   * @since 10
   */
  off(type: 'audioInterrupt'): void
}