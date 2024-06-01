// Second.ets
// 导入页面路由模块
import router from '@ohos.router';

@Entry
@Component
struct UiLoop {
  @State products:{
    name: string
    price: string
    image: ResourceStr
    discount?: number
  }[] = [
    {name: '华为手机1', price: '1111', image: $r('app.media.img'), discount: 50},
    {name: '华为手机2', price: '2222', image: $r('app.media.img_1')},
    {name: '华为手机2', price: '3333', image: $r('app.media.img_2')},
    {name: '华为手机2', price: '4444', image: $r('app.media.img_3')},
    {name: '华为手机3', price: '4444', image: $r('app.media.img_3')},
    {name: '华为手机4', price: '4444', image: $r('app.media.img_3')},
    {name: '华为手机5', price: '4444', image: $r('app.media.img_3')},
    {name: '华为手机6', price: '4444', image: $r('app.media.img_3')},
    {name: '华为手机7', price: '4444', image: $r('app.media.img_3')},
    {name: '华为手机8', price: '4444', image: $r('app.media.img_3')},
  ]
  build() {
    Column() {
      Row() {
        Text('商品列表').fontSize(30).fontWeight(FontWeight.Bold)
      }
      .height(30)

      List({space: 8}) {
        ForEach(this.products, (item:{
          name: string
          price: string
          image: ResourceStr
          discount?: number
        }) => {
          ListItem() {
            Row({space: 20}) {
              Image(item.image).width(100)
              Column({space: 10}){
                Text(item.name)
                if (item.discount) {
                  Text('折扣：' + item.discount).fontColor('red')
                }
                Text(item.price)
              }
            }
            .padding({top: 10, bottom: 10, right: 20, left: 20})
            .backgroundColor('#ffffff')
            .borderRadius(20)
            .width('90%')
            .margin({top: 20})
          }
        })
      }
      .width('100%')
      .layoutWeight(1)
    }
    .width('100%')
    .height('100%')
    .padding(20)
    .backgroundColor('#efefef')
  }
}