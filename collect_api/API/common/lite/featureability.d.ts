/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */

/**
 * @typedef SubscribeMessageResponse
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 5
 * @deprecated since 8
 */
export interface SubscribeMessageResponse {
  /**
   * Peer device ID.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 5
   * @deprecated since 8
   */
  deviceId: string;

  /**
   * Name of the bundle where the peer ability has been located. The name is case sensitive.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 5
   * @deprecated since 8
   */
  bundleName: string;

  /**
   * Peer ability name, which is case sensitive.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 5
   * @deprecated since 8
   */
  abilityName: string;

  /**
   * Messages received from the device.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 5
   * @deprecated since 8
   */
  message: string;
}

/**
 * @typedef SendMessageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 5
 * @deprecated since 8
 */
export interface SendMessageOptions {
  /**
   * Destination device ID.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 5
   * @deprecated since 8
   */
  deviceId: string;

  /**
   * Name of the destination bundle where the ability has been located. The name is case sensitive.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 5
   * @deprecated since 8
   */
  bundleName: string;

  /**
   * Destination ability name, which is case sensitive.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 5
   * @deprecated since 8
   */
  abilityName: string;

  /**
   * Messages sent to the destination device.
   * A maximum of 1 KB of data can be transmitted at a time.
   * If more than 1 KB of data needs to be transmitted, split the messages into multiple parts to transmit.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 5
   * @deprecated since 8
   */
  message?: string;

  /**
   * Called when the messages are sent successfully.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 5
   * @deprecated since 8
   */
  success?: () => void;

  /**
   * Called when the messages fail to be sent.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 5
   * @deprecated since 8
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 5
   * @deprecated since 8
   */
  complete?: () => void;
}

/**
 * @typedef SubscribeMessageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @since 5
 * @deprecated since 8
 */
export interface SubscribeMessageOptions {
  /**
   * Called when the messages are sent successfully.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 5
   * @deprecated since 8
   */
  success?: (data: SubscribeMessageResponse) => void;

  /**
   * Called when the messages fail to be sent.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @since 5
   * @deprecated since 8
   */
  fail?: (data: string, code: number) => void;
}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Lite
 * @systemapi
 * @since 5
 * @deprecated since 8
 * @useinstead ohos.ability.featureAbility.FeatureAbility
 */
export declare class FeatureAbility {
  /**
   * Sends messages to the destination device.
   * @param { SendMessageOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @systemapi
   * @since 5
   * @deprecated since 8
   */
  static sendMsg(options: SendMessageOptions): void;

  /**
   * Listens for messages sent from other devices.
   * @param { SubscribeMessageOptions } options - Options.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @systemapi
   * @since 5
   * @deprecated since 8
   */
  static subscribeMsg(options: SubscribeMessageOptions): void;

  /**
   * Cancel the listening for messages sent from other devices.
   * @syscap SystemCapability.ArkUI.ArkUI.Lite
   * @systemapi
   * @since 5
   * @deprecated since 8
   */
  static unsubscribeMsg(): void;
}
