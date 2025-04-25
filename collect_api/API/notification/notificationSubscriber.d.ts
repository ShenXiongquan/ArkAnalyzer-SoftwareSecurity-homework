/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file Provides methods that will be called back when the subscriber receives a new notification or a notification is canceled
 * @kit NotificationKit
 */

import { NotificationRequest } from './notificationRequest';
import { NotificationSortingMap } from './notificationSortingMap';
import notification from '../@ohos.notification';
import type notificationManager from '../@ohos.notificationManager';

/**
 * Provides methods that will be called back when the subscriber receives a new notification or
 * a notification is canceled.
 *
 * @interface NotificationSubscriber
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 7
 */
export interface NotificationSubscriber {
  /**
   * The callback function that receives a new notification.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  onConsume?: (data: SubscribeCallbackData) => void;

  /**
   * The callback function that cancels the notification.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  onCancel?: (data: SubscribeCallbackData) => void;

  /**
   * The callback function that updates the sort of notifications.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  onUpdate?: (data: NotificationSortingMap) => void;

  /**
   * The callback function of the completed subscription.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  onConnect?: () => void;

  /**
   * The callback function to unsubscribe.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  onDisconnect?: () => void;

  /**
   * The callback function that service disconnected.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  onDestroy?: () => void;

  /**
   * Callback when the Do Not Disturb setting changed.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   * @deprecated since 11
   * @useinstead NotificationSubscriber#onDoNotDisturbChanged
   */
  onDoNotDisturbDateChange?: (mode: notification.DoNotDisturbDate) => void;

  /**
   * Callback when the Do Not Disturb setting changed.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  onDoNotDisturbChanged?: (mode: notificationManager.DoNotDisturbDate) => void;

  /**
   * Callback when the notification permission is changed.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   */
  onEnabledNotificationChanged?: (callbackData: EnabledNotificationCallbackData) => void;

  /**
   * Callback when badge number changed.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10
   */
  onBadgeChanged?: (data: BadgeNumberCallbackData) => void;

  /**
   * Callback when badge enabled state changed.
   *
   * @type { ?BadgeEnabledChangedCallback }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  onBadgeEnabledChanged?: BadgeEnabledChangedCallback;

  /**
   * Callback when badge cancel notifications.
   *
   * @type { ?function }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  onBatchCancel?: (data: Array<SubscribeCallbackData>) => void;
}

/**
 * Provides methods that will be called back when the subscriber receives a new notification or
 * a notification is canceled.
 *
 * @typedef SubscribeCallbackData
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 7
 */
export interface SubscribeCallbackData {
  /**
   * Content of the notice.
   *
   * @type { NotificationRequest }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  readonly request: NotificationRequest;

  /**
   * Notify sorting information.
   *
   * @type { ?NotificationSortingMap }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  readonly sortingMap?: NotificationSortingMap;

  /**
   * The reason for the deletion.(1:CLICK_REASON_REMOVE,2:CANCEL_REASON_REMOVE)
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  readonly reason?: number;

  /**
   * Notification sound.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  readonly sound?: string;

  /**
   * Notice the vibration.
   *
   * @type { ?Array<number> }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  readonly vibrationValues?: Array<number>;
}

/**
 * Describes the properties of the application that the permission to send notifications 
 * or the badge enabled state has changed.
 *
 * @typedef EnabledNotificationCallbackData
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 8
 */
export interface EnabledNotificationCallbackData {
  /**
   * The bundle name of the application.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   */
  readonly bundle: string;

  /**
   * The uid of the application.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   */
  readonly uid: number;

  /**
   * Apply notification enable status.
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 8
   */
  readonly enable: boolean;
}

/**
 * Describes the badge number of the application has changed.
 *
 * @typedef BadgeNumberCallbackData
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 10
 */
export interface BadgeNumberCallbackData {
  /**
   * bundle name
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10
   */
  readonly bundle: string;

  /**
   * The uid of the application.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10
   */
  readonly uid: number;

  /**
   * badge number
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10
   */
  readonly badgeNumber: number;

  /**
   * Application instance key.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   * @deprecated since 15
   * @useinstead BadgeNumberCallbackData#appInstanceKey
   */
  readonly instanceKey?: number;

  /**
   * Application instance key.
   *
   * @type { ?string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 15
   */
  readonly appInstanceKey?: string;
}

/**
 * Defines the callback of BadgeEnabledChanged.
 * @typedef BadgeEnabledChangedCallback
 * @syscap SystemCapability.Notification.Notification
 * @since 12
 */
export interface BadgeEnabledChangedCallback {
  /**
   * Defines the BadgeEnabledChanged callback.
   * @param { EnabledNotificationCallbackData } data
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  (data: EnabledNotificationCallbackData): void;
}
