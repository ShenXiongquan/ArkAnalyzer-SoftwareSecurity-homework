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
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';

/**
 * System wallpaper
 *
 * @namespace wallpaper
 * @syscap SystemCapability.MiscServices.Wallpaper
 * @since 7
 */
declare namespace wallpaper {
  /**
   * RgbaColor definition
   *
   * @typedef RgbaColor
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  interface RgbaColor {
    /**
     * The range is 0 to 255.
     *
     * @type { number }
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @since 7
     * @deprecated since 9
     */
    red: number;
    /**
     * The range is 0 to 255.
     *
     * @type { number }
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @since 7
     * @deprecated since 9
     */
    green: number;
    /**
     * The range is 0 to 255.
     *
     * @type { number }
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @since 7
     * @deprecated since 9
     */
    blue: number;
    /**
     * The range is 0 to 255.
     *
     * @type { number }
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @since 7
     * @deprecated since 9
     */
    alpha: number;
  }

  /**
   * Indicates wallpaper type.
   *
   * @enum { number } WallpaperType
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   */
  enum WallpaperType {
    /**
     * Indicates the home screen wallpaper.
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @since 7
     */
    WALLPAPER_SYSTEM,
    /**
     * Indicates the lock screen wallpaper.
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @since 7
     */
    WALLPAPER_LOCKSCREEN
  }

  /**
   * WallpaperInfo definition including folding status, rotation status, and resource path.
   *
   * @typedef WallpaperInfo
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 14
   */
  interface WallpaperInfo {
    /**
     * Indicates the folding status for wallpaper.
     * 
     * @type { FoldState }
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14
     */
    foldState: FoldState;
    /**
     * Indicates the rotation status for wallpaper.
     * 
     * @type { RotateState }
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14
     */
    rotateState: RotateState;
    /**
     * Indicates the resource path for wallpaper.
     * 
     * @type { string }
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14
     */
    source: string;
  }

  /**
   * Define the folding state of wallpaper
   *
   * @enum { number } FoldState
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 14
   */
  enum FoldState {
    /**
     * Indicates the device type is normal device.
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14
     */
    NORMAL = 0,
    /**
     * Indicates the once unfold state.
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14
     */
    UNFOLD_ONCE_STATE = 1,
    /**
     * Indicates the secondary unfold state.
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14
     */
    UNFOLD_TWICE_STATE = 2
  }

  /**
   * Define the rotation state of wallpaper
   *
   * @enum { number } RotateState
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 14
   */
  enum RotateState {
    /**
     * Indicates the screen type is vertical screen.
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14
     */
    PORTRAIT = 0,
    /**
     * Indicates the screen type is horizontal screen.
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 14
     */
    LANDSCAPE = 1
  }

  /**
   * Indicates the resource type of the wallpaper.
   *
   * @enum { number } WallpaperResourceType
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  enum WallpaperResourceType {
    /**
     * Indicates the default wallpaper resource.
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    DEFAULT,
    /**
     * Indicates the picture wallpaper resource.
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    PICTURE,
    /**
     * Indicates the video wallpaper resource.
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    VIDEO,
    /**
     * Indicates the package wallpaper resource.
     *
     * @syscap SystemCapability.MiscServices.Wallpaper
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    PACKAGE
  }

  /**
   * Obtains the wallpaper colors for the wallpaper of the specified type. Returns rgbaColor type of array callback function.
   *
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @param { AsyncCallback<Array<RgbaColor>> } callback - the callback of getColors.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function getColors(wallpaperType: WallpaperType, callback: AsyncCallback<Array<RgbaColor>>): void;

  /**
   * Obtains the wallpaper colors for the wallpaper of the specified type. Returns rgbaColor type of array callback function.
   *
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @returns { Promise<Array<RgbaColor>> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function getColors(wallpaperType: WallpaperType): Promise<Array<RgbaColor>>;

  /**
   * Obtains the wallpaper colors for the wallpaper of the specified type. Returns rgbaColor type of array callback function.
   *
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @returns { Array<RgbaColor> } the Array<RgbaColor> returned by the function.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getColorsSync(wallpaperType: WallpaperType): Array<RgbaColor>;

  /**
   * Obtains the ID of the wallpaper of the specified type. Returns an integer greater than or equal to {@code 0} representing the wallpaper ID.
   * if the specified type of wallpaper has been set; returns {@code -1} otherwise. The return value is an integer ranging from -1 to 2^31 - 1.
   *
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @param { AsyncCallback<number> } callback - the callback of getId.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function getId(wallpaperType: WallpaperType, callback: AsyncCallback<number>): void;

  /**
   * Obtains the ID of the wallpaper of the specified type. Returns an integer greater than or equal to {@code 0} representing the wallpaper ID.
   * if the specified type of wallpaper has been set; returns {@code -1} otherwise. The return value is an integer ranging from -1 to 2^31 - 1.
   *
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @returns { Promise<number> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function getId(wallpaperType: WallpaperType): Promise<number>;

  /**
   * Obtains a file of the wallpaper of the specified type. Returns the file descriptor.
   * When usage is complete, the caller needs to close the file descriptor in time.
   *
   * @permission ohos.permission.GET_WALLPAPER
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @param { AsyncCallback<number> } callback - the callback of getFile.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 8
   * @deprecated since 9
   */
  function getFile(wallpaperType: WallpaperType, callback: AsyncCallback<number>): void;

  /**
   * Obtains a file of the wallpaper of the specified type. Returns the file descriptor.
   * When usage is complete, the caller needs to close the file descriptor in time.
   *
   * @permission ohos.permission.GET_WALLPAPER
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @returns { Promise<number> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 8
   * @deprecated since 9
   */
  function getFile(wallpaperType: WallpaperType): Promise<number>;

  /**
   * Obtains the minimum height of the wallpaper. in pixels. returns 0 if no wallpaper has been set.
   *
   * @param { AsyncCallback<number> } callback - the callback of getMinHeight.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function getMinHeight(callback: AsyncCallback<number>): void;

  /**
   * Obtains the minimum height of the wallpaper. in pixels. returns 0 if no wallpaper has been set.
   *
   * @returns { Promise<number> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function getMinHeight(): Promise<number>;

  /**
   * Obtains the minimum height of the wallpaper. in pixels. returns 0 if no wallpaper has been set.
   *
   * @returns { number } the number returned by the function.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getMinHeightSync(): number;

  /**
   * Obtains the minimum width of the wallpaper. in pixels. returns 0 if no wallpaper has been set.
   *
   * @param { AsyncCallback<number> } callback - the callback of getMinWidth.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function getMinWidth(callback: AsyncCallback<number>): void;

  /**
   * Obtains the minimum width of the wallpaper. in pixels. returns 0 if no wallpaper has been set.
   *
   * @returns { Promise<number> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function getMinWidth(): Promise<number>;

  /**
   * Obtains the minimum width of the wallpaper. in pixels. returns 0 if no wallpaper has been set.
   *
   * @returns { number } the number returned by the function.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getMinWidthSync(): number;

  /**
   * Checks whether to allow the application to change the wallpaper for the current user.
   * Returns true if the application is allowed to set a wallpaper for the current user. returns false otherwise.
   *
   * @param { AsyncCallback<boolean> } callback - the callback of isChangePermitted.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function isChangePermitted(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether to allow the application to change the wallpaper for the current user.
   * Returns true if the application is allowed to set a wallpaper for the current user. returns false otherwise.
   *
   * @returns { Promise<boolean> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function isChangePermitted(): Promise<boolean>;

  /**
   * Checks whether a user is allowed to set wallpapers.
   * Returns true if a user is allowed to set wallpapers. returns false otherwise.
   *
   * @param { AsyncCallback<boolean> } callback - the callback of isOperationAllowed.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function isOperationAllowed(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a user is allowed to set wallpapers.
   * Returns true if a user is allowed to set wallpapers. returns false otherwise.
   *
   * @returns { Promise<boolean> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function isOperationAllowed(): Promise<boolean>;

  /**
   * Removes a wallpaper of the specified type and restores the default one.
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @param { AsyncCallback<void> } callback - the callback of reset.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function reset(wallpaperType: WallpaperType, callback: AsyncCallback<void>): void;

  /**
   * Removes a wallpaper of the specified type and restores the default one.
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function reset(wallpaperType: WallpaperType): Promise<void>;

  /**
   * Removes a wallpaper of the specified type and restores the default one.
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @param { AsyncCallback<void> } callback - the callback of restore.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function restore(wallpaperType: WallpaperType, callback: AsyncCallback<void>): void;

  /**
   * Removes a wallpaper of the specified type and restores the default one.
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function restore(wallpaperType: WallpaperType): Promise<void>;

  /**
   * Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file.
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string | image.PixelMap } source - indicates the uri path from a JPEG or PNG file or the pixel map of the PNG file.
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @param { AsyncCallback<void> } callback - the callback of setWallpaper.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function setWallpaper(
    source: string | image.PixelMap,
    wallpaperType: WallpaperType,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file.
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string | image.PixelMap } source - indicates the uri path from a JPEG or PNG file or the pixel map of the PNG file.
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @returns { Promise<void> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function setWallpaper(source: string | image.PixelMap, wallpaperType: WallpaperType): Promise<void>;

  /**
   * Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file.
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string | image.PixelMap } source - indicates the uri path from a JPEG or PNG file or the pixel map of the PNG file.
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @param { AsyncCallback<void> } callback - the callback of setImage.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setImage(source: string | image.PixelMap, wallpaperType: WallpaperType, callback: AsyncCallback<void>): void;

  /**
   * Sets a wallpaper of the specified type based on the uri path from a JPEG or PNG file or the pixel map of a PNG file.
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string | image.PixelMap } source - indicates the uri path from a JPEG or PNG file or the pixel map of the PNG file.
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setImage(source: string | image.PixelMap, wallpaperType: WallpaperType): Promise<void>;

  /**
   * Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map.
   *
   * @permission ohos.permission.GET_WALLPAPER
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @param { AsyncCallback<image.PixelMap> } callback - the callback of getPixelMap.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 7
   * @deprecated since 9
   */
  function getPixelMap(wallpaperType: WallpaperType, callback: AsyncCallback<image.PixelMap>): void;

  /**
   * Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map.
   *
   * @permission ohos.permission.GET_WALLPAPER
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @returns { Promise<image.PixelMap> } the promise returned by the function.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 7
   * @deprecated since 9
   */
  function getPixelMap(wallpaperType: WallpaperType): Promise<image.PixelMap>;

  /**
   * Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map.
   * Only the static wallpaper set by using setImage can be obtained.
   * @permission ohos.permission.GET_WALLPAPER
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @param { AsyncCallback<image.PixelMap> } callback - the callback of getImage.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getImage(wallpaperType: WallpaperType, callback: AsyncCallback<image.PixelMap>): void;

  /**
   * Obtains the default pixel map of a wallpaper of the specified type. Returns the default pixel map.
   * Only the static wallpaper set by using setImage can be obtained.
   * @permission ohos.permission.GET_WALLPAPER
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @returns { Promise<image.PixelMap> } the promise returned by the function.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getImage(wallpaperType: WallpaperType): Promise<image.PixelMap>;

  /**
   * Sets live wallpaper of the specified type based on the uri path of the MP4 file.
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string } source - indicates the uri path of the MP4 file.
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @param { AsyncCallback<void> } callback - the callback of setVideo.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setVideo(source: string, wallpaperType: WallpaperType, callback: AsyncCallback<void>): void;

  /**
   * Sets live wallpaper of the specified type based on the uri path of the MP4 file.
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string } source - indicates the uri path of the MP4 file.
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setVideo(source: string, wallpaperType: WallpaperType): Promise<void>;

  /**
   * Sets wallpaper of the specified type based on the uri path of the custom wallpaper.
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string } source - indicates the uri path of the custom wallpaper.
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @param { AsyncCallback<void> } callback - the callback of setCustomWallpaper.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setCustomWallpaper(source: string, wallpaperType: WallpaperType, callback: AsyncCallback<void>): void;

  /**
   * Sets wallpaper of the specified type based on the uri path of the custom wallpaper.
   *
   * @permission ohos.permission.SET_WALLPAPER
   * @param { string } source - indicates the uri path of the custom wallpaper.
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function setCustomWallpaper(source: string, wallpaperType: WallpaperType): Promise<void>;

  /**
   * Registers a listener for wallpaper color changes to receive notifications about the changes.
   *
   * @param { 'colorChange' } type - the incoming colorChange table open receiver pick a color change wallpaper wallpaper color changes.
   * @param { function } callback - provides dominant colors of the wallpaper.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function on(type: 'colorChange', callback: (colors: Array<RgbaColor>, wallpaperType: WallpaperType) => void): void;

  /**
   * Registers a listener for wallpaper changes to receive notifications about the changes.
   *
   * @param { 'wallpaperChange' } type - the incoming wallpaperChange table open receiver when the user modifies the wallpaper settings.
   * @param { function } callback - wallpaperType indicates the wallpaper type.
   * resourceType indicates the resource type of the wallpaper.
   * uri indicates the wallpaper resource address.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function on(
    type: 'wallpaperChange',
    callback: (wallpaperType: WallpaperType, resourceType: WallpaperResourceType, uri?: string) => void
  ): void;

  /**
   * Unregisters a listener for wallpaper color changes.
   *
   * @param { 'colorChange' } type - incoming colorChange table delete receiver to pick up a color change wallpaper wallpaper color changes
   * @param { function } callback - provides dominant colors of the wallpaper.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @since 7
   * @deprecated since 9
   */
  function off(type: 'colorChange', callback?: (colors: Array<RgbaColor>, wallpaperType: WallpaperType) => void): void;

  /**
   * Unregisters a listener for wallpaper changes.
   *
   * @param { 'wallpaperChange' } type - the incoming wallpaperChange table delete receiver when the user modifies the wallpaper settings.
   * @param { function } callback - wallpaperType indicates the wallpaper type.
   * resourceType indicates the resource type of the wallpaper.
   * uri indicates the wallpaper resource address.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function off(
    type: 'wallpaperChange',
    callback?: (wallpaperType: WallpaperType, resourceType: WallpaperResourceType, uri?: string) => void
  ): void;

  /**
 * Set wallpapers for all forms of devices.
 *
 * @permission ohos.permission.SET_WALLPAPER
 * @param { Array<WallpaperInfo> } wallpaperInfos - indicates the current device wallpaper type object.
 * among them, NORMAL and PORTRAIT are mandatory.
 * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
 * @returns { Promise<void> } the promise returned by the function.
 * @throws { BusinessError } 401 - parameter error. Possible causes:
 *         1.Mandatory parameters are left unspecified.
 *         2.The first parameter type must be Array<WallpaperInfo>. The second type must be WallpaperType.
 *         3.The first parameter type must be Array<WallpaperInfo>, must include wallpaper with FoldState NORMAL and RotateState PORTRAIT.
 * @throws { BusinessError } 201 - permission denied.
 * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
 * @syscap SystemCapability.MiscServices.Wallpaper
 * @systemapi Hide this for inner system use.
 * @since 14
 */
  function setAllWallpapers(wallpaperInfos: Array<WallpaperInfo>, wallpaperType: WallpaperType): Promise<void>;

  /**
   * Obtains the default pixel map of a wallpaper of the specified  device type. Returns the default pixel map.
   * Only the static wallpaper set by using setAllWallpapers can be obtained.
   * @permission ohos.permission.GET_WALLPAPER
   * @param { WallpaperType } wallpaperType - indicates the wallpaper type.
   * @param { FoldState } foldState - indicates the folding status for wallpaper.
   * @param { RotateState } rotateState - indicates the rotation status for wallpaper.
   * @returns { Promise<image.PixelMap> } the promise returned by the function.
   * @throws { BusinessError } 401 - parameter error. Possible causes:
   *         1.Mandatory parameters are left unspecified.
   *         2.The type must be WallpaperType, parameter range must be WALLPAPER_LOCKSCREEN or WALLPAPER_SYSTEM.
   *         3.The type must be FoldState, parameter range must be NORMAL or UNFOLD_ONCE_STATE or UNFOLD_TWICE_STATE.
   *         4.The type must be RotateState, parameter range must be PORTRAIT or LANDSCAPE.
   * @throws { BusinessError } 201 - permission denied.
   * @throws { BusinessError } 202 - permission verification failed, application which is not a system application uses system API.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @since 14
   */
  function getWallpaperByState(wallpaperType: WallpaperType, foldState: FoldState, rotateState: RotateState): Promise<image.PixelMap>;
}

export default wallpaper;
