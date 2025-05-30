/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import router from '@ohos.router';
import { SecLocationButton } from '../../common/Component/LocationButton';
import { TitleBar } from '../../common/Component/TitleBar';
import { IntroductionTitle } from '../../common/Component/IntroductionTitle';

@Extend(Column) function backgroundStyle() {
  .size({ width: '95%', height: 139 })
  .margin({ top: 5 })
  .padding(12)
  .borderRadius(24)
  .alignItems(HorizontalAlign.Start)
  .backgroundColor(Color.White)
}

@Entry
@Component
struct Location {
  @State location: string = '';

  build() {
    Column() {
      TitleBar({ title: $r('app.string.EntryAbility_label') })
        .id('backBtn')
        .onClick(() => {
          router.back();
        })
      IntroductionTitle({ introduction: $r('app.string.Locate_information') })
      Column() {
        Text(this.location ? this.location : $r('app.string.Get_current_positioning_information'))
      }
      .backgroundStyle()

      Column() {
        SecLocationButton({
          location: $location
        })
      }
      .layoutWeight(1)
      .padding(30)
      .justifyContent(FlexAlign.End)
    }
    .width('100%')
    .height('100%')
    .backgroundColor($r('app.color.background_shallow_grey'))
  }
}