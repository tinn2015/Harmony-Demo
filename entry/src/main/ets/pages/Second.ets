// Second.ets
// 导入页面路由模块
import router from '@ohos.router';

@Entry
@Component
struct Second {
  @State imageWidth: number = 240
  build() {
    Column() {
      Row() {
        // https://copyright.bdstatic.com/vcg/creative/cc9c744cf9f7c864889c563cbdeddce6.jpg@h_1280
        // https://res.vmallres.com/pimages//uomcdn/CN/pms/202403/gbom/6942103107719/428_428_5818B6A12914274ED24FB8FE47F1CD34mp.png
        Image('https://res.vmallres.com/pimages//uomcdn/CN/pms/202403/gbom/6942103107719/428_428_5818B6A12914274ED24FB8FE47F1CD34mp.png')
          .width(this.imageWidth)
          .interpolation(ImageInterpolation.High)
      }
      .width('100%')
      .height(300)
      .justifyContent(FlexAlign.Center)

      Row() {
        Text($r('app.string.width_label'))
          .fontSize(25)
          .fontWeight(FontWeight.Bold)
        TextInput({
          placeholder: '请输入图片宽度',
          text: this.imageWidth.toFixed()
        })
          .height(50)
          .width(150)
          .type(InputType.Number)
          .onChange(value => {
            console.log('输入图片宽度：', value, typeof value)
            this.imageWidth = parseInt(value)
          })
      }
      .width('100%')
      .padding({
        left: 20,
        right: 20,
        bottom: 20
      })
      .justifyContent(FlexAlign.SpaceBetween)

      Divider()
        .width('90%')

      Row() {
        Button('缩小')
          .width(80)
          .fontSize(20)
          .onClick(() => {
            this.imageWidth -= 10
          })
        Button('放大')
          .width(80)
          .fontSize(20)
          .onClick(() => {
            this.imageWidth += 10
          })
      }
      .margin({
        top: 20
      })
      .width('100%')
      .justifyContent(FlexAlign.SpaceEvenly)

      Slider({
        min: 0,
        max: 300,
        value: this.imageWidth,
        step: 10,
        style: SliderStyle.OutSet,
        direction: Axis.Horizontal,
        reverse: false
      })
        .width('90%')
        .trackThickness(7)
        .blockColor('#36D')
        .showTips(true)
        .onChange(value => {
          console.log('slider', value)
          this.imageWidth = value
        })

      Button() {
        Text('Back')
          .fontSize(25)
          .fontWeight(FontWeight.Bold)
      }
      .type(ButtonType.Capsule)
      .margin({
        top: 20
      })
      .backgroundColor('#0D9FFB')
      .width('40%')
      .height('5%')
      .onClick(() => {
        console.info(`Succeeded in clicking the 'Back' button.`)
        try {
          // 返回第一页
          router.back()
          console.info('Succeeded in returning to the first page.')
        } catch (err) {
          console.error(`Failed to return to the first page.Code is ${err.code}, message is ${err.message}`)
        }
      })
    }
      .width('100%')
      .height('100%')
  }
}