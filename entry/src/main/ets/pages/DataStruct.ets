
@CustomDialog
struct CustomDialogExample {
  @Link desc: string
  @Link img: string
  confirm: () => void = () => {}
  controller?: CustomDialogController
  build() {
    Column() {
      Text('特性说明')
      Text(this.desc)
    }
  }
}

@Entry
@Component
struct DataStruct {
  @State desc: string = ''
  @State img: string = ''

  dialogController: CustomDialogController = new CustomDialogController({
    builder: CustomDialogExample({
      confirm: this.onAccept,
      desc: $desc,
      img: $img
    }),
    cancel: this.exitApp,
    autoCancel: true,
    alignment: DialogAlignment.Bottom,
    offset: {dx: 0, dy: -20},
    customStyle: false,
    gridCount: 12
  })

  onAccept() {
    console.info('Callback when the second button is clicked')
  }

  exitApp() {
    console.info('Click the callback in the blank area')
  }

  build() {
    Column({space: 20}) {
      Column() {
        Text('容器类库，用于存储各种数据类型的元素，并具备一系列处理数据元素的方法，作为纯数据结构容器来使用具有一定的优势。当前提供了线性和非线性两类容器，共14种')
          .fontSize(14)
      }
      Column() {
        Text('线性容器是指能按顺序访问的数据结构')
          .fontSize(14)
          .fontColor('#007bbb')
          .textAlign(TextAlign.Start)
          .width('100%')
        Flex({wrap: FlexWrap.Wrap, justifyContent: FlexAlign.SpaceBetween}) {
          Button('动态数组-ArrayList').fontSize(12).padding(10).height(30).margin({top: 10}).onClick(() => {
            this.desc = 'ArrayList即动态数组，可用来构造全局的数组对象。 当需要频繁读取集合中的元素时，推荐使用ArrayList。ArrayList依据泛型定义，要求存储位置是一片连续的内存空间，初始容量大小为10，并支持动态扩容，每次扩容大小为原始容量的1.5倍。'
            this.dialogController.open()
          })
          Button('单向链表-List').fontSize(12).padding(10).height(30).margin({top: 10})
          Button('双向链表-LinkedList').fontSize(12).padding(10).height(30).margin({top: 10})
          Button('双端队列-Deque').fontSize(12).padding(10).height(30).margin({top: 10})
          Button('队列-Queue').fontSize(12).padding(10).height(30).margin({top: 10})
          Button('栈对象-Stack').fontSize(12).padding(10).height(30).margin({top: 10})
        }
      }
      .width('100%')

    }
    .width('100%')
    .height('100%')
    .padding({left: 10, right: 10})
    .justifyContent(FlexAlign.Center)
  }
}