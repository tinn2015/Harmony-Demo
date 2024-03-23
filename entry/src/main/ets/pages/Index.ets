// 导入页面路由模块
import router from '@ohos.router';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Row() {
        Column() {
          Text(this.message)
            .fontSize(50)
            .fontWeight(FontWeight.Bold)

          Button() {
            Text('NEXT')
              .fontSize(30)
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
            console.info('跳转到页面2')
            router.pushUrl({url: 'pages/Second'}).then(() => {
              console.log('successful to jumping to the second page')
            }).catch((err) => {
              console.error(`Failed to jump to the second page.Code is ${err.code}, message is ${err.message}`)
            })
          })
        }
        .width('100%')
      }
    }
    .backgroundColor('green')
    .height('100%')
  }
}