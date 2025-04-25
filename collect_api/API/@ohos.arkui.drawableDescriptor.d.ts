/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import image from './@ohos.multimedia.image';

/**
 * Indicates the return result of the data to be fetched.
 *
 * @typedef DrawableDescriptorResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface DrawableDescriptorResult {
  /**
   * DrawableDescriptor width.The default value is -1.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  readonly width?: number;

  /**
   * DrawableDescriptor height.The default value is -1.
   *
   * @type { ?number }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  readonly height?: number;
}

/**
 * DrawableDescriptor's option which is used in constructor.
 *
 * @typedef DrawableDescriptorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface DrawableDescriptorOptions {
  /**
   * If true, it will fetch the data using the uri when object is constructing.The default value is false.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  fetchWhenConstructingWithUri?: boolean;
}

/**
 * Use the DrawableDescriptor class to get drawable image.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Use the DrawableDescriptor class to get drawable image.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Use the DrawableDescriptor class to get drawable image.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export class DrawableDescriptor {
  /**
   * Creates a new DrawableDescriptor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  constructor();

  /**
   * Get pixelMap of drawable image.
   *
   * @returns { image.PixelMap } Return the PixelMap of the calling DrawableDescriptor object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get pixelMap of drawable image.
   *
   * @returns { image.PixelMap } Return the PixelMap of the calling DrawableDescriptor object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Get pixelMap of drawable image.
   *
   * @returns { image.PixelMap } Return the PixelMap of the calling DrawableDescriptor object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getPixelMap(): image.PixelMap;

  /**
   * Get original width of drawable object.
   *
   * @returns { number } Return the width of the DrawableDescriptor object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  getOriginalWidth(): number;

  /**
   * Get original height of drawable object.
   *
   * @returns { number } Return the height of the DrawableDescriptor object.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  getOriginalHeight(): number;

  /**
   * Fetch the drawable's data whose corresponding uri is passed in constructor.This fetched data can be draw in Image view.
   *
   * @returns { Promise<DrawableDescriptorResult> } Return the promise returned by the funciton.
   * @throws { BusinessError } 100001 - Data loading failed. Maybe the uri is invalid.
   * @throws { BusinessError } 100002 - Data decoding failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  fetch(): Promise<DrawableDescriptorResult>;

  /**
   * Fetch the drawable's data whose corresponding uri is passed in constructor.This fetched data can be draw in Image view.
   *
   * @returns { DrawableDescriptorResult } Return the result of the DrawableDescriptor object.
   * @throws { BusinessError } 100001 - Data loading failed. Maybe the uri is invalid.
   * @throws { BusinessError } 100002 - Data decoding failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  fetchSync(): DrawableDescriptorResult;
}

/**
 * Use the LayeredDrawableDescriptor class to get the foreground, the background and the mask DrawableDescriptor.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Use the LayeredDrawableDescriptor class to get the foreground, the background and the mask DrawableDescriptor.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Use the LayeredDrawableDescriptor class to get the foreground, the background and the mask DrawableDescriptor.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export class LayeredDrawableDescriptor extends DrawableDescriptor {
  /**
   * Creates a new LayeredDrawableDescriptor.
   *
   * @param { DrawableDescriptor } [foreground] - Indicates the foreground option to create LayeredDrawableDescriptor.
   * @param { DrawableDescriptor } [background] - Indicates the background option to create LayeredDrawableDescriptor.
   * @param { DrawableDescriptor } [mask] - Indicates the mask option to create LayeredDrawableDescriptor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  constructor(
    foreground?: DrawableDescriptor,
    background?: DrawableDescriptor,
    mask?: DrawableDescriptor
  );

  /**
   * Get DrawableDescriptor for the foreground.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of foreground.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get DrawableDescriptor for the foreground.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of foreground.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Get DrawableDescriptor for the foreground.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of foreground.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getForeground(): DrawableDescriptor;

  /**
   * Get DrawableDescriptor for the background.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of background.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get DrawableDescriptor for the background.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of background.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Get DrawableDescriptor for the background.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of background.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getBackground(): DrawableDescriptor;

  /**
   * Get DrawableDescriptor for the mask.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get DrawableDescriptor for the mask.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Get DrawableDescriptor for the mask.
   *
   * @returns { DrawableDescriptor } Return the DrawableDescriptor object of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  getMask(): DrawableDescriptor;


  /**
   * Get the clip path info of the adaptive icon mask.
   *
   * @returns { string } Return the clip path info of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Get the clip path info of the adaptive icon mask.
   *
   * @returns { string } Return the clip path info of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 11
   */
  /**
   * Get the clip path info of the adaptive icon mask.
   *
   * @returns { string } Return the clip path info of mask.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  static getMaskClipPath(): string;
}

/**
 * Use the PixelMapDrawableDescriptor class to get the resource of pixelmap or resource descriptor information.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
export class PixelMapDrawableDescriptor extends DrawableDescriptor {
  /**
   * Creates a new PixelMapDrawableDescriptor.
   * @param { image.PixelMap } src - Indicates the resource to create PixelMapDrawableDescriptor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  constructor(src?: image.PixelMap);

  /**
   * Creates a new PixelMapDrawableDescriptor.
   * @param { image.PixelMap | ResourceStr } src - Indicates the resource to create PixelMapDrawableDescriptor.
   * @param { DrawableDescriptorOptions } options - Indicates the option to create PixelMapDrawableDescriptor.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  constructor(src?: image.PixelMap | ResourceStr, options?: DrawableDescriptorOptions);
}

/**
 * Animation control options
 *
 * @interface AnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface AnimationOptions {
  /**
   * The duration of animation playback once.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  duration?: number;
  /**
   * Animation playback times.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  iterations?: number;

  /**
   * If true, it will fetch the data using the uri when object is constructing.The default value is false.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  fetchWhenConstructingWithUri?: boolean;
}

/**
 * Define the data structure for PixelMap animations.
 *
 * @extends DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export class AnimatedDrawableDescriptor extends DrawableDescriptor {
  /**
   * Creates a new AnimatedDrawableDescriptor.
   *
   * @param { Array<image.PixelMap> } pixelMaps - PixelMap List.
   * @param { AnimationOptions } [options] - Animation control options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  constructor(pixelMaps: Array<image.PixelMap>, options?: AnimationOptions);

  /**
   * Creates a new AnimatedDrawableDescriptor.
   * @param { Array<image.PixelMap> | ResourceStr } pixelMaps - Indicates the resource to create AnimatedDrawableDescriptor.
   * @param { ?AnimationOptions } [options] - Animation control options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  constructor(pixelMaps: Array<image.PixelMap> | ResourceStr, options?: AnimationOptions);

  /**
   * Get the running status of animation.
   *
   * @returns { boolean } Return the running status of animation.
   * @throws { BusinessError } 100001 - Image data is not ready.Maybe you should fetch the data first.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  isRunning(): boolean;

  /**
   * Start the animation.
   *
   * @throws { BusinessError } 100001 - Image data is not ready.Maybe you should fetch the data first.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  start(): void;

  /**
   * Stop the animation.
   *
   * @throws { BusinessError } 100001 - Image data is not ready.Maybe you should fetch the data first.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  stop(): void;
}
