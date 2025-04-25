/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Defines the options of Component ClassDecorator.
 *
 * @interface ComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defines the options of Component ClassDecorator.
 *
 * @interface ComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare interface ComponentOptions {
  /**
   * freeze UI state.
   *
   * @type { boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * freeze UI state.
   *
   * @type { boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  freezeWhenInactive : boolean,
}

/**
 * Define the ratio of characters entered by the the percentage of InputCounterOptions.
 *
 * @interface InputCounterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Define the ratio of characters entered by the the percentage of InputCounterOptions.
 *
 * @interface InputCounterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface InputCounterOptions {
  /**
   * It is the numerator bit of the percentage and used as a threshold. If the number of characters input 
   * reaches the maximum number of characters multiplied by this threshold, the counter is displayed.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * It is the numerator bit of the percentage and used as a threshold. If the number of characters input 
   * reaches the maximum number of characters multiplied by this threshold, the counter is displayed.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  thresholdPercentage?: number;
  
  /**
   * If the current input character count reaches the maximum character count and users want to exceed the
   * normal input, the border will turn red. If this parameter is true, the red border displayed.
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * If the current input character count reaches the maximum character count and users want to exceed the
   * normal input, the border will turn red. If this parameter is true, the red border displayed.
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  highlightBorder?: boolean;
}

/**
 * Defines the options of decoration.
 *
 * @interface TextDecorationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface TextDecorationOptions {
  /**
   * The decoration type.
   *
   * @type { TextDecorationType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  type: TextDecorationType;

  /**
   * Sets the color of decoration.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  color?: ResourceColor;

  /**
   * The style value of decoration.
   *
   * @type { ?TextDecorationStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  style?: TextDecorationStyle;
}

/**
 * Defining Component ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Component ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Component ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Component ClassDecorator
 *
 * Component is a ClassDecorator and it supports ComponentOptions as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Component: ClassDecorator & ((options: ComponentOptions) => ClassDecorator);

/**
 * Defining ComponentV2 ClassDecorator
 *
 * ComponentV2 is a ClassDecorator and it supports ComponentOptions as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const ComponentV2: ClassDecorator & ((options: ComponentOptions) => ClassDecorator);

/**
 * Defines the options of Entry ClassDecorator.
 *
 * @interface EntryOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 10
 */
/**
 * Defines the options of Entry ClassDecorator.
 *
 * @interface EntryOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 11
 */
declare interface EntryOptions {
  /**
   * Named route name.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 10
   */
  /**
   * Named route name.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11
   */
  routeName? : string,

  /**
   * LocalStorage to be passed.
   *
   * @type { ?LocalStorage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 10
   */
  /**
   * LocalStorage to be passed.
   *
   * @type { ?LocalStorage }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11
   */
  storage? : LocalStorage,

  /**
   * Determines whether to use the LocalStorage instance object returned by the LocalStorage.getShared() interface.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  useSharedStorage? : boolean,
}

/**
 * Defines Entry ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Entry ClassDecorator.
 *
 * Entry is a ClassDecorator and it supports LocalStorage as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Entry ClassDecorator.
 *
 * Entry is a ClassDecorator and it supports LocalStorage or EntryOptions as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Entry ClassDecorator.
 *
 * Entry is a ClassDecorator and it supports LocalStorage or EntryOptions as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Entry: ClassDecorator & ((options?: LocalStorage | EntryOptions) => ClassDecorator);

/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Observed: ClassDecorator;

/**
 * Defining ObservedV2 ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare const ObservedV2: ClassDecorator;

/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Preview: ClassDecorator & ((value: PreviewParams) => ClassDecorator);

/**
 * Defining Require PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Require: PropertyDecorator;

/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const BuilderParam: PropertyDecorator;

/**
 * Defining Local PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const Local: PropertyDecorator;

/**
 * Defining Param PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const Param: PropertyDecorator;

/**
 * Defining Once PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const Once: PropertyDecorator;

/**
 * Defining Event PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const Event: PropertyDecorator;

/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const State: PropertyDecorator;

/**
 * Defining Track PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defining Track PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare const Track: PropertyDecorator;

/**
 * Defining Trace PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare const Trace: PropertyDecorator;

/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Prop: PropertyDecorator;

/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Link: PropertyDecorator;

/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const ObjectLink: PropertyDecorator;

/**
 * Defines the options of Provide PropertyDecorator.
 *
 * @interface ProvideOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface ProvideOptions {
  /**
   * Override the @Provide of any parent or parent of parent @Component.@Provide({allowOverride: "name"}) is
   * also allowed to be used even when there is no ancestor @Component whose @Provide would be overridden.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  allowOverride?: string,
}

/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Provide: PropertyDecorator & ((value: string | ProvideOptions) => PropertyDecorator);

/**
 * Defining Provider PropertyDecorator, aliasName is the only matching key and if aliasName is the default, the default attribute name is regarded as aliasName.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const Provider: (aliasName?: string) => PropertyDecorator;

/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Consume: PropertyDecorator & ((value: string) => PropertyDecorator);

/**
* Defining Consumer PropertyDecorator, aliasName is the only matching key and if aliasName is the default, the default attribute name is regarded as aliasName.
* And @Consumer will find the nearest @Provider.
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @crossplatform
* @atomicservice
* @since 12
*/
declare const Consumer: (aliasName?: string) => PropertyDecorator;

/**
* Defining Computed MethodDecorator.
*
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @crossplatform
* @atomicservice
* @since 12
*/
declare const Computed: MethodDecorator;

/**
 * Defining StorageProp PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining StorageProp PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining StorageProp PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const StorageProp: (value: string) => PropertyDecorator;

/**
 * Defining StorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining StorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining StorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const StorageLink: (value: string) => PropertyDecorator;

/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Watch: (value: string) => PropertyDecorator;

/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Builder: MethodDecorator;

/**
 * Defining LocalBuilder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare const LocalBuilder: MethodDecorator;

/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Styles: MethodDecorator;

/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Extend: MethodDecorator & ((value: any) => MethodDecorator);

/**
 * Define AnimatableExtend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Define AnimatableExtend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
 declare const AnimatableExtend: MethodDecorator & ((value: Object) => MethodDecorator);

/**
 * Define Monitor MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const Monitor: MonitorDecorator;

/**
 * Define Monitor Decorator type
 *
 * @typedef { function } MonitorDecorator
 * @param { string } value - Monitored path input by the user
 * @param { string[] } args - Monitored path(s) input by the user
 * @returns { MethodDecorator } Monitor decorator
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type MonitorDecorator = (value: string, ...args: string[]) => MethodDecorator;

/**
 * Define IMonitor interface
 *
 * @interface IMonitor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface IMonitor {
  /**
   * Array of changed paths(keys)
   *
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  dirty: Array<string>;

  /**
   * Return the pair of the value before the most recent change and current value for given path.
   * If path does not exist, return undefined; If path is not specified, return the value pair corresponding to the first path in dirty.
   *
   * @param { string } [path]
   * @returns { IMonitorValue<T> | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  value<T>(path?: string): IMonitorValue<T> | undefined;
}

/**
 * Define IMonitorValue interface
 *
 * @interface IMonitorValue<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface IMonitorValue<T> {
  /**
   * Get the previous value.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  before: T;

  /**
   * Get current value.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  now: T;

  /**
   * Monitored path input by the user.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  path: string;
}

/**
 * Define AnimatableArithmetic interface
 *
 * @interface AnimatableArithmetic
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Define AnimatableArithmetic interface
 *
 * @interface AnimatableArithmetic
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
 declare interface AnimatableArithmetic<T> {
  /**
   * Define plus method
   *
   * @param { AnimatableArithmetic<T> } rhs - another value
   * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define plus method
   *
   * @param { AnimatableArithmetic<T> } rhs - another value
   * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
   plus(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;

  /**
   * Define subtract method
   *
   * @param { AnimatableArithmetic<T> } rhs - another value
   * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define subtract method
   *
   * @param { AnimatableArithmetic<T> } rhs - another value
   * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
   subtract(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;

  /**
   * Define multiply method
   *
   * @param { number } scale - scale value
   * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define multiply method
   *
   * @param { number } scale - scale value
   * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
   multiply(scale: number): AnimatableArithmetic<T>;

  /**
   * Define equals method
   *
   * @param { AnimatableArithmetic<T> } rhs - another value
   * @returns { boolean } is equals
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define equals method
   *
   * @param { AnimatableArithmetic<T> } rhs - another value
   * @returns { boolean } is equals
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  equals(rhs: AnimatableArithmetic<T>): boolean;
}

/**
 * Defining Concurrent MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defining Concurrent MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining Concurrent MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const Concurrent: MethodDecorator;

/**
 * Defining Sendable ClassDecorator
 * The Sendable decorator can be used only for classes. A class with this decorator is marked as sendable, and the class object can be shared globally.
 * Since 12, the Sendable decorator can be used for function and typeAlias also.
 * A function with this decorator is marked as sendable, and the function can be an shareable property of sendable-class object.
 * A typeAlias with this decorator is marked as sendable, and the typeAlias can be used to declare properties, variables,
 * and arguments that need to be assigned with sendable-function.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const Sendable: ClassDecorator;

/**
 * Defining  CustomDialog ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining  CustomDialog ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining  CustomDialog ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const CustomDialog: ClassDecorator;

/**
 * Defining LocalStorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defining LocalStorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining LocalStorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const LocalStorageLink: (value: string) => PropertyDecorator;

/**
 * Defining LocalStorageProp PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining LocalStorageProp PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining LocalStorageProp PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const LocalStorageProp: (value: string) => PropertyDecorator;

/**
 * Obtains the Context object associated with a component on the page.
 *
 * @param { Object } component - indicate the component on the page.
 * @returns { Context }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @since 9
 */
/**
 * Obtains the Context object associated with a component on the page.
 *
 * @param { Object } component - indicate the component on the page.
 * @returns { Context }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
/**
 * Obtains the Context object associated with a component on the page.
 *
 * @param { Object } component - indicate the component on the page.
 * @returns { Context }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#getHostContext
 */
declare function getContext(component?: Object): Context;

/**
 * Defining Reusable ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining Reusable ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const Reusable: ClassDecorator;

/**
 * Defining ReusableV2 ClassDecorator that is used to decorate @ComponentV2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare const ReusableV2: ClassDecorator;

 /**
   * ReuseId callback type. It is used to compute reuseId.
   *
   * @typedef { function } ReuseIdCallback
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
 declare type ReuseIdCallback = () => string;

/**
 * Defining the reusable configuration parameters.
 *
 * @interface ReuseOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface ReuseOptions {
  /**
   * Defining reuseId function. The default reuseId is the custom component name.
   *
   * @type { ?ReuseIdCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  reuseId? : ReuseIdCallback;
}
/**
 * Get context.
 *
 * @typedef { import('../api/application/Context').default } Context
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @since 9
 */
/**
 * Get context.
 *
 * @typedef { import('../api/application/Context').default } Context
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
/**
 * Get context.
 *
 * @typedef { import('../api/application/Context').default } Context
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare type Context = import('../api/application/Context').default;

/**
 * Post Card Action.
 *
 * @param { Object } component - indicate the card entry component.
 * @param { Object } action - indicate the router, message or call event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @form
 * @since 9
 */
/**
 * Post Card Action.
 *
 * @param { Object } component - indicate the card entry component.
 * @param { Object } action - indicate the router, message or call event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Post Card Action.
 *
 * @param { Object } component - indicate the card entry component.
 * @param { Object } action - indicate the router, message or call event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare function postCardAction(component: Object, action: Object): void;

/**
 * Defines the data type of the interface restriction.
 *
 * @interface Configuration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Configuration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Configuration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Configuration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface Configuration {
  /**
   * Set colorMode.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set colorMode.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set colorMode.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set colorMode.
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  readonly colorMode: string;

  /**
   * Set fontScale.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set fontScale.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set fontScale.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set fontScale.
   *
   * @type { number }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  readonly fontScale: number;
}

/**
 * Defines the data type of the interface restriction.
 *
 * @interface Rectangle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Rectangle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Rectangle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Rectangle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface Rectangle {
  /**
   * x:Horizontal coordinate
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * x:Horizontal coordinate
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * x:Horizontal coordinate
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * x:Horizontal coordinate
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  x?: Length;

  /**
   * y:Vertical axis coordinate.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * y:Vertical axis coordinate.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * y:Vertical axis coordinate.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * y:Vertical axis coordinate.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  y?: Length;

  /**
   * Sets the width of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the width of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the width of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the width of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  width?: Length;

  /**
   * Sets the height of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the height of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the height of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the height of the current touchRect.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  height?: Length;
}

/**
 * Interface for ExpectedFrameRateRange.
 *
 * @interface ExpectedFrameRateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Interface for ExpectedFrameRateRange.
 *
 * @interface ExpectedFrameRateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
/**
 * Interface for ExpectedFrameRateRange.
 *
 * @interface ExpectedFrameRateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface ExpectedFrameRateRange {
  /**
   * The minimum animation drawing FPS.
   * The minimum value should be less than or equal to the maximum value.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * The minimum animation drawing FPS.
   * The minimum value should be less than or equal to the maximum value.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * The minimum animation drawing FPS.
   * The minimum value should be less than or equal to the maximum value.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  min: number,
  /**
   * The maximum animation drawing FPS.
   * The maximum value should be greater than or equal to the minimum value.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
  */
  /**
   * The maximum animation drawing FPS.
   * The maximum value should be greater than or equal to the minimum value.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
  */
  /**
   * The maximum animation drawing FPS.
   * The maximum value should be greater than or equal to the minimum value.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  max: number,
  /**
   * The expected frame rate of dynamical callback rate range.
   * The value should be between the minimum and maximum value.
   * Otherwise, the actual callback rate will be dynamically
   * adjusted to better align with other animation sources.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
  */
  /**
   * The expected frame rate of dynamical callback rate range.
   * The value should be between the minimum and maximum value.
   * Otherwise, the actual callback rate will be dynamically
   * adjusted to better align with other animation sources.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
  */
  /**
   * The expected frame rate of dynamical callback rate range.
   * The value should be between the minimum and maximum value.
   * Otherwise, the actual callback rate will be dynamically
   * adjusted to better align with other animation sources.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  expected: number,
}

/**
 * global $r function
 *
 * @param { string } value
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * global $r function
 *
 * @param { string } value
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * global $r function
 *
 * @param { string } value
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * global $r function
 *
 * @param { string } value
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare function $r(value: string, ...params: any[]): Resource;

/**
 * global $rawfile function
 *
 * @param { string } value
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * global $rawfile function
 *
 * @param { string } value
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * global $rawfile function
 *
 * @param { string } value
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * global $rawfile function
 *
 * @param { string } value
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare function $rawfile(value: string): Resource;
/**
 * Defines the same page mode
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare enum AccessibilitySamePageMode {
  /**
  * the first page and root page event is not send.but if application load new page whith navigation,the page event will be sent.
  * this mode is to solve skipping focus
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SEMI_SILENT = 0,
 /**
  * the all page event is not send
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  FULL_SILENT = 1,
}
/**
 * Enum for accessibility component type
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare enum AccessibilityRoleType {
  /**
  * ActionSheet component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  ACTION_SHEET = 0,
  /**
  * AlertDialog component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  ALERT_DIALOG = 1,
  /**
  * AlphabetIndexer component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  INDEXER_COMPONENT = 2,
  /**
  * badge component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  BADGE_COMPONENT = 3,
  /**
  * blank component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  BLANK = 4,
  /**
  * button component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  BUTTON = 5,
  /**
  * button component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  BACK_BUTTON = 6,
  /**
  * sheet drag bar component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SHEET_DRAG_BAR = 7,
  /**
  * calendar picker component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  CALENDAR_PICKER = 8,
  /**
  * calendar component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  CALENDAR = 9,
  /**
  * canvas component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  CANVAS = 10,
  /**
  * canvas gradient component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  CANVAS_GRADIENT = 11,
  /**
  * canvas pattern component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  CANVAS_PATTERN = 12,
  /**
  * checkbox component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  CHECKBOX = 13,
  /**
  * checkbox group component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  CHECKBOX_GROUP = 14,
  /**
  * circle component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  CIRCLE = 15,
  /**
  * column split component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  COLUMN_SPLIT = 16,
  /**
  * column component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  COLUMN = 17,
  /**
  * canvas rendering context 2d component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  CANVAS_RENDERING_CONTEXT_2D = 18,
  /**
  * chart component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  CHART = 19,
  /**
  * counter component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  COUNTER = 20,
  /**
  * counter modal component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  CONTAINER_MODAL = 21,
  /**
  * data panel component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  DATA_PANEL = 22,
  /**
  * data picker component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  DATE_PICKER = 23,
  /**
  * dialog component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  DIALOG = 24,
  /**
  * divider component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  DIVIDER = 25,
  /**
  * drag bar component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  DRAG_BAR = 26,
  /**
  * effect component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  EFFECT_COMPONENT = 27,
  /**
  * ellipse component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  ELLIPSE = 28,
  /**
  * flex component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  FLEX = 29,
  /**
  * flow item component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  FLOW_ITEM = 30,
  /**
  * form component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  FORM_COMPONENT = 31,
  /**
  * form link component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  FORM_LINK = 32,
  /**
  * gauge component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  GAUGE = 33,
  /**
  * grid component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  GRID = 34,
  /**
  * grid col component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  GRID_COL = 35,
  /**
  * grid container component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  GRID_CONTAINER = 36,
  /**
  * grid item component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  GRID_ITEM = 37,
  /**
  * grid row component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  GRID_ROW = 38,
  /**
  * hyperlink component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  HYPERLINK = 39,
  /**
  * image component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  IMAGE = 40,
  /**
  * image animator component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  IMAGE_ANIMATOR = 41,
  /**
  * image bitmap component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  IMAGE_BITMAP = 42,
  /**
  * image data component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  IMAGE_DATA = 43,
  /**
  * image span component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  IMAGE_SPAN = 44,
  /**
  * label component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  LABEL = 45,
  /**
  * line component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  LINE = 46,
  /**
  * list component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  LIST = 47,
  /**
  * list item component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  LIST_ITEM = 48,
  /**
  * list item group component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  LIST_ITEM_GROUP = 49,
  /**
  * loading progress component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  LOADING_PROGRESS = 50,
  /**
  * marquee component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  MARQUEE = 51,
  /**
  * matrix2d component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  MATRIX2D = 52,
  /**
  * menu component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  MENU = 53,
  /**
  * menu item component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  MENU_ITEM = 54,
  /**
  * menu item group component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  MENU_ITEM_GROUP = 55,
  /**
  * navdestination component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  NAV_DESTINATION = 56,
  /**
  * navrouter component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  NAV_ROUTER = 57,
  /**
  * navigation component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  NAVIGATION = 58,
  /**
  * navigation bar component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  NAVIGATION_BAR = 59,
  /**
  * navigation menu component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  NAVIGATION_MENU = 60,
  /**
  * navigator component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  NAVIGATOR = 61,
  /**
  * offscreen canvas component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  OFFSCREEN_CANVAS = 62,
  /**
  * offscreen canvas rendering context2d component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  OFFSCREEN_CANVAS_RENDERING_CONTEXT2D = 63,
  /**
  * option component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  OPTION = 64,
  /**
  * panel component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  PANEL = 65,
  /**
  * paper page component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  PAPER_PAGE = 66,
  /**
  * path component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  PATH = 67,
  /**
  * path 2d component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  PATH2D = 68,
  /**
  * pattern lock component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  PATTERN_LOCK = 69,
  /**
  * picker component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  PICKER = 70,
  /**
  * picker view component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  PICKER_VIEW = 71,
  /**
  * plugin component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  PLUGIN_COMPONENT = 72,
  /**
  * polygon component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  POLYGON = 73,
  /**
  * polyline component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  POLYLINE = 74,
  /**
  * pop up component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  POPUP = 75,
  /**
  * progress component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  PROGRESS = 76,
  /**
  * qr code component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  QRCODE = 77,
  /**
  * radio component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  RADIO = 78,
  /**
  * rating component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  RATING = 79,
  /**
  * rect component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  RECT = 80,
  /**
  * refresh component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  REFRESH = 81,
  /**
  * relative container component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  RELATIVE_CONTAINER = 82,
  /**
  * remote window component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  REMOTE_WINDOW = 83,
  /**
  * rich editor component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  RICH_EDITOR = 84,
  /**
  * rich text component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  RICH_TEXT = 85,
  /**
  * rolepager component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  ROLE_PAGER = 86,
  /**
  * row component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  ROW = 87,
  /**
  * row split component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  ROW_SPLIT = 88,
  /**
  * scroll component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SCROLL = 89,
  /**
  * scroll bar component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SCROLL_BAR = 90,
  /**
  * search component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SEARCH = 91,
  /**
  * search field component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SEARCH_FIELD = 92,
  /**
  * select component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SELECT = 93,
  /**
  * shape component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SHAPE = 94,
  /**
  * sidebar container component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SIDEBAR_CONTAINER = 95,
  /**
  * slider component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SLIDER = 96,
  /**
  * span component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SPAN = 97,
  /**
  * stack component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  STACK = 98,
  /**
  * stepper component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  STEPPER = 99,
  /**
  * stepper item component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  STEPPER_ITEM = 100,
  /**
  * swiper component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SWIPER = 101,
  /**
  * swiper indicator component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SWIPER_INDICATOR = 102,
  /**
  * switch component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SWITCH = 103,
  /**
  * symbol glyph component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  SYMBOL_GLYPH = 104,
  /**
  * tab content component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  TAB_CONTENT = 105,
  /**
  * tab bar component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  TAB_BAR = 106,
  /**
  * tabs component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  TABS = 107,
  /**
  * text component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  TEXT = 108,
  /**
  * text clock component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  TEXT_CLOCK = 109,
  /**
  * text entry component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  TEXT_ENTRY = 110,
  /**
  * text input component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  TEXT_INPUT = 111,
  /**
  * text picker component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  TEXT_PICKER = 112,
  /**
  * text timer component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  TEXT_TIMER = 113,
  /**
  * text area component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  TEXT_AREA = 114,
  /**
  * text field component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  TEXT_FIELD = 115,
  /**
  * time picker component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  TIME_PICKER = 116,
  /**
  * title bar component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  TITLE_BAR = 117,
  /**
  * toggler component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  TOGGLER = 118,
  /**
  * uiextensioncomponent component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  UI_EXTENSION_COMPONENT = 119,
  /**
  * video component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  VIDEO = 120,
  /**
  * water flow component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  WATER_FLOW = 121,
  /**
  * web component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  WEB = 122,
  /**
  * xcomponent component type
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  XCOMPONENT = 123,
  /**
  * none component type: screen reader will not broadcast the component type.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  ROLE_NONE = 124,
}

/**
 * Defines the callback type used in accessibility focus. The value of isFocus indicates whether the current component is focused
 * @typedef {function} AccessibilityFocusCallback
 * @param {boolean} isFocus - if component is focused,isFocus will be true. else isFocus is false.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare type AccessibilityFocusCallback = (isFocus: boolean) => void;

/**
 * Enum for FinishCallbackType.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Enum for FinishCallbackType.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare enum FinishCallbackType {
  /**
   * When the entire animation ends and will be removed immediately, the callback is triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * When the entire animation ends and will be removed immediately, the callback is triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  REMOVED = 0,
  /**
   * When the animation is logically down but may still be in its long tail, the callback is triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
 /**
   * When the animation is logically down but may still be in its long tail, the callback is triggered.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  LOGICALLY = 1,
}

/**
 * Defines the touch test strategy object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defines the touch test strategy object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare enum TouchTestStrategy {
  /**
  * Do framework touch test.
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @since 11
  */
 /**
  * Do framework touch test.
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 12
  */
  DEFAULT = 0,

  /**
  * Specify the component to do touch test and follow the framework touch test
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @since 11
  */
 /**
  * Specify the component to do touch test and follow the framework touch test
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 12
  */
  FORWARD_COMPETITION = 1,

  /**
  * Specify the component to do touch test and not follow the framework touch test
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @since 11
  */
 /**
  * Specify the component to do touch test and not follow the framework touch test
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 12
  */
  FORWARD = 2
}

/**
 * Defines the animate function params.
 *
 * @interface AnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the animate function params.
 *
 * @interface AnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the animate function params.
 *
 * @interface AnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the animate function params.
 *
 * @interface AnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface AnimateParam {
  /**
   * Animation duration, in ms.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation duration, in ms.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Animation duration, in ms.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Animation duration, in ms.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  duration?: number;
  /**
   * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower
   * animation playback. The value 0 means that there is no animation.
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower
   * animation playback. The value 0 means that there is no animation.
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower
   * animation playback. The value 0 means that there is no animation.
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  tempo?: number;
  /**
   * Animation curve.
   *
   * @type { ?(Curve | string) }
   * @default Curve.EaseInOut
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation curve.
   *
   * @type { ?(Curve | string | ICurve) }
   * @default Curve.EaseInOut
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Animation curve.
   *
   * @type { ?(Curve | string | ICurve) }
   * @default Curve.EaseInOut
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Animation curve.
   *
   * @type { ?(Curve | string | ICurve) }
   * @default Curve.EaseInOut
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  curve?: Curve | string | ICurve;

  /**
   * Animation plays with delay,when set to a negative number, the animation plays in advance.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation delay time, in ms.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Animation delay time, in ms.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  delay?: number;

  /**
   * Animation iterations. When set to -1, the animation playing it repeatedly. The value range is greater than or equal to -1.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation iterations. When set to -1, the animation playing it repeatedly. The value range is greater than or equal to -1.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Animation iterations. When set to -1, the animation playing it repeatedly. The value range is greater than or equal to -1.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  iterations?: number;

  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   *
   * @type { ?PlayMode }
   * @default PlayMode.Normal
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   *
   * @type { ?PlayMode }
   * @default PlayMode.Normal
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   *
   * @type { ?PlayMode }
   * @default PlayMode.Normal
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   *
   * @type { ?PlayMode }
   * @default PlayMode.Normal
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  playMode?: PlayMode;

  /**
   * Callback invoked when the animation playback is complete or the ability is about to enter the background.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Callback invoked when the animation playback is complete or the ability is about to enter the background.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Callback invoked when the animation playback is complete or the ability is about to enter the background.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Callback invoked when the animation playback is complete or the ability is about to enter the background.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  onFinish?: () => void;

  /**
   * Define the type of onFinish callback in animation.
   *
   * @type { ?FinishCallbackType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Define the type of onFinish callback in animation.
   *
   * @type { ?FinishCallbackType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  finishCallbackType?: FinishCallbackType;

  /**
   * Indicates expectedFrameRateRange including minimum、maximum and expected frame rate.
   *
   * @type { ?ExpectedFrameRateRange }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Indicates expectedFrameRateRange including minimum、maximum and expected frame rate.
   *
   * @type { ?ExpectedFrameRateRange }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  expectedFrameRateRange?: ExpectedFrameRateRange;
}

/**
 * Interface for curve object.
 *
 * @interface ICurve
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Interface for curve object.
 *
 * @interface ICurve
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Interface for curve object.
 *
 * @interface ICurve
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface ICurve {
  /**
   * Get curve value by fraction.
   *
   * @param { number } fraction - Indicates the current normalized time parameter. Value range: [0, 1].
   * Note: If the value is less than 0, it will be processed as 0. If the value is greater than 1, 1 is used.
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Get curve value by fraction.
   *
   * @param { number } fraction - Indicates the current normalized time parameter. Value range: [0, 1].
   * Note: If the value is less than 0, it will be processed as 0. If the value is greater than 1, 1 is used.
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Get curve value by fraction.
   *
   * @param { number } fraction - Indicates the current normalized time parameter. Value range: [0, 1].
   * Note: If the value is less than 0, it will be processed as 0. If the value is greater than 1, 1 is used.
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  interpolate(fraction: number): number;
}

/**
 * Defines the motion path options.
 *
 * @interface MotionPathOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the motion path options.
 *
 * @interface MotionPathOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the motion path options.
 *
 * @interface MotionPathOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface MotionPathOptions {
  /**
   * The path info.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The path info.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The path info.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  path: string;

  /**
   * The origin point info in range [0,1).
   *
   * @type { ?number }
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The origin point info in range [0,1).
   *
   * @type { ?number }
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The origin point info in range [0,1).
   *
   * @type { ?number }
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  from?: number;

  /**
   * he distance point info in range (0,1].
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * he distance point info in range (0,1].
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The distance point info in range (0,1].
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  to?: number;

  /**
   * The rotate info.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The rotate info.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The rotate info.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  rotatable?: boolean;
}

/**
 * Defines the shard transition function params.
 *
 * @interface sharedTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the shard transition function params.
 *
 * @interface sharedTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the shard transition function params.
 *
 * @interface sharedTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface sharedTransitionOptions {
  /**
   * Animation duration, in ms.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation duration, in ms.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Animation duration, in ms.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  duration?: number;

  /**
   * Animation duration, in ms.
   *
   * @type { ?(Curve | string | ICurve) }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation curve.
   *
   * @type { ?(Curve | string | ICurve) }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Animation curve.
   *
   * @type { ?(Curve | string | ICurve) }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  curve?: Curve | string | ICurve;

  /**
   * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Animation delay time, in ms.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Animation delay time, in ms.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  delay?: number;

  /**
   * The motion path info.
   *
   * @type { ?MotionPathOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The motion path info.
   *
   * @type { ?MotionPathOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The motion path info.
   *
   * @type { ?MotionPathOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  motionPath?: MotionPathOptions;

  /**
   * Z index info.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Z index info.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Z index info.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  zIndex?: number;

  /**
   * the animate type.
   *
   * @type { ?SharedTransitionEffectType }
   * @default SharedTransitionEffectType.Exchange
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * the animate type.
   *
   * @type { ?SharedTransitionEffectType }
   * @default SharedTransitionEffectType.Exchange
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * the animate type.
   *
   * @type { ?SharedTransitionEffectType }
   * @default SharedTransitionEffectType.Exchange
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  type?: SharedTransitionEffectType;
}

/**
 * Defines the options of geometry transition.
 *
 * @interface GeometryTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the options of geometry transition.
 *
 * @interface GeometryTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface GeometryTransitionOptions {
  /**
   * whether follow target for the component still in the hierarchy, default: false, stay current.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * whether follow target for the component still in the hierarchy, default: false, stay current.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  follow?: boolean;
  /**
   * Defines movement strategy of source and target in the hierarchy during geometry transition.
   * 
   * @type { ?TransitionHierarchyStrategy }
   * @default TransitionHierarchyStrategy.ADAPTIVE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @atomicservice
   * @since 12
   */
  /**
   * Defines movement strategy of source and target in the hierarchy during geometry transition.
   * 
   * @type { ?TransitionHierarchyStrategy }
   * @default TransitionHierarchyStrategy.ADAPTIVE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 13
   */
  hierarchyStrategy?: TransitionHierarchyStrategy
}

/**
 * Defines the options of linear gradient.
 *
 * @interface LinearGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare interface LinearGradientOptions {
  /**
   * angle: Angle of Linear Gradient. The default value is 180;
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * angle: Angle of Linear Gradient. The default value is 180;
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * angle: Angle of Linear Gradient. The default value is 180;
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * angle: Angle of Linear Gradient. The default value is 180;
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * angle: Angle of Linear Gradient. The default value is 180;
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines starting angle of linear gradient.
   *
   * Anonymous Object Rectification.
   * @type { ?(number | string) }
   * @default 180
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  angle?: number | string;

  /**
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines the direction of linear gradient.
   *
   * Anonymous Object Rectification.
   * @type { ?GradientDirection }
   * @default GradientDirection.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  direction?: GradientDirection;

  /**
   * colors: Color description for gradients.
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * colors: Color description for gradients.
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * colors: Color description for gradients.
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * colors: Color description for gradients.
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * colors: Color description for gradients.
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines color description for gradients.
   *
   * Anonymous Object Rectification.
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  colors: Array<[ResourceColor, number]>;

  /**
   * repeating: repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * repeating: repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * repeating: repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * repeating: repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * repeating: repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines gradient colors with repeated coloring.
   *
   * Anonymous Object Rectification.
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  repeating?: boolean;
}

/**
 * Defines the options of radial gradient.
 *
 * @interface SweepGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare interface SweepGradientOptions {
  /**
   * center:is the center point of the angle gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * center:is the center point of the angle gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * center:is the center point of the angle gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * center:is the center point of the angle gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * center:is the center point of the angle gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines center point for angle gradient.
   *
   * Anonymous Object Rectification.
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  center: [Length, Length];

  /**
   * start:Start point of angle gradient. The default value is 0
   *
   * @param { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * start:Start point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Angle Gradient
   * start:Start point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * start:Start point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * start:Start point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines the starting point of angle gradient.
   *
   * Anonymous Object Rectification.
   * @type { ?(number | string) }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  start?: number | string;

  /**
   * end:End point of angle gradient. The default value is 0
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * end:End point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * end:End point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * end:End point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * end:End point of angle gradient. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines end point of angle gradient.
   *
   * Anonymous Object Rectification.
   * @type { ?(number | string) }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  end?: number | string;

  /**
   * rotating:rotating. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * rotating:rotating. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * rotating:rotating. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * rotating:rotating. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * rotating:rotating. The default value is 0
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines the rotation angle of the gradient.
   *
   * Anonymous Object Rectification.
   * @type { ?(number | string) }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  rotation?: number | string;

  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines color description for gradients.
   *
   * Anonymous Object Rectification.
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  colors: Array<[ResourceColor, number]>;

  /**
   * repeating:repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * repeating:repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * repeating:repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * repeating:repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * repeating:repeating. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines gradient colors with repeated coloring.
   *
   * Anonymous Object Rectification.
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  repeating?: boolean;
}

/**
 * Defines the options of radial gradient.
 *
 * @interface RadialGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare interface RadialGradientOptions {
  /**
   * center:Center point of radial gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * center:Center point of radial gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * center:Center point of radial gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * center:Center point of radial gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * center:Center point of radial gradient
   *
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines center point for radial gradient.
   *
   * Anonymous Object Rectification.
   * @type { [Length, Length] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  center: [Length, Length];

  /**
   * radius:Radius of Radial Gradient. value range [0, +∞)
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * radius:Radius of Radial Gradient. value range [0, +∞)
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * radius:Radius of Radial Gradient. value range [0, +∞)
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * radius:Radius of Radial Gradient. value range [0, +∞)
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * radius:Radius of Radial Gradient. value range [0, +∞)
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines radius of the radial gradient.
   *
   * Anonymous Object Rectification.
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  radius: Length;

  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * colors:Color description for gradients
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines color description for gradients.
   *
   * Anonymous Object Rectification.
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  colors: Array<[ResourceColor, number]>;

  /**
   * repeating: Refill. The default value is false
   *
   * @type { ?boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * repeating: Refill. The default value is false
   *
   * @type { ?boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * repeating: Refill. The default value is false
   *
   * @type { ?boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * repeating: Refill. The default value is false
   *
   * @type { ?boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * repeating: Refill. The default value is false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Defines gradient colors with repeated coloring.
   *
   * Anonymous Object Rectification.
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  repeating?: boolean;
}

/**
 * Source and target are two matched elements during the geometry transition.
 * The animation starts at the source and ends at the target.
 * TransitionHierarchyStrategy enumeration defines how levels of source and target elements
 * would be changed in the hierarchy during the geometry transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @atomicservice
 * @since 12
 */
/**
 * Source and target are two matched elements during the geometry transition.
 * The animation starts at the source and ends at the target.
 * TransitionHierarchyStrategy enumeration defines how levels of source and target elements
 * would be changed in the hierarchy during the geometry transition.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 13
 */
declare enum TransitionHierarchyStrategy {
  /**
   * None mode.
   * Source and target staty in the original level in the hierarchy during geometry transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @atomicservice
   * @since 12
   */
  /**
   * None mode.
   * Source and target staty in the original level in the hierarchy during geometry transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 13
   */
  NONE = 0,

  /**
   * ADAPTIVE mode.
   * Lower level one of source and target is elevated to higher level of both,
   * indicating that two elements are in same high level.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @atomicservice
   * @since 12
   */
  /**
   * ADAPTIVE mode.
   * Lower level one of source and target is elevated to higher level of both,
   * indicating that two elements are in same high level.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 13
   */
  ADAPTIVE = 1,
}

/**
 * Defines the options of translate.
 *
 * @interface TranslateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the options of translate.
 *
 * @interface TranslateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the options of translate.
 *
 * @interface TranslateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the options of translate.
 *
 * @interface TranslateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface TranslateOptions {
  /**
   * The param of x direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of x direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of x direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of x direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  x?: number | string;

  /**
   * The param of y direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of y direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of y direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of y direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  y?: number | string;

  /**
   * The param of z direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of z direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of z direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of z direction.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  z?: number | string;
}

/**
 * Defines the options of scale.
 *
 * @interface ScaleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the options of scale.
 *
 * @interface ScaleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the options of scale.
 *
 * @interface ScaleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the options of scale.
 *
 * @interface ScaleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface ScaleOptions {
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  x?: number;

  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  y?: number;

  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  z?: number;

  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  centerX?: number | string;

  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  centerY?: number | string;
}

/**
 * Defines the align rule options of relative container.
 *
 * @interface AlignRuleOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the align rule options of relative container.
 *
 * @interface AlignRuleOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the align rule options of relative container.
 *
 * @interface AlignRuleOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface AlignRuleOption {
  /**
   * The param of left align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of left align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of left align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  left?: { anchor: string, align: HorizontalAlign };

  /**
   * The param of right align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of right align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of right align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  right?: { anchor: string, align: HorizontalAlign };

  /**
   * The param of middle align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of middle align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of middle align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  middle?: { anchor: string, align: HorizontalAlign };

  /**
   * The param of top align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of top align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of top align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  top?: { anchor: string, align: VerticalAlign };

  /**
   * The param of bottom align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of bottom align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 10
   */
  /**
   * The param of bottom align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11
   */
  bottom?: { anchor: string, align: VerticalAlign };

  /**
   * The param of center align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of center align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of center align.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  center?: { anchor: string, align: VerticalAlign };

  /**
   * Defines the bias ratio in horizontal and vertical direction.
   *
   * @type { ?Bias }
   * @default {horizontal:0.5,vertical:0.5}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the bias ratio in horizontal and vertical direction.
   *
   * @type { ?Bias }
   * @default {horizontal:0.5,vertical:0.5}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  bias?: Bias;
}

/**
 * Defines the localized horizontal align param of relative container.
 *
 * @interface LocalizedHorizontalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface LocalizedHorizontalAlignParam {
  /**
   * The anchor of localized align param.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */  
  anchor: string;

  /**
   * The align of localized align param.
   *
   * @type { HorizontalAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */    
  align: HorizontalAlign;
}

/**
 * Defines the localized vertical align param of relative container.
 *
 * @interface LocalizedVerticalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface LocalizedVerticalAlignParam {
  /**
   * The anchor of localized align param.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */  
  anchor: string;

  /**
   * The align of localized align param.
   *
   * @type { VerticalAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */    
  align: VerticalAlign;
}

/**
 * Defines the Localized align rule options of relative container.
 *
 * @interface LocalizedAlignRuleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface LocalizedAlignRuleOptions {
  /**
   * The param of start align.
   *
   * @type { ?LocalizedHorizontalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  start?: LocalizedHorizontalAlignParam;

  /**
   * The param of end align.
   *
   * @type { ?LocalizedHorizontalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  end?: LocalizedHorizontalAlignParam;

  /**
   * The param of middle align.
   *
   * @type { ?LocalizedHorizontalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  middle?: LocalizedHorizontalAlignParam;

  /**
   * The param of top align.
   *
   * @type { ?LocalizedVerticalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  top?: LocalizedVerticalAlignParam;

  /**
   * The param of bottom align.
   *
   * @type { ?LocalizedVerticalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  bottom?: LocalizedVerticalAlignParam;

  /**
   * The param of center align.
   *
   * @type { ?LocalizedVerticalAlignParam }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  center?: LocalizedVerticalAlignParam;

  /**
   * Defines the bias ratio in horizontal and vertical direction.
   *
   * @type { ?Bias }
   * @default {horizontal:0.5,vertical:0.5}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  bias?: Bias;
}

/**
 * Defines the style of the chain in relative container.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum ChainStyle {
  /**
   * Elements of the chain will be spread out.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  SPREAD,

  /**
   * Elements except chain's head and tail will be spread out.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  SPREAD_INSIDE,

  /**
   * Elements of the chain will be packed together.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  PACKED,
}

/**
 * The param of rotate.
 *
 * @interface RotateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * The param of rotate.
 *
 * @interface RotateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * The param of rotate.
 *
 * @interface RotateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * The param of rotate.
 *
 * @interface RotateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface RotateOptions {
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of x direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  x?: number;

  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of y direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  y?: number;

  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of z direction.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  z?: number;

  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of center point of x.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  centerX?: number | string;

  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of center point of y.
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  centerY?: number | string;

  /**
   * The param of center point of z.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of center point of z.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  centerZ?: number;

  /**
   * The param of camera distance, value range (-∞, ∞).
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of camera distance, value range (-∞, ∞).
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  perspective?: number;

  /**
   * The param of angle.
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The param of angle.
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The param of angle.
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The param of angle.
   *
   * @type { number | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  angle: number | string;
}

/**
 * Defines the param of transition.
 *
 * @interface TransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 * @deprecated since 10
 * @useinstead TransitionEffect
 */
declare interface TransitionOptions {
  /**
   * Defines the param of type.
   *
   * @type { ?TransitionType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   */
  type?: TransitionType;
  /**
   * Defines the param of opacity.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   */
  opacity?: number;
  /**
   * Defines the param of translate.
   *
   * @type { ?TranslateOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   */
  translate?: TranslateOptions;
  /**
   * Defines the param of scale.
   *
   * @type { ?ScaleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   */
  scale?: ScaleOptions;
  /**
   * Defines the param of rotate.
   *
   * @type { ?RotateOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   */
  rotate?: RotateOptions;
}

/**
 * Defines the Edge object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the Edge object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum TransitionEdge {
  /**
   * Top edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Top edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  TOP,

  /**
   * Bottom edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Bottom edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  BOTTOM,

  /**
   * Start edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Start edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  START,

  /**
   * End edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * End edge
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  END
}

/**
 * Defines all transition effects.
 *
 * @typedef { object } TransitionEffects
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines all transition effects.
 *
 * @typedef { object } TransitionEffects
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare type TransitionEffects = {
  identity: undefined;
  opacity: number;
  slideSwitch: undefined;
  move: TransitionEdge;
  translate: TranslateOptions;
  rotate: RotateOptions;
  scale: ScaleOptions;
  asymmetric: {
    appear: TransitionEffect;
    disappear: TransitionEffect;
  };
};

/**
 * Defined the draw modifier of node. Provides draw callbacks for the associated Node.
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class DrawModifier {
  /**
   * drawBehind Method. Executed before drawing associated Node.
   *
   * @param { DrawContext } drawContext - The drawContext used to draw.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  drawBehind?(drawContext: DrawContext): void;

  /**
   * drawContent Method. Executed when associated Node is drawing, the default drawContent method will be replaced 
   * if this method is set.
   *
   * @param { DrawContext } drawContext - The drawContext used to draw.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  drawContent?(drawContext: DrawContext): void;
  
  /**
   * drawFront Method. Executed after drawing associated Node.
   *
   * @param { DrawContext } drawContext - The drawContext used to draw.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  drawFront?(drawContext: DrawContext): void;
  
  /**
   * Invalidate the component, which will cause a re-render of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  invalidate(): void;
}

/**
 * Defines the transition effect
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the transition effect
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class TransitionEffect<
  Type extends keyof TransitionEffects = keyof TransitionEffects,
  Effect extends TransitionEffects[Type] = TransitionEffects[Type]
> {
  /**
   * Disables the transition effect
   *
   * @type { TransitionEffect<"identity"> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Disables the transition effect
   *
   * @type { TransitionEffect<"identity"> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  static readonly IDENTITY: TransitionEffect<"identity">;

  /**
   * Specifies a transition effect with transparency of 0, which is equivalent to TransitionEffect.opacity(0).
   *
   * @type { TransitionEffect<"opacity"> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Specifies a transition effect with transparency of 0, which is equivalent to TransitionEffect.opacity(0).
   *
   * @type { TransitionEffect<"opacity"> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  static readonly OPACITY: TransitionEffect<"opacity">;

  /**
   * Defines a slide transition effect
   *
   * @type { TransitionEffect<
   * "asymmetric",
   * {appear: TransitionEffect<"move", TransitionEdge>;
   * disappear: TransitionEffect<"move", TransitionEdge>;
   * }> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines a slide transition effect
   *
   * @type { TransitionEffect<
   * "asymmetric",
   * {appear: TransitionEffect<"move", TransitionEdge>;
   * disappear: TransitionEffect<"move", TransitionEdge>;
   * }> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  static readonly SLIDE: TransitionEffect<
    "asymmetric",
    {
      appear: TransitionEffect<"move", TransitionEdge>;
      disappear: TransitionEffect<"move", TransitionEdge>;
    }
  >;

  /**
   * Specify a transition effect where the element enters by shrinking first and then expanding as it slides in from the right, 
   * and exits by shrinking first and then expanding as it slides out to the left, with a minimum scale ratio of 0.8. 
   * It comes with default animation parameters, which can also be overridden. 
   * The default animation duration is set to 600ms, and the specified animation curve is cubicBezierCurve(0.24, 0.0, 0.50, 1.0).
   *
   * @type { TransitionEffect<"slideSwitch"> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Specify a transition effect where the element enters by shrinking first and then expanding as it slides in from the right, 
   * and exits by shrinking first and then expanding as it slides out to the left, with a minimum scale ratio of 0.8. 
   * It comes with default animation parameters, which can also be overridden. 
   * The default animation duration is set to 600ms, and the specified animation curve is cubicBezierCurve(0.24, 0.0, 0.50, 1.0).
   *
   * @type { TransitionEffect<"slideSwitch"> }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  static readonly SLIDE_SWITCH: TransitionEffect<"slideSwitch">;

  /**
   * Creates a translate transition effect
   *
   * @param { TranslateOptions } options - translate options
   * @returns { TransitionEffect<"translate"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Creates a translate transition effect
   *
   * @param { TranslateOptions } options - translate options
   * @returns { TransitionEffect<"translate"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  static translate(options: TranslateOptions): TransitionEffect<"translate">;

  /**
   * Creates a rotation transition effect
   *
   * @param { RotateOptions } options - rotate options
   * Set the rotation effect for component transitions when inserting and deleting. 
   * The value represents the starting rotation point for the inserting animation and the ending rotation point for the deleting animation.
   * -x: Horizontal component of the rotational vector.
   * -y: Vertical component of the rotational vector.
   * -z: Vertical component of the rotational vector.
   * -centerX, centerY specify the rotation center point, with default values of "50%",
   * meaning that the default rotation center point is the center point of the component.
   * -The center point of (0, 0) represents the upper-left corner of the component.
   * -centerZ refers to the Z-axis anchor point. The default value of centerZ is 0.
   * -perspective indicates the visual distance. The perspective property does not support transition animation.
   * @returns { TransitionEffect<"rotate"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Creates a rotation transition effect
   *
   * @param { RotateOptions } options - rotate options
   * Set the rotation effect for component transitions when inserting and deleting. 
   * The value represents the starting rotation point for the inserting animation and the ending rotation point for the deleting animation.
   * -x: Horizontal component of the rotational vector.
   * -y: Vertical component of the rotational vector.
   * -z: Vertical component of the rotational vector.
   * -centerX, centerY specify the rotation center point, with default values of "50%",
   * meaning that the default rotation center point is the center point of the component.
   * -The center point of (0, 0) represents the upper-left corner of the component.
   * -centerZ refers to the Z-axis anchor point. The default value of centerZ is 0.
   * -perspective indicates the visual distance. The perspective property does not support transition animation.
   * @returns { TransitionEffect<"rotate"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  static rotate(options: RotateOptions): TransitionEffect<"rotate">;

  /**
   * Creates a scale transition effect
   *
   * @param { ScaleOptions } options - scale options
   * @returns { TransitionEffect<"scale"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Creates a scale transition effect
   *
   * @param { ScaleOptions } options - scale options
   * @returns { TransitionEffect<"scale"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  static scale(options: ScaleOptions): TransitionEffect<"scale">;

  /**
   * Creates an opacity transition effect with alpha value
   *
   * @param { number } alpha - opacity alpha value, value range [0, 1].
   * @returns { TransitionEffect<"opacity"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Creates an opacity transition effect with alpha value
   *
   * @param { number } alpha - opacity alpha value, value range [0, 1].
   * @returns { TransitionEffect<"opacity"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Creates an opacity transition effect with alpha value
   *
   * @param { number } alpha - opacity alpha value, value range [0, 1].
   * Illegal values less than 0 are treated as 0, and illegal values greater than 1 are treated as 1.
   * @returns { TransitionEffect<"opacity"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  static opacity(alpha: number): TransitionEffect<"opacity">;

  /**
   * Creates a move transition effect
   *
   * @param { TransitionEdge } edge - the edge that component will move to
   * @returns { TransitionEffect<"move"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Creates a move transition effect
   *
   * @param { TransitionEdge } edge - the edge that component will move to
   * @returns { TransitionEffect<"move"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  static move(edge: TransitionEdge): TransitionEffect<"move">;

  /**
   * Creates an asymmetric transition effect
   *
   * @param { TransitionEffect } appear - the transition which will be attached when the component is appear
   * @param { TransitionEffect } disappear - the transition which will be attached when the component is disappear
   * @returns { TransitionEffect<"asymmetric"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Creates an asymmetric transition effect
   *
   * @param { TransitionEffect } appear - the transition which will be attached when the component is appear
   * @param { TransitionEffect } disappear - the transition which will be attached when the component is disappear
   * @returns { TransitionEffect<"asymmetric"> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  static asymmetric(
    appear: TransitionEffect,
    disappear: TransitionEffect
  ): TransitionEffect<"asymmetric">;

  /**
   * TransitionEffect constructor
   *
   * @param { Type } type - transition type
   * @param { Effect } effect - transition options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * TransitionEffect constructor
   *
   * @param { Type } type - transition type
   * @param { Effect } effect - transition options
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  constructor(type: Type, effect: Effect);

  /**
   * Set the animation of current transition effect
   *
   * @param { AnimateParam } value - animation parameters
   * @returns { TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set the animation of current transition effect
   *
   * @param { AnimateParam } value - animation parameters
   * @returns { TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  animation(value: AnimateParam): TransitionEffect;

  /**
   * Combines another transition effect
   *
   * @param { TransitionEffect } transitionEffect - transition effect which is be combined
   * @returns { TransitionEffect } combined transition effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Combines another transition effect
   *
   * @param { TransitionEffect } transitionEffect - transition effect which is be combined
   * @returns { TransitionEffect } combined transition effect
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  combine(transitionEffect: TransitionEffect): TransitionEffect;
}

/**
 * Define Preview property
 *
 * @interface PreviewParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Define Preview property
 *
 * @interface PreviewParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface PreviewParams {
  /**
   * Define Preview title
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview title
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  title?: string;

  /**
   * Define Preview width
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview width
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  width?: number;

  /**
   * Define Preview height
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview height
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  height?: number;

  /**
   * Define Preview locale
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview locale
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11
   */
  locale?: string;

  /**
   * Define Preview colorMode
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview colorMode
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  colorMode?: string;

  /**
   * Define Preview deviceType
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview deviceType
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11
   */
  deviceType?: string;

  /**
   * Define Preview dpi
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview dpi
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11
   */
  dpi?: number;

  /**
   * Define Preview orientation
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview orientation
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11
   */
  orientation?: string;

  /**
   * Define Preview roundScreen
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define Preview roundScreen
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 11
   */
  roundScreen?: boolean;
}

/**
 * ItemDragInfo object description
 *
 * @interface ItemDragInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * ItemDragInfo object description
 *
 * @interface ItemDragInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * ItemDragInfo object description
 *
 * @interface ItemDragInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface ItemDragInfo {
  /**
   * Obtains the X coordinate of the drag window, in vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Obtains the X coordinate of the drag window, in vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the X coordinate of the drag window, in vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  x: number;

  /**
   * Obtains the Y coordinate of the drag window, in vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Obtains the Y coordinate of the drag window, in vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Obtains the Y coordinate of the drag window, in vp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  y: number;
}

/**
 * Enum of using the effects template mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 14
 */
declare enum EffectType {
  /**
   * Define use the effects template defined by the parent effectComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 14
   */
  DEFAULT = 0,
  /**
   * Define use the effects template defined by the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 14
   */
  WINDOW_EFFECT = 1,
}

/**
 * Defines the drag status before drag action.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare enum PreDragStatus {
  /**
   * Define the status for user prepare to start long press gesture.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  ACTION_DETECTING_STATUS = 0,

  /**
   * Define the status for user can start drag action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  READY_TO_TRIGGER_DRAG_ACTION = 1,

  /**
   * Define the status for dragItem lift animation started.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  PREVIEW_LIFT_STARTED = 2,

  /**
   * Define the status for dragItem lift animation finished.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  PREVIEW_LIFT_FINISHED = 3,

  /**
   * Define the status for dragItem landing animation started.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  PREVIEW_LANDING_STARTED = 4,

  /**
   * Define the status for dragItem landing animation finished.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  PREVIEW_LANDING_FINISHED = 5,

  /**
   * Define the status for user cancel drag action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  ACTION_CANCELED_BEFORE_DRAG = 6,

  /**
   * Define the status for user to sense the availability of drag in advance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  PREPARING_FOR_DRAG_DETECTION = 7,
}

/**
 * DragItemInfo object description
 *
 * @interface DragItemInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * DragItemInfo object description
 *
 * @interface DragItemInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * DragItemInfo object description
 *
 * @interface DragItemInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare interface DragItemInfo {
  /**
   * Uses the pixelMap object for drawing.
   *
   * @type { ?PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Uses the pixelMap object for drawing.
   *
   * @type { ?PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Uses the pixelMap object for drawing.
   *
   * @type { ?PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  pixelMap?: PixelMap;

  /**
   * Uses the custom builder for drawing, if pixelMap is set, this value is ignored.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Uses the custom builder for drawing, if pixelMap is set, this value is ignored.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Uses the custom builder for drawing, if pixelMap is set, this value is ignored.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  builder?: CustomBuilder;

  /**
   * Sets the extra info for drag event.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the extra info for drag event.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the extra info for drag event.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  extraInfo?: string;
}

/**
 * Defining animation function.
 *
 * @param { AnimateParam } value
 * @param { function } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining animation function.
 *
 * @param { AnimateParam } value
 * @param { function } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining animation function.
 *
 * @param { AnimateParam } value
 * @param { function } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining animation function.
 *
 * @param { AnimateParam } value
 * @param { function } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#animateTo
 */
declare function animateTo(value: AnimateParam, event: () => void): void;

/**
 * Define animation functions for immediate distribution.
 *
 * @param { AnimateParam } value - Set animation effect parameters.
 * @param { function } event - Specify the closure function that displays dynamic effects,
 * and the system will automatically insert transition animations for state changes caused by the closure function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare function animateToImmediately(value: AnimateParam, event: () => void): void;

/**
 * Converts a value in vp units to a value in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a value in vp units to a value in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a value in vp units to a value in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a value in vp units to a value in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#vp2px
 */
declare function vp2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of vp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of vp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of vp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of px to a number in units of vp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#px2vp
 */
declare function px2vp(value: number): number;

/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#fp2px
 */
declare function fp2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#px2fp
 */
declare function px2fp(value: number): number;

/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#lpx2px
 */
declare function lpx2px(value: number): number;

/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#px2lpx
 */
declare function px2lpx(value: number): number;

/**
 * Defines the namespace of focus controller.
 *
 * @namespace focusControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 9
 */
/**
 * Defines the namespace of focus controller.
 *
 * @namespace focusControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare namespace focusControl {
  /**
   * Request focus to the specific component by param: 'id/key'.
   *
   * @param { string } value
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Request focus to the specific component by param: 'id/key'.
   *
   * @param { string } value
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Request focus to the specific component by param: 'id/key'.
   *
   * @param { string } value
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  function requestFocus(value: string): boolean;
}

/**
 * Import the PointerStyle type object for setCursor.
 *
 * @typedef { import('../api/@ohos.multimodalInput.pointer').default.PointerStyle } PointerStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Import the PointerStyle type object for setCursor.
 *
 * @typedef { import('../api/@ohos.multimodalInput.pointer').default.PointerStyle } PointerStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare type PointerStyle = import('../api/@ohos.multimodalInput.pointer').default.PointerStyle;

/**
 * CursorControl
 *
 * @namespace cursorControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * CursorControl
 *
 * @namespace cursorControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare namespace cursorControl {

  /**
   * Change the mouse cursor style by param: 'PointerStyle'.
   *
   * @param { PointerStyle } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Change the mouse cursor style by param: 'PointerStyle'.
   *
   * @param { PointerStyle } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  function setCursor(value: PointerStyle): void;

  /**
   * Restore the default mouse cursor style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Restore the default mouse cursor style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  function restoreDefault(): void;
}

/**
 * Defines the event target.
 *
 * @interface EventTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the event target.
 *
 * @interface EventTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the event target.
 *
 * @interface EventTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the event target.
 *
 * @interface EventTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface EventTarget {
  /**
   * Area of current target.
   *
   * @type { Area }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Area of current target.
   *
   * @type { Area }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Area of current target.
   *
   * @type { Area }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Area of current target.
   *
   * @type { Area }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  area: Area;

  /**
   * Node id of current target.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15
   */
  id?: string;
}

/**
 * Defines the event source type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the event source type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the event source type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum SourceType {
  /**
   * Unknown type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Unknown type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Unknown type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  Unknown,

  /**
   * The mouse type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The mouse type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The mouse type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  Mouse,

  /**
   * The touch screen type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The touch screen type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The touch screen type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  TouchScreen,
}

/**
 * Defines the event tool type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the event tool type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the event tool type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum SourceTool {
  /**
   * Unknown type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Unknown type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Unknown type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  Unknown,

  /**
   * The finger type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The finger type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The finger type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  Finger,

  /**
   * The pen type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The pen type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The pen type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  Pen,

  /**
   * The mouse type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  MOUSE,

  /**
   * The touchpad type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  TOUCHPAD,

  /**
   * The joystick type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  JOYSTICK,
}

/**
 * Defines the Border Image Repeat Mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the Border Image Repeat Mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the Border Image Repeat Mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum RepeatMode {
  /**
   * Repeat mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Repeat mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Repeat mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  Repeat,

  /**
   * Stretch mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Stretch mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Stretch mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  Stretch,

  /**
   * Round mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Round mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Round mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  Round,

  /**
   * Space mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Space mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Space mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  Space,
}

/**
 * enum Blur style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * enum Blur style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * enum Blur style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum BlurStyle {
  /**
   * Defines the thin card material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the thin card material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the thin card material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  Thin,

  /**
   * Defines the regular card material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the regular card material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the regular card material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  Regular,

  /**
   * Defines the thick card material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the thick card material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the thick card material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  Thick,

  /**
   * Defines the thin background material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the thin background material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  BACKGROUND_THIN,

  /**
   * Defines the thin regular material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the thin regular material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  BACKGROUND_REGULAR,

  /**
   * Defines the thin thick material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the thin thick material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  BACKGROUND_THICK,

  /**
   * Defines the thin ultra thick material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the thin ultra thick material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  BACKGROUND_ULTRA_THICK,

  /**
   * Defines none material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines none material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */  
  NONE,    

  /**
   * Defines the ultra thin component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the ultra thin component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  COMPONENT_ULTRA_THIN = 8,

  /**
   * Defines the thin component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the thin component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  COMPONENT_THIN = 9,

  /**
   * Defines the regular component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the regular component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  COMPONENT_REGULAR = 10,

  /**
   * Defines the thick component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the thick component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  COMPONENT_THICK = 11,

  /**
   * Defines the ultra thick component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Defines the ultra thick component material.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  COMPONENT_ULTRA_THICK = 12,
}

/**
 * Enumerates the policies for activating the blur style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare enum BlurStyleActivePolicy {
  /**
   * The component has the blur effect only when the window is focused.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  FOLLOWS_WINDOW_ACTIVE_STATE = 0,

  /**
   * The component always has the blur effect, regardless of whether the window is focused.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  ALWAYS_ACTIVE = 1,

  /**
   * The component does not have the blur effect, regardless of whether the window is focused.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  ALWAYS_INACTIVE = 2,
}

/**
 * enum color mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * enum color mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum ThemeColorMode {
  /**
   * Defines the mode which is follow up with system.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the mode which is follow up with system.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  SYSTEM,

  /**
   * Defines the light mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the light mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  LIGHT,

  /**
   * Defines the dark mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the dark mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  DARK,
}

/**
 * Defines adaptive color
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines adaptive color
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum AdaptiveColor {
  /**
   * Defines the fixed value color adaptive mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the fixed value color adaptive mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  DEFAULT,

  /**
   * Defines the background average color adaptive mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the background average color adaptive mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  AVERAGE,
}

/**
 * Defines modal transition type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines modal transition type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum ModalTransition {
  /**
   * Use default animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Use default animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  DEFAULT,

  /**
   * Use none animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Use none animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  NONE,

  /**
   * Use alpha animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Use alpha animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  ALPHA,
}

/**
 * Defines the options of backgroundBlurStyle
 *
 * @extends BlurStyleOption
 * @interface BackgroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of backgroundBlurStyle
 *
 * @extends BlurStyleOption
 * @interface BackgroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface BackgroundBlurStyleOptions extends BlurStyleOptions {
  /**
   * Defines the policy for activating the blur style.
   *
   * @type { ?BlurStyleActivePolicy }
   * @default BlurStyleActivePolicy.ALWAYS_ACTIVE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  policy?: BlurStyleActivePolicy;

  /**
   * Color of the background effect when the window is not focused.
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  inactiveColor?: ResourceColor;
}

/**
 * Defines the options of ForegroundBlurStyle
 *
 * @extends BlurStyleOptions
 * @interface ForegroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of ForegroundBlurStyle
 *
 * @extends BlurStyleOptions
 * @interface ForegroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface ForegroundBlurStyleOptions extends BlurStyleOptions {}


/**
 * Defines the options of blur
 *
 * @interface BlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the options of blur
 *
 * @interface BlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface BlurOptions {
  /**
   * Fuzzy gray scale parameter.
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Fuzzy gray scale parameter.
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  grayscale: [number, number];
}

/**
 * Defines the SystemAdaptiveOptions interface
 *
 * @interface SystemAdaptiveOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare interface SystemAdaptiveOptions {
  /**
   * Whether to disable system adaptive.
   * 
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  disableSystemAdaptation?: boolean;
}

/**
 * Defines the options of blurStyle
 *
 * @interface BlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of blurStyle
 *
 * @interface BlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface BlurStyleOptions {
  /**
   * color mode
   *
   * @type { ?ThemeColorMode }
   * @default ThemeColorMode.SYSTEM
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * color mode
   *
   * @type { ?ThemeColorMode }
   * @default ThemeColorMode.SYSTEM
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  colorMode?: ThemeColorMode;

  /**
   * adaptive color
   *
   * @type { ?AdaptiveColor }
   * @default AdaptiveColor.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * adaptive color
   *
   * @type { ?AdaptiveColor }
   * @default AdaptiveColor.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  adaptiveColor?: AdaptiveColor;

  /**
   * Define the scale of blur effect.
   * The range of value is [0, 1]. The larger the value, the more obvious the blurring effect.
   * A value of 0 indicates no blur effect and a value of 1 indicates a complete blur effect.
   *
   * @type { ?number }
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  scale?: number;

  /**
   * Defines the options of blur
   *
   * @type { ?BlurOptions }
   * @default { grayScale: [0,0] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the options of blur
   *
   * @type { ?BlurOptions }
   * @default { grayScale: [0,0] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  blurOptions?: BlurOptions;
}

/**
 * Defines the options of BackgroundEffect
 *
 * @interface BackgroundEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the options of BackgroundEffect
 *
 * @interface BackgroundEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface BackgroundEffectOptions {

  /**
   * Define the radius size of BackgroundEffect.The range of this value is [0, ∞)
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Define the radius size of BackgroundEffect.The range of this value is [0, ∞)
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  radius: number;

  /**
   * Define the saturation of BackgroundEffect. Value range [0, ∞)
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Define the saturation of BackgroundEffect. Value range [0, ∞)
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  saturation?: number;

  /**
   * Define the brightness of BackgroundEffect. Value range [0, ∞)
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Define the brightness of BackgroundEffect. Value range [0, ∞)
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  brightness?: number;

  /**
   * color the brightness of BackgroundEffect.
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * color the brightness of BackgroundEffect.
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  color?: ResourceColor;

  /**
   * Define the adaptiveColor of BackgroundEffect.
   *
   * @type { ?AdaptiveColor }
   * @default AdaptiveColor.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Define the adaptiveColor of BackgroundEffect.
   *
   * @type { ?AdaptiveColor }
   * @default AdaptiveColor.DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  adaptiveColor?: AdaptiveColor;

  /**
   * Define the blurOptions of BackgroundEffect.
   *
   * @type { ?BlurOptions }
   * @default { grayScale: [0,1] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Define the blurOptions of BackgroundEffect.
   *
   * @type { ?BlurOptions }
   * @default { grayScale: [0,0] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  blurOptions?: BlurOptions;

  /**
   * Defines the policy for activating the blur style.
   *
   * @type { ?BlurStyleActivePolicy }
   * @default BlurStyleActivePolicy.ALWAYS_ACTIVE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  policy?: BlurStyleActivePolicy;

  /**
   * Color of the background effect when the window is not focused.
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  inactiveColor?: ResourceColor;
}

/**
 * Defines the options of ForegroundEffect
 *
 * @interface ForegroundEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface ForegroundEffectOptions {
 
  /**
   * Define the radius size of ForegroundEffect.The range of this value is [0, ∞)
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
 radius: number;
}

/**
 * Provide an interface for the text style of picker
 *
 * @interface PickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provide an interface for the text style of picker
 *
 * @interface PickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface PickerTextStyle {
  /**
   * Define the text color of picker.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define the text color of picker.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  color?: ResourceColor;

  /**
   * Define the text font of picker.
   * Only support size and weight.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define the text font of picker.
   * Only support size and weight.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  font?: Font;
}

/**
 * Provide an interface for the button style of picker
 *
 * @interface PickerDialogButtonStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface PickerDialogButtonStyle {
  /**
   * Describes the button style.
   *
   * @type { ?ButtonType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  type?: ButtonType;

  /**
   * Describes the button style.
   *
   * @type { ?ButtonStyleMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  style?: ButtonStyleMode;

  /**
   * Describes the button role.
   *
   * @type { ?ButtonRole }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  role?: ButtonRole;

  /**
   * Describes the button text size.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  fontSize?: Length;

  /**
   * Describes the button text color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  fontColor?: ResourceColor;

  /**
   * Describes the button font weight.
   *
   * @type { ?(FontWeight | number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  fontWeight?: FontWeight | number | string;

  /**
   * Describes the button font style.
   *
   * @type { ?FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  fontStyle?: FontStyle;

  /**
   * Describes the button font family.
   *
   * @type { ?(Resource | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  fontFamily?: Resource | string;

  /**
   * Describes the button background color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  backgroundColor?: ResourceColor;

  /**
   * Describes the button border radius.
   *
   * @type { ?(Length | BorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  borderRadius?: Length | BorderRadiuses;

  /**
   * Define whether the button default to responding to the Enter key
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  primary?: boolean;
}

/**
 * Define the type of shadow
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Define the type of shadow
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum ShadowType {
  /**
   * Define a color type of shadow
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define a color type of shadow
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  COLOR,

  /**
   * Define a blur type of shadow
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define a blur type of shadow
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  BLUR,
}

/**
 * Define the options of shadow
 *
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Define the options of shadow
 *
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Define the options of shadow
 *
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Define the options of shadow
 *
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface ShadowOptions {
  /**
   * Define the radius size of shadow
   *
   * @type { number | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Define the radius size of shadow
   *
   * @type { number | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define the radius size of shadow
   *
   * @type { number | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Define the radius size of shadow
   *
   * @type { number | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  radius: number | Resource;

  /**
   * Define the type of shadow
   *
   * @type { ?ShadowType }
   * @default ShadowType.COLOR
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Define the type of shadow
   *
   * @type { ?ShadowType }
   * @default ShadowType.COLOR
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  type?: ShadowType;

  /**
   * Define the color of shadow
   *
   * @type { ?(Color | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Define the color of shadow
   *
   * @type { ?(Color | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define the color of shadow
   *
   * @type { ?(Color | string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Define the color or the color strategy of shadow
   *
   * @type { ?(Color | string | Resource| ColoringStrategy) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  color?: Color | string | Resource | ColoringStrategy;

  /**
   * Define the horizontal offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Define the horizontal offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define the horizontal offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Define the horizontal offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  offsetX?: number | Resource;

  /**
   * Define the vertical offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Define the vertical offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Define the vertical offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Define the vertical offset size of shadow
   *
   * @type { ?(number | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  offsetY?: number | Resource;

  /**
   * Define whether the shadow should fill the area
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Define whether the shadow should fill the area
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  fill?: boolean;
}

/**
 * enum Shadow style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * enum Shadow style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum ShadowStyle {
  /**
   * Defines the super small default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the super small default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  OUTER_DEFAULT_XS,

  /**
   * Defines the small default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the small default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  OUTER_DEFAULT_SM,

  /**
   * Defines the medium default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the medium default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  OUTER_DEFAULT_MD,

  /**
   * Defines the large default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the large default shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  OUTER_DEFAULT_LG,

  /**
   * Defines the small floating shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the small floating shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  OUTER_FLOATING_SM,

  /**
   * Defines the medium floating shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the medium floating shadow style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  OUTER_FLOATING_MD,
}

/**
 * Defines the options of Shadow.
 *
 * @interface MultiShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of Shadow.
 *
 * @interface MultiShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface MultiShadowOptions {
  /**
   * Current shadow radius.
   * 
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Current shadow radius.
   * 
   * @type { ?(number | Resource) }
   * @default 20
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  radius?: number | Resource;

  /**
   * Current shadow offsetX.
   * 
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Current shadow offsetX.
   * 
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  offsetX?: number | Resource;

  /**
   * Current shadow offsetY
   * 
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Current shadow offsetY
   * 
   * @type { ?(number | Resource) }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  offsetY?: number | Resource;
}

/**
 * Enumerates the safe area types.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enumerates the safe area types.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum SafeAreaType {
  /**
   * Default area of the system, including the status bar and navigation bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Default area of the system, including the status bar and navigation bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  SYSTEM,

  /**
   * Notch or punch hole.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Notch or punch hole.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  CUTOUT,

  /**
   * Soft keyboard area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Soft keyboard area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  KEYBOARD
}

/**
 * Enumerates the safe area edges.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enumerates the safe area edges.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum SafeAreaEdge {
  /**
   * Top edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Top edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  TOP,

  /**
   * Bottom edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Bottom edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  BOTTOM,

  /**
   * Start edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Start edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  START,

  /**
   * End edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * End edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  END
}

/**
 * Enumerates the safe area types can be ignored.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum LayoutSafeAreaType {
  /**
   * Default area of the system, including the status bar and navigation bar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  SYSTEM = 0,
}

/**
 * Enumerates the safe area edges can be ignored.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum LayoutSafeAreaEdge {
  /**
   * Top edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  TOP = 0,

  /**
   * Bottom edge of the safe area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  BOTTOM = 1,
}

/**
 * Defines sheet size type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines sheet size type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum SheetSize {
  /**
   * Defines the sheet size medium height type. The height is half the screen height
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the sheet size medium height type. The height is half the screen height
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  MEDIUM,

  /**
   * Defines the sheet size large height type. The height is almost screen height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the sheet size large height type. The height is almost screen height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  LARGE,

  /**
   * Defines the sheet size fit content height type. The height fit content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the sheet size fit content height type. The height fit content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  FIT_CONTENT = 2,
}

/**
 * Defines the base event.
 *
 * @interface BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the base event.
 *
 * @interface BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the base event.
 *
 * @interface BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the base event.
 *
 * @interface BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface BaseEvent {
  /**
   * Defines the current target which fires this event.
   *
   * @type { EventTarget }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines the current target which fires this event.
   *
   * @type { EventTarget }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines the current target which fires this event.
   *
   * @type { EventTarget }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the current target which fires this event.
   *
   * @type { EventTarget }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  target: EventTarget;

  /**
   * Event timestamp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Event timestamp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Event timestamp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Event timestamp.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  timestamp: number;

  /**
   * the event source info.
   *
   * @type { SourceType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * the event source info.
   *
   * @type { SourceType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * the event source info.
   *
   * @type { SourceType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * the event source info.
   *
   * @type { SourceType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  source: SourceType;

  /**
   * the Horizontal axis coordinate.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  axisHorizontal?: number;

  /**
   * the Vertical axis coordinate.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  axisVertical?: number;

  /**
   * Touch pressure.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Touch pressure.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Touch pressure.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  pressure: number;

  /**
   * The angle between pencil projection on plane-X-Y and axis-Z.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The angle between pencil projection on plane-X-Y and axis-Z.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The angle between pencil projection on plane-X-Y and axis-Z.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  tiltX: number;

  /**
   * The angle between pencil projection on plane-Y-Z and axis-Z.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The angle between pencil projection on plane-Y-Z and axis-Z.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The angle between pencil projection on plane-Y-Z and axis-Z.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  tiltY: number;

  /**
   * Indicates the angle at which the stylus rotates around the Z-axis.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 17
   */
  rollAngle?: number;

  /**
   * The event tool type info.
   *
   * @type { SourceTool }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The event tool type info.
   *
   * @type { SourceTool }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The event tool type info.
   *
   * @type { SourceTool }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  sourceTool: SourceTool;

  /**
   * Query the ModifierKey press state, support 'ctrl'|'alt'|'shift'|'fn'
   *
   * @param { Array<string> } keys - indicate the keys of the ModifierKey.
   * @returns { boolean }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getModifierKeyState?(keys: Array<string>): boolean;

  /**
   * Indicates the ID of the input device that triggers the current event.
   *
   * @type { ?number } [deviceId] The ID of the input device that triggers the current event
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  deviceId?: number;

  /**
   * Indicates the screen ID on which the event occurred.
   *
   * @type { ?number } [targetDisplayId] The screen ID on which the event occurred.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  targetDisplayId?: number;
}

/**
 * Border image option
 *
 * @interface BorderImageOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Border image option
 *
 * @interface BorderImageOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Border image option
 *
 * @interface BorderImageOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface BorderImageOption {
  /**
   * Border image slice
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border image slice
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image slice
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Border image slice
   *
   * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  slice?: Length | EdgeWidths | LocalizedEdgeWidths,

  /**
   * Border image repeat
   *
   * @type { ?RepeatMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border image repeat
   *
   * @type { ?RepeatMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image repeat
   *
   * @type { ?RepeatMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  repeat?: RepeatMode,

  /**
   * Border image source
   *
   * @type { ?(string | Resource | LinearGradient) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border image source
   *
   * @type { ?(string | Resource | LinearGradient) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image source
   *
   * @type { ?(string | Resource | LinearGradient) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  source?: string | Resource | LinearGradient,

  /**
   * Border image width
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border image width
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image width
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Border image width
   *
   * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  width?: Length | EdgeWidths | LocalizedEdgeWidths,

  /**
   * Border image outset
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border image outset
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image outset
   *
   * @type { ?(Length | EdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Border image outset
   *
   * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  outset?: Length | EdgeWidths | LocalizedEdgeWidths,

  /**
   * Border image center fill
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border image center fill
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image center fill
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  fill?: boolean
}

/**
 * Defines the policy of Layout
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15
 */
declare class LayoutPolicy {
  /**
   * The component fills its parent which means its size is as large as its parent.
   *
   * @type { LayoutPolicy }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice 
   * @since 15
   */
  static readonly matchParent: LayoutPolicy;
}

/**
 * The tap action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface ClickEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * The tap action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface ClickEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * The tap action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface ClickEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * The tap action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface ClickEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface ClickEvent extends BaseEvent {
  /**
   * X coordinate of the click point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * X coordinate of the click point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  displayX: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Y coordinate of the click point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  displayY: number;

  /**
   * X coordinate of the click point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * X coordinate of the click point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  windowX: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Y coordinate of the click point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  windowY: number;

  /**
   * X coordinate of the click point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   * @useinstead ClickEvent#windowX
   */
  screenX: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   * @useinstead ClickEvent#windowY
   */
  screenY: number;

  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * X coordinate of the click point relative to the left edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  x: number;

  /**
   * Y coordinate of the click point relative to the upper edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Y coordinate of the click point relative to the left edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Y coordinate of the click point relative to the left edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Y coordinate of the click point relative to the left edge of the clicked element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  y: number;

  /**
   * Type of the touch hand.
   *
   * @type { InteractionHand }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  hand?: InteractionHand;

  /**
   * Prevent the default function.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  preventDefault: () => void;
}

/**
 * The hover action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface HoverEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * The hover action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface HoverEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare interface HoverEvent extends BaseEvent {
  /**
   * X coordinate of the hover point relative to the left edge of the hover element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   */
  x?: number;

  /**
   * Y coordinate of the hover point relative to the upper edge of the hover element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   */
  y?: number;

  /**
   * X coordinate of the hover point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   */
  windowX?: number;

  /**
   * Y coordinate of the hover point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   */
  windowY?: number;

  /**
   * X coordinate of the hover point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   */
  displayX?: number;

  /**
   * Y coordinate of the hover point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   */
  displayY?: number;

  /**
   * The blocking hover event pops up.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The blocking hover event pops up.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  stopPropagation: () => void;
}

/**
 * The mouse click action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface MouseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The mouse click action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface MouseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare interface MouseEvent extends BaseEvent {
  /**
   * Mouse button of the click event.
   *
   * @type { MouseButton }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Mouse button of the click event.
   *
   * @type { MouseButton }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  button: MouseButton;

  /**
   * Mouse action of the click event.
   *
   * @type { MouseAction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Mouse action of the click event.
   *
   * @type { MouseAction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  action: MouseAction;

  /**
   * X coordinate of the mouse point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * X coordinate of the mouse point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  displayX: number;

  /**
   * Y coordinate of the mouse point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Y coordinate of the mouse point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  displayY: number;

  /**
   * X coordinate of the mouse point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * X coordinate of the mouse point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  windowX: number;

  /**
   * Y coordinate of the mouse point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Y coordinate of the mouse point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  windowY: number;

  /**
   * X coordinate of the mouse point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   * @deprecated since 10
   * @useinstead MouseEvent#windowX
   */
  screenX: number;

  /**
   * Y coordinate of the mouse point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   * @deprecated since 10
   * @useinstead MouseEvent#windowY
   */
  screenY: number;

  /**
   * X coordinate of the mouse point relative to the left edge of the mouse hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * X coordinate of the mouse point relative to the left edge of the mouse hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  x: number;

  /**
   * Y coordinate of the mouse point relative to the upper edge of the mouse hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Y coordinate of the mouse point relative to the upper edge of the mouse hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  y: number;

  /**
   * The blocking event pops up.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The blocking event pops up.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  stopPropagation: () => void;

  /**
   * X axis offset relative to the previous reported mouse pointer position. When the mouse pointer is at
   * the edge of the screen, the value may be less than the difference of the X coordinate reported twice.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   */
  rawDeltaX?: number;

  /**
   * Y axis offset relative to the previous reported mouse pointer position. When the mouse pointer is at
   * the edge of the screen, the value may be less than the difference of the Y coordinate reported twice.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   */
  rawDeltaY?: number;
  
  /**
   * The pressed buttons of the mouse event.
   *
   * @type { ?MouseButton[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   */
  pressedButtons?: MouseButton[];
}

/**
 * The accessibility hover action triggers this method invocation.
 *
 * @extends BaseEvent
 * @typedef AccessibilityHoverEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare interface AccessibilityHoverEvent extends BaseEvent {
  /**
   * Type of the accessibility hover event.
   *
   * @type { AccessibilityHoverType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  type: AccessibilityHoverType;

  /**
   * X coordinate of the accessibility hover point relative to the left edge of the event hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  x: number;

  /**
   * Y coordinate of the accessibility hover point relative to the upper edge of the event hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  y: number;

  /**
   * X coordinate of the accessibility hover point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  displayX: number;

  /**
   * Y coordinate of the accessibility hover point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  displayY: number;

  /**
   * X coordinate of the accessibility hover point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  windowX: number;

  /**
   * Y coordinate of the accessibility hover point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  windowY: number;
}

/**
 * Type of the touch event.
 *
 * @interface TouchObject
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Type of the touch event.
 *
 * @interface TouchObject
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Type of the touch event.
 *
 * @interface TouchObject
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TouchObject {
  /**
   * Type of the touch event.
   *
   * @type { TouchType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Type of the touch event.
   *
   * @type { TouchType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Type of the touch event.
   *
   * @type { TouchType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  type: TouchType;

  /**
   * Finger unique identifier.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Finger unique identifier.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Finger unique identifier.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  id: number;

  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  displayX: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  displayY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  windowX: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  windowY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   * @useinstead TouchObject#windowX
   */
  screenX: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   * @useinstead TouchObject#windowY
   */
  screenY: number;

  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * X coordinate of the touch point relative to the left edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  x: number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the touched element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  y: number;

  /**
   * Type of the touch hand.
   *
   * @type { InteractionHand }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
    hand?: InteractionHand;

  /**
   * Time stamp when the touch point is pressed.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  pressedTime?: number;
  /**
 * Pressure of a specific touch point.
 *
 * @type { ?number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
  pressure?: number;

  /**
   * Width of the contact area when touch is pressed of a specific touch point.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  width?: number;

  /**
   * Height of the contact area when touch is pressed of a specific touch point.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  height?: number;
}

/**
 * TouchObject getHistoricalPoints Function Parameters
 *
 * @interface HistoricalPoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * TouchObject getHistoricalPoints Function Parameters
 *
 * @interface HistoricalPoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface HistoricalPoint {
  /**
   * The base touchObject information of historicalPoint
   *
   * @type { TouchObject }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The base touchObject information of historicalPoint
   *
   * @type { TouchObject }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  touchObject: TouchObject;

  /**
   * Contact area between the finger pad and the screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Contact area between the finger pad and the screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  size: number;

  /**
   * Pressure of the touch event.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Pressure of the touch event.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  force: number;

  /**
   * Timestamp of the touch event.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Timestamp of the touch event.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  timestamp: number;
}

/**
 * Touch Action Function Parameters
 *
 * @extends BaseEvent
 * @interface TouchEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Touch Action Function Parameters
 *
 * @extends BaseEvent
 * @interface TouchEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Touch Action Function Parameters
 *
 * @extends BaseEvent
 * @interface TouchEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TouchEvent extends BaseEvent {
  /**
   * Type of the touch event.
   *
   * @type { TouchType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Type of the touch event.
   *
   * @type { TouchType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Type of the touch event.
   *
   * @type { TouchType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  type: TouchType;

  /**
   * All finger information.
   *
   * @type { TouchObject[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * All finger information.
   *
   * @type { TouchObject[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * All finger information.
   *
   * @type { TouchObject[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  touches: TouchObject[];

  /**
   * Indicates the current changed finger information.
   *
   * @type { TouchObject[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Indicates the current changed finger information.
   *
   * @type { TouchObject[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the current changed finger information.
   *
   * @type { TouchObject[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  changedTouches: TouchObject[];

  /**
   * The blocking event pops up.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The blocking event pops up.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The blocking event pops up.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  stopPropagation: () => void;

  /**
   * Get the historical points.
   *
   * @returns { Array<HistoricalPoint> } - return all historical points.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get the historical points.
   *
   * @returns { Array<HistoricalPoint> } - return all historical points.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  getHistoricalPoints(): Array<HistoricalPoint>;

  /**
   * Prevent the default function.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  preventDefault: () => void;
}

/**
 * The axis event triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface AxisEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 17
 */
declare interface AxisEvent extends BaseEvent {
  /**
   * Axis action of the axis event.
   *
   * @type { AxisAction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17
   */
  action: AxisAction;

  /**
   * X coordinate of the mouse cursor relative to the left edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17
   */
  displayX: number;

  /**
   * Y coordinate of the mouse cursor relative to the upper edge of the device screen.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17
   */
  displayY: number;

  /**
   * X coordinate of the mouse cursor relative to the left edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17
   */
  windowX: number;

  /**
   * Y coordinate of the mouse cursor relative to the upper edge of the current window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17
   */
  windowY: number;

  /**
   * X coordinate of the mouse cursor relative to the left edge of the axis event hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17
   */
  x: number;

  /**
   * Y coordinate of the mouse cursor relative to the upper edge of the axis event hit element.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17
   */
  y: number;

  /**
   * Scroll step configuration which is only mouse wheel has.
   *  *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17
   */
  scrollStep?: number;

  /**
   * Active event bubbling.
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17
   */
  propagation: Callback<void>;

  /**
   * Obtains the value of the horizontal scroll axis for this axis event.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17
   */
  getHorizontalAxisValue(): number;

  /**
   * Obtains the value of the vertical scroll axis for this axis event.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17
   */
  getVerticalAxisValue(): number;
}

/**
 * Defines the callback type used in onSizeChange.
 * The value of oldValue is last size of the component.
 * The value of newValue is new size of the component.
 *
 * @typedef { function } SizeChangeCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type SizeChangeCallback = (oldValue: SizeOptions, newValue: SizeOptions) => void;

/**
 * Defines the callback type used in onGestureRecognizerJudgeBegin.
 *
 * @typedef { function } GestureRecognizerJudgeBeginCallback
 * @param { BaseGestureEvent } event - the event information
 * @param { GestureRecognizer } current - the current gesture recognizer of the component
 * @param { Array<GestureRecognizer> } recognizers - the gesture recognizers of the component on the response chain
 * @returns { GestureJudgeResult } the gesture judge result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type GestureRecognizerJudgeBeginCallback = (event: BaseGestureEvent, current: GestureRecognizer, recognizers: Array<GestureRecognizer>) => GestureJudgeResult;

/**
 * Defines the callback type used in shouldBuiltInRecognizerParallelWith.
 *
 * @typedef { function } ShouldBuiltInRecognizerParallelWithCallback
 * @param { GestureRecognizer } current - the current gesture recognizer of the component
 * @param { Array<GestureRecognizer> } others - the gesture recognizers of the component on the response chain
 * @returns { GestureRecognizer } gesture recognizer of the component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type ShouldBuiltInRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer;

/**
 * Defines the finish callback type used in transition.
 * 
 * @typedef { function } TransitionFinishCallback
 * @param { boolean } transitionIn - a boolean value indicates whether it is the callback of transitionIn or transitionOut.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type TransitionFinishCallback = (transitionIn: boolean) => void;

/**
 * Defines the PixelMap type object for ui component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the PixelMap type object for ui component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the PixelMap type object for ui component.
 *
 * @typedef { import('../api/@ohos.multimedia.image').default.PixelMap } PixelMap
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare type PixelMap = import('../api/@ohos.multimedia.image').default.PixelMap;

/**
 * pixelmap object with release function.
 *
 * @interface PixelMapMock
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
declare interface PixelMapMock {
  /**
   * release function.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  release(): void;
}

/**
 * Enum for Drag Behavior.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enum for Drag Behavior.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Enum for Drag Behavior.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare enum DragBehavior {
  /**
   * If drag use copy event, then set DragBehavior.COPY.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If drag use copy event, then set DragBehavior.COPY.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * If drag use copy event, then set DragBehavior.COPY.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  COPY,
  /**
   * If drag use move event, then set DragBehavior.MOVE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If drag use move event, then set DragBehavior.MOVE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * If drag use move event, then set DragBehavior.MOVE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  MOVE
}

/**
 * Import the UnifiedData type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.unifiedDataChannel').default.UnifiedData } UnifiedData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Import the UnifiedData type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.unifiedDataChannel').default.UnifiedData } UnifiedData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare type UnifiedData = import('../api/@ohos.data.unifiedDataChannel').default.UnifiedData;

/**
 * Import the Summary type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.unifiedDataChannel').default.Summary } Summary
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Import the Summary type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.unifiedDataChannel').default.Summary } Summary
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare type Summary = import('../api/@ohos.data.unifiedDataChannel').default.Summary;

/**
 * Import the UniformDataType type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.uniformTypeDescriptor').default.UniformDataType } UniformDataType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Import the UniformDataType type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.uniformTypeDescriptor').default.UniformDataType } UniformDataType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare type UniformDataType = import('../api/@ohos.data.uniformTypeDescriptor').default.UniformDataType;

/**
 * Import the GetDataParams type object for ui component.
 *
 * @typedef { import('../api/@ohos.data.unifiedDataChannel').default.GetDataParams } GetDataParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare type DataSyncOptions = import('../api/@ohos.data.unifiedDataChannel').default.GetDataParams;

/**
 * Enum for Drag Result.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enum for Drag Result.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Enum for Drag Result.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare enum DragResult {
  /**
   * If the drag is successful, return DragResult.DRAG_SUCCESSFUL.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If the drag is successful, return DragResult.DRAG_SUCCESSFUL.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * If the drag is successful, return DragResult.DRAG_SUCCESSFUL.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  DRAG_SUCCESSFUL = 0,
  /**
   * If drag fail, return DragResult.DRAG_FAILED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If drag fail, return DragResult.DRAG_FAILED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * If drag fail, return DragResult.DRAG_FAILED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  DRAG_FAILED = 1,
  /**
   * If drag action cancel, return DragResult.DRAG_CANCELED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If drag action cancel, return DragResult.DRAG_CANCELED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  DRAG_CANCELED = 2,
  /**
   * If node allow drop in, return DragResult.DROP_ENABLED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If node allow drop in, return DragResult.DROP_ENABLED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  DROP_ENABLED = 3,
  /**
   * If node don't allow drop in, return DragResult.DROP_DISABLED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If node don't allow drop in, return DragResult.DROP_DISABLED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  DROP_DISABLED = 4
}

/**
 * Enum for BlendMode.
 * Blend modes for compositing current component 
 * with overlapping content. Use overlapping content
 * as dst, current component as src.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Enum for BlendMode.
 * Blend modes for compositing current component
 * with overlapping content. Use overlapping content
 * as dst, current component as src.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare enum BlendMode {
  /**
   * Hybrid mode does not take effect
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Hybrid mode does not take effect
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  NONE = 0,
  /**
   * Clear destination color covered by the source to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Clear destination color covered by the source to 0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  CLEAR = 1,
  /**
   * r = s
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * r = s
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  SRC = 2,
  /**
   * r = d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * r = d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  DST = 3,
  /**
   * r = s + (1 - sa) * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s + (1 - sa) * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  SRC_OVER = 4,
  /**
   * r = d + (1 - da) * s
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * r = d + (1 - da) * s
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  DST_OVER = 5,
  /**
   * r = s * da
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * r = s * da
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  SRC_IN = 6,
  /**
   * r = d * sa
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * r = d * sa
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  DST_IN = 7,
  /**
   * r = s * (1 - da)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * r = s * (1 - da)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  SRC_OUT = 8,
  /**
   * r = d * (1 - sa)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * r = d * (1 - sa)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  DST_OUT = 9,
  /**
   * r = s * da + d * (1 - sa)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * r = s * da + d * (1 - sa)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  SRC_ATOP = 10,
  /**
   * r = d * sa + s * (1 - da)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * r = d * sa + s * (1 - da)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  DST_ATOP = 11,
  /**
   * r = s * (1 - da) + d * (1 - sa)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * r = s * (1 - da) + d * (1 - sa)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  XOR = 12,
  /**
   * r = min(s + d, 1)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * r = min(s + d, 1)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  PLUS = 13,
  /**
   * r = s * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * r = s * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  MODULATE = 14,
  /**
   * r = s + d - s * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * r = s + d - s * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  SCREEN = 15,
  /**
   * multiply or screen, depending on destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * multiply or screen, depending on destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  OVERLAY = 16,
  /**
   * rc = s + d - max(s * da, d * sa), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * rc = s + d - max(s * da, d * sa), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  DARKEN = 17,
  /**
   * rc = s + d - min(s * da, d * sa), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * rc = s + d - min(s * da, d * sa), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  LIGHTEN = 18,
  /**
   * brighten destination to reflect source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * brighten destination to reflect source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  COLOR_DODGE = 19,
  /**
   * darken destination to reflect source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * darken destination to reflect source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  COLOR_BURN = 20,
  /**
   * multiply or screen, depending on source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * multiply or screen, depending on source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  HARD_LIGHT = 21,
  /**
   * lighten or darken, depending on source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * lighten or darken, depending on source
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  SOFT_LIGHT = 22,
  /**
   * rc = s + d - 2 * (min(s * da, d * sa)), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * rc = s + d - 2 * (min(s * da, d * sa)), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  DIFFERENCE = 23,
  /**
   * rc = s + d - two(s * d), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * rc = s + d - two(s * d), ra = kSrcOver
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  EXCLUSION = 24,
  /**
   * r = s * (1 - da) + d * (1 - sa) + s * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * r = s * (1 - da) + d * (1 - sa) + s * d
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  MULTIPLY = 25,
  /**
   * hue of source with saturation and luminosity of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * hue of source with saturation and luminosity of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  HUE = 26,
  /**
   * saturation of source with hue and luminosity of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * saturation of source with hue and luminosity of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  SATURATION = 27,
  /**
   * hue and saturation of source with luminosity of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * hue and saturation of source with luminosity of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  COLOR = 28,
  /**
   * luminosity of source with hue and saturation of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
  */
  /**
   * luminosity of source with hue and saturation of destination
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
  */
  LUMINOSITY = 29
}

/**
 * Enum for BlendApplyType.
 * Indicate how to apply specified blend mode to
 * the view's content.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Enum for BlendApplyType.
 * Indicate how to apply specified blend mode to
 * the view's content.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare enum BlendApplyType {
  /**
   * Blend view's content in sequence over dst
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Blend view's content in sequence over dst
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  FAST = 0,

  /**
   * Composite this views's contents into an
   * offscreen image and then blend over dst
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Composite this views's contents into an
   * offscreen image and then blend over dst
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  OFFSCREEN = 1,
}

/**
 * DragEvent object description
 *
 * @interface DragEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * DragEvent object description
 *
 * @interface DragEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * DragEvent object description
 *
 * @interface DragEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare interface DragEvent {
  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * X coordinate of the touch point relative to the left edge of the device screen.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  getDisplayX(): number;

  /**
   * Y coordinate of the touch point relative to the upper edge of the device screen.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the device screen.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Y coordinate of the touch point relative to the upper edge of the device screen.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  getDisplayY(): number;

  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * X coordinate of the touch point relative to the left edge of the current window.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  getWindowX(): number;

  /**
   * Y coordinate of the touch point relative to the left edge of the current window.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Y coordinate of the touch point relative to the left edge of the current window.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Y coordinate of the touch point relative to the left edge of the current window.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  getWindowY(): number;

  /**
   * X coordinate of the touch point relative to the left edge of the current window. in vp.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   * @useinstead DragEvent#getWindowX
   */
  getX(): number;

  /**
   * Y coordinate of the touch point relative to the left edge of the current window. in vp.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   * @useinstead DragEvent#getWindowY
   */
  getY(): number;

  /**
  * If copy is COPY, this DragEvent is a copy event.
  * @type { DragBehavior } Operation, if use copy then set COPY, else set MOVE.
  * @default COPY
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @since 10
  */
  /**
  * If copy is COPY, this DragEvent is a copy event.
  * @type { DragBehavior } Operation, if use copy then set COPY, else set MOVE.
  * @default COPY
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 11
  */
  /**
  * If copy is COPY, this DragEvent is a copy event.
  * @type { DragBehavior } Operation, if use copy then set COPY, else set MOVE.
  * @default COPY
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 18
  */
  dragBehavior: DragBehavior;

  /**
   * If useCustomDropAnimation is true, System will not use drop animation.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * If useCustomDropAnimation is true, System will not use drop animation.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  useCustomDropAnimation: boolean;

  /**
   * Set dragData into DragEvent.
   *
   * @param { UnifiedData } unifiedData - dragData.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set dragData into DragEvent.
   *
   * @param { UnifiedData } unifiedData - dragData.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  setData(unifiedData: UnifiedData): void;

  /**
   * Get dragData from DragEvent.
   *
   * @returns { UnifiedData } - get dragData.
   * @throws { BusinessError } 190001 - Data not found.
   * @throws { BusinessError } 190002 - Data error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get dragData from DragEvent.
   *
   * @returns { UnifiedData } - get dragData.
   * @throws { BusinessError } 190001 - Data not found.
   * @throws { BusinessError } 190002 - Data error.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  getData(): UnifiedData;

  /**
   * Get dragData summary from DragEvent.
   *
   * @returns { Summary } - get Summary Data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get dragData summary from DragEvent.
   *
   * @returns { Summary } - get Summary Data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  getSummary(): Summary;

  /**
   * Set dragEvent result to DragEvent.
   *
   * @param { DragResult } dragResult - the return of dragEvent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set dragEvent result to DragEvent.
   *
   * @param { DragResult } dragResult - the return of dragEvent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Set dragEvent result to DragEvent.
   *
   * @param { DragResult } dragResult - the return of dragEvent.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  setResult(dragResult: DragResult): void;

  /**
   * Get dragEvent result from DragEvent.
   *
   * @returns { DragResult } - dragResult Data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get dragEvent result from DragEvent.
   *
   * @returns { DragResult } - dragResult Data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Get dragEvent result from DragEvent.
   *
   * @returns { DragResult } - dragResult Data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  getResult(): DragResult;

  /**
   * Get the rectangle of drag window.
   *
   * @returns { Rectangle } - getPreview rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get the rectangle of drag window.
   *
   * @returns { Rectangle } - getPreview rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Get the rectangle of drag window.
   *
   * @returns { Rectangle } - getPreview rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  getPreviewRect(): Rectangle;

  /**
   * Get the x axis velocity of drag gesture.
   *
   * @returns { number } - get x axis velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get the x axis velocity of drag gesture.
   *
   * @returns { number } - get x axis velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  getVelocityX(): number;

  /**
   * Get the y axis velocity of drag gesture.
   *
   * @returns { number } - get y axis velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get the y axis velocity of drag gesture.
   *
   * @returns { number } - get y axis velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  getVelocityY(): number;

  /**
   * Get the velocity of drag gesture.
   *
   * @returns { number } - get velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get the velocity of drag gesture.
   *
   * @returns { number } - get velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  getVelocity(): number;

  /**
   * Query the ModifierKey press state, support 'ctrl'|'alt'|'shift'|'fn'
   *
   * @param { Array<string> } keys - indicate the keys of the ModifierKey.
   * @returns { boolean }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  /**
   * Query the ModifierKey press state, support 'ctrl'|'alt'|'shift'|'fn'
   *
   * @param { Array<string> } keys - indicate the keys of the ModifierKey.
   * @returns { boolean }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13
   */
  getModifierKeyState?(keys: Array<string>): boolean;

  /**
   * Setup one drop animation execution callback, which will be triggered by system when user drops.
   * Use this way to implement the custom drop animation instead of doing it in onDrop, as the system
   * will decide when to trigger the callback during the drop handling.
   * [Note]:
   *   1. Please set useCustomDropAnimation to true as well when using this method.
   *   2. Do not implement the animation no-related logics in the callback.
   *
   * @param { Callback<void> } customDropAnimation - the custom drop animation function.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  executeDropAnimation(customDropAnimation: Callback<void>): void;

  /**
   * Request the drag data to be synchronized to caller, can be notified with the synchronization progress.
   * Only can be used in onDrop event processing.
   *
   * @param { DataSyncOptions } options - the data sync options.
   * @returns { string } The data key returned by system, which can be used as the identify of the request.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 190003 - Operation no allowed for current pharse.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   */
  startDataLoading(options: DataSyncOptions): string;
}

/**
 * The event callback function for drag and drop common interfaces.
 * @typedef { function } OnDragEventCallback
 * @param { DragEvent } event - the event object indicating current drag status.
 * @param { string } [extraParams] - extra information set by user or system.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare type OnDragEventCallback = (event: DragEvent, extraParams?: string) => void;

/**
 * Defines the options for the drop handling.
 *
 * @interface DropOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare interface DropOptions {

  /**
   * Indicating to disable the UDMF data prefetch action by system or not.
   * The system will try to fetch data before calling user's onDrop for some situation,
   * it will retry to get data until the max time limit (2.4s for now) reaches,
   * this's useful for the cross device draging operation, as the system helps to eliminate
   * the communication instability, but it's redundant for startDataLoading method, as this
   * method will take care the data fetching with asynchronous mechanism, so must set this
   * field to true if using startDataLoading in onDrop to avoid the data is fetched before
   * onDrop executing unexpectedly.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  disableDataPrefetch?: boolean;
}

/**
 * Import the IntentionCode type object for IntentionCode.
 *
 * @typedef { import('../api/@ohos.multimodalInput.intentionCode').IntentionCode } IntentionCode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Import the IntentionCode type object for IntentionCode.
 *
 * @typedef { import('../api/@ohos.multimodalInput.intentionCode').IntentionCode } IntentionCode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare type IntentionCode = import('../api/@ohos.multimodalInput.intentionCode').IntentionCode;

/**
 * KeyEvent object description:
 *
 * @interface KeyEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * KeyEvent object description:
 *
 * @interface KeyEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * KeyEvent object description:
 *
 * @interface KeyEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface KeyEvent {
  /**
   * Type of a key.
   *
   * @type { KeyType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Type of a key.
   *
   * @type { KeyType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Type of a key.
   *
   * @type { KeyType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  type: KeyType;

  /**
   * Key code of a key
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Key code of a key
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Key code of a key
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  keyCode: number;

  /**
   * Key value of a key.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Key value of a key.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Key value of a key.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  keyText: string;

  /**
   * Type of the input device that triggers the current key, such as the keyboard or handle.
   *
   * @type { KeySource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Type of the input device that triggers the current key, such as the keyboard or handle.
   *
   * @type { KeySource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Type of the input device that triggers the current key, such as the keyboard or handle.
   *
   * @type { KeySource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  keySource: KeySource;

  /**
   * Indicates the ID of the input device that triggers the current key.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Indicates the ID of the input device that triggers the current key.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the ID of the input device that triggers the current key.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  deviceId: number;

  /**
   * Indicates the status of the key when the key is pressed.
   * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Indicates the status of the key when the key is pressed.
   * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Indicates the status of the key when the key is pressed.
   * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  metaKey: number;

  /**
   * Timestamp when the key was pressed.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Timestamp when the key was pressed.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Timestamp when the key was pressed.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  timestamp: number;

  /**
   * Block event bubbling.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Block event bubbling.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Block event bubbling.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  stopPropagation: () => void;

  /**
   * Intention code of a key or modifier keys.
   *
   * @type { IntentionCode }
   * @default IntentionCode.INTENTION_UNKNOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Intention code of a key or modifier keys.
   *
   * @type { IntentionCode }
   * @default IntentionCode.INTENTION_UNKNOWN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  intentionCode: IntentionCode;

  /**
   * Get the modifier keys press state, support 'ctrl'|'alt'|'shift'|'fn'
   *
   * @param { Array<string> } keys - indicate the modifier keys.
   * @returns { boolean }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  /**
   * Get the modifier keys press state, support 'ctrl'|'alt'|'shift'|'fn'
   *
   * @param { Array<string> } keys - indicate the modifier keys.
   * @returns { boolean }
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13
   */
  getModifierKeyState?(keys: Array<string>): boolean;

  /**
   * Unicode of a key
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 14
   */
  unicode?: number;

  /**
   * Whether Num Lock is on
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  isNumLockOn?: boolean;

  /**
   * Whether Caps Lock is on
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  isCapsLockOn?: boolean;

  /**
   * Whether Scroll Lock is on
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  isScrollLockOn?: boolean;
}

/**
 * Focus axis event object description.
 *
 * @extends BaseEvent
 * @interface FocusAxisEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 15
 */
declare interface FocusAxisEvent extends BaseEvent {
  /**
   * The axis values of axis event.
   *
   * @type { Map<AxisModel, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   */
  axisMap: Map<AxisModel, number>;

  /**
   * The blocking event pops up.
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   */
  stopPropagation: Callback<void>;
}

/**
 * CrownEvent object description
 *
 * @interface CrownEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18
 */
declare interface CrownEvent {
  /**
   *The timestamp of the rotating crown event.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  timestamp: number;

  /**
   * The angular velocity of a rotating crown.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  angularVelocity: number;

  /**
   * The rotation angle of the rotating crown.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  degree: number;

  /**
   * The behavior of rotating crown.
   *
   * @type { CrownAction }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  action: CrownAction;

  /**
   * The blocking event pops up.
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  stopPropagation: Callback<void>;
}

/**
 * Overlay module options
 *
 * @interface BindOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Overlay module options
 *
 * @interface BindOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface BindOptions {
  /**
   * Defines the background color
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the background color
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  backgroundColor?: ResourceColor;

  /**
   * Callback function when overlay interface appears
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback function when overlay interface appears
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onAppear?: () => void;

  /**
   * Callback function when overlay interface exits
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback function when overlay interface exits
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onDisappear?: () => void;

  /**
   * Callback function before overlay animation starts.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onWillAppear?: () => void;

  /**
   * Callback function before overlay popAnimation starts.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onWillDisappear?: () => void;
}

/**
 * Component content cover dismiss
 *
 * @interface DismissContentCoverAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface DismissContentCoverAction {
  /**
   * Defines content cover dismiss function
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  dismiss: Callback<void>;

  /**
   * Defines content cover dismiss reason
   *
   * @type { DismissReason }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  reason: DismissReason;
}

/**
 * Component content cover options
 *
 * @extends BindOptions
 * @interface ContentCoverOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Component content cover options
 *
 * @extends BindOptions
 * @interface ContentCoverOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface ContentCoverOptions extends BindOptions {
  /**
   * Defines transition type
   *
   * @type { ?ModalTransition }
   * @default ModalTransition.Default
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines transition type
   *
   * @type { ?ModalTransition }
   * @default ModalTransition.Default
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  modalTransition?: ModalTransition,

  /**
   * Callback function when the content cover interactive dismiss
   *
   * @type { ?Callback<DismissContentCoverAction> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onWillDismiss?: Callback<DismissContentCoverAction>;

  /**
   * Defines transition effect param
   *
   * @type { ?TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  transition?: TransitionEffect;
}

/**
 * Component sheet title options
 *
 * @interface SheetTitleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Component sheet title options
 *
 * @interface SheetTitleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface SheetTitleOptions {
  /**
   * Defines title text
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines title text
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  title: ResourceStr;

  /**
   * Defines subtitle text
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines subtitle text
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  subtitle?: ResourceStr;
}

/**
 * Defines the sheet type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the sheet type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum SheetType {
  /**
   * Defines bottom sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines bottom sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */  
  BOTTOM = 0,

  /**
   * Defines center sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines center sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  CENTER = 1,

  /**
   * Defines popup sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines popup sheet type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  POPUP = 2,
}

/**
 * Define the display mode of the sheet.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum SheetMode {
  /**
   * Sheet displays above all page levels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  OVERLAY = 0,

  /**
   * Sheet displays within the current page.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  EMBEDDED = 1,
}

/**
 * Define the scroll size mode of the sheet.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum ScrollSizeMode {
  /**
   * Sheet change scroll size after the slide ends.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  FOLLOW_DETENT = 0,

  /**
   * Sheet change scroll size during the sliding process.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  CONTINUOUS = 1,
}

/**
 * Define the mode of sheet how to avoid keyboard.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 13
 */
declare enum SheetKeyboardAvoidMode {
  /**
   * Sheet will not aovid keyboard.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13
   */
  NONE = 0,

  /**
   * Firstly sheet will avoid keyboard by changing its height.
   * And then sheet will avoid by resizing after reaching its maximum height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13
   */
  TRANSLATE_AND_RESIZE = 1,

  /**
   * Sheet will only avoid keyboard by resizing the content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13
   */
  RESIZE_ONLY = 2,

  /**
   * Firstly sheet will avoid keyboard by changing its height.
   * And then sheet will avoid keyboard by scrolling after reaching its maximum height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13
   */
  TRANSLATE_AND_SCROLL = 3,
}

/**
 * Component sheet dismiss
 *
 * @interface SheetDismiss
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Component sheet dismiss
 *
 * @interface SheetDismiss
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface SheetDismiss {
  /**
   * Defines sheet dismiss function
   *
   * @type { function  }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines sheet dismiss function
   *
   * @type { function  }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  dismiss: () => void;
}

/**
 * Component sheet dismiss
 *
 * @interface DismissSheetAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface DismissSheetAction {

  /**
   * Defines sheet dismiss function
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  dismiss: Callback<void>;

  /**
   * Dismiss reason type.
   *
   * @type { DismissReason }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  reason: DismissReason;
}

/**
 * Defines sheet spring back action 
 *
 * @interface SpringBackAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface SpringBackAction {
  /**
   * Defines spring back function
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  springBack: Callback<void>;
}

/**
 * Component sheet options
 *
 * @extends BindOptions
 * @interface SheetOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Component sheet options
 *
 * @extends BindOptions
 * @interface SheetOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface SheetOptions extends BindOptions {
  /**
   * Defines sheet height
   *
   * @type { ?(SheetSize | Length) }
   * @default Sheet.LARGE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines sheet height
   *
   * @type { ?(SheetSize | Length) }
   * @default Sheet.LARGE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  height?: SheetSize | Length;

  /**
   * Defines whether the control bar is displayed.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines whether the control bar is displayed.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  dragBar?: boolean;

  /**
   * Defines sheet maskColor
   * 
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines sheet maskColor
   * 
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  maskColor?: ResourceColor;

  /**
   * Defines sheet detents
   *
   * @type { ?[(SheetSize | Length), (SheetSize | Length)?, (SheetSize | Length)?] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines sheet detents
   *
   * @type { ?[(SheetSize | Length), (SheetSize | Length)?, (SheetSize | Length)?] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  detents?: [(SheetSize | Length), (SheetSize | Length)?, (SheetSize | Length)?];

  /**
   * Defines sheet background blur Style
   * 
   * @type { ?BlurStyle }
   * @default BlurStyle.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines sheet background blur Style
   * 
   * @type { ?BlurStyle }
   * @default BlurStyle.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  blurStyle?: BlurStyle;

  /**
   * Defines whether the close icon is displayed
   *
   * @type { ?(boolean | Resource) }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines whether the close icon is displayed
   *
   * @type { ?(boolean | Resource) }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  showClose?: boolean | Resource;

  /**
   * Defines the sheet prefer type
   *
   * @type { ?(SheetType.CENTER | SheetType.POPUP) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
   /**
   * Defines the sheet prefer type
   *
   * @type { ?SheetType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  preferType?: SheetType;

  /**
   * Defines the sheet title
   *
   * @type { ?(SheetTitleOptions | CustomBuilder) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the sheet title
   *
   * @type { ?(SheetTitleOptions | CustomBuilder) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  title?: SheetTitleOptions | CustomBuilder;

  /**
   * Callback function when the sheet interactive dismiss
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Callback function when the sheet interactive dismiss
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  shouldDismiss?: (sheetDismiss: SheetDismiss) => void;

  /**
   * Callback function when the sheet will dismiss
   *
   * @type { ?Callback<DismissSheetAction> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onWillDismiss?: Callback<DismissSheetAction>;

   /**
   * Sheet springs back callback when dismiss
   *
   * @type { ?Callback<SpringBackAction> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onWillSpringBackWhenDismiss?: Callback<SpringBackAction>;

  /**
   * Set whether interaction is allowed outside the sheet
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set whether interaction is allowed outside the sheet
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  enableOutsideInteractive?: boolean;

  /**
   * Defines the sheet's width.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  width?: Dimension;

  /**
   * Defines the sheet's border width.
   *
   * @type { ?(Dimension | EdgeWidths | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths;

  /**
   * Defines the sheet's border color.
   *
   * @type { ?(ResourceColor | EdgeColors | LocalizedEdgeColors) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;

  /**
   * Defines the sheet's border style.
   *
   * @type { ?(BorderStyle | EdgeStyles) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  borderStyle?: BorderStyle | EdgeStyles;

  /**
   * Defines the sheet's shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Called when height of the sheet is changed
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onHeightDidChange?: Callback<number>;

  /**
   * Determine the level sheet shows, whether sheet should be displayed within the page
   *
   * @type { ?SheetMode }
   * @default SheetMode.OVERLAY
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  mode?: SheetMode;

  /**
   * Determine sheet scroll size mode.
   *
   * @type { ?ScrollSizeMode }
   * @default ScrollSizeMode.FELLOW_DETEND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
    scrollSizeMode?: ScrollSizeMode;

  /**
   * Called when detents of the sheet changed
   *
   * @type { ?Callback<number> }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onDetentsDidChange?: Callback<number>;

  /**
   * Called when width of the sheet changed
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onWidthDidChange?: Callback<number>;

  /**
   * Called when the sheet type changed
   *
   * @type { ?Callback<SheetType> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onTypeDidChange?: Callback<SheetType>;

  /**
   * The UIContext that the sheet belongs to
   *
   * @type { ?UIContext }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  uiContext?: UIContext;

  /**
   * Determine the mode of sheet how to avoid keyboard.
   *
   * @type { ?SheetKeyboardAvoidMode }
   * @default SheetKeyboardAvoidMode.TRANSLATE_AND_SCROLL
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13
   */
  keyboardAvoidMode?: SheetKeyboardAvoidMode;

  /**
   * Defines whether to respond to the hover mode.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  enableHoverMode?: boolean;

  /**
   * Defines the sheet's display area in hover mode.
   *
   * @type { ?HoverModeAreaType }
   * @default HoverModeAreaType.BOTTOM_SCREEN
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  hoverModeArea?: HoverModeAreaType;

  /**
   * Sets the position offset of the bindSheet.
   *
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 14
   */
    offset?: Position

    /**
     * Sets whether the sheet edge has spring effect.
     *
     * @type { ?number }
     * @default 3
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    effectEdge?: number

  /**
   * Defines sheet radius
   * 
   * @type { ?(LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  radius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * Select a detent from detents property
   *
   * @type { ?(SheetSize | Length) }
   * @default detents[0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  detentSelection?: SheetSize | Length;

  /**
   * Whether to display in the sub window 
   *
   * @type { ?boolean } 
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  showInSubWindow?: boolean;

  /**
   * The placement of popup sheet type.
   * Supports all positions defined in Placement.
   *
   * @type { ?Placement }
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  placement?: Placement;

  /**
   * placement On target node
   *
   * @type { ?boolean } 
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  placementOnTarget?: boolean;
}

/**
 * Component State Styles.
 *
 * @interface StateStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Component State Styles.
 *
 * @interface StateStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Component State Styles.
 *
 * @interface StateStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Component State Styles.
 *
 * @interface StateStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface StateStyles {
  /**
   * Defines normal state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines normal state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines normal state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines normal state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  normal?: any;

  /**
   * Defines pressed state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines pressed state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines pressed state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines pressed state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  pressed?: any;

  /**
   * Defines disabled state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines disabled state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines disabled state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines disabled state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  disabled?: any;

  /**
   * Defines focused state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines focused state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines focused state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines focused state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  focused?: any;

  /**
   * Defines clicked state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Defines clicked state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines clicked state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines clicked state styles.
   *
   * @type { ?any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  clicked?: any;

  /**
   * Defines selected state styles.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines selected state styles.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  selected?: object;
}

/**
 * Defines the options of popup message.
 *
 * @interface PopupMessageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of popup message.
 *
 * @interface PopupMessageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface PopupMessageOptions {
  /**
   * Sets the color of popup text.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the color of popup text.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  textColor?: ResourceColor;

  /**
   * Sets the font of popup text.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the font of popup text.
   *
   * @type { ?Font }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  font?: Font;
}

/**
 * Dismiss reason type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum DismissReason {  
  /**
  * Press back
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  */
  PRESS_BACK = 0,

  /**
  * Touch component outside
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  */
  TOUCH_OUTSIDE = 1,

  /**
  * Close button
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  */
  CLOSE_BUTTON = 2,

  /**
  * Slide down
  *
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  */
  SLIDE_DOWN = 3
}

/**
 * Component popup dismiss
 *
 * @interface DismissPopupAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface DismissPopupAction {
  /**
   * Defines popup dismiss function
   *
   * @type { Callback<void> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  dismiss: Callback<void>;

  /**
   * Defines popup dismiss reason
   *
   * @type { DismissReason }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  reason: DismissReason;
}

/**
 * Popup state change param
 *
 * @interface PopupStateChangeParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface PopupStateChangeParam {
  /**
   * is Visible.
   * Anonymous Object Rectification.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  isVisible: boolean;
}

/**
 * Popup state change callback
 *
 * @typedef { function } PopupStateChangeCallback
 * @param { PopupStateChangeParam } event - The parameter of state change callback.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare type PopupStateChangeCallback = (event: PopupStateChangeParam) => void;

/**
 * Popup mask type
 *
 * @interface PopupMaskType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface PopupMaskType {
  /**
   * Color.
   * Anonymous Object Rectification.
   *
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  color: ResourceColor;
}

/**
 * Popup border LinearGradient
 *
 * @interface PopupBorderLinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface PopupBorderLinearGradient {
  /**
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  direction?: GradientDirection;

  /**
   * Defines color description for gradients.
   * number: The position of the color stop. The value range is 0 to 1.
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  colors: Array<[ResourceColor, number]>;
}

/**
 * Popup common options
 *
 * @interface PopupCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface PopupCommonOptions {
  /**
   * placement of popup.
   *
   * @type { ?Placement }
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  placement?: Placement;

  /**
   * Set the background color of the popup.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  popupColor?: ResourceColor;

  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  enableArrow?: boolean;

  /**
   * Whether hide popup when click mask
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  autoCancel?: boolean;

  /**
   * on State Change
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onStateChange?: PopupStateChangeCallback;

  /**
   * The offset of the sharp corner of popup.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  arrowOffset?: Length;

  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  showInSubWindow?: boolean;

  /**
   * The mask to block gesture events of popup.
   * When mask is set false, gesture events are not blocked.
   * When mask is set true, gesture events are blocked and mask color is transparent.
   *
   * @type { ?(boolean | PopupMaskType) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  mask?: boolean | PopupMaskType;

  /**
   * Sets the space of between the popup and target.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  targetSpace?: Length;

  /**
   * Sets the position offset of the popup.
   *
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  offset?: Position;

  /**
   * Set the width of the popup.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  width?: Dimension;

  /**
   * The position of the sharp corner of popup.
   *
   * @type { ?ArrowPointPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  arrowPointPosition?: ArrowPointPosition;

  /**
   * The width of the arrow.
   *
   * @type { ?Dimension }
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  arrowWidth?: Dimension;

  /**
   * The height of the arrow.
   *
   * @type { ?Dimension }
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  arrowHeight?: Dimension;

  /**
   * The round corners of the popup.
   *
   * @type { ?Dimension }
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  radius?: Dimension;

  /**
   * The style of popup Shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Defines popup background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Set popup focusable
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  focusable?: boolean;

  /**
   * Defines the transition effect of popup opening and closing
   *
   * @type { ?TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  transition?: TransitionEffect;

  /**
   * Callback function when the popup interactive dismiss.
   * Use boolean to respond all interactive dismiss event. Use Callback to customize which event should be responded.
   *
   * @type { ?(boolean | Callback<DismissPopupAction>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
  */
  onWillDismiss?: boolean | Callback<DismissPopupAction>;

  /**
   * Determine if it is compatible popup's half folded.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  enableHoverMode?: boolean;

  /**
   * Determine if popup can follow the target node when it has rotation or scale.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  followTransformOfTarget?: boolean;

  /**
   * The width of popup's outline.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  outlineWidth?: Dimension;

  /**
   * The width of popup's border.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  borderWidth?: Dimension;
    
  /**
   * The LinearGradient of popup's outline.
   *
   * @type { ?PopupBorderLinearGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  outlineLinearGradient?: PopupBorderLinearGradient;

  /**
   * The LinearGradient of popup's innerline.
   *
   * @type { ?PopupBorderLinearGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  borderLinearGradient?: PopupBorderLinearGradient;
}

/**
 * Defines the Tips options.
 *
 * @interface TipsOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface TipsOptions {

  /**
   * Defines the delay time for appearing.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  appearingTime?: number;

  /**
   * Defines the delay time for disappearing.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  disappearingTime?: number;

  /**
   * Define the delay time for the appearance of continuous operations.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  appearingTimeWithContinuousOperation?: number;

  /**
   * Define the delay time for the disappearance of continuous operations.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  disappearingTimeWithContinuousOperation?: number;

  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  enableArrow?: boolean;

  /**
   * The position of the sharp corner of Tips.
   *
   * @type { ?ArrowPointPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  arrowPointPosition?: ArrowPointPosition;

  /**
   * The width of the arrow.
   *
   * @type { ?Dimension }
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  arrowWidth?: Dimension;

  /**
   * The height of the arrow.
   *
   * @type { ?Dimension }
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  arrowHeight?: Dimension;
}

/**
 * Defines the popup options.
 *
 * @interface PopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the popup options.
 *
 * @interface PopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the popup options.
 *
 * @interface PopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface PopupOptions {
  /**
   * Information in the pop-up window.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Information in the pop-up window.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Information in the pop-up window.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  message: string;

  /**
   * placement On Top
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 10
   * @useinstead PopupOptions#placement
   */
  placementOnTop?: boolean;

  /**
   * The placement of popup.
   * Supports all positions defined in Placement.
   *
   * @type { ?Placement }
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The placement of popup.
   * Supports all positions defined in Placement.
   *
   * @type { ?Placement }
   * @default Placement.Bottom
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  placement?: Placement;

  /**
   * The first button.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The first button.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The first button.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  primaryButton?: {
    /**
     * Button text value
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Button text value
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Button text value
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    value: string;

    /**
     * action
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * action
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * action
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    action: () => void;
  };

  /**
   * The second button.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The second button.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The second button.
   *
   * @type { ?object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  secondaryButton?: {
    /**
     * Button text value
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Button text value
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Button text value
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    value: string;

    /**
     * action
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * action
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * action
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    action: () => void;
  };

  /**
   * on State Change
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * on State Change
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * on State Change
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onStateChange?: (event: {
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    isVisible: boolean
  }) => void;

  /**
   * The offset of the sharp corner of popup.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The offset of the sharp corner of popup.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The offset of the sharp corner of popup.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  arrowOffset?: Length;

  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  showInSubWindow?: boolean;

  /**
   * The mask to block gesture events of popup.
   * When mask is set false, gesture events are not blocked.
   * When mask is set true, gesture events are blocked and mask color is transparent.
   *
   * @type { ?(boolean | { color: ResourceColor }) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The mask to block gesture events of popup.
   * When mask is set false, gesture events are not blocked.
   * When mask is set true, gesture events are blocked and mask color is transparent.
   *
   * @type { ?(boolean | { color: ResourceColor }) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  mask?: boolean | { color: ResourceColor };

  /**
   * Sets the options of popup message.
   *
   * @type { ?PopupMessageOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the options of popup message.
   *
   * @type { ?PopupMessageOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  messageOptions?: PopupMessageOptions

  /**
   * Sets the space of between the popup and target.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the space of between the popup and target.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  targetSpace?: Length

  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  enableArrow?: boolean;
  /**
   * Sets the position offset of the popup.
   *
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the position offset of the popup.
   *
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  offset?: Position

  /**
   * Set the background color of the popup.
   *
   * @type { ?(Color | string | Resource | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set the background color of the popup.
   *
   * @type { ?(Color | string | Resource | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  popupColor?: Color | string | Resource | number;

  /**
   * Whether hide popup when click mask
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Whether hide popup when click mask
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  autoCancel?: boolean;

  /**
   * Set the width of the popup.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set the width of the popup.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  width?: Dimension;

  /**
   * The position of the sharp corner of popup.
   *
   * @type { ?ArrowPointPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The position of the sharp corner of popup.
   *
   * @type { ?ArrowPointPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  arrowPointPosition?: ArrowPointPosition;

 /**
   * The width of the arrow.
   *
   * @type { ?Dimension }
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The width of the arrow.
   *
   * @type { ?Dimension }
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  arrowWidth?: Dimension;

  /**
   * The height of the arrow.
   *
   * @type { ?Dimension }
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The height of the arrow.
   *
   * @type { ?Dimension }
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  arrowHeight?: Dimension;

  /**
   * The round corners of the popup.
   *
   * @type { ?Dimension }
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The round corners of the popup.
   *
   * @type { ?Dimension }
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  radius?: Dimension;

  /**
   * The style of popup Shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The style of popup Shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Defines popup background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines popup background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Defines the transition effect of popup opening and closing
   *
   * @type { ?TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  transition?: TransitionEffect;

  /**
   * Callback function when the popup interactive dismiss
   *
   * @type { ?(boolean | Callback<DismissPopupAction>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onWillDismiss?: boolean | Callback<DismissPopupAction>;
    
  /**
   * Determine if it is compatible popup's half folded.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  enableHoverMode?: boolean;

  /**
   * Determine if popup can follow the target node when it has rotation or scale.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13
   */
  followTransformOfTarget?: boolean;

  /**
   * Define the popup avoid keyboard mode.
   *
   * @type { ?KeyboardAvoidMode }
   * @default KeyboardAvoidMode.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  keyboardAvoidMode?: KeyboardAvoidMode;
  /**
   * The width of popup's outline.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  outlineWidth?: Dimension;

  /**
   * The width of popup's border.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  borderWidth?: Dimension;
    
  /**
   * The LinearGradient of popup's outline.
   *
   * @type { ?PopupBorderLinearGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  outlineLinearGradient?: PopupBorderLinearGradient;

  /**
   * The LinearGradient of popup's innerline.
   *
   * @type { ?PopupBorderLinearGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  borderLinearGradient?: PopupBorderLinearGradient;
}

/**
 * Defines the custom popup options.
 *
 * @interface CustomPopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the custom popup options.
 *
 * @interface CustomPopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the custom popup options.
 *
 * @interface CustomPopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface CustomPopupOptions {
  /**
   * builder of popup
   *
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * builder of popup
   *
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * builder of popup
   *
   * @type { CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  builder: CustomBuilder;

  /**
   * placement of popup
   *
   * @type { ?Placement }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * placement of popup
   *
   * @type { ?Placement }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * placement of popup
   *
   * @type { ?Placement }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  placement?: Placement;

  /**
   * mask color of popup
   *
   * @type { ?(Color | string | Resource | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   * @deprecated since 10
   * @useinstead CustomPopupOptions#mask
   */
  maskColor?: Color | string | Resource | number;

  /**
   * background color of popup
   *
   * @type { ?(Color | string | Resource | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * background color of popup
   *
   * @type { ?(Color | string | Resource | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * background color of popup
   *
   * @type { ?(Color | string | Resource | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  popupColor?: Color | string | Resource | number;

  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * whether show arrow
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  enableArrow?: boolean;

  /**
   * whether hide popup when click mask
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * whether hide popup when click mask
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * whether hide popup when click mask
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  autoCancel?: boolean;

  /**
   * on State Change
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * on State Change
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * on State Change
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onStateChange?: (event: {
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    isVisible: boolean
  }) => void;

  /**
   * The offset of the sharp corner of popup.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * The offset of the sharp corner of popup.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The offset of the sharp corner of popup.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  arrowOffset?: Length;

  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  showInSubWindow?: boolean;

  /**
   * The mask to block gesture events of popup.
   * When mask is set false, gesture events are not blocked.
   * When mask is set true, gesture events are blocked and mask color is transparent.
   *
   * @type { ?(boolean | { color: ResourceColor }) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The mask to block gesture events of popup.
   * When mask is set false, gesture events are not blocked.
   * When mask is set true, gesture events are blocked and mask color is transparent.
   *
   * @type { ?(boolean | { color: ResourceColor }) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  mask?: boolean | { color: ResourceColor };

  /**
   * Sets the space of between the popup and target.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the space of between the popup and target.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  targetSpace?: Length

  /**
   * Sets the position offset of the popup.
   *
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the position offset of the popup.
   *
   * @type { ?Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  offset?: Position

  /**
   * Set the width of the popup.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set the width of the popup.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  width?: Dimension;

  /**
   * The position of the sharp corner of popup.
   *
   * @type { ?ArrowPointPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The position of the sharp corner of popup.
   *
   * @type { ?ArrowPointPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  arrowPointPosition?: ArrowPointPosition;

  /**
   * The width of the arrow.
   *
   * @type { ?Dimension }
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The width of the arrow.
   *
   * @type { ?Dimension }
   * @default 16.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  arrowWidth?: Dimension;

  /**
   * The height of the arrow.
   *
   * @type { ?Dimension }
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The height of the arrow.
   *
   * @type { ?Dimension }
   * @default 8.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  arrowHeight?: Dimension;

  /**
   * The round corners of the popup.
   *
   * @type { ?Dimension }
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The round corners of the popup.
   *
   * @type { ?Dimension }
   * @default 20.0_vp.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  radius?: Dimension;

  /**
   * The style of popup Shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The style of popup Shadow.
   *
   * @type { ?(ShadowOptions | ShadowStyle) }
   * @default ShadowStyle.OUTER_DEFAULT_MD.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  shadow?: ShadowOptions | ShadowStyle;

  /**
   * Defines popup background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines popup background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Set popup focusable
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set popup focusable
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  focusable?: boolean;

  /**
   * Defines the transition effect of popup opening and closing
   *
   * @type { ?TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  transition?: TransitionEffect;

  /**
   * Callback function when the popup interactive dismiss
   *
   * @type { ?(boolean | Callback<DismissPopupAction>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
  */
  onWillDismiss?: boolean | Callback<DismissPopupAction>;

 /**
   * Determine if it is compatible popup's half folded.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  enableHoverMode?: boolean;

  /**
   * Determine if popup can follow the target node when it has rotation or scale.
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13
   */
  followTransformOfTarget?: boolean;

  /**
   * Define the popup avoid keyboard mode.
   *
   * @type { ?KeyboardAvoidMode }
   * @default KeyboardAvoidMode.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  keyboardAvoidMode?: KeyboardAvoidMode;
  /**
   * The width of popup's outline.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  outlineWidth?: Dimension;

  /**
   * The width of popup's border.
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  borderWidth?: Dimension;
    
  /**
   * The LinearGradient of popup's outline.
   *
   * @type { ?PopupBorderLinearGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  outlineLinearGradient?: PopupBorderLinearGradient;

  /**
   * The LinearGradient of popup's innerline.
   *
   * @type { ?PopupBorderLinearGradient }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  borderLinearGradient?: PopupBorderLinearGradient;
}

/**
 * Defines the menu preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the menu preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum MenuPreviewMode {
  /**
   * No preview content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * No preview content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */    
  NONE = 0,
  /**
   * Defines image type preview content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines image type preview content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  IMAGE = 1
}

/**
 * Defines the animator range of start and end property.
 *
 * @typedef { [from: T, to: T] } AnimationRange<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the animator range of start and end property.
 *
 * @typedef { [from: T, to: T] } AnimationRange<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type AnimationRange<T> = [from: T, to: T];

/**
 * Defines the ContextMenu's preview animator options.
 *
 * @interface ContextMenuAnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the ContextMenu's preview animator options.
 *
 * @interface ContextMenuAnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface ContextMenuAnimationOptions {
  /**
   * Sets the start animator scale and end animator scale.
   *
   * @type { ?AnimationRange<number> }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Sets the start animator scale and end animator scale.
   *
   * @type { ?AnimationRange<number> }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  scale?: AnimationRange<number>;
  /**
   * Defines the transition effect of menu preview opening and closing.
   *
   * @type { ?TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  transition?: TransitionEffect;

  /**
   * Sets the scale start and end animator of the image displayed before the custom builder preview is displayed.
   *
   * @type { ?AnimationRange<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  hoverScale?: AnimationRange<number>;
}

/**
   * Defines the type of border radius.
   *
   * @typedef { Length | BorderRadiuses | LocalizedBorderRadiuses }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
type BorderRadiusType = Length | BorderRadiuses | LocalizedBorderRadiuses;

/**
 * Defines the menu haptic feedback mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare enum HapticFeedbackMode {
  /**
   * No haptic feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */    
  DISABLED = 0,
  /**
   * Defines menu always haptic feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  ENABLED = 1,
  /**
   * Defines menu automatically haptic feedback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  AUTO = 2
}

/**
 * Defines the context menu options.
 *
 * @interface ContextMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the context menu options.
 *
 * @interface ContextMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface ContextMenuOptions {
  /**
   * Sets the position offset of the context menu window.
   *
   * @type { ?Position }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the position offset of the context menu window.
   *
   * @type { ?Position }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  offset?: Position;

  /**
   * Sets the placement of the context menu window.
   *
   * @type { ?Placement }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the placement of the context menu window.
   *
   * @type { ?Placement }
   * @default -
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  placement?: Placement;

  /**
   * whether show arrow belong to the menu, default: false, not show arrow
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * whether show arrow belong to the menu, default: false, not show arrow
   *
   * @type { ?boolean }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  enableArrow?: boolean;

  /**
   * The horizontal offset to the left of menu or vertical offset to the top of menu
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The horizontal offset to the left of menu or vertical offset to the top of menu
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  arrowOffset?: Length;
  
  /**
   * The preview content of context menu.
   * 
   * @type { ?(MenuPreviewMode | CustomBuilder) }
   * @default MenuPreviewMode.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The preview content of context menu.
   * 
   * @type { ?(MenuPreviewMode | CustomBuilder) }
   * @default MenuPreviewMode.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  preview?: MenuPreviewMode | CustomBuilder;

  /**
   * Defines the border radius for preview of menu.
   *
   * @type { BorderRadiusType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  previewBorderRadius?: BorderRadiusType;

  /**
   * Defines the border radius of menu.
   *
   * @type { ?(Length | BorderRadiuses | LocalizedBorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  borderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * Callback function when the context menu appears.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback function when the context menu appears.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onAppear?: () => void;

  /**
   * Callback function when the context menu disappear.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback function when the context menu disappear.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onDisappear?: () => void;

  /**
   * Callback function before the context menu animation starts.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Callback function before the context menu animation starts.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  aboutToAppear?: () => void;

  /**
   * Callback function before the context menu popAnimation starts.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Callback function before the context menu popAnimation starts.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  aboutToDisappear?: () => void;
  
  /**
   * The margin of menu's layoutRegion.
   *
   * @type { ?Margin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13
   */
  layoutRegionMargin?: Margin;
  
  /**
   * The preview animator options.
   *
   * @type { ?ContextMenuAnimationOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The preview animator options.
   *
   * @type { ?ContextMenuAnimationOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  previewAnimationOptions?: ContextMenuAnimationOptions;

  /**
   * Defines the menu's background color
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the menu's background color
   *
   * @type { ?ResourceColor }
   * @default Color.Transparent
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  backgroundColor?: ResourceColor;

  /**
   * Defines menu background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines menu background blur Style
   *
   * @type { ?BlurStyle }
   * @default BlurStyle.COMPONENT_ULTRA_THICK
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  backgroundBlurStyle?: BlurStyle;

  /**
   * Defines the menu's background blur style with options
   *
   * @type { ?BackgroundBlurStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;

  /**
   * Defines the menu's background effect with options
   *
   * @type { ?BackgroundEffectOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  backgroundEffect?: BackgroundEffectOptions;

  /**
   * Defines the transition effect of menu opening and closing.
   *
   * @type { ?TransitionEffect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  transition?: TransitionEffect;

  /**
    * Determine if it is compatible menu's half folded.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 18
    */
  enableHoverMode?: boolean;

  /**
    * The color of menu's outer border.
    *
    * @type { ?(ResourceColor | EdgeColors) }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 18
    */
  outlineColor?: ResourceColor | EdgeColors;

  /**
    * The width of menu's outer border.
    *
    * @type { ?(Dimension | EdgeOutlineWidths) }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 18
    */
  outlineWidth?: Dimension | EdgeOutlineWidths;

  /**
   * Defines the haptic feedback mode of menu.
   *
   * @type { ?HapticFeedbackMode }
   * @default HapticFeedbackMode.DISABLED
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  hapticFeedbackMode?: HapticFeedbackMode;
}

/**
 * Defines the menu options.
 *
 * @extends ContextMenuOptions
 * @interface MenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the menu options.
 *
 * @extends ContextMenuOptions
 * @interface MenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface MenuOptions extends ContextMenuOptions {
  /**
   * Sets the title of the menu window.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the title of the menu window.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  title?: ResourceStr;

  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Whether to display in the sub window.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  showInSubWindow?: boolean;
}

/**
 * Defines the ProgressMask class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the ProgressMask class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class ProgressMask {
  /**
   * constructor.
   *
   * @param { number } value - indicates the current value of the progress.
   * @param { number } total - indicates the total value of the progress.
   * @param { ResourceColor } color - indicates the color of the mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * constructor.
   *
   * @param { number } value - indicates the current value of the progress.
   * @param { number } total - indicates the total value of the progress.
   * @param { ResourceColor } color - indicates the color of the mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  constructor(value: number, total: number, color: ResourceColor);

  /**
   * Update the current value of the progress.
   *
   * @param { number } value - indicates the current value of the progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Update the current value of the progress.
   *
   * @param { number } value - indicates the current value of the progress.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  updateProgress(value: number): void;

  /**
   * Update the color of the mask.
   *
   * @param { ResourceColor } value - indicates the color of the mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Update the color of the mask.
   *
   * @param { ResourceColor } value - indicates the color of the mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  updateColor(value: ResourceColor): void;
  
  /**
   * Enable the breathe animation of mask.
   *
   * @param { boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  enableBreathingAnimation(value: boolean): void;
}

/**
 * Defines TouchTestInfo class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines TouchTestInfo class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class TouchTestInfo {
  /**
   * Get the X-coordinate relative to the window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the X-coordinate relative to the window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  windowX: number;

  /**
   * Get the Y-coordinate relative to the window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the Y-coordinate relative to the window.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  windowY: number;

  /**
   * Get the X-coordinate relative to the current component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the X-coordinate relative to the current component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  parentX: number;

  /**
   * Get the Y-coordinate relative to the current component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the Y-coordinate relative to the current component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  parentY: number;

  /**
   * Get the X-coordinate relative to the sub component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the X-coordinate relative to the sub component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  x: number;

  /**
   * Get the Y-coordinate relative to the sub component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the Y-coordinate relative to the sub component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  y: number;

  /**
   * Get the rectangle of sub component.
   *
   * @type { RectResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the rectangle of sub component.
   *
   * @type { RectResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  rect: RectResult;

  /**
   * Get the name of sub component.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the name of sub component.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  id: string;
}

/**
 * Defines TouchResult class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines TouchResult class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class TouchResult {
  /**
   * Defines the touch test strategy.
   *
   * @type { TouchTestStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the touch test strategy.
   *
   * @type { TouchTestStrategy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  strategy: TouchTestStrategy;

  /**
   * Defines the component's name.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the component's name.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  id?: string;
}

/**
 * Set the edge blur effect distance of the corresponding defense line of the component
 * When the component expand out, no re-layout is triggered
 *
 * @interface PixelStretchEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Set the edge blur effect distance of the corresponding defense line of the component
 * When the component expand out, no re-layout is triggered
 *
 * @interface PixelStretchEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface PixelStretchEffectOptions {
  /**
   * top property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * top property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  top?: Length;

  /**
   * bottom property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * bottom property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  bottom?: Length;

  /**
   * left property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * left property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  left?: Length;

  /**
   * right property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * right property. value range (-∞, ∞)
   * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
   *
   * @type { ?Length }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  right?: Length;
}

/**
 * Defines the click effect.
 *
 * @interface ClickEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the click effect.
 *
 * @interface ClickEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface ClickEffect {
  /**
   * Set the click effect level.
   *
   * @type { ClickEffectLevel }
   * @default ClickEffectLevel.Light
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set the click effect level.
   *
   * @type { ClickEffectLevel }
   * @default ClickEffectLevel.Light
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  level: ClickEffectLevel;

  /**
   * Set scale number.
   * This default scale is same as the scale of click effect level.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set scale number.
   * This default scale is same as the scale of click effect level.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  scale?: number;
}

/**
 * Defines the fadingEdge options.
 *
 * @typedef FadingEdgeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare interface FadingEdgeOptions {
  /**
   * The length of FadingEdge.
   *
   * @type { LengthMetrics }
   * @default 32vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  fadingEdgeLength?: LengthMetrics;
}

/**
 * Define nested scroll options
 *
 * @interface NestedScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Define nested scroll options
 *
 * @interface NestedScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare interface NestedScrollOptions {
  /**
   * Set NestedScrollMode when the scrollable component scrolls forward
   *
   * @type { NestedScrollMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set NestedScrollMode when the scrollable component scrolls forward
   *
   * @type { NestedScrollMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  scrollForward: NestedScrollMode;

  /**
   * Set NestedScrollMode when the scrollable component scrolls backward
   *
   * @type { NestedScrollMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set NestedScrollMode when the scrollable component scrolls backward
   *
   * @type { NestedScrollMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  scrollBackward: NestedScrollMode;
}

/**
 * Defines the menu element.
 *
 * @interface MenuElement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the menu element.
 *
 * @interface MenuElement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the menu element.
 *
 * @interface MenuElement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface MenuElement {
  /**
   * Sets the value of the menu element.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the value of the menu element.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the value of the menu element.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  value: ResourceStr;

  /**
   * Sets the icon of the menu element.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the icon of the menu element.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  icon?: ResourceStr;

  /**
   * Sets the symbol of the menu element.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  symbolIcon?: SymbolGlyphModifier;

  /**
   * If the value is true, the menu element is available and can respond to operations such as clicking.
   * If the value is false, the menu element is not available and click operations are not responded.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * If the value is true, the menu element is available and can respond to operations such as clicking.
   * If the value is false, the menu element is not available and click operations are not responded.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  enabled?: boolean;

  /**
   * Method executed by the callback.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Method executed by the callback.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Method executed by the callback.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  action: () => void;
}

/**
 * Defines the attribute modifier.
 * 
 * @interface AttributeModifier<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the attribute modifier.
 * 
 * @interface AttributeModifier<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface AttributeModifier<T> {

  /**
   * Defines the normal update attribute function.
   * 
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the normal update attribute function.
   * 
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyNormalAttribute?(instance: T) : void;

  /**
   * Defines the pressed update attribute function.
   * 
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the pressed update attribute function.
   * 
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyPressedAttribute?(instance: T) : void;

  /**
   * Defines the focused update attribute function.
   * 
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the focused update attribute function.
   * 
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyFocusedAttribute?(instance: T) : void;

  /**
   * Defines the disabled update attribute function.
   * 
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the disabled update attribute function.
   * 
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyDisabledAttribute?(instance: T) : void;

  /**
   * Defines the selected update attribute function.
   * 
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the selected update attribute function.
   * 
   * @param { T } instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applySelectedAttribute?(instance: T) : void;
}

/**
 * Defines the content modifier.
 * 
 * @interface ContentModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface ContentModifier<T> {

  /**
   * Defining applyContent function.
   * 
   * @returns { WrappedBuilder<[T]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyContent(): WrappedBuilder<[T]>
}

/**
 * Defines the common configuration.
 * 
 * @interface CommonConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface CommonConfiguration<T> {
  
  /**
   * If the value is true, the contentModifier is available and can respond to operations such as triggerChange.
   *  If it is set to false, triggerChange operations are not responded.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  enabled: boolean,

  /**
   * Obtains the contentModifier instance object
   * 
   * @type { ContentModifier<T> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  contentModifier: ContentModifier<T>
}

/**
 * Outline Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Outline Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare enum OutlineStyle {
  /**
   * Shows as a solid line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Shows as a solid line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  SOLID = 0,

  /**
   * Shows as a series of short square dashed lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Shows as a series of short square dashed lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  DASHED = 1,

  /**
   * Displays as a series of dots with a radius of half the borderWidth.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Displays as a series of dots with a radius of half the borderWidth.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  DOTTED = 2,
}

/**
 * Defines the drag preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Defines the drag preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
/**
 * Defines the drag preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare enum DragPreviewMode {
  /**
   * Default preview mode, let system process preview scale.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Default preview mode, let system process preview scale.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Default preview mode, let system process preview scale.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  AUTO = 1,
  /**
   * Disable system scale to preview panel
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Disable system scale to preview panel
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Disable system scale to preview panel
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  DISABLE_SCALE = 2,
  /**
   * Enable the default shadow effect of preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Enable the default shadow effect of preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  ENABLE_DEFAULT_SHADOW = 3,
  /**
   * Enable the default radius effect of preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Enable the default radius effect of preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  ENABLE_DEFAULT_RADIUS = 4,
  /**
   * Enable the default gray effect on the dragging item.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  ENABLE_DRAG_ITEM_GRAY_EFFECT = 5,
  /**
   * Enable the tile effect for multi drag, each dragged graph is display in the original relative position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  ENABLE_MULTI_TILE_EFFECT = 6,
  /**
   * Enable the touch point calculation position based on final preview rect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW = 7,
}

/**
 * Define drag start animation effect from drag preview to the handle drag image
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18
 */
declare enum DraggingSizeChangeEffect {
  /**
   * Default effect, no transition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  DEFAULT = 0,

  /**
   * Only scaled transition, this parameter take effect when PREVIEW_MODE is not DISABLE_SCALE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  SIZE_TRANSITION = 1,

  /**
   * Scaled and content transition together, this size transition take effect when PREVIEW_MODE is not DISABLE_SCALE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  SIZE_CONTENT_TRANSITION = 2,
}

/**
 * Define the menu pop-up policy
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum MenuPolicy {
  /**
   * Default value. The default logic of whether to pop up a menu depends on the scene.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  DEFAULT = 0,

  /**
   * Hide pop up menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  HIDE = 1,

  /**
   * Show pop up menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  SHOW = 2,
}

/**
 * ImageModifier
 *
 * @typedef { import('../api/arkui/ImageModifier').ImageModifier } ImageModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type ImageModifier = import('../api/arkui/ImageModifier').ImageModifier;

/**
 * SymbolGlyphModifier
 *
 * @typedef {import('../api/arkui/SymbolGlyphModifier').SymbolGlyphModifier} SymbolGlyphModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare type SymbolGlyphModifier = import('../api/arkui/SymbolGlyphModifier').SymbolGlyphModifier;

/**
 * Defines the preview options.
 *
 * @interface DragPreviewOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Defines the preview options.
 *
 * @interface DragPreviewOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
/**
 * Defines the preview options.
 *
 * @interface DragPreviewOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface DragPreviewOptions {
  /**
  * Drag preview mode.
  *
  * @type { ?DragPreviewMode }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @since 11
  */
 /**
  * Drag preview mode.
  *
  * @type { ?(DragPreviewMode | Array<DragPreviewMode>) }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 12
  */
 /**
  * Drag preview mode.
  *
  * @type { ?(DragPreviewMode | Array<DragPreviewMode>) }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 18
  */
  mode?: DragPreviewMode | Array<DragPreviewMode>;

  /**
  * Drag preview modifier.
  *
  * @type { ?ImageModifier }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 12
  */
 /**
  * Drag preview modifier.
  *
  * @type { ?ImageModifier }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 18
  */
  modifier?: ImageModifier;

  /**
  * The flag for number showing.
  *
  * @type { ?(boolean | number) }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 12
  */
 /**
  * The flag for number showing.
  *
  * @type { ?(boolean | number) }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 18
  */
  numberBadge?: boolean | number;

  /**
  * Drag start animation effect from drag preview to the handle drag image.
  *
  * @type { ?DraggingSizeChangeEffect }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 18
  */
  sizeChangeEffect?: DraggingSizeChangeEffect;
}

/**
 * Defines the drag options.
 *
 * @interface DragInteractionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare interface DragInteractionOptions {
  /**
  * Define whether to gather selected nodes in grid or list.
  *
  * @type { ?boolean }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 12
  */
  isMultiSelectionEnabled?: boolean;
  
  /**
  * Define whether to execute animation before preview floating.
  *
  * @type { ?boolean }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 12
  */
  defaultAnimationBeforeLifting?: boolean;

  /**
  * Config if auto scrolling should be triggered when the drag hovered on a scrollable controller's edge.
  *
  * @type { ?boolean }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 18
  */
  enableEdgeAutoScroll?: boolean;

  /**
  * Define whether to enable the haptic feedback when dragging, the default value is false.
  *
  * @type { ?boolean }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 18
  */
  enableHapticFeedback?: boolean;

  /**
  * Define whether to lifting trigger drag by finger.
  *
  * @type { ?boolean }
  * @default false
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 15
  */
  isLiftingDisabled?: boolean;
}

/**
 * Defines the drag preview configuration.
 *
 * @interface PreviewConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 15
 */
declare interface PreviewConfiguration {
  /**
  * Define whether to only use for lifting.
  *
  * @type { ?boolean }
  * @default false
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 15
  */
  onlyForLifting?: boolean;

  /**
  * Define whether to delay create builder.
  *
  * @type { ?boolean }
  * @default false
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @atomicservice
  * @since 15
  */
  delayCreating?: boolean;
}

/**
 * Define the options of invert
 *
 * @interface InvertOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Define the options of invert
 *
 * @interface InvertOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare interface InvertOptions {

  /**
   * Defines the low value of threshold
   * 
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the low value of threshold
   * 
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  low: number;

  /**
  * Defines the high value of threshold
  * 
  * @type { number }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
 /**
  * Defines the high value of threshold
  * 
  * @type { number }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  */
  high: number;

  /**
   * Defines the threshold
   * 
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the threshold
   * 
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  threshold: number;
  
  /**
   *Defines the threshold range
   * 
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   *Defines the threshold range
   * 
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  thresholdRange: number;
}

/**
 * Import the CircleShape type object for common method.
 * 
 * @typedef { import('../api/@ohos.arkui.shape').CircleShape } CircleShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type CircleShape = import('../api/@ohos.arkui.shape').CircleShape;

/**
 * Import the EllipseShape type object for common method.
 * 
 * @typedef { import('../api/@ohos.arkui.shape').EllipseShape } EllipseShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type EllipseShape = import('../api/@ohos.arkui.shape').EllipseShape;

/**
 * Import the PathShape type object for common method.
 * 
 * @typedef { import('../api/@ohos.arkui.shape').PathShape } PathShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type PathShape = import('../api/@ohos.arkui.shape').PathShape;

/**
 * Import the RectShape type object for common method.
 * 
 * @typedef { import('../api/@ohos.arkui.shape').RectShape } RectShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type RectShape = import('../api/@ohos.arkui.shape').RectShape;

/**
 * Defines the type that can be undefined.
 *
 * @typedef { T | undefined } Optional<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type Optional<T> = T | undefined;

/**
 * Defines the TipsMessageType property with ResourceStr and StyledString.
 *
 * @typedef { ResourceStr | StyledString } TipsMessageType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare type TipsMessageType = ResourceStr | StyledString;

/**
 * Define the options for background image.
 *
 * @interface BackgroundImageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
interface BackgroundImageOptions {
  /**
   * Sets the synchronous or asynchronous mode for background image loading.
   * The default parameter type is bool, and the default value is false.
   *
   * @type { ?boolean }
   * @param { boolean } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  syncLoad?: boolean;
  /**
   * Set the repeat style of the background image.
   *
   * @type { ?ImageRepeat }
   * @param { ImageRepeat } value
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  repeat?: ImageRepeat;
}

/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class CommonMethod<T> {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 9
   */
  constructor();

  /**
   * Sets the width of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the width of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the width of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the width of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  width(value: Length): T;
  /**
   * Sets the width of the current component.
   *
   * @param { Length | LayoutPolicy } widthValue
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15
   */
  width(widthValue: Length | LayoutPolicy): T;

  /**
   * Sets the height of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the height of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the height of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the height of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  height(value: Length): T;
  /**
   * Sets the height of the current component.
   *
   * @param { Length | LayoutPolicy } heightValue
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15
   */
  height(heightValue: Length | LayoutPolicy): T;
  
  /**
   * Sets the drawModifier of the current component.
   *
   * @param { DrawModifier | undefined } modifier - drawModifier used to draw, or undefined if it is not available.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  drawModifier(modifier: DrawModifier | undefined): T;

  /**
   * Sets the custom property of the current component.
   *
   * @param { string } name - the name of the custom property.
   * @param { Optional<Object> } value - the value of the custom property.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  customProperty(name: string, value: Optional<Object>): T;

  /**
   * Expands the safe area.
   *
   * @param { Array<SafeAreaType> } types - Indicates the types of the safe area.
   * @param { Array<SafeAreaEdge> } edges - Indicates the edges of the safe area.
   * @returns { T } The component instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Expands the safe area.
   *
   * @param { Array<SafeAreaType> } types - Indicates the types of the safe area.
   * @param { Array<SafeAreaEdge> } edges - Indicates the edges of the safe area.
   * @returns { T } The component instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  expandSafeArea(types?: Array<SafeAreaType>, edges?: Array<SafeAreaEdge>): T;

  /**
   * Sets the response region of the current component.
   *
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the response region of the current component.
   *
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the response region of the current component.
   *
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the response region of the current component.
   *
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  responseRegion(value: Array<Rectangle> | Rectangle): T;

  /**
   * Sets the mouse response region of current component
   *
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { T } return the component attribute
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the mouse response region of current component
   *
   * @param { Array<Rectangle> | Rectangle } value
   * @returns { T } return the component attribute
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  mouseResponseRegion(value: Array<Rectangle> | Rectangle): T;

  /**
   * The size of the current component.
   *
   * @param { SizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The size of the current component.
   *
   * @param { SizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The size of the current component.
   *
   * @param { SizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The size of the current component.
   *
   * @param { SizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  size(value: SizeOptions): T;

  /**
   * constraint Size:
   * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
   *
   * @param { ConstraintSizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * constraint Size:
   * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
   *
   * @param { ConstraintSizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * constraint Size:
   * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
   *
   * @param { ConstraintSizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * constraint Size:
   * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
   *
   * @param { ConstraintSizeOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  constraintSize(value: ConstraintSizeOptions): T;

  /**
   * Sets the touchable of the current component
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   * @useinstead hitTestBehavior
   */
  touchable(value: boolean): T;

  /**
   * Defines the component's hit test behavior in touch events.
   *
   * @param { HitTestMode } value - the hit test mode.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Defines the component's hit test behavior in touch events.
   *
   * @param { HitTestMode } value - the hit test mode.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the component's hit test behavior in touch events.
   *
   * @param { HitTestMode } value - the hit test mode.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  hitTestBehavior(value: HitTestMode): T;

  /**
   * Defines the pre-touch test of sub component in touch events.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Defines the pre-touch test of sub component in touch events.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onChildTouchTest(event: (value: Array<TouchTestInfo>) => TouchResult): T;

  /**
   * layout Weight
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * layout Weight
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * layout Weight
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines the weight of the component, according to which the remain part of main-axis is allocated self-adaptively
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  layoutWeight(value: number | string): T;

  /**
   * chain Weight
   *
   * @param { ChainWeightOptions } chainWeight
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  chainWeight(chainWeight: ChainWeightOptions): T;

  /**
   * Inner margin.
   *
   * @param { Padding | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Inner margin.
   *
   * @param { Padding | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Inner margin.
   *
   * @param { Padding | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Inner margin.
   *
   * @param { Padding | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Inner margin.
   *
   * @param { Padding | Length | LocalizedPadding } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  padding(value: Padding | Length | LocalizedPadding): T;

  /**
   * Inner safeArea padding.
   *
   * @param { Padding | LengthMetrics | LocalizedPadding } paddingValue - Indicates safeArea padding values
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14
   */
  safeAreaPadding(paddingValue: Padding | LengthMetrics | LocalizedPadding): T;
  
  /**
   * Outer Margin.
   *
   * @param { Margin | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Outer Margin.
   *
   * @param { Margin | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Outer Margin.
   *
   * @param { Margin | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Outer Margin.
   *
   * @param { Margin | Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Outer Margin.
   *
   * @param { Margin | Length | LocalizedMargin } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  margin(value: Margin | Length | LocalizedMargin): T;

  /**
   * Background.
   *
   * @param { CustomBuilder } builder
   * @param { object } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Background.
   *
   * @param { CustomBuilder } builder
   * @param { object } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  background(builder: CustomBuilder, options?: { align?: Alignment }): T;

  /**
   * Background color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Background color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Background color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Background color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  backgroundColor(value: ResourceColor): T;

  /**
   * Background color
   *
   * @param { Optional<ResourceColor> } color
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  backgroundColor(color: Optional<ResourceColor>): T;

  /**
   * PixelRound
   *
   * @param { PixelRoundPolicy } value - indicates the pixel round policy.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  pixelRound(value: PixelRoundPolicy): T;

  /**
   * Background image
   * src: Image address url
   *
   * @param { ResourceStr } src
   * @param { ImageRepeat } repeat
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Background image
   * src: Image address url
   *
   * @param { ResourceStr } src
   * @param { ImageRepeat } repeat
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Background image
   * src: Image address url
   *
   * @param { ResourceStr } src
   * @param { ImageRepeat } repeat
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Background image
   * src: Image address url
   *
   * @param { ResourceStr } src
   * @param { ImageRepeat } repeat
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Background image
   * src: Image address url
   *
   * @param { ResourceStr | PixelMap } src
   * @param { ImageRepeat } repeat
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  backgroundImage(src: ResourceStr | PixelMap, repeat?: ImageRepeat): T;

  /**
   * Background image
   *
   * @param { ResourceStr | PixelMap } src - the background image source
   * @param { BackgroundImageOptions } options - config the options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  backgroundImage(src: ResourceStr | PixelMap, options?: BackgroundImageOptions): T;
    
  /**
   * Background image size
   *
   * @param { SizeOptions | ImageSize } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Background image size
   *
   * @param { SizeOptions | ImageSize } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Background image size
   *
   * @param { SizeOptions | ImageSize } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Background image size
   *
   * @param { SizeOptions | ImageSize } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  backgroundImageSize(value: SizeOptions | ImageSize): T;

  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   *
   * @param { Position | Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   *
   * @param { Position | Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   *
   * @param { Position | Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   *
   * @param { Position | Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  backgroundImagePosition(value: Position | Alignment): T;

  /**
   * Background blur style.
   * blurStyle:Blur style type.
   *
   * @param { BlurStyle } value
   * @param { BackgroundBlurStyleOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Background blur style.
   * blurStyle:Blur style type.
   *
   * @param { BlurStyle } value
   * @param { BackgroundBlurStyleOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Background blur style.
   * blurStyle:Blur style type.
   *
   * @param { BlurStyle } value
   * @param { BackgroundBlurStyleOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions): T;

  /**
   * Background blur style.
   * blurStyle:Blur style type.
   * sysOptions: system adaptive options.
   *
   * @param { Optional<BlurStyle> } style
   * @param { BackgroundBlurStyleOptions } [options]
   * @param { SystemAdaptiveOptions } [sysOptions]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T;

   /**
   * options:background effect options.
   *
   * @param { BackgroundEffectOptions } options - options indicates the effect options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * options:background effect options.
   *
   * @param { BackgroundEffectOptions } options - options indicates the effect options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  backgroundEffect(options: BackgroundEffectOptions): T;

  /**
   * options:background effect options.
   * sysOptions: system adaptive options.
   *
   * @param { Optional<BackgroundEffectOptions> } options - options indicates the effect options.
   * @param { SystemAdaptiveOptions } [ sysOptions ] - system adaptive options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  backgroundEffect(options: Optional<BackgroundEffectOptions>, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * Background image resizable.
   * value:resizable options
   *
   * @param { ResizableOptions } value - Indicates the resizable options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  backgroundImageResizable(value: ResizableOptions): T;

  /**
   * Foreground effect.
   *
   * @param { ForegroundEffectOptions } options - options indicates the effect options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  foregroundEffect(options: ForegroundEffectOptions): T;

  /**
   * Unified visual effect interface.
   *
   * @param { VisualEffect } effect - Visual effect parameters.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  visualEffect(effect: VisualEffect): T;

  /**
   * Filter applied to the background layer of the component.
   *
   * @param { Filter } filter - Filter effect parameters.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  backgroundFilter(filter: Filter): T;

  /**
   * Filter applied to the foreground layer of the component.
   *
   * @param { Filter } filter - Filter effect parameters.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  foregroundFilter(filter: Filter): T;

  /**
   * Filter applied to the compositing layer of the component.
   *
   * @param { Filter } filter - Filter effect parameters.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  compositingFilter(filter: Filter): T;

  /**
   * Foreground blur style.
   * blurStyle:Blur style type.
   *
   * @param { BlurStyle } value
   * @param { ForegroundBlurStyleOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Foreground blur style.
   * blurStyle:Blur style type.
   *
   * @param { BlurStyle } value
   * @param { ForegroundBlurStyleOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  foregroundBlurStyle(value: BlurStyle, options?: ForegroundBlurStyleOptions): T;

  /**
   * Foreground blur style.
   * blurStyle:Blur style type.
   * sysOptions: system adaptive options.
   *
   * @param { Optional<BlurStyle> } style
   * @param { ForegroundBlurStyleOptions } [options]
   * @param { SystemAdaptiveOptions } [sysOptions]
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * Opacity
   *
   * @param { number | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Opacity
   *
   * @param { number | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Opacity
   *
   * @param { number | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Opacity
   *
   * @param { number | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  opacity(value: number | Resource): T;

  /**
   * Opacity
   *
   * @param { Optional<number | Resource> } opacity
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  opacity(opacity: Optional<number | Resource>): T;

  /**
   * Border
   * width:Border width;color:Border color;radius:Border radius;
   *
   * @param { BorderOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Border
   * width:Border width;color:Border color;radius:Border radius;
   *
   * @param { BorderOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border
   * width:Border width;color:Border color;radius:Border radius;
   *
   * @param { BorderOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border
   * width:Border width;color:Border color;radius:Border radius;
   *
   * @param { BorderOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  border(value: BorderOptions): T;

  /**
   * Border style
   *
   * @param { BorderStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Border style
   *
   * @param { BorderStyle | EdgeStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border style
   *
   * @param { BorderStyle | EdgeStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border style
   *
   * @param { BorderStyle | EdgeStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  borderStyle(value: BorderStyle | EdgeStyles): T;

  /**
   * Border width
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Border width
   *
   * @param { Length | EdgeWidths } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border width
   *
   * @param { Length | EdgeWidths } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border width
   *
   * @param { Length | EdgeWidths } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Border width
   *
   * @param { Length | EdgeWidths | LocalizedEdgeWidths } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  borderWidth(value: Length | EdgeWidths | LocalizedEdgeWidths): T;

  /**
   * Border color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Border color
   *
   * @param { ResourceColor | EdgeColors } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border color
   *
   * @param { ResourceColor | EdgeColors } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border color
   *
   * @param { ResourceColor | EdgeColors } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Border color
   *
   * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T;

  /**
   * Border radius
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Border radius
   *
   * @param { Length | BorderRadiuses } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border radius
   *
   * @param { Length | BorderRadiuses } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border radius
   *
   * @param { Length | BorderRadiuses } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Border radius
   *
   * @param { Length | BorderRadiuses | LocalizedBorderRadiuses } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses): T;

  /**
   * Border image
   *
   * @param { BorderImageOption } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border image
   *
   * @param { BorderImageOption } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border image
   *
   * @param { BorderImageOption } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  borderImage(value: BorderImageOption): T;

  /**
   * Outline
   * width:Outline width;color:Outline color;radius:Outline radius;style:Outline style;
   *
   * @param { OutlineOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Outline
   * width:Outline width;color:Outline color;radius:Outline radius;style:Outline style;
   *
   * @param { OutlineOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  outline(value: OutlineOptions): T;

  /**
   * Outline
   * width:Outline width;color:Outline color;radius:Outline radius;style:Outline style;
   *
   * @param { Optional<OutlineOptions> } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  outline(options: Optional<OutlineOptions>): T;

  /**
   * Outline style
   * The input parameter default value is OutlineStyle.SOLID
   *
   * @param { OutlineStyle | EdgeOutlineStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Outline style
   *
   * @param { OutlineStyle | EdgeOutlineStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  outlineStyle(value: OutlineStyle | EdgeOutlineStyles): T;

  /**
   * Outline style
   *
   * @param { Optional<OutlineStyle | EdgeOutlineStyles> } style
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  outlineStyle(style: Optional<OutlineStyle | EdgeOutlineStyles>): T;

  /**
   * Outline width
   * The input parameter default value is 0
   *
   * @param { Dimension | EdgeOutlineWidths } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Outline width
   *
   * @param { Dimension | EdgeOutlineWidths } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  outlineWidth(value: Dimension | EdgeOutlineWidths): T;

  /**
   * Outline width
   *
   * @param { Optional<Dimension | EdgeOutlineWidths> } width
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  outlineWidth(width: Optional<Dimension | EdgeOutlineWidths>): T;

  /**
   * Outline color
   * The input parameter default value is Color.Black
   *
   * @param { ResourceColor | EdgeColors } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Outline color
   *
   * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T;

  /**
   * Outline color
   *
   * @param { Optional<ResourceColor | EdgeColors | LocalizedEdgeColors> } color
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  outlineColor(color: Optional<ResourceColor | EdgeColors | LocalizedEdgeColors>): T;

  /**
   * Outline radius
   * The input parameter default value is 0
   *
   * @param { Dimension | OutlineRadiuses } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Outline radius
   *
   * @param { Dimension | OutlineRadiuses } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  outlineRadius(value: Dimension | OutlineRadiuses): T;

  /**
   * Outline radius
   *
   * @param { Optional<Dimension | OutlineRadiuses> } radius
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  outlineRadius(radius: Optional<Dimension | OutlineRadiuses>): T;

  /**
   * Provides the general foreground color capability of UI components, and assigns color values
   * according to the characteristics of components.
   *
   * @param { ResourceColor | ColoringStrategy } value - indicates the color or color selection strategy
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Provides the general foreground color capability of UI components, and assigns color values
   * according to the characteristics of components.
   *
   * @param { ResourceColor | ColoringStrategy } value - indicates the color or color selection strategy
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  foregroundColor(value: ResourceColor | ColoringStrategy): T;

  /**
   * Provides the general foreground color capability of UI components, and assigns color values
   * according to the characteristics of components.
   *
   * @param { Optional<ResourceColor | ColoringStrategy> } color - indicates the color or color selection strategy
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  foregroundColor(color: Optional<ResourceColor | ColoringStrategy>): T;

  /**
   * Trigger a click event when a click is clicked.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Trigger a click event when a click is clicked.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Trigger a click event when a click is clicked.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Trigger a click event when a click is clicked.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  onClick(event: (event: ClickEvent) => void): T;

  /**
   * Trigger a click event when a click is clicked, move distance should smaller than distanceThreshold. 
   *
   * @param { function } event - this function callback executed when the click action is recognized
   * @param { number } distanceThreshold - the distance threshold of finger's movement when detecting a click action
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  onClick(event: Callback<ClickEvent>, distanceThreshold: number): T;

  /**
   * Trigger a hover event.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Trigger a hover event.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onHover(event: (isHover: boolean, event: HoverEvent) => void): T;

  /**
   * Trigger a hover move event.
   *
   * @param { Callback<HoverEvent> } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  onHoverMove(event: Callback<HoverEvent>): T;

  /**
   * Trigger a accessibility hover event.
   *
   * @param { AccessibilityCallback } callback - A callback instance used when the component is touched after accessibility mode is enabled.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onAccessibilityHover(callback: AccessibilityCallback): T;

  /**
   * Set hover effect.
   *
   * @param { HoverEffect } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set hover effect.
   *
   * @param { HoverEffect } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set hover effect.
   *
   * @param { HoverEffect } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  hoverEffect(value: HoverEffect): T;

  /**
   * Trigger a mouse event.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Trigger a mouse event.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  onMouse(event: (event: MouseEvent) => void): T;

  /**
   * Trigger a touch event when touched.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Trigger a touch event when touched.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Trigger a touch event when touched.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onTouch(event: (event: TouchEvent) => void): T;

  /**
   * Keyboard input
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Keyboard input
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Keyboard input
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onKeyEvent(event: (event: KeyEvent) => void): T;

  /**
   * Keyboard input
   *
   * @param { Callback<KeyEvent, boolean> } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  onKeyEvent(event: Callback<KeyEvent, boolean>): T;

  /**
   * Digital crown input.
   *
   * @param { Callback<CrownEvent> } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  onDigitalCrown(handler: Optional<Callback<CrownEvent>>): T;

  /**
   * Handle keyboard events before input method events.
   *
   * @param { Callback<KeyEvent, boolean> } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onKeyPreIme(event: Callback<KeyEvent, boolean>): T;

  /**
   * Customize the handling and distribution of key events.
   *
   * @param { Callback<KeyEvent, boolean> } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  onKeyEventDispatch(event: Callback<KeyEvent, boolean>): T;

  /**
   * Trigger a FocusAxisEvent.
   *
   * @param { Callback<FocusAxisEvent> } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   */
  onFocusAxisEvent(event: Callback<FocusAxisEvent>): T;

  /**
   * Handle axis events.
   *
   * @param { Callback<AxisEvent> } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17
   */
  onAxisEvent(event: Callback<AxisEvent>): T;

  /**
   * Set focusable.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set focusable.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set focusable.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  focusable(value: boolean): T;

  /**
   * Set nextFocus.
   *
   * @param { FocusMovement } nextStep
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  nextFocus(nextStep: Optional<FocusMovement>): T;

  /**
   * Set TabStop on component focus
   *
   * @param { boolean } isTabStop
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  tabStop(isTabStop: boolean): T;
                
  /**
   * Trigger a event when got focus.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Trigger a event when got focus.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Trigger a event when got focus.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onFocus(event: () => void): T;

  /**
   * Trigger a event when lose focus.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Trigger a event when lose focus.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Trigger a event when lose focus.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onBlur(event: () => void): T;

  /**
   * Set focus index by key tab.
   *
   * @param { number } index
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Set focus index by key tab.
   *
   * @param { number } index
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set focus index by key tab.
   *
   * @param { number } index
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  tabIndex(index: number): T;

  /**
   * Set default focused component when a page create.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Set default focused component when a page create.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set default focused component when a page create.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  defaultFocus(value: boolean): T;

  /**
   * Set default focused component when focus on a focus group.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Set default focused component when focus on a focus group.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set default focused component when focus on a focus group.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  groupDefaultFocus(value: boolean): T;

  /**
   * Set a component focused when the component be touched.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Set a component focused when the component be touched.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set a component focused when the component be touched.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  focusOnTouch(value: boolean): T;

  /**
   * Set the component's focusBox style.
   *
   * @param { FocusBoxStyle } style
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  focusBox(style: FocusBoxStyle): T;

  /**
  * Set container as a focus group with a specific identifier.
  *
  * @param { string } id - focus scope identifier.
  * @param { boolean } [isGroup] - whether this scope is a focus group, the default value is false
  * @returns { T }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  */
 focusScopeId(id: string, isGroup?: boolean): T;
  /**
  * Set container as a focus group with a specific identifier.
  *
  * @param { string } id - focus scope identifier.
  * @param { boolean } [isGroup] - whether this scope is a focus group, the default value is false.
  * @param { boolean } [arrowStepOut] - whether the arrow keys can move focus from inside the focus group to outside,
  * only effective when isGroup is true, the default value is true.
  * @returns { T }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 14
  */
 focusScopeId(id: string, isGroup?: boolean, arrowStepOut?: boolean): T;

  /**
  * Set the focus priority of component in a specific focus scope.
  *
  * @param { string } scopeId
  * @param { FocusPriority } [priority] - the default value is AUTO
  * @returns { T }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  */
 focusScopePriority(scopeId: string, priority?: FocusPriority): T;

  /**
   * animation
   *
   * @param { AnimateParam } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * animation
   *
   * @param { AnimateParam } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * animation
   *
   * @param { AnimateParam } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * animation
   *
   * @param { AnimateParam } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  animation(value: AnimateParam): T;

  /**
   * Transition parameter
   *
   * @param { TransitionOptions | TransitionEffect } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Transition parameter
   *
   * @param { TransitionOptions | TransitionEffect } value - transition options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Transition parameter
   *
   * @param { TransitionOptions | TransitionEffect } value - transition options or transition effect
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Transition parameter
   *
   * @param { TransitionOptions | TransitionEffect } value - transition options or transition effect
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  transition(value: TransitionOptions | TransitionEffect): T;

  /**
   * Set the transition effect of component when it appears and disappears.
   *
   * @param { TransitionEffect } effect - transition effect
   * @param { Optional<TransitionFinishCallback> } onFinish - transition finish callback.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  transition(effect: TransitionEffect, onFinish: Optional<TransitionFinishCallback>): T;

  /**
   * Bind gesture recognition.
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Bind gesture recognition.
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Bind gesture recognition.
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  gesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Binding Preferential Recognition Gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Binding Preferential Recognition Gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Binding Preferential Recognition Gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  priorityGesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Binding gestures that can be triggered simultaneously with internal component gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Binding gestures that can be triggered simultaneously with internal component gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Binding gestures that can be triggered simultaneously with internal component gestures
   * gesture:Bound Gesture Type,mask:GestureMask;
   *
   * @param { GestureType } gesture
   * @param { GestureMask } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  parallelGesture(gesture: GestureType, mask?: GestureMask): T;

  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { number } value - value indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates blur options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  blur(value: number, options?: BlurOptions): T;

  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { Optional<number> } blurRadius - value indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates blur options.
   * @param { SystemAdaptiveOptions } [sysOptions] - system adaptive options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  blur(blurRadius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * Adds the content linear gradient blurring effect for the current component. The input parameter is the blurring radius.
   *
   * @param { number } value - the blurring radius.
   * The larger the blurring radius, the more blurring the content, and if the value is 0, the content blurring effect is not blurring.
   * @param { LinearGradientBlurOptions } options - the linear gradient blur options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  linearGradientBlur(value: number, options: LinearGradientBlurOptions): T;

  /**
   * Adds the content linear gradient blurring effect for the current component. The input parameter is the blurring radius.
   *
   * @param { Optional<number> } blurRadius - the blurring radius.
   * The larger the blurring radius, the more blurring the content, and if the value is 0, the content blurring effect is not blurring.
   * @param { Optional<LinearGradientBlurOptions> } options - the linear gradient blur options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  linearGradientBlur(blurRadius: Optional<number>, options: Optional<LinearGradientBlurOptions>): T;

  /**
   * Component motion blur interface.
   * 
   * @param { MotionBlurOptions } value - the attributes of motion blur.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  motionBlur(value: MotionBlurOptions):T;

  /**
   * Component motion blur interface.
   *
   * @param { Optional<MotionBlurOptions> } motionBlur - the attributes of motion blur.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  motionBlur(motionBlur: Optional<MotionBlurOptions>):T;

  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  brightness(value: number): T;

  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   *
   * @param { Optional<number> } brightness
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  brightness(brightness: Optional<number>): T;

  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  contrast(value: number): T;

  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   *
   * @param { Optional<number> } contrast
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  contrast(contrast: Optional<number>): T;

  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  grayscale(value: number): T;

  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   *
   * @param { Optional<number> } grayscale
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  grayscale(grayscale: Optional<number>): T;

  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   *
   * @param { Color | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   *
   * @param { Color | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   *
   * @param { Color | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   *
   * @param { Color | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  colorBlend(value: Color | string | Resource): T;

  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   *
   * @param { Optional<Color | string | Resource> } color
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  colorBlend(color: Optional<Color | string | Resource>): T;

  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  saturate(value: number): T;

  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   *
   * @param { Optional<number> } saturate
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  saturate(saturate: Optional<number>): T;

  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  sepia(value: number): T;

  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   *
   * @param { Optional<number> } sepia
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  sepia(sepia: Optional<number>): T;

  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   *
   * @param { number | InvertOptions } value - value indicates the scale of the conversion or the options of invert.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  invert(value: number | InvertOptions): T;

  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   *
   * @param { Optional<number | InvertOptions> } options - value indicates the scale of the conversion or the options of invert.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  invert(options: Optional<number | InvertOptions>): T;

  /**
   * Sets system bar effect to the component.
   *
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  systemBarEffect(): T;

  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  hueRotate(value: number | string): T;

  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   *
   * @param { Optional<number | string> } rotation
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  hueRotate(rotation: Optional<number | string>): T;

  /**
   * Add an attribute to control whether the shadows of the child nodes overlap each other.
   *
   * @param { boolean } value - true means the shadows of the child nodes overlap each other effect and drawn in batches.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Add an attribute to control whether the shadows of the child nodes overlap each other.
   *
   * @param { boolean } value - true means the shadows of the child nodes overlap each other effect and drawn in batches.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  useShadowBatching(value: boolean): T;

  /**
   * Add an attribute to control whether the shadows of the child nodes overlap each other.
   *
   * @param { Optional<boolean> } use - true means the shadows of the child nodes overlap each other effect and drawn in batches.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  useShadowBatching(use: Optional<boolean>): T;

   /**
   * Sets whether the component should apply the effects template defined by the parent effectComponent or window.
   * If multiple parent effectComponents are found, the nearest one will be used.
   * If no parent effectComponent is found, this method has no effect.
   *
   * @param { boolean } useEffect - true means the component should apply the effects template defined by the parent effectComponent or window.
   * @param { EffectType } effectType - the effect type of the effects template, defined by the parent effectComponent or window.
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 14
   */
  useEffect(useEffect: boolean, effectType: EffectType): T;

  /**
   * Sets whether the component should apply the effects template defined by the parent effectComponent or window.
   * If multiple parent effectComponents are found, the nearest one will be used.
   * If no parent effectComponent is found, this method has no effect.
   *
   * @param { Optional<boolean> } useEffect - true means the component should apply the effects template defined by the parent effectComponent or window.
   * @param { EffectType } [effectType] - the effect type of the effects template, defined by the parent effectComponent or window.
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  useEffect(useEffect: Optional<boolean>, effectType?: EffectType): T;

  /**
   * Sets whether the component should apply the effects template defined by the parent effectComponent.
   * If multiple parent effectComponents are found, the nearest one will be used.
   * If no parent effectComponent is found, this method has no effect.
   *
   * @param { boolean } value - true means the component should apply the effects template.
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  useEffect(value: boolean): T;

  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   *
   * @param { number } value - value indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates the backdrop blur options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  backdropBlur(value: number, options?: BlurOptions): T;

  /**
   * Adds the background blur effect for the current component. The input parameter is the blur radius.
   * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
   *
   * @param { Optional<number> } radius - radius indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates the backdrop blur options.
   * @param { SystemAdaptiveOptions } [sysOptions] - system adaptive options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  backdropBlur(radius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T;

  /**
   * Composite the contents of this view and its children into an offscreen cache before display in the screen.
   *
   * @param { boolean } value - if this view and its children need to composite into an offscreen cache.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Composite the contents of this view and its children into an offscreen cache before display in the screen.
   *
   * @param { boolean } value - if this view and its children need to composite into an offscreen cache.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Composite the contents of this view and its children into an offscreen cache before display in the screen.
   *
   * @param { boolean } value - if this view and its children need to composite into an offscreen cache.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  renderGroup(value: boolean): T;

  /**
   * Composite the contents of this view and its children into an offscreen cache before display in the screen.
   *
   * @param { Optional<boolean> } isGroup - if this view and its children need to composite into an offscreen cache.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  renderGroup(isGroup: Optional<boolean>): T;

  /**
   * Sets whether the component should remain stationary, reusing the results of the current frame's off-screen rendering.
   * If the input parameter is true, the component and subcomponent changes do not affect the display.
   *
   * @param { boolean } value - true means the component should remain stationary.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  freeze(value: boolean): T;

  /**
   * Sets whether the component should remain stationary, reusing the results of the current frame's off-screen rendering.
   * If the input parameter is true, the component and subcomponent changes do not affect the display.
   *
   * @param { Optional<boolean> } freeze - true means the component should remain stationary.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  freeze(freeze: Optional<boolean>): T;

  /**
   * Sets the translation effect during page transition.
   * The value is the start point of entry and end point of exit.
   * When this parameter is set together with slide, slide takes effect by default.
   *
   * @param { TranslateOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the translation effect during page transition.
   * The value is the start point of entry and end point of exit.
   * When this parameter is set together with slide, slide takes effect by default.
   *
   * @param { TranslateOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the translation effect during page transition.
   * The value is the start point of entry and end point of exit.
   * When this parameter is set together with slide, slide takes effect by default.
   *
   * @param { TranslateOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set component translation.
   *
   * @param { TranslateOptions } value default:{x:0,y:0,z:0}
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  translate(value: TranslateOptions): T;

  /**
   * Set component translation.
   *
   * @param { Optional<TranslateOptions> } translate default:{x:0,y:0,z:0}
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  translate(translate: Optional<TranslateOptions>): T;

  /**
   * Sets the zoom effect during page transition. The value is the start point of entry and end point of exit.
   *
   * @param { ScaleOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the zoom effect during page transition. The value is the start point of entry and end point of exit.
   *
   * @param { ScaleOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the zoom effect during page transition. The value is the start point of entry and end point of exit.
   *
   * @param { ScaleOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set component scaling.
   *
   * @param { ScaleOptions } value default:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  scale(value: ScaleOptions): T;

  /**
   * Set component scaling.
   *
   * @param { Optional<ScaleOptions> } options default:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  scale(options: Optional<ScaleOptions>): T;

  /**
   * Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 14
   * @useinstead grid_col/GridColInterface and grid_row/GridRowInterface
   */
  gridSpan(value: number): T;

  /**
   * The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,
   * the current component is located in the nth column.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,
   * the current component is located in the nth column.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,
   * the current component is located in the nth column.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 14
   * @useinstead grid_col/GridColInterface and grid_row/GridRowInterface
   */
  gridOffset(value: number): T;

  /**
   * Sets the rotation effect during assembly transition.
   * The values are the start point during insertion and the end point during deletion.
   *
   * @param { RotateOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the rotation effect during assembly transition.
   * The values are the start point during insertion and the end point during deletion.
   *
   * @param { RotateOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the rotation effect during assembly transition.
   * The values are the start point during insertion and the end point during deletion.
   *
   * @param { RotateOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set component rotation.
   *
   * @param { RotateOptions } value default:{x:0,y:0,z:0,centerX:'50%',centerY:'50%',centerZ:0,perspective:0}
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  rotate(value: RotateOptions): T;

  /**
   * Set component rotation.
   *
   * @param { Optional<RotateOptions> } options default:{x:0,y:0,z:0,centerX:'50%',centerY:'50%',centerZ:0,perspective:0}
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  rotate(options: Optional<RotateOptions>): T;

  /**
   * Sets the transformation matrix for the current component.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the transformation matrix for the current component.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the transformation matrix for the current component.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  transform(value: object): T;

  /**
   * Sets the transformation matrix for the current component.
   *
   * @param { Optional<object> } transform
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  transform(transform: Optional<object>): T;

  /**
   * This callback is triggered when a component mounts a display.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * This callback is triggered when a component mounts a display.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * This callback is triggered when a component mounts a display.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * This callback is triggered when a component mounts a display.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  onAppear(event: () => void): T;

  /**
   * This callback is triggered when component uninstallation disappears.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * This callback is triggered when component uninstallation disappears.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * This callback is triggered when component uninstallation disappears.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * This callback is triggered when component uninstallation disappears.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  onDisAppear(event: () => void): T;

  /**
   * This callback is triggered when a component mounts to view tree.
   *
   * @param { Callback<void> } callback
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onAttach(callback: Callback<void>): T;

  /**
   * This callback is triggered when a component is detached from view tree.
   *
   * @param { Callback<void> } callback
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onDetach(callback: Callback<void>): T;

  /**
   * This callback is triggered when the size or position of this component change finished.
   *
   * @param { function } event - event callback.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * This callback is triggered when the size or position of this component change finished.
   *
   * @param { function } event - event callback.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * This callback is triggered when the size or position of this component change finished.
   *
   * @param { function } event - event callback.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onAreaChange(event: (oldValue: Area, newValue: Area) => void): T;

  /**
   * Controls the display or hide of the current component.
   *
   * @param { Visibility } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Controls the display or hide of the current component.
   *
   * @param { Visibility } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Controls the display or hide of the current component.
   *
   * @param { Visibility } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Controls the display or hide of the current component.
   *
   * @param { Visibility } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  visibility(value: Visibility): T;

  /**
   * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  flexGrow(value: number): T;

  /**
   * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  flexShrink(value: number): T;

  /**
   * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  flexBasis(value: number | string): T;

  /**
   * Overrides the default configuration of alignItems in the Flex Layout container.
   *
   * @param { ItemAlign } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Overrides the default configuration of alignItems in the Flex Layout container.
   *
   * @param { ItemAlign } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Overrides the default configuration of alignItems in the Flex Layout container.
   *
   * @param { ItemAlign } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Overrides the default configuration of alignItems in the Flex Layout container.
   *
   * @param { ItemAlign } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  alignSelf(value: ItemAlign): T;

  /**
   * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  displayPriority(value: number): T;

  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  zIndex(value: number): T;

  /**
   * If the components of the two pages are configured with the same ID, the shared element transition is performed during transition. If the parameter is set to an empty string, the shared element transition does not occur. For details about the options parameter, see the options parameter description.
   *
   * @param { string } id
   * @param { sharedTransitionOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * If the components of the two pages are configured with the same ID, the shared element transition is performed during transition. If the parameter is set to an empty string, the shared element transition does not occur. For details about the options parameter, see the options parameter description.
   *
   * @param { string } id
   * @param { sharedTransitionOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * If the components of the two pages are configured with the same ID, the shared element transition is performed during transition. If the parameter is set to an empty string, the shared element transition does not occur. For details about the options parameter, see the options parameter description.
   *
   * @param { string } id
   * @param { sharedTransitionOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  sharedTransition(id: string, options?: sharedTransitionOptions): T;

  /**
   * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
   *
   * @param { Direction } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
   *
   * @param { Direction } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
   *
   * @param { Direction } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
   *
   * @param { Direction } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  direction(value: Direction): T;

  /**
   * align
   *
   * @param { Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * align
   *
   * @param { Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * align
   *
   * @param { Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * align
   *
   * @param { Alignment } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  align(value: Alignment): T;

  /**
   * position
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * position
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * position
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * position
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * position
   *
   * @param { Position | Edges | LocalizedEdges } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  position(value: Position | Edges | LocalizedEdges): T;

  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   *
   * @param { Position | LocalizedPosition} value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  markAnchor(value: Position | LocalizedPosition): T;

  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   *
   * @param { Position } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   *
   * @param { Position | Edges | LocalizedEdges } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  offset(value: Position | Edges | LocalizedEdges): T;

  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  enabled(value: boolean): T;

  /**
   * Sets the number of occupied columns and offset columns for a specific device width type.
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
   */
  useSizeType(value: {
    xs?: number | { span: number; offset: number };
    sm?: number | { span: number; offset: number };
    md?: number | { span: number; offset: number };
    lg?: number | { span: number; offset: number };
  }): T;

  /**
   * Specifies the alignRules of relative container
   *
   * @param { AlignRuleOption } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Specifies the alignRules of relative container
   *
   * @param { AlignRuleOption } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Specifies the alignRules of relative container
   *
   * @param { AlignRuleOption } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  alignRules(value: AlignRuleOption): T;

  /**
   * Specifies the localized alignRules of relative container
   *
   * @param { LocalizedAlignRuleOptions } alignRule
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  alignRules(alignRule: LocalizedAlignRuleOptions): T;

  /**
   * Specifies the direction and style of chain in relative container
   *
   * @param { Axis } direction - indicates direction of the chain
   * @param { ChainStyle } style - indicates style of the chain
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  chainMode(direction: Axis, style: ChainStyle): T;

  /**
   * Specifies the aspect ratio of the current component.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Specifies the aspect ratio of the current component.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Specifies the aspect ratio of the current component.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Specifies the aspect ratio of the current component.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  aspectRatio(value: number): T;

  /**
   * The click effect level and scale number.
   *
   * @param { ClickEffect | null } value
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The click effect level and scale number.
   *
   * @param { ClickEffect | null } value
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  clickEffect(value: ClickEffect | null): T;

  /**
   * The click effect level and scale number.
   *
   * @param { Optional<ClickEffect | null> } effect
   * @returns { T } return the component attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  clickEffect(effect: Optional<ClickEffect | null>): T;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  onDragStart(event: (event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo): T;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  onDragEnter(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  onDragMove(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  onDragLeave(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  onDrop(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   *
   * @param { OnDragEventCallback } eventCallback - event callback.
   * @param { DropOptions } [dropOptions] - the drop handling options.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  onDrop(eventCallback: OnDragEventCallback, dropOptions?: DropOptions): T;

  /**
   * This function is called when the drag event is end.
   *
   * @param { function } event - indicates the function to be called.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * This function is called when the drag event is end.
   *
   * @param { function } event - indicates the function to be called.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * This function is called when the drag event is end.
   *
   * @param { function } event - indicates the function to be called.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  onDragEnd(event: (event: DragEvent, extraParams?: string) => void): T;

  /**
   * Allowed drop uniformData type for this node.
   *
   * @param { Array<UniformDataType> } value - the uniformData type for this node.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Allowed drop uniformData type for this node.
   *
   * @param { Array<UniformDataType> } value - the uniformData type for this node.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Allowed drop uniformData type for this node.
   *
   * @param { Array<UniformDataType> | null } value - the uniformData type for this node.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  allowDrop(value: Array<UniformDataType> | null): T;

  /**
   * Enable the selectable area can be dragged.
   *
   * @param { boolean } value - true means the area can be dragged, false means the area can't be dragged.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Enable the selectable area can be dragged.
   *
   * @param { boolean } value - true means the area can be dragged, false means the area can't be dragged.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  draggable(value: boolean): T;

  /**
   * Set preview of the component for dragging process
   *
   * @param { CustomBuilder | DragItemInfo } value - preview of the component for dragging process
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Set preview of the component for dragging process
   *
   * @param { CustomBuilder | DragItemInfo | string } value - preview of the component for dragging process
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  dragPreview(value: CustomBuilder | DragItemInfo | string): T;

  /**
   * Set preview of the component for dragging process
   *
   * @param { CustomBuilder | DragItemInfo | string } preview - preview of the component for dragging process
   * @param { PreviewConfiguration } config - drag preview configuration.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 15
   */
  dragPreview(preview: CustomBuilder | DragItemInfo | string, config?: PreviewConfiguration): T;

  /**
   * Set the selectable area drag preview options.
   *
   * @param { DragPreviewOptions } value - preview options value.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Set the selectable area drag preview options.
   *
   * @param { DragPreviewOptions } value - preview options value.
   * @param { DragInteractionOptions } options - drag interaction options value.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  dragPreviewOptions(value: DragPreviewOptions, options?: DragInteractionOptions): T;

  /**
   * After binding, a callback is triggered when the preDrag status change finished.
   *
   * @param { Callback<PreDragStatus> } callback callback - The callback will be triggered when the preDrag status change.
   * @returns { T } property value of type T.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  onPreDrag(callback: Callback<PreDragStatus>): T;

  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   *
   * @param { string } value
   * @param { object } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   *
   * @param { string } value
   * @param { object } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   *
   * @param { string | CustomBuilder } value
   * @param { object } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   *
   * @param { string | CustomBuilder } value
   * @param { object } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   *
   * @param { string | CustomBuilder | ComponentContent } value
   * @param { OverlayOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  overlay(value: string | CustomBuilder | ComponentContent, options?: OverlayOptions): T;

  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom; 
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom; 
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom; 
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom; 
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * Anonymous Object Rectification.
   * @param { LinearGradientOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  linearGradient(value: LinearGradientOptions): T;

  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * @param { Optional<LinearGradientOptions> } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  linearGradient(options: Optional<LinearGradientOptions>): T;

  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient. The default value is 0
   * end:End point of angle gradient. The default value is 0
   * number:number
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient. The default value is 0
   * end:End point of angle gradient. The default value is 0
   * number:number
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient. The default value is 0
   * end:End point of angle gradient. The default value is 0
   * number:number
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient. The default value is 0
   * end:End point of angle gradient. The default value is 0
   * number:number
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient. The default value is 0
   * end:End point of angle gradient. The default value is 0
   * number:number
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient. The default value is 0
   * end:End point of angle gradient. The default value is 0
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   *
   * Anonymous Object Rectification.
   * @param { SweepGradientOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  sweepGradient(value: SweepGradientOptions): T;

  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient. The default value is 0
   * end:End point of angle gradient. The default value is 0
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   *
   * @param { Optional<SweepGradientOptions> } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  sweepGradient(options: Optional<SweepGradientOptions>): T;

  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient. value range [0, +∞)
   * colors:Color description for gradients
   * repeating: Refill. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient. value range [0, +∞)
   * colors:Color description for gradients
   * repeating: Refill. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient. value range [0, +∞)
   * colors:Color description for gradients
   * repeating: Refill. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient. value range [0, +∞)
   * colors:Color description for gradients
   * repeating: Refill. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient. value range [0, +∞)
   * colors:Color description for gradients
   * repeating: Refill. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient. value range [0, +∞)
   * colors:Color description for gradients
   * repeating: Refill. The default value is false
   *
   * Anonymous Object Rectification.
   * @param { RadialGradientOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  radialGradient(value: RadialGradientOptions): T;

  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient. value range [0, +∞)
   * colors:Color description for gradients
   * repeating: Refill. The default value is false
   *
   * @param { Optional<RadialGradientOptions> } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  radialGradient(options: Optional<RadialGradientOptions>): T;

  /**
   * Set the motion path of the component
   * path:Motion path for displacement animation, using the svg path string.
   * from:Start point of the motion path. The default value is 0.0.
   * to:End point of the motion path. The default value is 1.0.
   * rotatable:Whether to follow the path for rotation.
   *
   * @param { MotionPathOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the motion path of the component
   * path:Motion path for displacement animation, using the svg path string.
   * from:Start point of the motion path. The default value is 0.0.
   * to:End point of the motion path. The default value is 1.0.
   * rotatable:Whether to follow the path for rotation.
   *
   * @param { MotionPathOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the motion path of the component
   * path:Motion path for displacement animation, using the svg path string.
   * from:Start point of the motion path. The default value is 0.0.
   * to:End point of the motion path. The default value is 1.0.
   * rotatable:Whether to follow the path for rotation.
   *
   * @param { MotionPathOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  motionPath(value: MotionPathOptions): T;

  /**
   * Add a shadow effect to the current component
   *
   * @param { ShadowOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Add a shadow effect to the current component
   *
   * @param { ShadowOptions } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Add a shadow effect to the current component
   *
   * @param { ShadowOptions | ShadowStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Add a shadow effect to the current component
   *
   * @param { ShadowOptions | ShadowStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  shadow(value: ShadowOptions | ShadowStyle): T;

  /**
   * Add a shadow effect to the current component
   *
   * @param { Optional<ShadowOptions | ShadowStyle> } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  shadow(options: Optional<ShadowOptions | ShadowStyle>): T;

  /**
   * Add a blendMode effect to the current component
   * 
   * @param { BlendMode } value - Different hybrid modes
   * @param { BlendApplyType } [type] - Different blend apply type
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * Add a blendMode effect to the current component
   *
   * @param { BlendMode } value - Different hybrid modes
   * @param { BlendApplyType } [type] - Different blend apply type
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  blendMode(value: BlendMode, type?: BlendApplyType): T;

  /**
   * Add a blendMode effect to the current component
   *
   * @param { Optional<BlendMode> } mode - Different hybrid modes
   * @param { BlendApplyType } [type] - Different blend apply type
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  blendMode(mode: Optional<BlendMode>, type?: BlendApplyType): T;

  /**
   * Add a blendMode effect to the current component.Cannot be used together with the blendMode interface.
   * 
   * @param { BlendMode | Blender } effect - When the effect type is BlendMode type, define Different hybrid modes.
   * When the effect type is Blender type, Define the corresponding blending effect.
   * @param { BlendApplyType } [type] - Different blend apply type
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 13
   */
  advancedBlendMode(effect: BlendMode | Blender, type?: BlendApplyType): T;

  /**
   * Whether to crop the sub components beyond the current component range.
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  clip(value: boolean): T;

  /**
   * Whether to crop the sub components beyond the current component range.
   *
   * @param { Optional<boolean> } clip
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  clip(clip: Optional<boolean>): T;

  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   *
   * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   *
   * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   *
   * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   *
   * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 12
   * @useinstead CommonMethod#clipShape
   */
  clip(value: boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute): T;

  /**
  * The current component is cropped according to the specified shape.
  *
  * @param { CircleShape | EllipseShape | PathShape | RectShape } value - indicates the shape of the clip.
  * @returns { T }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 12
  */
  clipShape(value: CircleShape | EllipseShape | PathShape | RectShape): T;

  /**
  * The current component is cropped according to the specified shape.
  *
  * @param { Optional<CircleShape | EllipseShape | PathShape | RectShape> } shape - indicates the shape of the clip.
  * @returns { T }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 18
  */
  clipShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T;

  /**
   * Sets the mask of the current component.
   *
   * @param { ProgressMask } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  mask(value: ProgressMask): T;

  /**
   * Sets the mask of the current component.
   *
   * @param { Optional<ProgressMask> } mask
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  mask(mask: Optional<ProgressMask>): T;

  /**
   * Applies a mask of the specified shape to the current assembly.
   *
   * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Applies a mask of the specified shape to the current assembly.
   *
   * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value - indicates the shape of the mask.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Applies a mask of the specified shape to the current assembly.
   *
   * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value - indicates the shape of the mask.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Applies a mask of the specified shape to the current assembly.
   *
   * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value - indicates the shape of the mask.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   * @deprecated since 12
   * @useinstead CommonMethod#maskShape
   */
  mask(value: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask): T;

  /**
   * Applies a mask of the specified shape to the current assembly.
   *
   * @param { CircleShape | EllipseShape | PathShape | RectShape } value - indicates the shape of the mask.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  maskShape(value: CircleShape | EllipseShape | PathShape | RectShape): T;

  /**
   * Applies a mask of the specified shape to the current assembly.
   *
   * @param { Optional<CircleShape | EllipseShape | PathShape | RectShape> } shape - indicates the shape of the mask.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  maskShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T;

  /**
   * Key. User can set an key to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   * @test
   */
  key(value: string): T;

  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  id(value: string): T;

  /**
   * geometryTransition
   *
   * @param { string } id
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * geometryTransition
   *
   * @param { string } id
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * geometryTransition
   *
   * @param { string } id
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  geometryTransition(id: string): T;
  /**
   * Shared geometry transition
   *
   * @param { string } id - geometry transition id
   * @param { GeometryTransitionOptions } options - Indicates the options of geometry transition.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Shared geometry transition
   *
   * @param { string } id - geometry transition id
   * @param { GeometryTransitionOptions } options - Indicates the options of geometry transition.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  geometryTransition(id: string, options?: GeometryTransitionOptions): T;

  /**
  * Tips control
  *
  * @param { TipsMessageType } message
  * @param { TipsOptions } [options]
  * @returns { T }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 18
  */
  bindTips(message: TipsMessageType, options?: TipsOptions): T;

  /**
   * Popup control
   *
   * @param { boolean } show
   * @param { PopupOptions } popup
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Popup control
   *
   * @param { boolean } show
   * @param { PopupOptions | CustomPopupOptions } popup
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Popup control
   *
   * @param { boolean } show
   * @param { PopupOptions | CustomPopupOptions } popup
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  bindPopup(show: boolean, popup: PopupOptions | CustomPopupOptions): T;

  /**
   * Menu control
   *
   * @param { { value: ResourceStr; icon?: ResourceStr; action: () => void }[] | CustomBuilder } content
   * action: () => void }[] | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Menu control
   *
   * @param { { value: ResourceStr; icon?: ResourceStr; action: () => void }[] | CustomBuilder } content
   * action: () => void }[] | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options - Indicates the options of menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Menu control
   *
   * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options - Indicates the options of menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T;

  /**
   * Menu control
   *
   * @param { boolean } isShow true means display menu, false means hide menu.
   * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options - Indicates the options of menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Menu control
   *
   * @param { boolean } isShow true means display menu, false means hide menu.
   * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options - Indicates the options of menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  bindMenu(isShow: boolean, content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T;

  /**
   * ContextMenu control
   *
   * @param { CustomBuilder } content
   * @param { ResponseType } responseType
   * @param { ContextMenuOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * ContextMenu control
   *
   * @param { CustomBuilder } content - Indicates the content of context menu.
   * @param { ResponseType } responseType - Indicates response type of context menu.
   * @param { ContextMenuOptions } options - Indicates the options of context menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * ContextMenu control
   *
   * @param { CustomBuilder } content - Indicates the content of context menu.
   * @param { ResponseType } responseType - Indicates response type of context menu.
   * @param { ContextMenuOptions } options - Indicates the options of context menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions): T;

  /**
   * ContextMenu control
   *
   * @param { boolean } isShown - true means display content, false means hide content.
   * @param { CustomBuilder } content - Indicates the content of context menu.
   * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions): T;

  /**
   * Bind content cover
   *
   * @param { boolean } isShow - true means display content, false means hide content.
   * @param { CustomBuilder } builder - the content to be displayed.
   * @param { ModalTransition } type - transition type.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Bind content cover
   *
   * @param { boolean } isShow - true means display content, false means hide content.
   * @param { CustomBuilder } builder - the content to be displayed.
   * @param { ModalTransition } type - transition type.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  bindContentCover(isShow: boolean, builder: CustomBuilder, type?: ModalTransition): T;

  /**
   * Bind content cover
   *
   * @param { boolean } isShow - true means display content, false means hide content.
   * @param { CustomBuilder } builder - the content to be displayed.
   * @param { ContentCoverOptions } options - options of content cover.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Bind content cover
   *
   * @param { boolean } isShow - true means display content, false means hide content.
   * @param { CustomBuilder } builder - the content to be displayed.
   * @param { ContentCoverOptions } options - options of content cover.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  bindContentCover(isShow: boolean, builder: CustomBuilder, options?: ContentCoverOptions): T;

  /**
   * Bind sheet
   *
   * @param { boolean } isShow - true means display sheet, false means hide sheet.
   * @param { CustomBuilder } builder - the sheet to be displayed.
   * @param { SheetOptions } options - options of sheet.
   * @returns { T } - template type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Bind sheet
   *
   * @param { boolean } isShow - true means display sheet, false means hide sheet.
   * @param { CustomBuilder } builder - the sheet to be displayed.
   * @param { SheetOptions } options - options of sheet.
   * @returns { T } - template type
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  bindSheet(isShow: boolean, builder: CustomBuilder, options?: SheetOptions): T;

  /**
   * Sets styles for component state.
   *
   * @param { StateStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets styles for component state.
   *
   * @param { StateStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets styles for component state.
   *
   * @param { StateStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets styles for component state.
   *
   * @param { StateStyles } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  stateStyles(value: StateStyles): T;

  /**
   * id for distribute identification.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * id for distribute identification.
   *
   * @param { number } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  restoreId(value: number): T;

  /**
   * Trigger a visible area change event.
   *
   * @param { Array<number> } ratios
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Trigger a visible area change event.
   *
   * @param { Array<number> } ratios
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Trigger a visible area change event.
   *
   * @param { Array<number> } ratios
   * @param { function } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Trigger a visible area change event.
   *
   * @param { Array<number> } ratios
   * @param { VisibleAreaChangeCallback } event
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 13
   */
  onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback): T;


  /**
   * Set or reset the callback which is triggered when the visibleArea of component changed.
   * The interval between two visible area change callbacks will not be less than the expected update interval.
   *
   * @param { VisibleAreaEventOptions } options - The options for the visibility event.
   * @param { VisibleAreaChangeCallback | undefined } event - The callback will be triggered when the visibleArea of component changed and get close to any number in ratios defined by options.
   * If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 17
   */
  onVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void;

  /**
   * Set the spherical effect of the component.
   *
   * @param { number } value - set the degree of spherical effect, value range [0, 1].
   * If the value is 0, the component keep same, else the value is 1, component are fully spherical.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  sphericalEffect(value: number): T;

  /**
   * Set the spherical effect of the component.
   *
   * @param { Optional<number> } effect - set the degree of spherical effect, value range [0, 1].
   * If the value is 0, the component keep same, else the value is 1, component are fully spherical.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  sphericalEffect(effect: Optional<number>): T;

  /**
   * Set the light up effect of the component
   *
   * @param { number } value - set the degree to which the component lights up, value range [0, 1].
   * The color brightness in the component rendering content area is greater than the value and can be displayed, otherwise it will not be displayed.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  lightUpEffect(value: number): T;

  /**
   * Set the light up effect of the component
   *
   * @param { Optional<number> } degree - set the degree to which the component lights up, value range [0, 1].
   * The color brightness in the component rendering content area is greater than the value and can be displayed, otherwise it will not be displayed.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  lightUpEffect(degree: Optional<number>): T;

  /**
   * Set the edge pixel stretch effect of the Component.
   *
   * @param { PixelStretchEffectOptions } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  pixelStretchEffect(options: PixelStretchEffectOptions): T;

  /**
   * Set the edge pixel stretch effect of the Component.
   *
   * @param { Optional<PixelStretchEffectOptions> } options
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  pixelStretchEffect(options: Optional<PixelStretchEffectOptions>): T;

  /**
   * Sets hot keys
   *
   * @param { string | FunctionKey } value - Character of the combination key.
   * @param { Array<ModifierKey> } keys - The modifier keys modify the action of key when the key are pressed at the same time.
   * @param { function } [action] - Callback function, triggered when the shortcut keyboard is pressed.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets hot keys
   *
   * @param { string | FunctionKey } value - Character of the combination key.
   * @param { Array<ModifierKey> } keys - The modifier keys modify the action of key when the key are pressed at the same time.
   * @param { function } [action] - Callback function, triggered when the shortcut keyboard is pressed.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  keyboardShortcut(value: string | FunctionKey, keys: Array<ModifierKey>, action?: () => void): T;

  /**
   * Sets accessibilityGroup
   *
   * @param { boolean } value - set group with accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets accessibilityGroup
   *
   * @param { boolean } value - set group with accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets accessibilityGroup
   *
   * @param { boolean } value - set group with accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  accessibilityGroup(value: boolean): T;

  /**
   * Sets accessibilityGroup
   *
   * @param { boolean } isGroup - set group with accessibility
   * @param { AccessibilityOptions } accessibilityOptions - accessibilityOptions for accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14
   */
  accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions): T;

  /**
   * Sets accessibilityText
   *
   * @param { string } value - set accessibility text
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets accessibilityText
   *
   * @param { string } value - set accessibility text
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets accessibilityText
   *
   * @param { string } value - set accessibility text
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  accessibilityText(value: string): T;
  
  /**
   * Sets accessibility next focus id
   * @param { string } nextId - set component next accessibility focus id
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  accessibilityNextFocusId(nextId: string): T;
  
  /**
   * Sets the accessibility default foucs flag
   * @param { boolean } focus - if the component is accessibility default focus,focus set true
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  accessibilityDefaultFocus(focus: boolean): T;
  
  /**
   * Sets accessibility same page mode
   * @param { AccessibilitySamePageMode } pageMode - accessibility same page mode
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  accessibilityUseSamePage(pageMode: AccessibilitySamePageMode): T;

  /**
   * Sets accessibilityScrollTriggerable
   * @param { boolean } isTriggerable - set property of supporting scroll in accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  accessibilityScrollTriggerable(isTriggerable: boolean): T;

  /**
   * Sets accessibilityText
   *
   * @param { Resource } text - set accessibility text
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  accessibilityText(text: Resource): T;
  
  /**
   * Sets accessibility role,role indicates the custom type of the component
   * @param { AccessibilityRoleType } role - set accessibility component type
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  accessibilityRole(role: AccessibilityRoleType): T;

  /**
   * Register accessibility focus callback,when the component is focused or out of focus,the callback will be executed
   * @param { AccessibilityFocusCallback } callback - accessibility focus callback function
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  onAccessibilityFocus(callback: AccessibilityFocusCallback): T;

  /**
   * Sets accessibilityTextHint
   *
   * @param { string } value - set accessibility text hint
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  accessibilityTextHint(value: string): T;

  /**
   * Sets accessibilityDescription
   *
   * @param { string } value - set description of accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets accessibilityDescription
   *
   * @param { string } value - set description of accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets accessibilityDescription
   *
   * @param { string } value - set description of accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  accessibilityDescription(value: string): T;

  /**
   * Sets accessibilityDescription
   *
   * @param { Resource } description - set description of accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  accessibilityDescription(description: Resource): T;

  /**
   * Sets accessibilityLevel
   *
   * @param { string } value - set accessibility level
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets accessibilityLevel
   *
   * @param { string } value - set accessibility level
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets accessibilityLevel
   *
   * @param { string } value - set accessibility level
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  accessibilityLevel(value: string): T;

  /**
   * Sets accessibilityVirtualNode
   *
   * @param { CustomBuilder } builder - set virtual node of accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets accessibilityVirtualNode
   *
   * @param { CustomBuilder } builder - set virtual node of accessibility
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  accessibilityVirtualNode(builder: CustomBuilder): T;

  /**
   * Sets accessibilityChecked
   *
   * @param { boolean } isCheck - set accessibility checked status
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 13
   */
  accessibilityChecked(isCheck: boolean): T;

  /**
   * Sets accessibilitySelected
   *
   * @param { boolean } isSelect - set accessibility selected status
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 13
   */
  accessibilitySelected(isSelect: boolean): T;

  /**
   * Sets obscured
   *
   * @param { Array<ObscuredReasons> } reasons - reasons of obscuration
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets obscured
   *
   * @param { Array<ObscuredReasons> } reasons - reasons of obscuration
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  obscured(reasons: Array<ObscuredReasons>): T;

  /**
   * Reuse id is used for identify the reuse type for each custom node.
   *
   * @param { string } id - The id for reusable custom node.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Reuse id is used for identify the reuse type for each custom node.
   *
   * @param { string } id - The id for reusable custom node.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  reuseId(id: string): T;

   /**
   * Reuse id is used for identify the reuse type of each @ComponentV2 custom component, which can give user control of sub-component recycle and reuse.
   *
   * @param { ReuseOptions } options - The configuration parameter for reusable custom component.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
   reuse(options: ReuseOptions): T;

  /**
   * Sets how content is drawn within nodes duration animation
   *
   * @param { RenderFit } fitMode - The render fit mode of content.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets how content is drawn within nodes duration animation
   *
   * @param { RenderFit } fitMode - The render fit mode of content.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Sets how content is drawn within nodes duration animation
   *
   * @param { RenderFit } fitMode - The render fit mode of content.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  renderFit(fitMode: RenderFit): T;

  /**
   * Sets how content is drawn within nodes during animation
   *
   * @param { Optional<RenderFit> } fitMode - The render fit mode of content.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  renderFit(fitMode: Optional<RenderFit>): T;

  /**
   * Sets the attribute modifier.
   *
   * @param { AttributeModifier<T> } modifier
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Sets the attribute modifier.
   *
   * @param { AttributeModifier<T> } modifier
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  attributeModifier(modifier: AttributeModifier<T>): T;

  /**
   * Sets the gesture modifier.
   *
   * @param { GestureModifier } modifier
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  gestureModifier(modifier: GestureModifier): T;

  /**
   * Adds a background dynamic light up effect to the current component.
   *
   * @param { BackgroundBrightnessOptions } params - params indicates BackgroundBrightnessOptions
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  backgroundBrightness(params: BackgroundBrightnessOptions): T;

  /**
   * Adds a background dynamic light up effect to the current component.
   *
   * @param { Optional<BackgroundBrightnessOptions> } options - params indicates BackgroundBrightnessOptions
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  backgroundBrightness(options: Optional<BackgroundBrightnessOptions>): T;

  /**
   * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
   *
   * @param { function } callback - A callback instance used when a gesture bound to this component will be accepted.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
   *
   * @param { function } callback - A callback instance used when a gesture bound to this component will be accepted.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onGestureJudgeBegin(callback: (gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult): T;

  /**
   * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
   *
   * @param { GestureRecognizerJudgeBeginCallback } callback - A callback instance used when a gesture bound to this component will be accepted.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback): T;

  /**
   * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
   *
   * @param { GestureRecognizerJudgeBeginCallback } callback - A callback instance used when a gesture bound to this component will be accepted.
   * @param { boolean } exposeInnerGesture - This parameter is a flag. This flag determines whether to expose internal gestures.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * 
   * @since 13
   */
  onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback, exposeInnerGesture: boolean): T;

  /**
   * In the touch test phase, the recognizer is selected to form a parallel relationship with other recognizers on the response chain.
   *
   * @param { ShouldBuiltInRecognizerParallelWithCallback } callback - A callback instance used when a component is doing touch test.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  shouldBuiltInRecognizerParallelWith(callback: ShouldBuiltInRecognizerParallelWithCallback): T;

  /**
   * Events are monopolized by components.
   *
   * @param { boolean } monopolize - indicate the monopoly of events
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Events are monopolized by components.
   *
   * @param { boolean } monopolize - indicate the monopoly of events
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  monopolizeEvents(monopolize: boolean): T;

  /**
   * When the component does a touch test, a user-defined callback is triggered.
   *
   * @param { Callback<TouchEvent, HitTestMode> } callback - A callback instance used when the component does a touch test.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onTouchIntercept(callback: Callback<TouchEvent, HitTestMode>): T;

  /**
   * This callback is triggered when the size of this component change finished.
   *
   * @param { SizeChangeCallback } event - event callback.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  onSizeChange(event: SizeChangeCallback): T;

  /**
   * Accessibility focus draw level, and the default value is FocusDrawLevel.SELF.
   *
   * @param { FocusDrawLevel } drawLevel - indicates accessibility focus draw level.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  accessibilityFocusDrawLevel(drawLevel: FocusDrawLevel): T;
}

/**
 * CommonAttribute for ide.
 *
 * @extends CommonMethod<CommonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonAttribute for ide.
 *
 * @extends CommonMethod<CommonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonAttribute for ide.
 *
 * @extends CommonMethod<CommonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonAttribute for ide.
 *
 * @extends CommonMethod<CommonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class CommonAttribute extends CommonMethod<CommonAttribute> {}

/**
 * CommonInterface for ide.
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonInterface for ide.
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonInterface for ide.
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonInterface for ide.
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface CommonInterface {
  /**
   * Constructor.
   *
   * @returns { CommonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Constructor
   * 
   * @returns { CommonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Constructor
   *
   * @returns { CommonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Constructor
   * 
   * @returns { CommonAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  (): CommonAttribute;
}

/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const CommonInstance: CommonAttribute;

/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Common: CommonInterface;

/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare type CustomBuilder = (() => any) | void;

/**
 * Defines the OverlayOptions interface.
 *
 * @typedef OverlayOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare interface OverlayOptions {
  /**
   * Defines align type.
   *
   * @type { ?Alignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines align type.
   *
   * @type { ?Alignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines align type.
   *
   * @type { ?Alignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines align type.
   *
   * @type { ?Alignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  align?: Alignment;
  
  /**
   * Defines offset type.
   *
   * @type { ?OverlayOffset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines offset type.
   *
   * @type { ?OverlayOffset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines offset type.
   *
   * @type { ?OverlayOffset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines offset type.
   *
   * @type { ?OverlayOffset }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  offset?: OverlayOffset;
}

/**
 * Defines the OverlayOffset.
 *
 * @typedef OverlayOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare interface OverlayOffset {
  /**
   * Defines x.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines x.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines x.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines x.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  x?: number;
  /**
   * Defines y.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Defines y.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Defines y.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Defines y.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  y?: number;
}

/**
 * Defines the segment of blur.
 * The first element in the tuple means fraction.
 * The range of this value is [0,1]. A value of 1 means opaque and 0 means completely transparent.
 * The second element means the stop position.
 * The range of this value is [0,1]. A value of 1 means region ending position and 0 means region starting position.
 *
 * @typedef { [ number, number ] } FractionStop
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare type FractionStop = [ number, number ];

/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class CommonShapeMethod<T> extends CommonMethod<T> {
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 9
   */
  constructor();

  /**
   * border Color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * border Color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * border Color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * border Color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  stroke(value: ResourceColor): T;

  /**
   * Fill color.
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Fill color.
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Fill color.
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Fill color.
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  fill(value: ResourceColor): T;

  /**
   * Offset from the start point of the border drawing.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Offset from the start point of the border drawing.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Offset from the start point of the border drawing.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Offset from the start point of the border drawing.
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  strokeDashOffset(value: number | string): T;

  /**
   * Path endpoint drawing style.
   *
   * @param { LineCapStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Path endpoint drawing style.
   *
   * @param { LineCapStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Path endpoint drawing style.
   *
   * @param { LineCapStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Path endpoint drawing style.
   *
   * @param { LineCapStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  strokeLineCap(value: LineCapStyle): T;

  /**
   * Border corner drawing style.
   *
   * @param { LineJoinStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Border corner drawing style.
   *
   * @param { LineJoinStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Border corner drawing style.
   *
   * @param { LineJoinStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Border corner drawing style.
   *
   * @param { LineJoinStyle } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  strokeLineJoin(value: LineJoinStyle): T;

  /**
   * Limits for drawing acute angles as bevels
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Limits for drawing acute angles as bevels
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Limits for drawing acute angles as bevels
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Limits for drawing acute angles as bevels
   *
   * @param { number | string } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  strokeMiterLimit(value: number | string): T;

  /**
   * Sets the opacity of the border.
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the opacity of the border.
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the opacity of the border.
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the opacity of the border.
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  strokeOpacity(value: number | string | Resource): T;

  /**
   * fill Opacity
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * fill Opacity
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * fill Opacity
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * fill Opacity
   *
   * @param { number | string | Resource } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  fillOpacity(value: number | string | Resource): T;

  /**
   * Sets the width of the dividing line.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the width of the dividing line.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the width of the dividing line.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the width of the dividing line.
   *
   * @param { Length } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  strokeWidth(value: Length): T;

  /**
   * Indicates whether to enable anti-aliasing
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Indicates whether to enable anti-aliasing
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Indicates whether to enable anti-aliasing
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Indicates whether to enable anti-aliasing
   *
   * @param { boolean } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  antiAlias(value: boolean): T;

  /**
   * Sets the gap for the border.
   *
   * @param { Array<any> } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the gap for the border.
   *
   * @param { Array<any> } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the gap for the border.
   *
   * @param { Array<any> } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the gap for the border.
   *
   * @param { Array<any> } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  strokeDashArray(value: Array<any>): T;
}

/**
 * Linear Gradient Interface
 *
 * @interface LinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Linear Gradient Interface
 *
 * @interface LinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Linear Gradient Interface
 *
 * @interface LinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface LinearGradient {
  /**
   * Linear Gradient Angle
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Linear Gradient Angle
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Linear Gradient Angle
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  angle?: number | string;
  /**
   * Linear Gradient Direction
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Linear Gradient Direction
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Linear Gradient Direction
   *
   * @type { ?GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  direction?: GradientDirection;
  /**
   * Linear Gradient Colors
   *
   * @type { Array<any> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Linear Gradient Colors
   *
   * @type { Array<any> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Linear Gradient Colors
   *
   * @type { Array<any> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Linear Gradient Colors
   *
   * @type { Array<[ResourceColor, number]> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  colors: Array<[ResourceColor, number]>;
  /**
   * Linear Gradient Repeating
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Linear Gradient Repeating
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Linear Gradient Repeating
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  repeating?: boolean;
}

/**
 * Defines the pixel round property.
 *
 * @interface PixelRoundPolicy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface PixelRoundPolicy {
  /**
   * start property.
   *
   * @type { ?PixelRoundCalcPolicy }
   * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  start?: PixelRoundCalcPolicy;

  /**
   * top property.
   *
   * @type { ?PixelRoundCalcPolicy }
   * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  top?: PixelRoundCalcPolicy;

  /**
   * end property.
   *
   * @type { ?PixelRoundCalcPolicy }
   * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  end?: PixelRoundCalcPolicy;

  /**
   * bottom property.
   *
   * @type { ?PixelRoundCalcPolicy }
   * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  bottom?: PixelRoundCalcPolicy;
}

/**
 * Linear Gradient Blur Interface
 *
 * @interface LinearGradientBlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare interface LinearGradientBlurOptions {
  /**
   * Percentage of blurring effect.
   *
   * @type { FractionStop[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  fractionStops: FractionStop[];
  /**
   * Direction of linear gradient blur.
   *
   * @type { GradientDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  direction: GradientDirection;
}

/**
 * Define motion blur anchor coordinates.
 * 
 * @interface MotionBlurAnchor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface MotionBlurAnchor {
  /**
   * Define anchor coordinate x-value.Value range [0.0, 1.0].
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  x: number;
  /**
   * Define anchor coordinate y-value.Value range [0.0, 1.0].
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  y: number;
}

/**
 * Define motion blur options.
 * 
 * @interface MotionBlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface MotionBlurOptions {
  /**
   * Define the size of motion blur radius.The range of this value is  [0.0, ∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  radius: number;
  /**
   * Define motion blur anchor coordinates.
   * 
   * @type { MotionBlurAnchor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  anchor: MotionBlurAnchor;
}

/**
 * Sub component border info.
 *
 * @interface LayoutBorderInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 * @deprecated since 10
 */
declare interface LayoutBorderInfo {
  /**
   * Sub component borderWidth info.
   *
   * @type { EdgeWidths }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   */
  borderWidth: EdgeWidths;

  /**
   * Sub component margin info.
   *
   * @type { Margin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   */
  margin: Margin,

  /**
   * Sub component padding info.
   *
   * @type { Padding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   */
  padding: Padding,
}

/**
 * Sub component layout info.
 *
 * @interface LayoutInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 * @deprecated since 10
 */
declare interface LayoutInfo {
  /**
   * Sub component position info.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   */
  position: Position,

  /**
   * Sub component constraint info.
   *
   * @type { ConstraintSizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   */
  constraint: ConstraintSizeOptions,
}

/**
 * Sub component info passed from framework when layout and measure happens.
 *
 * @interface LayoutChild
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 * @deprecated since 10
 */
declare interface LayoutChild {
  /**
   * Sub component name.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   */
  name: string,

  /**
   * Sub component id.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   */
  id: string,

  /**
   * Sub component constraint.
   *
   * @type { ConstraintSizeOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   */
  constraint: ConstraintSizeOptions,

  /**
   * Sub component border info.
   *
   * @type { LayoutBorderInfo }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   */
  borderInfo: LayoutBorderInfo,

  /**
   * Sub component position.
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   */
  position: Position,

  /**
   * Call this measure method in onMeasure callback to supply sub component size.
   *
   * @param { ConstraintSizeOptions } childConstraint
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   */
  measure(childConstraint: ConstraintSizeOptions),

  /**
   * Call this layout method in onLayout callback to assign layout info to sub component.
   *
   * @param { LayoutInfo } childLayoutInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   */
  layout(childLayoutInfo: LayoutInfo),
}

/**
 * Sub component layout info.
 *
 * @extends SizeResult
 * @interface GeometryInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sub component layout info.
 *
 * @extends SizeResult
 * @interface GeometryInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface GeometryInfo extends SizeResult {
  /**
   * Sub component borderWidth info.
   *
   * @type { EdgeWidth }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sub component borderWidth info.
   *
   * @type { EdgeWidth }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  borderWidth: EdgeWidth;

  /**
   * Sub component margin info.
   *
   * @type { Margin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sub component margin info.
   *
   * @type { Margin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  margin: Margin,

  /**
   * Sub component padding info.
   *
   * @type { Padding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sub component padding info.
   *
   * @type { Padding }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  padding: Padding,
}

/**
 * Sub component info passed from framework when layout happens.
 *
 * @interface Layoutable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sub component info passed from framework when layout happens.
 *
 * @interface Layoutable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface Layoutable {
  /**
   * Measurement result of the child component.
   *
   * @type { MeasureResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Measurement result of the child component.
   *
   * @type { MeasureResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  measureResult: MeasureResult,

  /**
   * Unique ID of the child component.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  uniqueId?: number;

  /**
   * Call this layout method in onLayout callback to assign layout info to sub component.
   *
   * @param { Position } position
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Call this layout method in onLayout callback to assign layout info to sub component.
   *
   * @param { Position } position
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  layout(position: Position): void,

  /**
   * Call this method to get the margin of sub component.
   *
   * @returns { DirectionalEdgesT<number> } the margin of sub component, unit is vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getMargin() : DirectionalEdgesT<number>,

  /**
   * Call this method to get the padding of sub component.
   *
   * @returns { DirectionalEdgesT<number> } the padding of sub component, unit is vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getPadding() : DirectionalEdgesT<number>,
 
  /**
   * Call this method to get the borderWidth of sub component.
   *
   * @returns { DirectionalEdgesT<number> } the borderWidth of sub component, unit is vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getBorderWidth() : DirectionalEdgesT<number>,
}

/**
 * Sub component info passed from framework when measure happens.
 *
 * @interface Measurable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sub component info passed from framework when measure happens.
 *
 * @interface Measurable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface Measurable {
  /**
   * Unique ID of the child component.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  uniqueId?: number;

  /**
   * Call this measure method in onMeasure callback to supply sub component size.
   *
   * @param { ConstraintSizeOptions } constraint
   * @returns { MeasureResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Call this measure method in onMeasure callback to supply sub component size.
   *
   * @param { ConstraintSizeOptions } constraint
   * @returns { MeasureResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  measure(constraint: ConstraintSizeOptions) : MeasureResult,

  /**
   * Call this method to get the margin of sub component.
   *
   * @returns { DirectionalEdgesT<number> } the margin of sub component, unit is vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getMargin() : DirectionalEdgesT<number>,

  /**
   * Call this method to get the padding of sub component.
   *
   * @returns { DirectionalEdgesT<number> } the padding of sub component, unit is vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getPadding() : DirectionalEdgesT<number>,

  /**
   * Call this method to get the borderWidth of sub component.
   *
   * @returns { DirectionalEdgesT<number> } the borderWidth of sub component, unit is vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getBorderWidth() : DirectionalEdgesT<number>,
}

/**
 * Sub component SizeResult info.
 *
 * @interface SizeResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sub component SizeResult info.
 *
 * @interface SizeResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface SizeResult {
  /**
   * Width obtained from the measurement result.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Width obtained from the measurement result.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  width: number,

  /**
   * Height obtained from the measurement result.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Height obtained from the measurement result.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  height: number,
}

/**
 * Sub component MeasureResult info.
 *
 * @extends SizeResult
 * @interface MeasureResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sub component MeasureResult info.
 *
 * @extends SizeResult
 * @interface MeasureResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface MeasureResult extends SizeResult {
 
}

/**
 * The navigation destination information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * The navigation destination information.
 *
 * @typedef {import('../api/@ohos.arkui.observer').default.NavDestinationInfo} NavDestinationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type NavDestinationInfo = import('../api/@ohos.arkui.observer').default.NavDestinationInfo;

/**
 * The navigation information.
 *
 * @typedef {import('../api/@ohos.arkui.observer').default.NavigationInfo} NavigationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type NavigationInfo = import('../api/@ohos.arkui.observer').default.NavigationInfo;

/**
 * The router page information.
 *
 * @typedef {import('../api/@ohos.arkui.observer').default.RouterPageInfo} RouterPageInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type RouterPageInfo = import('../api/@ohos.arkui.observer').default.RouterPageInfo;

/**
 * UIContext
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * UIContext
 *
 * @typedef { import('../api/@ohos.arkui.UIContext').UIContext } UIContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type UIContext = import('../api/@ohos.arkui.UIContext').UIContext;

/**
 * DrawContext
 *
 * @typedef { import('../api/arkui/Graphics').DrawContext } DrawContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type DrawContext = import('../api/arkui/Graphics').DrawContext;

/**
 * VisualEffect
 *
 * @typedef { import('../api/@ohos.graphics.uiEffect').default.VisualEffect } VisualEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type VisualEffect = import('../api/@ohos.graphics.uiEffect').default.VisualEffect;


/**
 * Filter
 *
 * @typedef { import('../api/@ohos.graphics.uiEffect').default.Filter } Filter
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type Filter = import('../api/@ohos.graphics.uiEffect').default.Filter;

/**
 * Blender
 *
 * @typedef { import('../api/@ohos.graphics.uiEffect').default.Blender } Blender
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since 13
 */
declare type Blender = import('../api/@ohos.graphics.uiEffect').default.Blender;

/**
 * ComponentContent.
 *
 * @typedef {import('../api/arkui/ComponentContent').ComponentContent<T>} ComponentContent<T = Object>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type ComponentContent<T = Object> = import('../api/arkui/ComponentContent').ComponentContent<T>;

/**
 * Theme.
 *
 * @typedef {import('../api/@ohos.arkui.theme').Theme} Theme
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type Theme = import('../api/@ohos.arkui.theme').Theme;

/**
 * Import the DialogController type from promptAction.
 *
 * @typedef { import('../api/@ohos.promptAction').promptAction.DialogController } PromptActionDialogController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18
 */
declare type PromptActionDialogController = import('../api/@ohos.promptAction').promptAction.DialogController;

/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
/**
 * Custom Component
 *
 * @extends BaseCustomComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare class CustomComponent extends BaseCustomComponent {
  /**
   * aboutToReuse Method
   *
   * @param { object } params - Custom component init params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * aboutToReuse Method
   *
   * @param { object } params - Custom component init params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  aboutToReuse?(params: { [key: string]: unknown }): void;

  /**
   * Custom component override this method to layout each of its sub components.
   *
   * @param { Array<LayoutChild> } children
   * @param { ConstraintSizeOptions } constraint
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   * @useinstead CustomComponent#onPlaceChildren
   */
  onLayout?(children: Array<LayoutChild>, constraint: ConstraintSizeOptions): void;

  /**
   * Custom component override this method to measure each of its sub components.
   *
   * @param { Array<LayoutChild> } children
   * @param { ConstraintSizeOptions } constraint
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   * @deprecated since 10
   * @useinstead CustomComponent#onMeasureSize
   */
  onMeasure?(children: Array<LayoutChild>, constraint: ConstraintSizeOptions): void;
}

/**
 * Custom ComponentV2
 *
 * @extends BaseCustomComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare class CustomComponentV2 extends BaseCustomComponent {
  /**
   * aboutToReuse Method for @ComponentV2, it is executed when fetching instance of custom component from RecyclePool.
   * It is different from the @Reusable in CustomComponent, there is no param parameter in this callback.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  aboutToReuse?(): void;
}

/**
 * Custom Component base class and it is migrated from class CustomComponent.
 *
 * @extends BaseCustomComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare class BaseCustomComponent extends CommonAttribute {
    /**
   * Customize the pop-up content constructor .
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Customize the pop-up content constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Customize the pop-up content constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Customize the pop-up content constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Customize the pop-up content constructor and it is migrated from class CustomComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  build(): void;

  /**
   * aboutToAppear Method
   *
   * The aboutToAppear function is executed after a new instance of the custom component is created, before its build() function is executed. 
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * aboutToAppear Method
   *
   * The aboutToAppear function is executed after a new instance of the custom component is created, before its build() function is executed. 
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * aboutToAppear Method
   *
   * The aboutToAppear function is executed after a new instance of the custom component is created, before its build() function is executed. 
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * aboutToAppear Method
   *
   * The aboutToAppear function is executed after a new instance of the custom component is created, before its build() function is executed. 
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * aboutToAppear Method and it is migrated from class CustomComponent.
   *
   * The aboutToAppear function is executed after a new instance of the custom component is created, before its build() function is executed. 
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  aboutToAppear?(): void;

  /**
   * aboutToDisappear Method
   *
   * The aboutToDisappear function executes before a custom component is destroyed. 
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * aboutToDisappear Method
   *
   * The aboutToDisappear function executes before a custom component is destroyed. 
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * aboutToDisappear Method
   *
   * The aboutToDisappear function executes before a custom component is destroyed. 
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * aboutToDisappear Method
   *
   * The aboutToDisappear function executes before a custom component is destroyed. 
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * aboutToDisappear Method and it is migrated from class CustomComponent.
   *
   * The aboutToDisappear function executes before a custom component is destroyed. 
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  aboutToDisappear?(): void;

  /**
   * aboutToRecycle Method
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * aboutToRecycle Method
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * aboutToRecycle Method and it is migrated from class CustomComponent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  aboutToRecycle?(): void;

  /**
   * The onWillApplyTheme function is a custom hook to get active theme object from the context
   * 
   * @param { Theme } theme - Custom theme init params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * The onWillApplyTheme function is a custom hook to get active theme object from the context, it is migrated from class CustomComponent.
   * 
   * @param { Theme } theme - Custom theme init params.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onWillApplyTheme?(theme: Theme): void;

  /**
   * Custom component override this method to layout each of its sub components.
   *
   * @param { GeometryInfo } selfLayoutInfo
   * @param { Array<Layoutable> } children
   * @param { ConstraintSizeOptions } constraint
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Custom component override this method to layout each of its sub components.
   *
   * @param { GeometryInfo } selfLayoutInfo
   * @param { Array<Layoutable> } children
   * @param { ConstraintSizeOptions } constraint
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Custom component override this method to layout each of its sub components, it is migrated from class CustomComponent.
   *
   * @param { GeometryInfo } selfLayoutInfo
   * @param { Array<Layoutable> } children
   * @param { ConstraintSizeOptions } constraint
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onPlaceChildren?(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions): void;

  /**
   * Custom component override this method to measure each of its sub components.
   * @param { GeometryInfo } selfLayoutInfo
   * @param { Array<Measurable> } children - indicate the measure child
   * @param { ConstraintSizeOptions } constraint - indicate child constraint size
   * @returns { SizeResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Custom component override this method to measure each of its sub components.
   * @param { GeometryInfo } selfLayoutInfo
   * @param { Array<Measurable> } children - indicate the measure child
   * @param { ConstraintSizeOptions } constraint - indicate child constraint size
   * @returns { SizeResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Custom component override this method to measure each of its sub components, it is migrated from class CustomComponent.
   * @param { GeometryInfo } selfLayoutInfo
   * @param { Array<Measurable> } children - indicate the measure child
   * @param { ConstraintSizeOptions } constraint - indicate child constraint size
   * @returns { SizeResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onMeasureSize?(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions): SizeResult;

  /**
   * onPageShow Method
   * 
   * The page is triggered once each time it is displayed, including scenarios such as the routing process and the application entering the foreground
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * onPageShow Method
   *
   * The page is triggered once each time it is displayed, including scenarios such as the routing process and the application entering the foreground
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * onPageShow Method
   *
   * The page is triggered once each time it is displayed, including scenarios such as the routing process and the application entering the foreground
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * onPageShow Method and it is migrated from class CustomComponent.
   *
   * The page is triggered once each time it is displayed, including scenarios such as the routing process and the application entering the foreground
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onPageShow?(): void;

  /**
   * onPageHide Method
   *
   * It is triggered once each time the page is hidden, including scenarios such as the routing process and the application entering the background
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * onPageHide Method
   *
   * It is triggered once each time the page is hidden, including scenarios such as the routing process and the application entering the background
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * onPageHide Method
   *
   * It is triggered once each time the page is hidden, including scenarios such as the routing process and the application entering the background
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * onPageHide Method and it is migrated from class CustomComponent.
   *
   * It is triggered once each time the page is hidden, including scenarios such as the routing process and the application entering the background
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onPageHide?(): void;

  /**
   * onFormRecycle Method, this is only for ArkTS form, if form was marked recyclable by form user, when system memory is low,
   * it will be recycled after calling this method, you should return a string of params that you wish to be saved, it will be
   * passed back as params in onFormRecover, in which you can recover the form
   *
   * @returns { string } status data of ArkTS form UI, this data will be passed in when recover form later
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * onFormRecycle Method, this is only for ArkTS form, if form was marked recyclable by form user, when system memory is low,
   * it will be recycled after calling this method, you should return a string of params that you wish to be saved, it will be
   * passed back as params in onFormRecover, in which you can recover the form
   *
   * @returns { string } status data of ArkTS form UI, this data will be passed in when recover form later
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * onFormRecycle Method, this is only for ArkTS form, if form was marked recyclable by form user, when system memory is low,
   * it will be recycled after calling this method, you should return a string of params that you wish to be saved, it will be
   * passed back as params in onFormRecover, in which you can recover the form, it is migrated from class CustomComponent.
   *
   * @returns { string } status data of ArkTS form UI, this data will be passed in when recover form later
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  onFormRecycle?(): string;

  /**
   * onFormRecover Method, this is only for ArkTS form
   *
   * @param { string } statusData - indicate status data of ArkTS form UI, which is acquired by calling onFormRecycle, it is used to recover form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 11
   */
  /**
   * onFormRecover Method, this is only for ArkTS form
   *
   * @param { string } statusData - indicate status data of ArkTS form UI, which is acquired by calling onFormRecycle, it is used to recover form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * onFormRecover Method, this is only for ArkTS form, it is migrated from class CustomComponent.
   *
   * @param { string } statusData - indicate status data of ArkTS form UI, which is acquired by calling onFormRecycle, it is used to recover form
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  onFormRecover?(statusData: string): void;

  /**
   * onBackPress Method
   *
   * Triggered when the user clicks the back button
   * 
   * @returns { void | boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * onBackPress Method
   *
   * Triggered when the user clicks the back button
   * 
   * @returns { void | boolean } true means that the page itself processes the return logic.
   * false means that the default return logic is used.
   * If no value is returned, the default return logic is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * onBackPress Method
   *
   * Triggered when the user clicks the back button
   * 
   * @returns { void | boolean } true means that the page itself processes the return logic.
   * false means that the default return logic is used.
   * If no value is returned, the default return logic is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * onBackPress Method and it is migrated from class CustomComponent.
   *
   * Triggered when the user clicks the back button
   * 
   * @returns { void | boolean } true means that the page itself processes the return logic.
   * false means that the default return logic is used.
   * If no value is returned, the default return logic is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onBackPress?(): void | boolean;

  /**
   * PageTransition Method.
   * Implement Animation when enter this page or move to other pages.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * PageTransition Method.
   * Implement Animation when enter this page or move to other pages.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * PageTransition Method.
   * Implement Animation when enter this page or move to other pages.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * PageTransition Method and it is migrated from class CustomComponent.
   * Implement Animation when enter this page or move to other pages.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  pageTransition?(): void;

  /**
   * Get current UIContext
   *
   * @returns { UIContext } The UIContext that the custom component belongs to.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get current UIContext
   *
   * @returns { UIContext } The UIContext that the custom component belongs to.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Get current UIContext and it is migrated from class CustomComponent.
   *
   * @returns { UIContext } The UIContext that the custom component belongs to.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  getUIContext(): UIContext;

  /**
   * Get uniqueId of the custom component.
   *
   * @returns { number } - The uniqueId of the custom component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Get uniqueId of the custom component and it is migrated from class CustomComponent.
   *
   * @returns { number } - The uniqueId of the custom component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  getUniqueId(): number;

  /**
   * Queries the navigation destination information.
   *
   * @returns { NavDestinationInfo | undefined } The navigation destination information, or undefined if it is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Queries the navigation destination information.
   *
   * @returns { NavDestinationInfo | undefined } The navigation destination information, or undefined if it is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Queries the navigation destination information and it is migrated from class CustomComponent.
   *
   * @returns { NavDestinationInfo | undefined } The navigation destination information, or undefined if it is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  queryNavDestinationInfo(): NavDestinationInfo | undefined;
  
  /**
   * Queries the navigation destination information.
   *
   * @param { Optional<boolean> } [isInner]
   * @returns { NavDestinationInfo | undefined } The navigation destination information, or undefined if it is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  queryNavDestinationInfo(isInner: Optional<boolean>): NavDestinationInfo | undefined;

  /**
   * Query the navigation information of the current custom component.
   * 
   * @returns { NavigationInfo | undefined } The navigation information, or undefined if it is not available
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Query the navigation information of the current custom component and it is migrated from class CustomComponent.
   * 
   * @returns { NavigationInfo | undefined } The navigation information, or undefined if it is not available
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  queryNavigationInfo(): NavigationInfo | undefined;

  /**
   * Query the router page information of the current custom component.
   *
   * @returns { RouterPageInfo | undefined } The router page information, or undefined if it is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Query the router page information of the current custom component and it is migrated from class CustomComponent.
   *
   * @returns { RouterPageInfo | undefined } The router page information, or undefined if it is not available.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
   queryRouterPageInfo(): RouterPageInfo | undefined;

  /**
   * The callback method after the custom component is built.
   *
   * Triggered when the custom component has been built.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * The callback method after the custom component is built and it is migrated from class CustomComponent.
   *
   * Triggered when the custom component has been built.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
   onDidBuild?(): void;

  /**
   * The dialog controller of the custom component.
   *
   * @returns { PromptActionDialogController | undefined } The controller of dialog, or undefined if it is not available
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  getDialogController(): PromptActionDialogController | undefined;

  /**
   * Triggered when the Entry custom component has been pushed with singleton mode.
   *
   * @param { ESObject } param - New parameters pushed with singleton mode.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onNewParam?(param: ESObject): void;
}
/**
 * View
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7
 */
/**
 * View
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @form
 * @since 9
 */
declare class View {
  /**
   * Just use for generate tsbundle
   *
   * @param { any } value
   * @returns { any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7
   */
  /**
   * Just use for generate tsbundle
   *
   * @param { any } value
   * @returns { any }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @form
   * @since 9
   */
  create(value: any): any;
}

/**
 * Rect info.
 *
 * @interface RectResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Rect info.
 *
 * @interface RectResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface RectResult {
  /**
   * x:Horizontal coordinate relative to the component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * x:Horizontal coordinate relative to the component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  x: number;

  /**
   * y:Vertical axis coordinate relative to the component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * y:Vertical axis coordinate relative to the component.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  y: number;

  /**
   * Get the width of the current textRect.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get the width of the current textRect.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  width: number;

  /**
   * Get the height of the current textRect.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get the height of the current textRect.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  height: number;
}

/**
 * CaretOffset info.
 *
 * @interface CaretOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * CaretOffset info.
 *
 * @interface CaretOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface CaretOffset {
  /**
   * Get the index of the CaretOffset
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Get the index of the CaretOffset
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  index: number;

  /**
   * Get the x of the relative position.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Get the x of the relative position.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  x: number;
  
  /**
   * Get the y of the relative position.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Get the y of the relative position.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  y: number;
}

/**
 * Defines the span options of TextContentController.
 *
 * @interface TextContentControllerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare interface TextContentControllerOptions {
  /**
   * the offset that add a text at.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  offset?: number;
}

/**
 * TextContentControllerBase
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * TextContentControllerBase
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare abstract class TextContentControllerBase {
  /**
   * Get the index and relative position of the CaretOffset.
   *
   * @returns { CaretOffset } index and relative position of the CaretOffset.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Get the index and relative position of the CaretOffset.
   *
   * @returns { CaretOffset } index and relative position of the CaretOffset.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getCaretOffset() : CaretOffset;

  /**
   * Get the start and end positions of the text content.
   *
   * @returns { RectResult } Text content rect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get the start and end positions of the text content.
   *
   * @returns { RectResult } Text content rect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  getTextContentRect() : RectResult;

  /**
   * Get the lines number of the text content.
   *
   * @returns { number } Text content line count
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Get the lines number of the text content.
   *
   * @returns { number } Text content line count
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  getTextContentLineCount() : number;

  /**
   * Add a text.
   *
   * @param { string } text - text value.
   * @param { TextContentControllerOptions } [textOperationOptions] - operation info.
   * @returns { number } caret index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  addText(text: string, textOperationOptions?: TextContentControllerOptions): number;

  /**
   * Delete text in TextRange.
   *
   * @param { TextRange } [range] - range for deleting.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  deleteText(range?: TextRange): void;

  /**
   * Gets the selected range of text content.
   *
   * @returns { TextRange } range for selecting.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  getSelection(): TextRange;

  /**
   * Clear the content of preview.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 17
   */
  clearPreviewText(): void;

  /**
   * Gets the text content of the selected range.
   *
   * @param { TextRange } [range] - selected range.
   * @returns { string } text content of the selected range.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @atomicservice
   * @since 18
   */
  getText(range?: TextRange): string;
}

/**
 * Enum of scrollable containers' content clip mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare enum ContentClipMode {
  /**
   * Clip to content rect inside margin & padding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  CONTENT_ONLY = 0,

  /**
   * Clip to scrollable's outer rect, including padding but inside margin.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  BOUNDARY = 1,

  /**
   * Clip to the safeArea of scrollable container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  SAFE_AREA = 2,
}

/**
 * CommonScrollableMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
/**
 * CommonScrollableMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare class ScrollableCommonMethod<T> extends CommonMethod<T> {
  /**
   * Scrollbar status.
   *
   * @param { BarState } barState - Scrollbar status.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  scrollBar(barState: BarState): T;

  /**
   * Color of the scrollbar.
   *
   * @param { Color | number | string } color - Color of the scrollbar.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  scrollBarColor(color: Color | number | string): T;

  /**
   * Width of the scrollbar.
   *
   * @param { number | string } value  - Width of the scrollbar.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  scrollBarWidth(value: number | string): T;

  /**
   * Edge scrolling effect.
   *
   * @param { EdgeEffect } edgeEffect - edge scrolling effect.
   * @param { EdgeEffectOptions } options - edge scrolling effect options. 
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  edgeEffect(edgeEffect: EdgeEffect, options?: EdgeEffectOptions): T;

  /**
   * Called when setting whether to enable fading Edge effect.
   *
   * @param { Optional<boolean> } enabled - Whether to turn on the edge fade effect
   * @param { FadingEdgeOptions } [options] - The options of fadingEdge.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  fadingEdge(enabled: Optional<boolean>, options?: FadingEdgeOptions): T;

  /**
   * Nested scrolling options.
   *
   * @param { NestedScrollOptions } value - options for nested scrolling.
   * @returns { T } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  nestedScroll(value: NestedScrollOptions): T;

  /**
   * Whether to support scroll gestures by finger or mouse.
   *
   * @param { boolean } value - Whether to support scroll gestures by finger or mouse.
   * @returns { T } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  enableScrollInteraction(value: boolean): T;

  /**
   * Friction coefficient.
   *
   * @param { number | Resource } value - friction coefficient.
   * @returns { T } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  friction(value: number | Resource): T;

  /**
   * Called when the scrollable scrolls.
   *
   * @param { function } event - callback of scrollable,
   * scrollOffset is offset per frame scrolling, ScrollState is current scroll state.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   * @deprecated since 12
   * @useinstead ScrollableCommonMethod#onDidScroll
   */
  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): T;

  /**
   * Called when the scrollable will scroll.
   *
   * @param { Optional<OnWillScrollCallback> } handler - callback of scrollable.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onWillScroll(handler: Optional<OnWillScrollCallback>): T;

  /**
   * Called when the scrollable did scroll.
   *
   * @param { OnScrollCallback } handler - callback of scrollable,
   * scrollOffset is offset this frame did scroll, scrollState is current scroll state.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12
   */
  onDidScroll(handler: OnScrollCallback): T;

  /**
   * Called when the scrollable reaches the start position.
   *
   * @param { function } event - Callback function, triggered when the scrollable reaches the start position.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onReachStart(event: () => void): T;

  /**
   * Called when the scrollable reaches the end position.
   *
   * @param { function } event - Callback function, triggered when the scrollable reaches the end position.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onReachEnd(event: () => void): T;

  /**
   * Called when the scrollable starts scrolling.
   *
   * @param { function } event - Callback function, triggered when the scrollable starts scrolling.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onScrollStart(event: () => void): T;

  /**
   * Called when the scrollable stops scrolling.
   *
   * @param { function } event - Callback function, triggered when the scrollable stops scrolling.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onScrollStop(event: () => void): T;

  /**
   * Limit the max speed when fling.
   *
   * @param { number } speedLimit - Max fling speed, the minimum value is 0, the maximum value is not limited.
   *                                The unit is vp/s.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  flingSpeedLimit(speedLimit: number): T;

  /**
   * Clip the content of the scrollable container, excluding background.
   * 
   * @param { ContentClipMode | RectShape } clip - A value from enum ContentClipMode or a customized clip rect.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  clipContent(clip: ContentClipMode | RectShape): T;

  /**
   * Set the sensitivity of rotating crown.
   *
   * @param { Optional<CrownSensitivity> } sensitivity - The sensitivity of rotating crown, default value is { MEDIUM }.
   * @returns { T } The component instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): T;
  
  /**
   * Controls whether the scrollable scrolls back to top when status bar is clicked.
   * 
   * @param { boolean } backToTop - whether the scrollable scrolls back to top when status bar is clicked.
   * The default value is false.
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
  backToTop(backToTop: boolean): T;
}

/**
 * The actual offset by which the scrollable scrolls.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class ScrollResult {
  /**
   * Actual offset by which the scrollable scrolls in vp.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  offsetRemain: number;
}

/**
 * Called before scroll to allow developer to control real offset the Scrollable can scroll.
 *
 * @typedef { function } OnWillScrollCallback
 * @param { number } scrollOffset - offset this frame will scroll, which may or may not be reached.
 * @param { ScrollState } scrollState - current scroll state.
 * @param { ScrollSource } scrollSource - source of current scroll.
 * @returns { void | ScrollResult } the remain offset for the scrollable, 
 *     same as scrollOffset when no ScrollResult is returned.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type OnWillScrollCallback = 
(scrollOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => void | ScrollResult;

/**
  * On scroll callback using in scrollable onDidScroll.
  *
  * @typedef { function } OnScrollCallback
  * @param { number } scrollOffset - offset this frame did scroll.
  * @param { ScrollState } scrollState - current scroll state.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 12
  */
declare type OnScrollCallback = (scrollOffset: number, scrollState: ScrollState) => void;

/**
 * Defines the onMove callback.
 *
 * @typedef { function } OnMoveHandler
 * @param { number } from - Index number for moving elements.
 * @param { number } to - Target index number for moving elements.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type OnMoveHandler = (from: number, to: number) => void;

/**
 * Define item drag event handler.
 *
 * @interface ItemDragEventHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare interface ItemDragEventHandler {
  /**
   * This callback is triggered when the item is long pressed.
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onLongPress?: Callback<number>;

  /**
   * This callback is triggered when the item is dragged.
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onDragStart?: Callback<number>;

  /**
   * This callback is triggered when an item is moved through other items.
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onMoveThrough?: OnMoveHandler;

  /**
   * This callback is triggered when the item is dropped.
   *
   * @type { ?Callback<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onDrop?: Callback<number>;
}

/**
 * Define DynamicNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class DynamicNode<T> {
  /**
   * Set the move action.
   *
   * @param { Optional<OnMoveHandler> } handler
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onMove(handler: Optional<OnMoveHandler>): T;

  /**
   * Set the move action.
   *
   * @param { Optional<OnMoveHandler> } handler
   * @param { ItemDragEventHandler } eventHandler
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  onMove(handler: Optional<OnMoveHandler>, eventHandler: ItemDragEventHandler): T;
}

/**
 * Define EdgeEffect Options.
 *
 * @interface EdgeEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Define EdgeEffect Options.
 *
 * @interface EdgeEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface EdgeEffectOptions {
  /**
   * Enable Sliding effect when component does not full screen.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Enable Sliding effect when component does not full screen.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  alwaysEnabled: boolean;

  /**
   * Set the effective edge of the edge effect.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  effectEdge?: number;
}

/**
 * Enumerates the effective edge of the edge effect.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare enum EffectEdge {

  /**
   * Effective only for the starting edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  START = 1,

  /**
   * Effective only for the end edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  END = 2,
}

/**
 * Indicates children main size.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class ChildrenMainSize {
  /**
   * Creates an instance of ChildrenMainSize.
   *
   * @param { number } childDefaultSize - default main size, in vp. If the main axis is vertical, it indicates height.
   * If the main axis is horizontal, it indicates width.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  constructor(childDefaultSize: number);

  /**
   * Set default size.
   *
   * @param { number } value - default main size, in vp. If the main axis is vertical, it indicates height.
   * If the main axis is horizontal, it indicates width.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  set childDefaultSize(value: number);

  /**
   * Get default size
   *
   * @returns { number } - default main size, in vp. If the main axis is vertical, it indicates height.
   * If the main axis is horizontal, it indicates width.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  get childDefaultSize(): number;

  /**
   * Changes children main size by removing or replacing existing elements and/or adding new elements in place.
   *
   * @param { number } start - Zero-based index at which to start changing the children main size.
   * @param { number } [deleteCount] - Indicating the number of children main size to remove from start.
   * @param { Array<number> } [childrenSize] - Add the new children main size, beginning from start.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   * @example splice(1, 0, [100]), Insert a child after first child, the child's main size is 100vp.
   * splice(1, 1), Delete the second child.
   * splice(1, 2, [100, 100]), Change the main size of the second and third children to 100vp.
   */
  splice(start: number, deleteCount?: number, childrenSize?: Array<number>): void;

  /**
   * Updates main size for specified child.
   *
   * @param { number } index - index of child to be updated.
   * @param { number } childSize - new section options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 
   * <br> 1. Mandatory parameters are left unspecified.
   * <br> 2. Incorrect parameters types.
   * <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  update(index: number, childSize: number): void;
}

/**
 * Define BackgroundBrightness Options.
 *
 * @interface BackgroundBrightnessOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare interface BackgroundBrightnessOptions {

  /**
   * Rate represents the rate at which lightUpDegree
   * decreases with increasing pixel brightness.
   *
   * @type { number } -The default value is 0.0, value range: (0.0, +∞).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  rate: number;

  /**
   * LightUpDegree represents the degree of brightness
   * of the rgb value changes when its brightness
   * is 0.
   *
   * @type { number }  -The default value is 0.0, value range: [-1.0, 1.0].
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  lightUpDegree: number;
}

/**
 * PointLightStyle info
 *
 * @interface PointLightStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11
 */
declare interface PointLightStyle {
  /**
   * Defines the PointLight light intensity and position.
   *
   * @type { ?LightSource }
   * @default undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  lightSource?: LightSource;
  /**
   * Defines the PointLight illuminated type.
   *
   * @type { ?IlluminatedType }
   * @default IlluminatedType.NONE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  illuminated?: IlluminatedType;
  /**
   * Defines the PointLight bloom.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  bloom?: number;
}

/**
 * LightSource info
 *
 * @interface LightSource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 11
 */
declare interface LightSource {
  /**
   * Defines the PointLight light positionX.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  positionX: Dimension;
  /**
   * Defines the PointLight light positionX.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  positionY: Dimension;
  /**
   * Defines the PointLight light positionX.
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  positionZ: Dimension;
  /**
   * Defines the PointLight light intensity.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 11
   */
  intensity: number;
  /**
   * Defines the PointLight light color.
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 12
   */
    color?: ResourceColor;
}

/**
 * Defining wrapBuilder function.
 * @param { function } builder
 * @returns { WrappedBuilder<Args> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defining wrapBuilder function.
 * @param { function } builder
 * @returns { WrappedBuilder<Args> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare function wrapBuilder<Args extends Object[]>(builder: (...args: Args) => void): WrappedBuilder<Args>;

/**
 * Defines the WrappedBuilder class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the WrappedBuilder class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class WrappedBuilder<Args extends Object[]> {
  /**
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  builder: (...args: Args) => void;

  /**
   * @param { function } builder
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * @param { function } builder
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  constructor(builder: (...args: Args) => void);
}


/**
 * Defines the overall animation parameters of the keyframe animation.
 *
 * @interface KeyframeAnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the overall animation parameters of the keyframe animation.
 *
 * @interface KeyframeAnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface KeyframeAnimateParam {
  /**
   * Animation delay time, in ms.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Animation delay time, in ms.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  delay?: number;

  /**
   * Animation iterations. When set to -1, the animation playing it repeatedly. The value range is greater than or equal to -1.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Animation iterations. When set to -1, the animation playing it repeatedly. The value range is greater than or equal to -1.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  iterations?: number;

  /**
   * Callback invoked when the whole keyframe animation is complete or the ability is about to enter the background.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Callback invoked when the whole keyframe animation is complete or the ability is about to enter the background.
   *
   * @type { ?function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  onFinish?: () => void;

  /**
   * Indicates expectedFrameRateRange of keyframe animation.
   *
   * @type { ?ExpectedFrameRateRange }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  expectedFrameRateRange?: ExpectedFrameRateRange;
}

/**
 * Defines a keyframe state.
 *
 * @interface KeyframeState
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines a keyframe state.
 *
 * @interface KeyframeState
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface KeyframeState {
  /**
   * Animation duration of this keyframe, in ms.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Animation duration of this keyframe, in ms.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  duration: number;

  /**
   * Animation curve of this keyframe.
   *
   * @type { ?(Curve | string | ICurve) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Animation curve of this keyframe.
   *
   * @type { ?(Curve | string | ICurve) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  curve?: Curve | string | ICurve;

  /**
   * The closure function to specify the terminating state of this keyframe.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * The closure function to specify the terminating state of this keyframe.
   *
   * @type { function }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  event: () => void;
}


/**
 * Defines the basic callback.
 *
 * @typedef Callback<T, V = void>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface Callback<T, V = void> {
  /**
   * Defines the callback info.
   *
   * @param { T } data - the data will be used in the callback.
   * @returns { V } - Returns result of the callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  (data: T): V;
}

/**
 * Defines the callback type used in hover events.
 * The value of isHover indicates whether the mouse is hovering over the component.
 * The value of event contains information about HoverEvent.
 *
 * @typedef { function } HoverCallback
 * @param { boolean } isHover
 * @param { HoverEvent} event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type HoverCallback = (isHover: boolean, event: HoverEvent) => void

/**
 * Defines the callback type used in accessibility hover events.
 * The value of isHover indicates whether the touch is hovering over the component.
 * The value of event contains information about AccessibilityHoverEvent.
 *
 * @typedef { function } AccessibilityCallback
 * @param { boolean } isHover
 * @param { AccessibilityHoverEvent } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type AccessibilityCallback = (isHover: boolean, event: AccessibilityHoverEvent) => void

/**
 * Defines the options about VisibleAreaEvent.
 *
 * @interface VisibleAreaEventOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface VisibleAreaEventOptions {
  /**
   * Each number in ratios indicates the value of visibility ratio. Each number in the Array value range in [0, 1].
   *
   * @type { Array<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  ratios: Array<number>;

  /**
   * The value of expectedUpdateInterval indicates desired update period(ms).
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  expectedUpdateInterval?: number;
}

/**
 * Defines the callback type used in VisibleAreaChange events.
 *
 * @typedef { function } VisibleAreaChangeCallback
 * @param { boolean } isVisible - Indicates the ratio of the visible area to its own area compared to the last change.
 * It is true as the ratio increases and false as the ratio decreases.
 * @param { number } currentRatio - The value of currentRatio indicates the visibility ratio of the current component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
/**
 * Defines the callback type used in VisibleAreaChange events.
 *
 * @typedef { function } VisibleAreaChangeCallback
 * @param { boolean } isExpanding - Indicates the ratio of the visible area to its own area compared to the last change.
 * It is true as the ratio increases and false as the ratio decreases.
 * @param { number } currentRatio - The value of currentRatio indicates the visibility ratio of the current component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 13
 */
declare type VisibleAreaChangeCallback = (isExpanding: boolean, currentRatio: number) => void;

/**
 * Defines a UICommonEvent which is used to set different common event to target component.
 *
 * @interface UICommonEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface UICommonEvent {
  /**
   * Set or reset the callback which will be triggered a click event when clicked.
   *
   * @param { Callback<ClickEvent> | undefined } callback - The callback about the click event. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  setOnClick(callback: Callback<ClickEvent> | undefined): void;

  /**
   * Set or reset the callback which will be triggered a touch event when touched.
   *
   * @param { Callback<TouchEvent> | undefined } callback - The callback about the touch event. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  setOnTouch(callback: Callback<TouchEvent> | undefined): void;

  /**
   * Set or reset the callback is triggered when a component mounts a display.
   *
   * @param { Callback<void> | undefined } callback - The callback will be triggered when a component mounts a display. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  setOnAppear(callback: Callback<void> | undefined): void;

  /**
   * Set or reset the callback is triggered when component uninstallation disappears.
   * 
   * @param { Callback<void> | undefined } callback - The callback will be triggered when component uninstallation disappears. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  setOnDisappear(callback: Callback<void> | undefined): void;


  /**
   * Set or reset the callback is triggered when component has keyboard input.
   *
   * @param { Callback<KeyEvent> | undefined } callback - The callback will be triggered when has keyboard input. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  setOnKeyEvent(callback: Callback<KeyEvent> | undefined): void;

  /**
   * Set or reset the callback which is triggered when component get focus.
   *
   * @param { Callback<void> | undefined } callback - The callback will be triggered when a component get focus. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  setOnFocus(callback: Callback<void> | undefined): void;

  /**
   * Set or reset the callback which is triggered when lose focus.
   *
   * @param { Callback<void> | undefined } callback - The callback will be triggered when a component lose focus. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  setOnBlur(callback: Callback<void> | undefined): void;

  /**
   * Set or reset the callback which is triggered when has a hover event.
   * 
   * @param { HoverCallback | undefined } callback - The callback will be triggered when has a hover event. If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  setOnHover(callback: HoverCallback | undefined): void;

  /**
  * Set or reset the callback which is triggered when has a mouse event.
  *
  * @param { Callback<MouseEvent> | undefined } callback - The callback will be triggered when has mouse input. If set undefined will reset the target callback.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  */
  setOnMouse(callback: Callback<MouseEvent> | undefined): void;

  /**
  * Set or reset the callback which is triggered when the size of component changed.
  *
  * @param { SizeChangeCallback | undefined } callback - The callback will be triggered when the size of component changed. If set undefined will reset the target callback.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  */
  setOnSizeChange(callback: SizeChangeCallback | undefined): void;

  /**
   * Set or reset the callback which is triggered when the visibleArea of component changed.
   *
   * @param { VisibleAreaEventOptions } options - The options for the visibility event.
   * @param { VisibleAreaChangeCallback | undefined } event - The callback will be triggered when the visibleArea of component changed and get close to any number in ratios defined by options.
   * If set undefined will reset the target callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void;
}

/**
 * Defines a UIScrollableCommonEvent which is used to set event to target component.
 *
 * @extends UICommonEvent
 * @interface UIScrollableCommonEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface UIScrollableCommonEvent extends UICommonEvent {
  /**
   * Set or reset the callback which is triggered when the scrolling reaches the start position.
   *
   * @param { Callback<void> | undefined } callback - callback function, triggered when the
   *     scrolling reaches the start position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  setOnReachStart(callback: Callback<void> | undefined): void;

  /**
   * Set or reset the callback which is triggered when the scrolling reaches the end position.
   *
   * @param { Callback<void> | undefined } callback - callback function, triggered when the
   *     scrolling reaches the end position.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  setOnReachEnd(callback: Callback<void> | undefined): void;

  /**
   * Set or reset the callback which is triggered when the scrolling started.
   *
   * @param { Callback<void> | undefined } callback - callback function, triggered when the scrolling started.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  setOnScrollStart(callback: Callback<void> | undefined): void;

  /**
   * Set or reset the callback which is triggered when the scrolling stoped.
   *
   * @param { Callback<void> | undefined } callback - callback function, triggered when the scrolling stoped.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  setOnScrollStop(callback: Callback<void> | undefined): void;

  /**
   * Set or reset the callback which is triggered when scrolling begin each frame.
   *
   * @param { OnScrollFrameBeginCallback | undefined } callback - callback function, triggered when the
   *     scrolling begin each frame.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  setOnScrollFrameBegin(callback: OnScrollFrameBeginCallback | undefined): void;
}

/**
 * Defines a UIGestureEvent which is used to set different gestures to target component.
 *
 * @interface UIGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface UIGestureEvent {
  /**
   * Add a gesture bound to the component.
   *
   * @param { GestureHandler<T> } gesture - gesture indicates the gesture bound to a component.
   * @param { GesturePriority } priority - priority indicates the gesture's priority.
   * @param { GestureMask } mask - mask indicates the gesture's GestureMask value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  addGesture<T>(gesture: GestureHandler<T>, priority?: GesturePriority, mask?: GestureMask): void;

  /**
   * Add a parallel gesture bound to the component.
   *
   * @param { GestureHandler<T> } gesture - gesture indicates the gesture bound to a component.
   * @param { GestureMask } mask - mask indicates the gesture's GestureMask value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  addParallelGesture<T>(gesture: GestureHandler<T>, mask?: GestureMask): void;

  /**
   * Remove the gesture that is bound to the component and marked as tag.
   *
   * @param { string } tag - tag indicates the gesture's tag.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  removeGestureByTag(tag: string): void;

  /**
   * Clear gestures bound to the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  clearGestures(): void;
}

/**
 * Defines the gesture modifier.
 * 
 * @interface GestureModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface GestureModifier {
  /**
   * Defines the gesture update function.
   * 
   * @param { UIGestureEvent } event
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  applyGesture(event: UIGestureEvent): void;
}

/**
 * Defines the selection options.
 *
 * @interface SelectionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface SelectionOptions {
  /**
   * Menu pop-up policy.
   *
   * @type { ?MenuPolicy }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  menuPolicy?: MenuPolicy;
}

/**
 * Defines the next focus item.
 *
 * @interface FocusMovement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface FocusMovement {
  /**
   * Next focus item's component identifier of forward.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  forward?: string;
  /**
   * Next focus item's component identifier of backward.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  backward?: string;
  /**
   * Next focus item's component identifier of up.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  up?: string;
  /**
   * Next focus item's component identifier of down.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  down?: string;
  /**
   * Next focus item's component identifier of left.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  left?: string;
  /**
   * Next focus item's component identifier of right.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  right?: string;
}

/**
 * enum keyboard avoid mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum KeyboardAvoidMode {
  /**
   * Defines avoid keyboard when keyboard shows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  DEFAULT = 0,

  /**
   * Defines not avoid keyboard when keyboard shows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  NONE = 1,
}

/**
 * Enumerates the type of area in hover mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare enum HoverModeAreaType {

  /**
   * Layout top half screen when the phone in hover mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  TOP_SCREEN = 0,

  /**
   * Layout bottom half screen when the phone in hover mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 14
   */
  BOTTOM_SCREEN = 1,
}

/**
 * Defines a range of dates.
 * 
 * @interface DateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface DateRange {
  /**
   * Defines the start date of the date range.
   *
   * @type { ?Date }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  start?: Date;

  /**
   * Defines the end date of the date range.
   *
   * @type { ?Date }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  end?: Date;
}
