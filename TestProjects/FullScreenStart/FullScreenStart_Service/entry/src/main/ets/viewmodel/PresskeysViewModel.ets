/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import { PressKeysBean } from './PressKeysItem';

export class PressKeysBeanViewModel {
  /**
   * Key array data.
   */
  getPressKeys(): Array<Array<PressKeysBean>> {
    return [
      [
        new PressKeysBean(0, '32vp', '32vp', 'clean', $r('app.media.ic_clean')),
        new PressKeysBean(1, '19vp', '43vp', '7'),
        new PressKeysBean(1, '19vp', '43vp', '4'),
        new PressKeysBean(1, '19vp', '43vp', '1'),
        new PressKeysBean(1, '25vp', '43vp', '%')
      ],
      [
        new PressKeysBean(0, '32vp', '32vp', 'div', $r('app.media.ic_div')),
        new PressKeysBean(1, '19vp', '43vp', '8'),
        new PressKeysBean(1, '19vp', '43vp', '5'),
        new PressKeysBean(1, '19vp', '43vp', '2'),
        new PressKeysBean(1, '19vp', '43vp', '0')
      ],
      [
        new PressKeysBean(0, '32vp', '32vp', 'mul', $r('app.media.ic_mul')),
        new PressKeysBean(1, '19vp', '43vp', '9'),
        new PressKeysBean(1, '19vp', '43vp', '6'),
        new PressKeysBean(1, '19vp', '43vp', '3'),
        new PressKeysBean(1, '19vp', '43vp', '.')
      ],
      [
        new PressKeysBean(0, '30.48vp', '20vp', 'del', $r('app.media.ic_del')),
        new PressKeysBean(0, '24vp', '24vp', 'min', $r('app.media.ic_min')),
        new PressKeysBean(0, '32vp', '32vp', 'add', $r('app.media.ic_add')),
        new PressKeysBean(0, '32vp', '32vp', 'equ', $r('app.media.ic_equ'))
      ]
    ];
  }
}

let keysModel = new PressKeysBeanViewModel();

export default keysModel as PressKeysBeanViewModel;