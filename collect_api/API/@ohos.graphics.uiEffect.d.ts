/*
* Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkGraphics2D
 */

import { AsyncCallback } from './@ohos.base';


/**
 * @namespace uiEffect
 * @syscap SystemCapability.Graphics.Drawing
 * @since 12
 */
declare namespace uiEffect {

  /**
   * The Filter for Component.
   * @typedef Filter
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  interface Filter {
    /**
     * Set the edge pixel stretch effect of the Component.
     *
     * @param { Array<number> } stretchSizes
     * @param { TileMode } tileMode
     * @returns { Filter }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    pixelStretch(stretchSizes: Array<number>, tileMode: TileMode): Filter;

    /**
     * Set blur effect of the Component.
     *
     * @param { number } blurRadius
     * @returns { Filter }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    blur(blurRadius: number): Filter;

    /**
     * Set waterRipple effect of the Component.
     *
     * @param { number } progress - Indicates the ripple progress. The value 1 indicates that ripples are displayed on all screens.
     * @param { number } waveCount - The number of waves when the water ripples. The maximum count of waves is 3, the minimum value is 1,  default is 2.
     * @param { number } x - Represents the X-axis position of center point  where the water ripple first appears on the screen.
     * @param { number } y - Represents the Y-axis position of center point  where the water ripple first appears on the screen.
     * @param { WaterRippleMode } rippleMode - Set the mode of water ripple,
     * 0 for mobile to desktop(Receive), 1 for mobile to desktop(Send), 2 for mobile to mobile, 3 for cross platform.
     * @returns { Filter } - Returns  water ripple Filter.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    waterRipple(progress: number, waveCount: number, x: number, y: number, rippleMode: WaterRippleMode): Filter;

    /**
     * Set the fly in or fly out effect of the component.
     *
     * @param { number } degree - set the degree of fly in or fly out effect, value range [0, 1].
     * @param { FlyMode } flyMode - set the location of stretching when fly in or out
     * If the value is 0, the component keep same, else the value is 1, component are fully fly out or fly in.
     * @returns { Filter } - Returns  fly in fly out Filter.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    flyInFlyOutEffect(degree: number, flyMode: FlyMode): Filter;

    /**
     * Set distort effect of the component.
     *
     * @param { number } distortionK - set the degree of distort effect, value range [-1, 1].
     * If the value is 0, the component keep same,
     * if the value is less than 0, the component is barrel distortion,
     * if the value is more than 0, the component is pincushion distortion.
     * @returns { Filter } - Returns distort Filter.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 13
     */
    distort(distortionK: number): Filter;
  }

  /**
   * TileMode enumeration description
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  enum TileMode {
    /**
     * Clamp mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    CLAMP = 0,

    /**
     * Repeat mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    REPEAT = 1,

    /**
     * Mirror mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    MIRROR = 2,

    /**
     * Decal mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    DECAL = 3,
  }

  /**
   * WaterRippleMode enumeration description
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  enum WaterRippleMode {
    /**
     * SMALL2MEDIUM_RECV mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    SMALL2MEDIUM_RECV = 0,

    /**
     * SMALL2MEDIUM_SEND mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    SMALL2MEDIUM_SEND = 1,

    /**
     * SMALL2SMALL mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    SMALL2SMALL = 2,

    /**
     * MINI_RECV mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 17
     */
    MINI_RECV = 3,
  }

  /**
   * FlyMode enumeration description
   *
   * @enum { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  enum FlyMode {
    /**
     * BOTTOM fly mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    BOTTOM = 0,

    /**
     * TOP fly mode.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    TOP = 1,
  }

  /**
   * The VisualEffect of Component.
   * @typedef VisualEffect
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  interface VisualEffect {
    /**
    * A backgroundColorEffect effect is added to the Component.
    * @param { BrightnessBlender } blender - The blender to blend backgroundColor.
    * @returns { VisualEffect } VisualEffects for the current effect have been added.
    * @syscap SystemCapability.Graphics.Drawing
    * @systemapi
    * @since 12
    */
    backgroundColorBlender(blender: BrightnessBlender): VisualEffect;
  }

  /**
   * Defines the blending effect.
   * @typedef { BrightnessBlender }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 13
   */
  type Blender = BrightnessBlender;

  /**
   * The Blender of backgroundColorEffect.
   * @typedef BrightnessBlender
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  interface BrightnessBlender {
    /**
     * Defines third-order rate for grayscale adjustment.
     *
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    cubicRate: number;

    /**
     * Defines second-order rate for grayscale adjustment.
     *
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    quadraticRate: number;

    /**
     * Defines linear rate for grayscale adjustment.
     *
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    linearRate: number;

    /**
     * Defines grayscale adjustment degree.
     *
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    degree: number;

    /**
     * Defines the reference saturation for brightness.
     *
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    saturation: number;

    /**
     * Defines the positive adjustment coefficients in RGB channels based on the reference saturation.
     *
     * @type { [number, number, number] }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    positiveCoefficient: [number, number, number];

    /**
     * Defines the negative adjustment coefficients in RGB channels based on the reference saturation.
     *
     * @type { [number, number, number] }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    negativeCoefficient: [number, number, number];

    /**
     * Defines the blending fraction for brightness effect.
     *
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @systemapi
     * @since 12
     */
    fraction: number;
  }

  /**
   * Create a Filter to add multiple effects to the component.
   * @returns { Filter } Returns the head node of Filter.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  function createFilter(): Filter;

  /**
   * Create a VisualEffect to add multiple effects to the component.
   * @returns { VisualEffect } Returns the head node of visualEffect.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  function createEffect(): VisualEffect;

  /**
   * Create a BrightnessBlender to add BrightnessBlender to the component.
   * @param { BrightnessBlenderParam } param - The brightness blender parameters.
   * @returns { BrightnessBlender } Returns the blender.
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  function createBrightnessBlender(param: BrightnessBlenderParam): BrightnessBlender;
}

/**
 * The parameters of brightness blender.
 * @typedef BrightnessBlenderParam
 * @syscap SystemCapability.Graphics.Drawing
 * @systemapi
 * @since 12
 */
declare interface BrightnessBlenderParam {
  /**
   * Defines third-order rate for grayscale adjustment.
   *
   * @type { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  cubicRate: number;

  /**
   * Defines second-order rate for grayscale adjustment.
   *
   * @type { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  quadraticRate: number;

  /**
   * Defines linear rate for grayscale adjustment.
   *
   * @type { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  linearRate: number;

  /**
   * Defines grayscale adjustment degree.
   *
   * @type { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  degree: number;

  /**
   * Defines the reference saturation for brightness.
   *
   * @type { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  saturation: number;

  /**
   * Defines the positive adjustment coefficients in RGB channels based on the reference saturation.
   *
   * @type { [number, number, number] }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  positiveCoefficient: [number, number, number];

  /**
   * Defines the negative adjustment coefficients in RGB channels based on the reference saturation.
   *
   * @type { [number, number, number] }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  negativeCoefficient: [number, number, number];

  /**
   * Defines the blending fraction for brightness effect.
   *
   * @type { number }
   * @syscap SystemCapability.Graphics.Drawing
   * @systemapi
   * @since 12
   */
  fraction: number;
}

export default uiEffect;