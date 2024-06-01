import web_view from '@ohos.web.webview'
import hilog from '@ohos.hilog';

@Entry
@Component
struct WebComponent {
  private webviewController: WebviewController = new web_view.WebviewController()
  aboutToAppear() {
    // 配置web开启调试模式
    web_view.WebviewController.setWebDebuggingAccess(true);
    // web_view.WebviewController.
    console.log('1111', 1111)
  }

  build() {
    Column() {
      // https://meeting.onlineinline.com/web-join/guidePage/y54chnoa
      // https://meeting.onlineinline.com/web-join/guidePage/fvpvajcs/joinroomv
      Web({src: 'https://meeting.onlineinline.com/dist/#/xgikp9v7', controller: this.webviewController}).javaScriptAccess(true).overviewModeAccess(true).horizontalScrollBarAccess(true).verticalScrollBarAccess(true).domStorageAccess(true)
        .enabled(true).onPermissionRequest(e => {
          hilog.info(1, 'onPermissionRequest', '', e)
      })
        .onHttpErrorReceive(error => {
          console.log('onHttpErrorReceive', error)
        })
        .onClick(e => {
          console.log('webview.onclick', e)
        })
        .onTouch(e => {
          console.log('webview.touch', e)
        })
    }
  }
}