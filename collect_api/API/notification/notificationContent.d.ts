/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * @file Some notification types and content
 * @kit NotificationKit
 */

import notification from '../@ohos.notification';
import image from '../@ohos.multimedia.image';
import { Resource } from '../global/resource';
import type notificationManager from '../@ohos.notificationManager';

/**
 * Describes icon type.
 *
 * @typedef { Resource | image.PixelMap } IconType
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 18
 */
type IconType = Resource | image.PixelMap;

/**
 * Describes a normal text notification.
 *
 * @typedef NotificationBasicContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
/**
 * Describes a normal text notification.
 *
 * @typedef NotificationBasicContent
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @since 12
 */
export interface NotificationBasicContent {
  /**
   * Title of the normal text notification.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Title of the normal text notification.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  title: string;

  /**
   * Content of the normal text notification.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Content of the normal text notification.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  text: string;

  /**
   * Additional information of the normal text notification.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  additionalText?: string;

  /**
   * Data image of the lock screen.
   *
   * @type { ?image.PixelMap }
   * @syscap SystemCapability.Notification.Notification
   * @since 12
   */
  lockscreenPicture?: image.PixelMap;
}

/**
 * Describes a long text notification.
 *
 * @typedef NotificationLongTextContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
/**
 * Describes a long text notification.
 *
 * @extends NotificationBasicContent
 * @typedef NotificationLongTextContent
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @since 12
 */
export interface NotificationLongTextContent extends NotificationBasicContent {
  /**
   * Long text content of the notification.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Long text content of the notification.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  longText: string;

  /**
   * Brief text of the long text notification.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Brief text of the long text notification.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  briefText: string;

  /**
   * Title that will be displayed for the long text notification when it is expanded.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Title that will be displayed for the long text notification when it is expanded.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  expandedTitle: string;
}

/**
   * Enum for live view notification option type.
   *
   * @enum { number }
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 11
   */
export enum LiveViewStatus {
  /**
   * Create the live view notification.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 11
   */
  LIVE_VIEW_CREATE = 0,
  /**
   * Batch update the live view notification.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 11
   */
  LIVE_VIEW_INCREMENTAL_UPDATE = 1,
  /**
   * Complete the live view notification.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 11
   */
  LIVE_VIEW_END = 2,
  /**
   * Full update the live view notification.
   *
   * @syscap SystemCapability.Security.AccessToken
   * @systemapi
   * @since 11
   */
  LIVE_VIEW_FULL_UPDATE = 3
}

/**
 * Enum for live view notification task type.
 *
 * @enum { number }
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 18
 */
export enum LiveViewTypes {
  /**
   * Real-time activity live view Notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  LIVE_VIEW_ACTIVITY = 0,
  /**
   * Instant Task live view Notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  LIVE_VIEW_INSTANT = 1,
  /**
   * Long-term status task live view Notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  LIVE_VIEW_LONG_TERM = 2
}

/**
 * Describes a live view notification.
 *
 * @extends NotificationBasicContent
 * @typedef NotificationLiveViewContent
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 11
 */
export interface NotificationLiveViewContent extends NotificationBasicContent {
  /**
   * Status of the live view (0: create, 1: batch update, 2: end, 3: full update).
   *
   * @type { LiveViewStatus }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  status: LiveViewStatus;

  /**
   * Version of the live view with the same id. (If the version number stored in the database is 0xffffffff,
   * the version number is not verified at the current operation of update or end. Otherwise, the
   * version number must be greater than the version number stored in the database.)
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  version?: number;

  /**
   * Additional information of the live view notification.
   *
   * @type { ?Record<string, Object>}
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  extraInfo?: Record<string, Object>;

  /**
   * The picture information list of the live view notification.
   *
   * @type { ?Record<string, Array<image.PixelMap>> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  pictureInfo?: Record<string, Array<image.PixelMap>>;

  /**
   * Whether to update locally.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  isLocalUpdateOnly?: boolean;
}

/**
 * Describes a multi-line text notification.
 *
 * @typedef NotificationMultiLineContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
/**
 * Describes a multi-line text notification.
 *
 * @extends NotificationBasicContent
 * @typedef NotificationMultiLineContent
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @since 12
 */
export interface NotificationMultiLineContent extends NotificationBasicContent {
  /**
   * Brief text of the multi-line text notification.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Brief text of the multi-line text notification.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  briefText: string;

  /**
   * Long title of the multi-line text notification.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Long title of the multi-line text notification.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  longTitle: string;

  /**
   * Multi-line content of the multi-line text notification.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Multi-line content of the multi-line text notification.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  lines: Array<string>;
}

/**
 * Describes a picture-attached notification.
 *
 * @extends NotificationBasicContent
 * @typedef NotificationPictureContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
export interface NotificationPictureContent extends NotificationBasicContent {
  /**
   * Brief text of the multi-line text notification.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  briefText: string;

  /**
   * Title that will be displayed for the picture-attached notification when it is expanded.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  expandedTitle: string;

  /**
   * Picture to be included in a notification.
   *
   * @type { image.PixelMap }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  picture: image.PixelMap;
}

/**
 * Describes a system live view notification.
 *
 * @extends NotificationBasicContent
 * @typedef NotificationSystemLiveViewContent
 * @syscap SystemCapability.Notification.Notification
 * @since 11
 */
export interface NotificationSystemLiveViewContent extends NotificationBasicContent {
  /**
   * type code of a system live view notification.
   *
   * @type { number }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  typeCode: number;

  /**
   * capsule of a system live view notification.
   *
   * @type { ?NotificationCapsule }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  capsule?: NotificationCapsule;

  /**
   * button of a system live view notification.
   *
   * @type { ?NotificationButton }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  button?: NotificationButton;

  /**
   * card button of a system live view notification.
   *
   * @type { ?Array<NotificationIconButton> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  cardButtons?: Array<NotificationIconButton>;

  /**
   * type of a system live view notification.
   *
   * @type { ?NotificationTime }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  time?: NotificationTime;

  /**
   * progress of a system live view notification.
   *
   * @type { ?NotificationProgress }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  progress?: NotificationProgress;

  /**
   * task type of a system live view notification.
   *
   * @type { number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  liveViewType?: LiveViewTypes;
}

/**
 * Describes a system live view capsule type.
 *
 * @typedef NotificationCapsule
 * @syscap SystemCapability.Notification.Notification
 * @since 11
 */
export interface NotificationCapsule {
  /**
   * Title displayed in this capsule.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  title?: string;

  /**
   * Icon displayed in this capsule.
   *
   * @type { ?image.PixelMap }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  icon?: image.PixelMap;

  /**
   * Background color of this capsule.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  backgroundColor?: string;

  /**
   * Extended text of this capsule.
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  content?: string;

  /**
   * Display time of this capsule.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  time?: number;

  /**
   * Extended button of this capsule.
   *
   * @type { ?Array<NotificationIconButton> }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  capsuleButtons?: Array<NotificationIconButton>;
}

/**
 * Describes a system live view button with icon.
 *
 * @typedef NotificationIconButton
 * @syscap SystemCapability.Notification.Notification
 * @since 18
 */
export interface NotificationIconButton {

  /**
   * button unique name.
   *
   * @type { string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  name: string;

  /**
   * button icon resource.
   *
   * @type { IconType }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  iconResource: IconType;

  /**
   * addition text of the icon buttion
   *
   * @type { ?string }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  text?: string;

  /**
   * hide the panel when click the icon button.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  hidePanel?: boolean;
}

/**
 * Describes a system live view button type.
 *
 * @typedef NotificationButton
 * @syscap SystemCapability.Notification.Notification
 * @since 11
 */
export interface NotificationButton {
  /**
   * array of button names.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  names?: Array<string>;

  /**
   * array of button icons.
   *
   * @type { ?Array<image.PixelMap> }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  icons?: Array<image.PixelMap>;

  /**
   * array of button icons resource.
   *
   * @type { ?Array<Resource> }
   * @syscap SystemCapability.Notification.Notification
   * @since 12
   */
  iconsResource?: Array<Resource>;
}

/**
 * Describes a system live view time type.
 *
 * @typedef NotificationTime
 * @syscap SystemCapability.Notification.Notification
 * @since 11
 */
export interface NotificationTime {
  /**
   * The initial time of this notification.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  initialTime?: number;

  /**
   *
   * Count down the time.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  isCountDown?: boolean;

  /**
   * The time is paused.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  isPaused?: boolean;

  /**
   * The time should be displayed in title.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  isInTitle?: boolean;
}

/**
 * Describes a system live view progress type.
 *
 * @typedef NotificationProgress
 * @syscap SystemCapability.Notification.Notification
 * @since 11
 */
export interface NotificationProgress {
  /**
   * Max value of this progress.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  maxValue?: number;

  /**
   * Current value of this progress.
   *
   * @type { ?number }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  currentValue?: number;

  /**
   * Use percentage mode in this progress.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  isPercentage?: boolean;
}

/**
 * Describes notification types.
 *
 * @typedef NotificationContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
/**
 * Describes notification types.
 *
 * @typedef NotificationContent
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @since 12
 */
export interface NotificationContent {
  /**
   * Notification content type.
   *
   * @type { ?notification.ContentType }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   * @deprecated since 11
   * @useinstead NotificationContent#notificationContentType
   */
  contentType?: notification.ContentType;

  /**
   * Notification content type.
   *
   * @type { ?notificationManager.ContentType }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  /**
   * Notification content type.
   *
   * @type { ?notificationManager.ContentType }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  notificationContentType?: notificationManager.ContentType;

  /**
   * Normal text notification.
   *
   * @type { ?NotificationBasicContent }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Normal text notification.
   *
   * @type { ?NotificationBasicContent }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  normal?: NotificationBasicContent;

  /**
   * Long text notification.
   *
   * @type { ?NotificationLongTextContent }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Long text notification.
   *
   * @type { ?NotificationLongTextContent }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  longText?: NotificationLongTextContent;

  /**
   * Multi-line text notification.
   *
   * @type { ?NotificationMultiLineContent }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  /**
   * Multi-line text notification.
   *
   * @type { ?NotificationMultiLineContent }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  multiLine?: NotificationMultiLineContent;

  /**
   * Picture-attached notification.
   *
   * @type { ?NotificationPictureContent }
   * @syscap SystemCapability.Notification.Notification
   * @since 7
   */
  picture?: NotificationPictureContent;

  /**
   * System-live-view notification.
   *
   * @type { ?NotificationSystemLiveViewContent }
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  systemLiveView?: NotificationSystemLiveViewContent;

  /**
   * live-view notification.
   *
   * @type { ?NotificationLiveViewContent }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  liveView?: NotificationLiveViewContent;
}
