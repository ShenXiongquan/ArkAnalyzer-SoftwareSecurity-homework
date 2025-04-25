/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file Provides sorting information about an active notification
 * @kit NotificationKit
 */

import { NotificationSlot } from './notificationSlot';

/**
 * Provides sorting information about an active notification.
 *
 * @typedef NotificationSorting
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 7
 */
export interface NotificationSorting {
  /**
   * Notify the channel content.
   *
   * @type { NotificationSlot }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  readonly slot: NotificationSlot;

  /**
   * Notify the unique ID.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  readonly hashCode: string;

  /**
   * Notify the sort number.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7
   */
  readonly ranking: number;
}
