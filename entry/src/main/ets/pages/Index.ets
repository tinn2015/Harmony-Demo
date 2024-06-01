// 导入页面路由模块
import router from '@ohos.router';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World'

  build() {
    Column() {
      Row() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
      }

      Row() {
        Button() {
          Text('布局示例')
            .fontSize(30)
            .fontWeight(FontWeight.Bold)
        }
        .type(ButtonType.Capsule)
        .padding(5)
        .margin({
          top: 20
        })
        .backgroundColor('#0D9FFB')
        .width('40%')
        // .height('5%')
        .onClick(() => {
          console.info('跳转到页面2')
          router.pushUrl({url: 'pages/Second'}).then(() => {
            console.log('successful to jumping to the second page')
          }).catch((err) => {
            console.error(`Failed to jump to the second page.Code is ${err.code}, message is ${err.message}`)
          })
        })
      }

      Row() {
        Button('UI循环控制')
          .margin({top: 20})
          .onClick(() => {
            router.pushUrl({url: 'pages/Uiloop'}).then(() => {
              console.log('successful to jumping to the second page')
            }).catch((err) => {
              console.error(`Failed to jump to the second page.Code is ${err.code}, message is ${err.message}`)
            })
          })
      }

      Row() {
        Button('web会议测试')
          .margin({top: 20})
          .onClick(() => {
            router.pushUrl({url: 'pages/MeetingWeb'}).then(() => {
              console.log('successful to jumping to the second page')
            }).catch((err) => {
              console.error(`Failed to jump to the second page.Code is ${err.code}, message is ${err.message}`)
            })
          })
      }
    }
    .height('100%')
    .width('100%')
    .justifyContent(FlexAlign.Center)
  }
}