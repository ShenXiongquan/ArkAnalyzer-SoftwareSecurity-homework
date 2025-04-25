/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
  * Type of auto fill.
  *
  * @enum { number }
  * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
  * @systemapi
  * @StageModelOnly
  * @since 11
  */
export enum AutoFillType {
  /**
   * Indicates the type of unspecified.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  UNSPECIFIED = 0,

  /**
   * Indicates the type of password.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  PASSWORD = 1,

  /**
   * Indicates the type of user name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  USER_NAME = 2,

  /**
   * Indicates the type of new password.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  NEW_PASSWORD = 3,

  /**
   * Indicates the type of full street address.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  FULL_STREET_ADDRESS = 4,

  /**
   * Indicates the type of house number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  HOUSE_NUMBER = 5,

  /**
   * Indicates the type of district address.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  DISTRICT_ADDRESS = 6,

  /**
   * Indicates the type of city address.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  CITY_ADDRESS = 7,

  /**
   * Indicates the type of province address.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  PROVINCE_ADDRESS = 8,

  /**
   * Indicates the type of country address.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  COUNTRY_ADDRESS = 9,

  /**
   * Indicates the type of person full name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  PERSON_FULL_NAME = 10,

  /**
   * Indicates the type of person last name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  PERSON_LAST_NAME = 11,

  /**
   * Indicates the type of person first name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  PERSON_FIRST_NAME = 12,

   /**
   * Indicates the type of phone number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  PHONE_NUMBER = 13,

  /**
   * Indicates the type of phone country code.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  PHONE_COUNTRY_CODE = 14,

  /**
   * Indicates the type of full phone number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  FULL_PHONE_NUMBER = 15,

  /**
   * Indicates the type of email address.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  EMAIL_ADDRESS = 16,

  /**
   * Indicates the type of bank card number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  BANK_CARD_NUMBER = 17,

  /**
   * Indicates the type of ID card number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  ID_CARD_NUMBER = 18,

  /**
   * Indicates the type of nickname.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  NICKNAME = 24,

  /**
   * Indicates the type of detail info without street.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  DETAIL_INFO_WITHOUT_STREET = 25,

  /**
   * Indicates the type of format address.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @StageModelOnly
   * @since 12
   */
  FORMAT_ADDRESS = 26,

  /**
   * Indicates the type of passport number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  PASSPORT_NUMBER = 27,

  /**
   * Indicates the type of passport validity.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  VALIDITY = 28,

  /**
   * Indicates the type of issue place.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  ISSUE_AT = 29,

  /**
   * Indicates the type of invoice organization.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  ORGANIZATION = 30,

  /**
   * Indicates the type of invoice tax id.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  TAX_ID = 31,

  /**
   * Indicates the type of address city and state.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  ADDRESS_CITY_AND_STATE = 32,

  /**
   * Indicates the type of airline flight number.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  FLIGHT_NUMBER = 33,

  /**
   * Indicates the type of license number for drivers.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  LICENSE_NUMBER = 34,

  /**
   * Indicates the type of license file number for drivers.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  LICENSE_FILE_NUMBER = 35,

  /**
   * Indicates the type of license plate for vehicles.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  LICENSE_PLATE = 36,

  /**
   * Indicates the type of engine number for vehicles.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  ENGINE_NUMBER = 37,

  /**
   * Indicates the type of license chassis number for vehicles.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  LICENSE_CHASSIS_NUMBER = 38
}