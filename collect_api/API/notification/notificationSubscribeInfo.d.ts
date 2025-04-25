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
 * @file Sets filter criteria of publishers for subscribing to desired notifications
 * @kit NotificationKit
 */

import type notificationManager from '../@ohos.notificationManager';

/**
 * Sets filter criteria of publishers for subscribing to desired notifications.
 *
 * @typedef NotificationSubscribeInfo
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 7
 */
export interface NotificationSubscribeInfo {
  /**
   * Notifications from APP that specify which package names to subscribe to.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  bundleNames?: Array<string>;

  /**
   * Specify which user to subscribe to the notification from.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  userId?: number;

  /**
   * Subscribing to Notifications Synchronized to Devices of a Specified Type.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  deviceType?: string;

  /**
   * Specifies the scope of notification slots for subscription.
   *
   * @type { ?Array<notificationManager.SlotType> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  slotTypes?: Array<notificationManager.SlotType>;

  /**
   * Filtered notification type range.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  filterLimit?: number;
}
