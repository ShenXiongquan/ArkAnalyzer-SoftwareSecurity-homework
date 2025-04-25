/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

/**
 * The bundle pack info class.
 *
 * @typedef BundlePackInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9
 */
export interface BundlePackInfo {
  /**
   * This contains package information in pack.info
   *
   * @type { Array<PackageConfig> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly packages: Array<PackageConfig>;

  /**
   * This contains bundle summary information in pack.info
   *
   * @type { PackageSummary }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly summary: PackageSummary;
}

/**
 * PackageConfig: the package info class.
 *
 * @typedef PackageConfig
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9
 */
export interface PackageConfig {
  /**
   * Indicates the device types of this package
   *
   * @type { Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly deviceTypes: Array<string>;

  /**
   * Indicates the name of this package
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly name: string;

  /**
   * Indicates the module type of this package
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly moduleType: string;

  /**
   * Indicates whether this package is delivery and install
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly deliveryWithInstall: boolean;
}

/**
 * PackageSummary: the package summary class.
 *
 * @typedef PackageSummary
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9
 */
export interface PackageSummary {
  /**
   * Indicates the bundle config info of this package
   *
   * @type { BundleConfigInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly app: BundleConfigInfo;

  /**
   * Indicates the modules config info of this package
   *
   * @type { Array<ModuleConfigInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly modules: Array<ModuleConfigInfo>;
}

/**
 * BundleConfigInfo: the bundle summary class.
 *
 * @typedef BundleConfigInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9
 */
export interface BundleConfigInfo {
  /**
   * Indicates the name of this bundle
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly bundleName: string;

  /**
   * Indicates the bundle version
   *
   * @type { Version }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly version: Version;
}

/**
 * ExtensionAbility: the extension ability forms class.
 *
 * @typedef ExtensionAbility
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9
 */
export interface ExtensionAbility {
  /**
   * Indicates the name of this extension ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly name: string;

  /**
   * Indicates the ability forms info
   *
   * @type { Array<AbilityFormInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly forms: Array<AbilityFormInfo>;
}

/**
 * ModuleConfigInfo: the module summary of a bundle.
 *
 * @typedef ModuleConfigInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9
 */
export interface ModuleConfigInfo {
  /**
   * Indicates the name of main ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly mainAbility: string;

  /**
   * Indicates the api version
   *
   * @type { ApiVersion }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly apiVersion: ApiVersion;

  /**
   * Indicates the devices type
   *
   * @type { Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly deviceTypes: Array<string>;

  /**
   * Indicates the module distro info
   *
   * @type { ModuleDistroInfo }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly distro: ModuleDistroInfo;

  /**
   * Indicates the abilities info of this module
   *
   * @type { Array<ModuleAbilityInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly abilities: Array<ModuleAbilityInfo>;

  /**
   * Indicates extension abilities info of this module
   *
   * @type { Array<ExtensionAbility> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly extensionAbilities: Array<ExtensionAbility>;
}

/**
 * ModuleDistroInfo: the bundle info summary class.
 *
 * @typedef ModuleDistroInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9
 */
export interface ModuleDistroInfo {
  /**
   * Indicates whether this package is delivered with install
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly deliveryWithInstall: boolean;

  /**
   * Indicates whether this package is free install
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly installationFree: boolean;

  /**
   * Indicates the module name
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly moduleName: string;

  /**
   * Indicates the module type
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly moduleType: string;
}

/**
 * ModuleAbilityInfo: the ability info of a module.
 *
 * @typedef ModuleAbilityInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9
 */
export interface ModuleAbilityInfo {
  /**
   * Indicates the name of this module ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly name: string;

  /**
   * Indicates the label of this module ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly label: string;

  /**
   * Indicates whether this ability can be called by other abilities
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly exported: boolean;

  /**
   * Indicates the ability forms info
   *
   * @type { Array<AbilityFormInfo> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly forms: Array<AbilityFormInfo>;
}

/**
 * AbilityFormInfo: the form info of an ability.
 *
 * @typedef AbilityFormInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9
 */
export interface AbilityFormInfo {
  /**
   * Indicates the name of this ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly name: string;

  /**
   * Indicates the type of this ability
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly type: string;

  /**
   * Indicates whether this form is enabled update
   *
   * @type { boolean }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly updateEnabled: boolean;

  /**
   * Indicates the scheduled update time
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly scheduledUpdateTime: string;

  /**
   * Indicates the update duration
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly updateDuration: number;

  /**
   * Indicates the ability support dimensions
   *
   * @type { Array<string> }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly supportDimensions: Array<string>;

  /**
   * Indicates the ability default dimension
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly defaultDimension: string;
}

/**
 * Version: the bundle version class.
 *
 * @typedef Version
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9
 */
export interface Version {
  /**
   * Indicates the min compatible code of this version
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly minCompatibleVersionCode: number;

  /**
   * Indicates the name of this version
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly name: string;

  /**
   * Indicates the code of this version
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly code: number;
}

/**
 * ApiVersion: the bundle Api version class.
 *
 * @typedef ApiVersion
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9
 */
export interface ApiVersion {
  /**
   * Indicates the release type of the api
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly releaseType: string;

  /**
   * Indicates the compatible version code of the api
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly compatible: number;

  /**
   * Indicates the target version code of the api
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9
   */
  readonly target: number;
}
