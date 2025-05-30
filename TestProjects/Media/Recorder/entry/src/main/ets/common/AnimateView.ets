/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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

import { getTimeString } from '../model/Utils';
import Logger from '../model/Logger';

const TAG = '[Recorder.AnimateView]';

@Component
export struct AnimateView {
  private timeTextNum = [0, 1, 2, 3, 4, 5]
  private intervalId: number = 0
  private updateTimeStr: () => void = () => {}
  @State timeAdd: number = 0
  @State translateImage: string = '-0.2%'
  @State translateText: string = '-1%'
  @StorageLink('playState') @Watch('onPlayChange') playState: boolean = true
  @Link @Watch('onResetChange') resetAnimation: boolean

  onPlayChange() {
    Logger.info(TAG, `onPlayChange`)
    this.animator()
  }

  animator() {
    Logger.info(TAG, `animator,isPlay=${this.playState}`)
    if (this.playState) {
      this.intervalId = setInterval(() => {
        this.updateTimeStr()
        this.translateImage = '16.3%'
        this.translateText = '15.5%'
        this.timeAdd += 1
        animateTo({ duration: 1100, curve: Curve.Linear }, () => {
          this.translateImage = '-0.2%'
          this.translateText = '-1%'
        })
      }, 1000)
    } else {
      clearInterval(this.intervalId)
    }
  }

  onResetChange() {
    this.timeAdd = 0
  }

  aboutToAppear() {
    this.animator()
  }

  build() {
    Column() {
      Row() {
        ForEach(this.timeTextNum, (item: number) => {
          Text(getTimeString(this.timeAdd, item))
            .fontSize(12)
            .fontColor(Color.Gray)
            .textAlign(TextAlign.End)
            .maxLines(1)
          Blank()
            .layoutWeight(1)
        }, (item: number) => item.toString())
      }
      .width('120%')
      .translate({ x: this.translateText })

      Image($r('app.media.slider_time'))
        .width('120%')
        .height(20)
        .objectFit(ImageFit.Fill)
        .translate({ x: this.translateImage })
    }
  }
}