/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit NotificationKit
 */

import { AsyncCallback } from './@ohos.base';
import { BundleOption as _BundleOption } from './notification/NotificationCommonDef';
import { NotificationActionButton as _NotificationActionButton } from './notification/notificationActionButton';
import { NotificationBasicContent as _NotificationBasicContent } from './notification/notificationContent';
import { NotificationContent as _NotificationContent } from './notification/notificationContent';
import { NotificationLongTextContent as _NotificationLongTextContent } from './notification/notificationContent';
import type { NotificationLiveViewContent as _NotificationLiveViewContent } from './notification/notificationContent';
import { NotificationMultiLineContent as _NotificationMultiLineContent } from './notification/notificationContent';
import { NotificationPictureContent as _NotificationPictureContent } from './notification/notificationContent';
import type { LiveViewStatus as _LiveViewStatus } from './notification/notificationContent';
import type { LiveViewTypes as _LiveViewTypes } from './notification/notificationContent';
import { NotificationSystemLiveViewContent as _NotificationSystemLiveViewContent } from './notification/notificationContent';
import { NotificationCapsule as _NotificationCapsule } from './notification/notificationContent';
import { NotificationButton as _NotificationButton } from './notification/notificationContent';
import { NotificationTime as _NotificationTime } from './notification/notificationContent';
import { NotificationProgress as _NotificationProgress } from './notification/notificationContent';
import { NotificationFlags as _NotificationFlags } from './notification/notificationFlags';
import { NotificationFlagStatus as _NotificationFlagStatus } from './notification/notificationFlags';
import { NotificationRequest as _NotificationRequest } from './notification/notificationRequest';
import { UnifiedGroupInfo as _UnifiedGroupInfo } from './notification/notificationRequest';
import { DistributedOptions as _DistributedOptions } from './notification/notificationRequest';
import type { NotificationFilter as _NotificationFilter } from './notification/notificationRequest';
import type { NotificationCheckRequest as _NotificationCheckRequest } from './notification/notificationRequest';
import { NotificationSlot as _NotificationSlot } from './notification/notificationSlot';
import { NotificationSorting as _NotificationSorting } from './notification/notificationSorting';
import { NotificationTemplate as _NotificationTemplate } from './notification/notificationTemplate';
import { NotificationUserInput as _NotificationUserInput } from './notification/notificationUserInput';
import type UIAbilityContext from './application/UIAbilityContext';

/**
 * Manages notifications.
 * <p>Generally, only system applications have permissions on notification subscription and unsubscribe.
 * You can specify the content of a notification to be published and the content is carried by
 * {@link NotificationRequest}. A notification ID is unique in an application and must be specified
 * when using {@link NotificationRequest} to carry the notification content. If a notification
 * with this ID has been published and you need to use this ID to publish another notification,
 * the original notification will be updated. In addition, the notification ID can be used to cancel
 * a notification by calling the {@link #cancel(int)} method.
 *
 * @namespace notificationManager
 * @syscap SystemCapability.Notification.Notification
 * @since 9
 */
/**
 * Manages notifications.
 * <p>Generally, only system applications have permissions on notification subscription and unsubscribe.
 * You can specify the content of a notification to be published and the content is carried by
 * {@link NotificationRequest}. A notification ID is unique in an application and must be specified
 * when using {@link NotificationRequest} to carry the notification content. If a notification
 * with this ID has been published and you need to use this ID to publish another notification,
 * the original notification will be updated. In addition, the notification ID can be used to cancel
 * a notification by calling the {@link #cancel(int)} method.
 *
 * @namespace notificationManager
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare namespace notificationManager {
  /**
   * Publishes a notification.
   * <p>If a notification with the same ID has been published by the current application and has not been deleted,
   * this method will update the notification.
   *
   * @param { NotificationRequest } request - notification request
   * @param { AsyncCallback<void> } callback - The callback of publish.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Publishes a notification.
   * <p>If a notification with the same ID has been published by the current application and has not been deleted,
   * this method will update the notification.
   *
   * @param { NotificationRequest } request - notification request
   * @param { AsyncCallback<void> } callback - The callback of publish.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  /**
   * Publishes a notification.
   * <p>If a notification with the same ID has been published by the current application and has not been deleted,
   * this method will update the notification.
   *
   * @param { NotificationRequest } request - notification request
   * @param { AsyncCallback<void> } callback - The callback of publish.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  function publish(request: NotificationRequest, callback: AsyncCallback<void>): void;

  /**
   * Publishes a notification.
   * <p>If a notification with the same ID has been published by the current application and has not been deleted,
   * this method will update the notification.
   *
   * @param { NotificationRequest } request - notification request
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Publishes a notification.
   * <p>If a notification with the same ID has been published by the current application and has not been deleted,
   * this method will update the notification.
   *
   * @param { NotificationRequest } request - notification request
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  /**
   * Publishes a notification.
   * <p>If a notification with the same ID has been published by the current application and has not been deleted,
   * this method will update the notification.
   *
   * @param { NotificationRequest } request - notification request
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  function publish(request: NotificationRequest): Promise<void>;

  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationRequest } request - a notification.
   * @param { number } userId - of subscriber receiving the notification.
   * @param { AsyncCallback<void> } callback - The callback of publish.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationRequest } request - a notification.
   * @param { number } userId - of subscriber receiving the notification.
   * @param { AsyncCallback<void> } callback - The callback of publish.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.SEND_NOTIFICATION_CROSS_USER
   * @param { NotificationRequest } request - a notification.
   * @param { number } userId - of subscriber receiving the notification.
   * @param { AsyncCallback<void> } callback - The callback of publish.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function publish(request: NotificationRequest, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationRequest } request - a notification.
   * @param { number } userId - of subscriber receiving the notification.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationRequest } request - a notification.
   * @param { number } userId - of subscriber receiving the notification.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Publishes a notification to the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.SEND_NOTIFICATION_CROSS_USER
   * @param { NotificationRequest } request - a notification.
   * @param { number } userId - of subscriber receiving the notification.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600014 - No permission.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function publish(request: NotificationRequest, userId: number): Promise<void>;

  /**
   * Publishes a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { NotificationRequest } request - a notification.
   * @param { string } representativeBundle - bundle name of the representative
   * @param { number } userId - userid of the representative
   * @param { AsyncCallback<void> } callback - The callback of publishAsBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function publishAsBundle(
    request: NotificationRequest,
    representativeBundle: string,
    userId: number,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Publishes a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { NotificationRequest } request - a notification.
   * @param { string } representativeBundle - bundle name of the representative
   * @param { number } userId - userid of the representative
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function publishAsBundle(request: NotificationRequest, representativeBundle: string, userId: number): Promise<void>;

  /**
   * Publishes a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { BundleOption } representativeBundle - bundle option of the representative.
   * @param { NotificationRequest } request - a notification.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600005 - Notification slot disabled.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
   * @throws { BusinessError } 1600016 - The notification version for this update is too low.
   * @throws { BusinessError } 2300007 - Network unreachable.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  function publishAsBundle(representativeBundle: BundleOption, request: NotificationRequest): Promise<void>;

  /**
   * Cancel a notification with the specified ID.
   *
   * @param { number } id - ID of the notification to cancel, which must be unique in the application.
   * @param { AsyncCallback<void> } callback - The callback of cancel.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Cancel a notification with the specified ID.
   *
   * @param { number } id - ID of the notification to cancel, which must be unique in the application.
   * @param { AsyncCallback<void> } callback - The callback of cancel.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  function cancel(id: number, callback: AsyncCallback<void>): void;

  /**
   * Cancel a notification with the specified label and ID.
   *
   * @param { number } id - ID of the notification to cancel, which must be unique in the application.
   * @param { string } label - Label of the notification to cancel.
   * @param { AsyncCallback<void> } callback - The callback of cancel.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function cancel(id: number, label: string, callback: AsyncCallback<void>): void;

  /**
   * Cancel a notification with the specified label and ID.
   *
   * @param { number } id - ID of the notification to cancel, which must be unique in the application.
   * @param { string } [label] - Label of the notification to cancel.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function cancel(id: number, label?: string): Promise<void>;

  /**
   * Cancel a notification with the representative and ID.
   *
   * @param { BundleOption } representativeBundle - bundle option of the representative.
   * @param { number } id - ID of the notification to cancel, which must be unique in the application.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600017 - There is no corresponding agent relationship configuration.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  function cancel(representativeBundle: BundleOption, id: number): Promise<void>;

  /**
   * Cancel a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { number } id - ID of the notification to cancel, which must be unique in the application.
   * @param { string } representativeBundle - bundle name of the representative.
   * @param { number } userId - userid of the representative.
   * @param { AsyncCallback<void> } callback - The callback of cancelAsBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function cancelAsBundle(
    id: number,
    representativeBundle: string,
    userId: number,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Cancel a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { number } id - ID of the notification to cancel, which must be unique in the application.
   * @param { string } representativeBundle - bundle name of the representative.
   * @param { number } userId - userid of the representative.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function cancelAsBundle(id: number, representativeBundle: string, userId: number): Promise<void>;

  /**
   * Cancel a representative notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { BundleOption } representativeBundle - bundle option of the representative.
   * @param { number } id - ID of the notification to cancel, which must be unique in the application.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  function cancelAsBundle(representativeBundle: BundleOption, id: number): Promise<void>;

  /**
   * Cancel all notifications of the current application.
   *
   * @param { AsyncCallback<void> } callback - The callback of cancelAll.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Cancel all notifications of the current application.
   *
   * @param { AsyncCallback<void> } callback - The callback of cancelAll.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  function cancelAll(callback: AsyncCallback<void>): void;

  /**
   * Cancel all notifications of the current application.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Cancel all notifications of the current application.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  function cancelAll(): Promise<void>;

  /**
   * Creates a notification slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSlot } slot - Indicates the notification slot to be created, which is set by {@link NotificationSlot}.
   * @param { AsyncCallback<void> } callback - The callback of addSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function addSlot(slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * Creates a notification slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationSlot } slot - Indicates the notification slot to be created, which is set by {@link NotificationSlot}.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function addSlot(slot: NotificationSlot): Promise<void>;

  /**
   * Adds a slot type.
   *
   * @param { SlotType } type - Slot type to add.
   * @param { AsyncCallback<void> } callback - The callback of addSlot.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function addSlot(type: SlotType, callback: AsyncCallback<void>): void;

  /**
   * Adds a slot type.
   *
   * @param { SlotType } type - Slot type to add.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function addSlot(type: SlotType): Promise<void>;

  /**
   * Creates notification slots.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationSlot> } slots - Indicates the notification slots to be created, which is set by {@link NotificationSlot}.
   * @param { AsyncCallback<void> } callback - The callback of addSlots.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function addSlots(slots: Array<NotificationSlot>, callback: AsyncCallback<void>): void;

  /**
   * Creates notification slots.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<NotificationSlot> } slots - Indicates the notification slots to be created, which is set by {@link NotificationSlot}.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function addSlots(slots: Array<NotificationSlot>): Promise<void>;

  /**
   * Obtains a notification slot of the specified slot type.
   *
   * @param { SlotType } slotType - Type of the notification slot to obtain.
   * @param { AsyncCallback<NotificationSlot> } callback - The callback is used to return the NotificationSlot.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot>): void;

  /**
   * Obtains a notification slot of the specified slot type.
   *
   * @param { SlotType } slotType - Type of the notification slot to obtain.
   * @returns { Promise<NotificationSlot> } Returns the NotificationSlot.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function getSlot(slotType: SlotType): Promise<NotificationSlot>;

  /**
   * Obtains all NotificationSlot objects created by the current application.
   *
   * @param { AsyncCallback<Array<NotificationSlot>> } callback - The callback is used to return all notification slots
   *                                                              of this application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function getSlots(callback: AsyncCallback<Array<NotificationSlot>>): void;

  /**
   * Obtains all NotificationSlot objects created by the current application.
   *
   * @returns { Promise<Array<NotificationSlot>> } Returns all notification slots of this application.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function getSlots(): Promise<Array<NotificationSlot>>;

  /**
   * Obtains allow notification application list.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<Array<BundleOption>> } Returns all enable notification applications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  function getAllNotificationEnabledBundles(): Promise<Array<BundleOption>>;

  /**
   * Removes a NotificationSlot of the specified SlotType created by the current application.
   *
   * @param { SlotType } slotType - Type of the NotificationSlot to remove.
   * @param { AsyncCallback<void> } callback - The callback of removeSlot.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function removeSlot(slotType: SlotType, callback: AsyncCallback<void>): void;

  /**
   * Removes a NotificationSlot of the specified SlotType created by the current application.
   *
   * @param { SlotType } slotType - Type of the NotificationSlot to remove.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function removeSlot(slotType: SlotType): Promise<void>;

  /**
   * Removes all NotificationSlot objects created by the current application.
   *
   * @param { AsyncCallback<void> } callback - The callback of removeAllSlots.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function removeAllSlots(callback: AsyncCallback<void>): void;

  /**
   * Removes all NotificationSlot objects created by the current application.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function removeAllSlots(): Promise<void>;

  /**
   * Set whether the application can send notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setNotificationEnable.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function setNotificationEnable(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set whether the application can send notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function setNotificationEnable(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * Checks whether this application allows to publish notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<boolean> } callback - The callback of isNotificationEnabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function isNotificationEnabled(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether this application allows to publish notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function isNotificationEnabled(bundle: BundleOption): Promise<boolean>;

  /**
   * Checks whether this application allows to publish notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<boolean> } callback - The callback of isNotificationEnabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Checks whether this application allows to publish notifications.
   *
   * @param { AsyncCallback<boolean> } callback - The callback of isNotificationEnabled.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  /**
   * Checks whether this application allows to publish notifications.
   *
   * @param { AsyncCallback<boolean> } callback - The callback of isNotificationEnabled.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  function isNotificationEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether this application allows to publish notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Checks whether this application allows to publish notifications.
   *
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  /**
   * Checks whether this application allows to publish notifications.
   *
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  function isNotificationEnabled(): Promise<boolean>;

  /**
   * Checks whether this application allows to publish notifications.
   *
   * @returns { boolean } Returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 12
   */
  function isNotificationEnabledSync(): boolean;

  /**
   * Checks whether this application allows to publish notifications under the user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userid of the representative.
   * @param { AsyncCallback<boolean> } callback - The callback of isNotificationEnabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function isNotificationEnabled(userId: number, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether this application allows to publish notifications under the user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userid of the representative.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function isNotificationEnabled(userId: number): Promise<boolean>;

  /**
   * Sets whether to allow the specified application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of displayBadge.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Sets whether to allow the specified application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of displayBadge.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function displayBadge(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether to allow the specified application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Sets whether to allow the specified application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function displayBadge(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * Obtains the flag that whether to allow the application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<boolean> } callback - The callback of isBadgeDisplayed.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the flag that whether to allow the application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<boolean> } callback - The callback of isBadgeDisplayed.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function isBadgeDisplayed(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains the flag that whether to allow the application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the flag that whether to allow the application to show badge.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function isBadgeDisplayed(bundle: BundleOption): Promise<boolean>;

  /**
   * Update all notification slots for the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { NotificationSlot } slot - Indicates the notification slot.
   * @param { AsyncCallback<void> } callback - The callback of setSlotByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Update all notification slots for the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { NotificationSlot } slot - Indicates the notification slot.
   * @param { AsyncCallback<void> } callback - The callback of setSlotByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot, callback: AsyncCallback<void>): void;

  /**
   * Update all notification slots for the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { NotificationSlot } slot - Indicates the notification slot.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Update all notification slots for the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { NotificationSlot } slot - Indicates the notification slot.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setSlotByBundle(bundle: BundleOption, slot: NotificationSlot): Promise<void>;

  /**
   * Obtains all notification slots belonging to the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<Array<NotificationSlot>> } callback - The callback of getSlotsByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains all notification slots belonging to the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<Array<NotificationSlot>> } callback - The callback of getSlotsByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function getSlotsByBundle(bundle: BundleOption, callback: AsyncCallback<Array<NotificationSlot>>): void;

  /**
   * Get notification slot for the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } slotType - Indicates the notification slot.
   * @returns { Promise<NotificationSlot> } Returns the NotificationSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Get notification slot for the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } slotType - Indicates the notification slot.
   * @returns { Promise<NotificationSlot> } Returns the NotificationSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function getSlotByBundle(bundle: BundleOption, slotType: SlotType): Promise<NotificationSlot>;

  /**
   * Obtains all notification slots belonging to the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<Array<NotificationSlot>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains all notification slots belonging to the specified bundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<Array<NotificationSlot>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function getSlotsByBundle(bundle: BundleOption): Promise<Array<NotificationSlot>>;

  /**
   * Obtains number of slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<number> } callback - The callback of getSlotNumByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains number of slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<number> } callback - The callback of getSlotNumByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function getSlotNumByBundle(bundle: BundleOption, callback: AsyncCallback<number>): void;

  /**
   * Obtains number of slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains number of slot.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function getSlotNumByBundle(bundle: BundleOption): Promise<number>;

  /**
   * Obtains all active notifications in the current system. The caller must have system permissions to
   * call this method.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<Array<NotificationRequest>> } callback - The callback of getAllActiveNotifications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function getAllActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;

  /**
   * Obtains all active notifications in the current system. The caller must have system permissions to
   * call this method.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<Array<NotificationRequest>> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function getAllActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * Obtains the number of all active notifications.
   *
   * @param { AsyncCallback<number> } callback - The callback of getActiveNotificationCount.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function getActiveNotificationCount(callback: AsyncCallback<number>): void;

  /**
   * Obtains the number of all active notifications.
   *
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function getActiveNotificationCount(): Promise<number>;

  /**
   * Obtains an array of active notifications.
   *
   * @param { AsyncCallback<Array<NotificationRequest>> } callback - The callback of getActiveNotifications.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;

  /**
   * Obtains an array of active notifications.
   *
   * @returns { Promise<Array<NotificationRequest>> } The promise returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function getActiveNotifications(): Promise<Array<NotificationRequest>>;

  /**
   * Get the live view notification by bundle option and notification key. If the extraInfoKeys is provided,
   * filter the additional information of the live view notification and return the filtered result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationFilter } filter - The bundle, notification key and additional information filter of the live view notification.
   * @param { AsyncCallback<NotificationRequest> } callback - The callback of getActiveNotificationByFilter.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  function getActiveNotificationByFilter(filter: NotificationFilter, callback: AsyncCallback<NotificationRequest>): void;

  /**
   * Get the live view notification by bundle option and notification key. If the extraInfoKeys is provided,
   * filter the additional information of the live view notification and return the filtered result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { NotificationFilter } filter - The bundle, notification key and additional information filter of the live view notification.
   * @returns { Promise<NotificationRequest> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  function getActiveNotificationByFilter(filter: NotificationFilter): Promise<NotificationRequest>;

  /**
   * Cancel the notification of a specified group for this application.
   *
   * @param { string } groupName - The name of the group.
   * @param { AsyncCallback<void> } callback - The callback of cancelGroup.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function cancelGroup(groupName: string, callback: AsyncCallback<void>): void;

  /**
   * Cancel the notification of a specified group for this application.
   *
   * @param { string } groupName - The name of the group.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function cancelGroup(groupName: string): Promise<void>;

  /**
   * Delete the notification of a specified group for this application.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { string } groupName - The name of the group.
   * @param { AsyncCallback<void> } callback - The callback of removeGroupByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function removeGroupByBundle(bundle: BundleOption, groupName: string, callback: AsyncCallback<void>): void;

  /**
   * Delete the notification of a specified group for this application.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { string } groupName - The name of the group.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function removeGroupByBundle(bundle: BundleOption, groupName: string): Promise<void>;

  /**
   * Set the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @param { AsyncCallback<void> } callback - The callback of setDoNotDisturbDate.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @param { AsyncCallback<void> } callback - The callback of setDoNotDisturbDate.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, callback: AsyncCallback<void>): void;

  /**
   * Set the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate): Promise<void>;

  /**
   * Set the Do Not Disturb date under the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @param { number } userId - The userId.
   * @param { AsyncCallback<void> } callback - The callback of setDoNotDisturbDate.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set the Do Not Disturb date under the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @param { number } userId - The userId.
   * @param { AsyncCallback<void> } callback - The callback of setDoNotDisturbDate.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Set the Do Not Disturb date under the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @param { number } userId - The userId.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set the Do Not Disturb date under the specified user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { DoNotDisturbDate } date - The Do Not Disturb date.
   * @param { number } userId - The userId.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setDoNotDisturbDate(date: DoNotDisturbDate, userId: number): Promise<void>;

  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DoNotDisturbDate> } callback - The callback is used to return the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DoNotDisturbDate> } callback - The callback is used to return the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function getDoNotDisturbDate(callback: AsyncCallback<DoNotDisturbDate>): void;

  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DoNotDisturbDate> } Returns the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DoNotDisturbDate> } Returns the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function getDoNotDisturbDate(): Promise<DoNotDisturbDate>;

  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userId.
   * @param { AsyncCallback<DoNotDisturbDate> } callback - The callback is used to return the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userId.
   * @param { AsyncCallback<DoNotDisturbDate> } callback - The callback is used to return the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function getDoNotDisturbDate(userId: number, callback: AsyncCallback<DoNotDisturbDate>): void;

  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userId.
   * @returns { Promise<DoNotDisturbDate> } Returns the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the Do Not Disturb date.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userId.
   * @returns { Promise<DoNotDisturbDate> } Returns the Do Not Disturb date.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function getDoNotDisturbDate(userId: number): Promise<DoNotDisturbDate>;

  /**
   * Obtains whether to support the Do Not Disturb mode.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<boolean> } callback - The callback is used to return whether Do Not Disturb
   *                                              mode is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function isSupportDoNotDisturbMode(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether to support the Do Not Disturb mode.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<boolean> } Returns whether Do Not Disturb mode is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function isSupportDoNotDisturbMode(): Promise<boolean>;

  /**
   * Obtains whether the template is supported by the system.
   *
   * @param { string } templateName - Name of template to be Obtained.
   * @param { AsyncCallback<boolean> } callback - The callback is used to return whether the template is supported.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether the template is supported by the system.
   *
   * @param { string } templateName - Name of template to be Obtained.
   * @returns { Promise<boolean> } Returns whether the template is supported.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function isSupportTemplate(templateName: string): Promise<boolean>;

  /**
   * Request permission to send notification.
   *
   * @param { AsyncCallback<void> } callback - The callback of requestEnableNotification.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Request permission to send notification.
   *
   * @param { AsyncCallback<void> } callback - The callback of requestEnableNotification.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  /**
   * Request permission to send notification.
   *
   * @param { AsyncCallback<void> } callback - The callback of requestEnableNotification.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   * @deprecated since 12
   * @useinstead requestEnableNotification
   */
  function requestEnableNotification(callback: AsyncCallback<void>): void;

  /**
   * Request permission to send notification.
   *
   * @param { UIAbilityContext } context - The context indicates the ability context you want to bind;
   * @param { AsyncCallback<void> } callback - The callback of requestEnableNotification.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @StageModelOnly
   * @since 10
   */
  /**
   * Request permission to send notification.
   *
   * @param { UIAbilityContext } context - The context indicates the ability context you want to bind;
   * @param { AsyncCallback<void> } callback - The callback of requestEnableNotification.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @StageModelOnly
   * @since 11
   */
  /**
   * Request permission to send notification.
   *
   * @param { UIAbilityContext } context - The context indicates the ability context you want to bind;
   * @param { AsyncCallback<void> } callback - The callback of requestEnableNotification.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @StageModelOnly
   * @crossplatform
   * @since 12
   */
  function requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>): void;

  /**
   * Request permission to send notification.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Request permission to send notification.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  /**
   * Request permission to send notification.
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   * @deprecated since 12
   * @useinstead requestEnableNotification
   */
  function requestEnableNotification(): Promise<void>;

  /**
   * Request permission to send notification.
   *
   * @param { UIAbilityContext } context - The context indicates the ability context you want to bind;
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @StageModelOnly
   * @since 10
   */
  /**
   * Request permission to send notification.
   *
   * @param { UIAbilityContext } context - The context indicates the ability context you want to bind;
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @StageModelOnly
   * @since 11
   */
  /**
   * Request permission to send notification.
   *
   * @param { UIAbilityContext } context - The context indicates the ability context you want to bind;
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600004 - Notification disabled.
   * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
   * @syscap SystemCapability.Notification.Notification
   * @StageModelOnly
   * @crossplatform
   * @since 12
   */
  function requestEnableNotification(context: UIAbilityContext): Promise<void>;

  /**
   * Sets whether the device supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setDistributedEnable.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Sets whether the device supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setDistributedEnable.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setDistributedEnable(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether the device supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Sets whether the device supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setDistributedEnable(enable: boolean): Promise<void>;

  /**
   * Obtains whether the device supports distributed notification.
   *
   * @param { AsyncCallback<boolean> } callback - The callback is used to return whether the distributed
   *                                              notification is supported.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function isDistributedEnabled(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether the device supports distributed notification.
   *
   * @returns { Promise<boolean> } Returns whether the distributed notification is supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  function isDistributedEnabled(): Promise<boolean>;

  /**
   * Sets whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setDistributedEnableByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Sets whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setDistributedEnableByBundle.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setDistributedEnableByBundle(bundle: BundleOption, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Sets whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setDistributedEnableByBundle(bundle: BundleOption, enable: boolean): Promise<void>;

  /**
   * Sets whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { string } deviceType - The device type.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Sets whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { string } deviceType - The device type.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setDistributedEnabledByBundle(bundle: BundleOption, deviceType: string, enable: boolean): Promise<void>;

  /**
   * Obtains whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<boolean> } callback - The callback is used to return whether the distributed
   *                                              notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { AsyncCallback<boolean> } callback - The callback is used to return whether the distributed
   *                                              notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function isDistributedEnabledByBundle(bundle: BundleOption, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<boolean> } Returns whether the distributed notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<boolean> } Returns whether the distributed notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function isDistributedEnabledByBundle(bundle: BundleOption): Promise<boolean>;

  /**
   * Obtains whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { string } deviceType - The device type.
   * @returns { Promise<boolean> } Returns whether the distributed notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Obtains whether an application supports distributed notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { string } deviceType - The device type.
   * @returns { Promise<boolean> } Returns whether the distributed notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function isDistributedEnabledByBundle(bundle: BundleOption, deviceType: string): Promise<boolean>;

  /**
   * Sets whether an application supports smart reminders across devices.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - The device type.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Sets whether an application supports smart reminders across devices.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - The device type.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setSmartReminderEnabled(deviceType: string, enable: boolean): Promise<void>;

  /**
   * Obtains whether an application supports smart reminders across devices.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - The device type.
   * @returns { Promise<boolean> } Returns whether the smart reminders across devices notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Obtains whether an application supports smart reminders across devices.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - The device type.
   * @returns { Promise<boolean> } Returns whether the smart reminders across devices notification is supported.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600010 - Distributed operation failed.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function isSmartReminderEnabled(deviceType: string): Promise<boolean>;

  /**
   * Obtains the remind modes of the notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DeviceRemindType> } callback - The callback is used to return the RemindType.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the remind modes of the notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { AsyncCallback<DeviceRemindType> } callback - The callback is used to return the RemindType.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function getDeviceRemindType(callback: AsyncCallback<DeviceRemindType>): void;

  /**
   * Obtains the remind modes of the notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DeviceRemindType> } Returns the RemindType.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains the remind modes of the notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<DeviceRemindType> } Returns the RemindType.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function getDeviceRemindType(): Promise<DeviceRemindType>;

  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setNotificationEnableSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setNotificationEnableSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setNotificationEnableSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setNotificationEnableSlot(
    bundle: BundleOption,
    type: SlotType,
    enable: boolean,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @param { boolean } isForceControl - Is the notification slot enable affected by the application
   *         notification enable, false means affected.
   * @param { AsyncCallback<void> } callback - The callback of setNotificationEnableSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @param { boolean } isForceControl - Is the notification slot enable affected by the application
   *         notification enable, false means affected.
   * @param { AsyncCallback<void> } callback - The callback of setNotificationEnableSlot.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setNotificationEnableSlot(
    bundle: BundleOption,
    type: SlotType,
    enable: boolean,
    isForceControl: boolean,
    callback: AsyncCallback<void>,
  ): void;

  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @param { boolean } isForceControl - Is the notification slot enable affected by the application
   *         notification enable, false means affected.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Set whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { boolean } enable - Set enable or not.
   * @param { boolean } isForceControl - Is the notification slot enable affected by the application
   *         notification enable, false means affected.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setNotificationEnableSlot(bundle: BundleOption, type: SlotType, enable: boolean, isForceControl?: boolean): Promise<void>;

  /**
   * Obtains whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { AsyncCallback<boolean> } callback - The callback is used to return whether the application slot is enabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @param { AsyncCallback<boolean> } callback - The callback is used to return whether the application slot is enabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function isNotificationSlotEnabled(bundle: BundleOption, type: SlotType, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @returns { Promise<boolean> } Returns whether the application slot is enabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Obtains whether the application slot is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { SlotType } type - Type of the notification slot.
   * @returns { Promise<boolean> } Returns whether the application slot is enabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function isNotificationSlotEnabled(bundle: BundleOption, type: SlotType): Promise<boolean>;

  /**
   * Set whether to sync notifications to devices that do not have the app installed.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userId.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setSyncNotificationEnabledWithoutApp.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set whether to sync notifications to devices that do not have the app installed.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userId.
   * @param { boolean } enable - Set enable or not.
   * @param { AsyncCallback<void> } callback - The callback of setSyncNotificationEnabledWithoutApp.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setSyncNotificationEnabledWithoutApp(userId: number, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Set whether to sync notifications to devices that do not have the app installed.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userId.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  /**
   * Set whether to sync notifications to devices that do not have the app installed.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userId.
   * @param { boolean } enable - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setSyncNotificationEnabledWithoutApp(userId: number, enable: boolean): Promise<void>;

  /**
   * Obtains whether to sync notifications to devices that do not have the app installed.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userId.
   * @param { AsyncCallback<boolean> } callback - The callback is used to return whether to sync notifications to devices.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function getSyncNotificationEnabledWithoutApp(userId: number, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains whether to sync notifications to devices that do not have the app installed.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } userId - The userId.
   * @returns { Promise<boolean> } Returns whether to sync notifications to devices.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600008 - The user does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  function getSyncNotificationEnabledWithoutApp(userId: number): Promise<boolean>;

  /**
   * Set badge number.
   *
   * @param { number } badgeNumber - Badge number.
   * @param { AsyncCallback<void> } callback - callback - The callback of setBadgeNumber..
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 10
   */
  /**
   * Set badge number.
   *
   * @param { number } badgeNumber - Badge number.
   * @param { AsyncCallback<void> } callback - callback - The callback of setBadgeNumber..
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  /**
   * Set badge number.
   *
   * @param { number } badgeNumber - Badge number.
   * @param { AsyncCallback<void> } callback - callback - The callback of setBadgeNumber..
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 18
   */
  function setBadgeNumber(badgeNumber: number, callback: AsyncCallback<void>): void;

  /**
   * Set badge number.
   *
   * @param { number } badgeNumber - Badge number.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @since 10
   */
  /**
   * Set badge number.
   *
   * @param { number } badgeNumber - Badge number.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  /**
   * Set badge number.
   *
   * @param { number } badgeNumber - Badge number.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 18
   */
  function setBadgeNumber(badgeNumber: number): Promise<void>;

  /**
   * Set badge number by bundle.
   *
   * @param { BundleOption } bundle - Use the bundleOption to carry bundleName and uid of the application.
   * @param { number } badgeNumber - Badge number.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600017 - There is no corresponding agent relationship configuration.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Set badge number by bundle.
   *
   * @param { BundleOption } bundle - Use the bundleOption to carry bundleName and uid of the application.
   * @param { number } badgeNumber - Badge number.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @throws { BusinessError } 1600017 - There is no corresponding agent relationship configuration.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setBadgeNumberByBundle(bundle: BundleOption, badgeNumber: number): Promise<void>;

  /**
   * Subscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Type of the callback to listen for.
   * @param { function } callback - callback - The callback of check notifications.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10
   */
  /**
   * Subscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Type of the callback to listen for.
   * @param { function } callback - callback - The callback of check notifications.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function on(type: 'checkNotification', callback: (checkInfo: NotificationCheckInfo) => NotificationCheckResult): void;

  /**
   * Subscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Type of the callback to listen for.
   * @param { NotificationCheckRequest } checkRequest - Check Request for filter notification request.
   * @param { function } callback - callback - The callback of check notifications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Subscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Type of the callback to listen for.
   * @param { NotificationCheckRequest } checkRequest - Check Request for filter notification request.
   * @param { function } callback - callback - The callback of check notifications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function on(type: 'checkNotification', checkRequest: NotificationCheckRequest,
    callback: (checkInfo: NotificationCheckInfo) => Promise<NotificationCheckResult>): void;

  /**
   * Unsubscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Type of the callback to listen for.
   * @param { function } [callback] - callback - The callback of check notifications.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10
   */
  /**
   * Unsubscribe the callback for check notifications.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { 'checkNotification' } type - Type of the callback to listen for.
   * @param { function } [callback] - callback - The callback of check notifications.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function off(
    type: 'checkNotification',
    callback?: (checkInfo: NotificationCheckInfo) => NotificationCheckResult
  ): void;

  /**
   * Trigger system live view notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { number } notificationId - The notification id.
   * @param { ButtonOptions } buttonOptions - The button option.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Trigger system live view notification.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { number } notificationId - The notification id.
   * @param { ButtonOptions } buttonOptions - The button option.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600007 - The notification does not exist.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function triggerSystemLiveView(bundle: BundleOption, notificationId: number, buttonOptions: ButtonOptions): Promise<void>;

  /**
   * Subscribe to system live view notifications
   *
   * @param { SystemLiveViewSubscriber } subscriber - The system live vie notification subscriber.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Subscribe to system live view notifications
   *
   * @param { SystemLiveViewSubscriber } subscriber - The system live vie notification subscriber.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function subscribeSystemLiveView(subscriber: SystemLiveViewSubscriber): Promise<void>;

  /**
   * Set basic configurations of application-level notification channels.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { number } slotFlags - Indicates the slotFlags.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Set basic configurations of application-level notification channels.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @param { number } slotFlags - Indicates the slotFlags.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setSlotFlagsByBundle(bundle: BundleOption, slotFlags: number): Promise<void>;

  /**
   * Obtains basic configurations of application-level notification channels.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  /**
   * Obtains basic configurations of application-level notification channels.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } bundle - The bundle option.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 17700001 - The specified bundle name was not found.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function getSlotFlagsByBundle(bundle: BundleOption): Promise<number>;

  /**
   * Add do not disturb notification templates.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - The array of Notification templates.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Add do not disturb notification templates.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - The array of Notification templates.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function addDoNotDisturbProfile(templates: Array<DoNotDisturbProfile>): Promise<void>;

  /**
   * Remove do not disturb notification templates.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - The array of Notification templates.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Remove do not disturb notification templates.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { Array<DoNotDisturbProfile> } templates - The array of Notification templates.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600012 - No memory space.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function removeDoNotDisturbProfile(templates: Array<DoNotDisturbProfile>): Promise<void>;

  /**
   * Set system additional config information of notification
   *
   * @permission ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { string } key - addition config key.
   * @param { string } value - addition config value.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  /**
   * Set system additional config information of notification
   *
   * @permission ohos.permission.NOTIFICATION_AGENT_CONTROLLER
   * @param { string } key - addition config key.
   * @param { string } value - addition config value.
   * @returns { Promise<number> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setAdditionalConfig(key: string, value: string): Promise<number>;

  /**
   * Request open the notification settings pop-up window.
   *
   * @param { UIAbilityContext } context - The context indicates the ability context you want to bind;
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600018 - the notification settings window is already displayed.
   * @syscap SystemCapability.Notification.NotificationSettings
   * @stagemodelonly
   * @since 13
   */
  /**
   * Request open the notification settings pop-up window.
   *
   * @param { UIAbilityContext } context - The context indicates the ability context you want to bind;
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600018 - the notification settings window is already displayed.
   * @syscap SystemCapability.Notification.NotificationSettings
   * @stagemodelonly
   * @since 18
   */
  function openNotificationSettings(context: UIAbilityContext): Promise<void>;

  /**
   * Get do not disturb profile by id.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } id - The id of profile.
   * @returns { Promise<DoNotDisturbProfile> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600019 - The do-not-disturb profile does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 13
   */
  /**
   * Get do not disturb profile by id.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { number } id - The id of profile.
   * @returns { Promise<DoNotDisturbProfile> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600019 - The do-not-disturb profile does not exist.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function getDoNotDisturbProfile(id: number): Promise<DoNotDisturbProfile>;

  /**
   * Set target device status.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { string } deviceType - The device.
   * @param { number } status - The device status.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function setTargetDeviceStatus(deviceType: string, status: number): Promise<void>;

  /**
   * Disabling notifications based on the application list.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { boolean } disabled - The switch of disableNotification.
   * @param { Array<string> } bundleList - The bundles of disableNotification.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  function disableNotificationFeature(disabled:boolean, bundleList: Array<string>): Promise<void>;

  /**
   * Set notification slot synchronization switch.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { SlotType } slot - The slot type.
   * @param { string } deviceType - The device type.
   * @param { boolean } enabled - The switch state.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
 */
  function setDistributedEnabledBySlot(slot: SlotType, deviceType: string, enabled: boolean): Promise<void>;

  /**
   * Get notification slot synchronization switch.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { SlotType } slot - The slot type.
   * @param { string } deviceType - The device type.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   * <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
 */
  function isDistributedEnabledBySlot(slot: SlotType, deviceType: string): Promise<boolean>;

  /**
   * Describes a button option for a triggering.
   *
   * @typedef ButtonOptions
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  export interface ButtonOptions {
    /**
     * The button name for a triggering.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11
     */
    buttonName: string;
  }

  /**
   * Describes a subscriber for system live view.
   *
   * @typedef SystemLiveViewSubscriber
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  export interface SystemLiveViewSubscriber {
    /**
     * The callback function that receives a new button option of a notification.
     *
     * @type { ?function }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11
     */
    onResponse?: (notificationId: number, buttonOptions: ButtonOptions) => void;
  }

  /**
   * Describes the parameters of check notifications.
   *
   * @typedef NotificationCheckInfo
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10
   */
  export interface NotificationCheckInfo {
    /**
     * The application bundle name for publishing notification.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10
     */
    bundleName: string;

    /**
     * The notification id.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { number }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10
     */
    notificationId: number;

    /**
     * Label of the notification.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { ?string }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11
     */
    label?: string;

    /**
     * The notification content type.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { ContentType }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10
     */
    contentType: ContentType;

    /**
     * UserId of the notification creator.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { number }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11
     */
    creatorUserId: number;

    /**
     * Type of the notification slot.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { SlotType }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11
     */
    slotType: SlotType;

    /**
     * Additional information of the live view notification.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { ?Record<string, Object> }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 11
     */
    extraInfos?: Record<string, Object>;
  }

  /**
   * Describes the result of check notifications.
   *
   * @typedef NotificationCheckResult
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 10
   */
  export interface NotificationCheckResult {
    /**
     * The result code. 0-display, 1-no display
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { number }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10
     */
    code: number;

    /**
     * The result message.
     *
     * @permission ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 10
     */
    message: string;
  }

  /**
   * Describes NotificationSlot types.
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Describes NotificationSlot types.
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @atomicservice
   * @since 12
   */
  export enum SlotType {
    /**
     * NotificationSlot of an unknown type.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * NotificationSlot of an unknown type.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12
     */
    UNKNOWN_TYPE = 0,

    /**
     * NotificationSlot for social communication.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * NotificationSlot for social communication.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12
     */
    SOCIAL_COMMUNICATION = 1,

    /**
     * NotificationSlot for service information.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * NotificationSlot for service information.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12
     */
    SERVICE_INFORMATION = 2,

    /**
     * NotificationSlot for content information.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * NotificationSlot for content information.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12
     */
    CONTENT_INFORMATION = 3,

    /**
     * NotificationSlot for live view.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * NotificationSlot for live view.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12
     */
    LIVE_VIEW = 4,

    /**
     * NotificationSlot for customer service.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * NotificationSlot for customer service.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12
     */
    CUSTOMER_SERVICE = 5,

    /**
     * NotificationSlot for emergency information.
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12
     */
    EMERGENCY_INFORMATION = 10,

    /**
     * NotificationSlot for other purposes.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * NotificationSlot for other purposes.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12
     */
    OTHER_TYPES = 0xFFFF
  }

  /**
   * Describes notification content types.
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Describes notification content types.
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  export enum ContentType {
    /**
     * Normal text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Normal text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    NOTIFICATION_CONTENT_BASIC_TEXT,

    /**
     * Long text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Long text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    NOTIFICATION_CONTENT_LONG_TEXT,

    /**
     * Picture-attached notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Picture-attached notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12
     */
    NOTIFICATION_CONTENT_PICTURE,

    /**
     * Conversation notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Conversation notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12
     */
    NOTIFICATION_CONTENT_CONVERSATION,

    /**
     * Multi-line text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Multi-line text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    NOTIFICATION_CONTENT_MULTILINE,

    /**
     * System local live view notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * System local live view notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12
     */
    NOTIFICATION_CONTENT_SYSTEM_LIVE_VIEW,

    /**
     * Common live view notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * Common live view notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12
     */
    NOTIFICATION_CONTENT_LIVE_VIEW,
  }

  /**
   * Indicates the level of the slot
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  export enum SlotLevel {
    /**
     * Indicates that the notification function is disabled.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    LEVEL_NONE = 0,

    /**
     * Indicates that the notification function is enabled but notification
     * icons are not displayed in the status bar, with no banner or prompt tone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    LEVEL_MIN = 1,

    /**
     * Indicates that the notification function is enabled and notification
     * icons are displayed in the status bar, with no banner or prompt tone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    LEVEL_LOW = 2,

    /**
     * Indicates that the notification function is enabled and notification
     * icons are displayed in the status bar, with no banner but with a prompt tone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    LEVEL_DEFAULT = 3,

    /**
     * Indicates that the notification function is enabled and notification
     * icons are displayed in the status bar, with a banner and a prompt tone.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    LEVEL_HIGH = 4
  }

  /**
   * The type of the Do Not Disturb.
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  export enum DoNotDisturbType {
    /**
     * Non do not disturb type notification
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9
     */
    TYPE_NONE = 0,

    /**
     * Execute do not disturb once in the set time period (only watch hours and minutes)
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9
     */
    TYPE_ONCE = 1,

    /**
     * Execute do not disturb every day with a set time period (only watch hours and minutes)
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9
     */
    TYPE_DAILY = 2,

    /**
     * Execute in the set time period (specify the time, month, day and hour)
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9
     */
    TYPE_CLEARLY = 3
  }

  /**
   * Describes a DoNotDisturbDate instance.
   *
   * @typedef DoNotDisturbDate
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  export interface DoNotDisturbDate {
    /**
     * the type of the Do Not Disturb.
     *
     * @type { DoNotDisturbType }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9
     */
    type: DoNotDisturbType;

    /**
     * The start time of the Do Not Disturb.
     *
     * @type { Date }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9
     */
    begin: Date;

    /**
     * The end time of the Do Not Disturb.
     *
     * @type { Date }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9
     */
    end: Date;
  }

  /**
   * Describes a DoNotDisturbProfile instance.
   *
   * @typedef DoNotDisturbProfile
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  export interface DoNotDisturbProfile {
    /**
     * The profile id of the Do Not disturb.
     *
     * @type { number }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12
     */
    id: number;

    /**
     * The profile name of the Do Not disturb.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12
     */
    name: string;

    /**
     * The trustlist of application.
     *
     * @type { ?Array<BundleOption> }
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12
     */
    trustlist?: Array<BundleOption>;
  }

  /**
   * The remind type of the notification.
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  export enum DeviceRemindType {
    /**
     * The device is not in use, no reminder
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9
     */
    IDLE_DONOT_REMIND = 0,

    /**
     * The device is not in use, remind
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9
     */
    IDLE_REMIND = 1,

    /**
     * The device is in use, no reminder
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9
     */
    ACTIVE_DONOT_REMIND = 2,

    /**
     * The device is in use, reminder
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9
     */
    ACTIVE_REMIND = 3
  }

  /**
   * Notification source type
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  export enum SourceType {
    /**
     * General notification
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9
     */
    TYPE_NORMAL = 0,

    /**
     * Continuous notification
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9
     */
    TYPE_CONTINUOUS = 1,

    /**
     * Scheduled notification
     *
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 9
     */
    TYPE_TIMER = 2
  }

  /**
   * Enum for notification control flag status.
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  export enum NotificationControlFlagStatus {
    /**
     * Manipulating of the enumeration by bitwise-or operation represents the closing of ringtone.
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12
     */
    NOTIFICATION_STATUS_CLOSE_SOUND = 1 << 0,

    /**
     * Manipulating of the enumeration by bitwise-or operation represents the closing of lock screen.
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12
     */
    NOTIFICATION_STATUS_CLOSE_LOCKSCREEN = 1 << 1,

    /**
     * Manipulating of the enumeration by bitwise-or operation represents the closing of banner.
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12
     */
    NOTIFICATION_STATUS_CLOSE_BANNER = 1 << 2,

    /**
     * Manipulating of the enumeration by bitwise-or operation represents the closing of light screen.
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12
     */
    NOTIFICATION_STATUS_CLOSE_LIGHT_SCREEN = 1 << 3,

    /**
     * Manipulating of the enumeration by bitwise-or operation represents the closing of vibration.
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12
     */
    NOTIFICATION_STATUS_CLOSE_VIBRATION = 1 << 4,

    /**
     * Manipulating of the enumeration by bitwise-or operation represents the closing of status bar icon.
     * @syscap SystemCapability.Notification.Notification
     * @systemapi
     * @since 12
     */
    NOTIFICATION_STATUS_CLOSE_STATUSBAR_ICON = 1 << 5
  }

  /**
   * Describes a bundleOption in a notification.
   *
   * @typedef { _BundleOption } BundleOption
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  export type BundleOption = _BundleOption;

  /**
   * Describes an action button displayed in a notification.
   *
   * @typedef { _NotificationActionButton } NotificationActionButton
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  export type NotificationActionButton = _NotificationActionButton;

  /**
   * Describes a normal text notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Describes a normal text notification.
   *
   * @typedef { _NotificationBasicContent } NotificationBasicContent
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  export type NotificationBasicContent = _NotificationBasicContent;

  /**
   * Describes notification types.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Describes notification types.
   *
   * @typedef { _NotificationContent } NotificationContent
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  export type NotificationContent = _NotificationContent;

  /**
   * Describes a long text notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Describes a long text notification.
   *
   * @typedef { _NotificationLongTextContent } NotificationLongTextContent
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  export type NotificationLongTextContent = _NotificationLongTextContent;

  /**
   * Describes a live view notification.
   *
   * @typedef { _NotificationLiveViewContent } NotificationLiveViewContent
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  export type NotificationLiveViewContent = _NotificationLiveViewContent;

  /**
   * Describes a multi-line text notification.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Describes a multi-line text notification.
   *
   * @typedef { _NotificationMultiLineContent } NotificationMultiLineContent
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  export type NotificationMultiLineContent = _NotificationMultiLineContent;

  /**
   * Describes a picture-attached notification.
   *
   * @typedef { _NotificationPictureContent } NotificationPictureContent
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  export type NotificationPictureContent = _NotificationPictureContent;

  /**
   * Describes a system live view notification.
   *
   * @typedef { _NotificationSystemLiveViewContent } NotificationSystemLiveViewContent
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  export type NotificationSystemLiveViewContent = _NotificationSystemLiveViewContent;

  /**
   * Describes a NotificationFlags instance.
   *
   * @typedef { _NotificationFlags } NotificationFlags
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  export type NotificationFlags = _NotificationFlags;

  /**
   * The status of the notification flag.
   *
   * @typedef { _NotificationFlagStatus } NotificationFlagStatus
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  export type NotificationFlagStatus = _NotificationFlagStatus;

  /**
   * Defines a NotificationRequest instance.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  /**
   * Defines a NotificationRequest instance.
   *
   * @typedef { _NotificationRequest } NotificationRequest
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 12
   */
  export type NotificationRequest = _NotificationRequest;

  /**
   * Defines a UnifiedGroupInfo instance.
   *
   * @typedef { _UnifiedGroupInfo } UnifiedGroupInfo
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12
   */
  export type UnifiedGroupInfo = _UnifiedGroupInfo;

  /**
   * Defines a NotificationFilter instance.
   *
   * @typedef { _NotificationFilter } NotificationFilter
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  export type NotificationFilter = _NotificationFilter;

  /**
   * Defines a NotificationCheckRequest instance.
   *
   * @typedef { _NotificationCheckRequest } NotificationCheckRequest
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  export type NotificationCheckRequest = _NotificationCheckRequest;

  /**
   * Describes distributed options.
   *
   * @typedef { _DistributedOptions } DistributedOptions
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  export type DistributedOptions = _DistributedOptions;

  /**
   * Describes a NotificationSlot instance.
   *
   * @typedef { _NotificationSlot } NotificationSlot
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  export type NotificationSlot = _NotificationSlot;

  /**
   * Describes live view notification option type.
   *
   * @typedef { _LiveViewStatus } LiveViewStatus
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11
   */
  export type LiveViewStatus = _LiveViewStatus;

  /**
   * Describes live view notification task type.
   *
   * @typedef { _LiveViewTypes } LiveViewTypes
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18
   */
  export type LiveViewTypes = _LiveViewTypes;

  /**
   * Provides sorting information about an active notification.
   *
   * @typedef { _NotificationSorting } NotificationSorting
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 9
   */
  export type NotificationSorting = _NotificationSorting;

  /**
   * Describes a NotificationTemplate instance.
   *
   * @typedef { _NotificationTemplate } NotificationTemplate
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  export type NotificationTemplate = _NotificationTemplate;

  /**
   * Describes a NotificationUserInput instance.
   *
   * @typedef { _NotificationUserInput } NotificationUserInput
   * @syscap SystemCapability.Notification.Notification
   * @since 9
   */
  export type NotificationUserInput = _NotificationUserInput;

  /**
   * Describes a system live view capsule type.
   *
   * @typedef { _NotificationCapsule } NotificationCapsule
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  export type NotificationCapsule = _NotificationCapsule;

  /**
   * Describes a system live view button type.
   *
   * @typedef { _NotificationButton } NotificationButton
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  export type NotificationButton = _NotificationButton;

  /**
   * Describes a system live view time type.
   *
   * @typedef { _NotificationTime } NotificationTime
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  export type NotificationTime = _NotificationTime;

  /**
   * Describes a system live view progress type.
   *
   * @typedef { _NotificationProgress } NotificationProgress
   * @syscap SystemCapability.Notification.Notification
   * @since 11
   */
  export type NotificationProgress = _NotificationProgress;
}

export default notificationManager;
