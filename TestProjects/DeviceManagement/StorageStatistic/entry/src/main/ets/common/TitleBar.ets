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

import router from '@ohos.router'

// Page title bar
@Component
export struct TitleBar {
  private title: ResourceStr = ''

  build() {
    Column() {
      Row() {
        Row() {
          Image($r('app.media.ic_back'))
            .width(20)
            .height(20)
            .margin({ left: 26 })
            .objectFit(ImageFit.Contain)
        }
        .size({ width: 56, height: 56 })
        .onClick(() => {
          router.back()
        })

        Text(this.title)
          .fontSize(20)
          .margin({ left: 16 })
        Blank()
      }
      .height(56)
      .width('100%')

      Divider()
        .height(1)
        .color($r('app.color.gray_divider'))
    }
  }
}