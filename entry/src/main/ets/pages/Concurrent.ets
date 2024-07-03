import router from '@ohos.router';
import taskpool from '@ohos.taskpool';
import worker from '@ohos.worker';
import fs from '@ohos.file.fs'
import common from '@ohos.app.ability.common'

const workerInstance = new worker.ThreadWorker('entry/ets/workers/testworker.ts');
/**
 * 鸿蒙的多线程爱用的是Actor
 * 这是一种基于消息通信并发模型， 不需要开发者去去关心一些锁的问题。
 * 由于Actor模型的内存是隔离的，所以需要进行跨线程的数据序列化传输
 *
 */


/**
 *
 * taskpool测试
 */
@Concurrent
function add(num1: number, num2: number): number {
  console.log('add 22222')
  return num1 + num2;
}

async function ConcurrentFunc(): Promise<void> {
  try {
    console.log('taskpool 顺序打印--1')
    let task: taskpool.Task = new taskpool.Task(add, 1, 2);
    // 预览器结果undefined, 需要真机测试
    console.info("taskpool res is: " + await taskpool.execute(task));
  } catch (e) {
    console.error("taskpool execute error is: " + e);
  }
}

/**
 *
 * worker测试
 *
 */

// 接收Worker子线程的结果
workerInstance.onmessage = function (e) {
  console.log('宿主线程接收到主线程消息：', JSON.stringify(e.data))
}

workerInstance.onerror = function (d) {
  // 接收Worker子线程的错误信息
  console.log('==接收Worker子线程的错误信息==', JSON.stringify(d))
}

workerInstance.onexit = function () {
  console.log('==worker线程销毁回调==')
}

function workerHandle () {
  console.log('worker 顺序打印--1')
  // 向Worker子线程发送训练消息
  workerInstance.postMessage({ 'type': 0 });
  // 向Worker子线程发送预测消息
  workerInstance.postMessage({ 'type': 1, 'value': 5 });
}

/*
 * I/O密集任务测试
 *
 * */
@Concurrent
async function fileConcurrentTest(fileList: string[]) {
  async function write(data, filePath) {
    console.log('==filepath==', filePath)
    let file = await fs.open(filePath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE)
    console.log('==file==', file)
    await fs.write(file.fd, data)
    fs.close(file)
  }

  // 循环写文件操作
  for (let i = 0; i < fileList.length; i++) {
    write('Hello World!', fileList[i]).then(() => {
      console.info(`Succeeded in writing the file. FileList: ${fileList[i]}`);
    }).catch((err) => {
      console.error(`Failed to write the file. Code is ${err.code}, message is ${err.message}`)
      return false;
    })
  }
  return true;
}

function writeFileAction() {
  let context = getContext(this) as common.UIAbilityContext
  let fileDir = context.filesDir
  const filePaths = [`${fileDir}/file-test1.txt`, `${fileDir}/file-test2.txt`]

  // const filePaths2 = ['/utils/file-test1.txt']
  console.log('==开始写文件==')
  taskpool.execute(fileConcurrentTest, filePaths).then(ret => {
    console.info(`the result: ${ret}`)
  })
}

function listFiles() {
  let context = getContext(this) as common.UIAbilityContext
  let fileDir = context.filesDir

  // 查看文件列表
  let options = {
    recursion: false,
    listNum: 0,
    filter: {
      suffix: ['.png', '.jpg', '.txt'],          // 匹配文件后缀名为'.png','.jpg','.txt'
      displayName: ['*'],                    // 匹配文件全名以'test'开头
      fileSizeOver: 0,                           // 匹配文件大小大于等于0
      lastModifiedAfter: new Date(0).getTime(),  // 匹配文件最近修改时间在1970年1月1日之后
    },
  }
  let files = fs.listFileSync(fileDir, options);
  console.log('==查看文件==', files)
  // for (let i = 0; i < files.length; i++) {
  //   console.info(`The name of file: ${files[i]}`);
  // }
}

@Entry
@Component
struct Concurrent {
  build() {
    Column({space: 20}) {
      Button('taskPool测试')
        .onClick(() => {
          ConcurrentFunc()
          console.log('taskpool 顺序打印--2')
        })

      Button('worker测试')
        .onClick(() => {
          // ConcurrentFunc()
          workerHandle()
          console.log('worker 顺序打印--2')
        })

      Button('I/O密集测试, 写入文件')
        .onClick(() => {
          writeFileAction()
        })
      Button('I/O密集测试, 查看文件')
        .onClick(() => {
          listFiles()
        })
    }
    .width('100%')
    .height('100%')
    .border({
      width: 2,
      color: 'red'
    })
    .justifyContent(FlexAlign.Center)
  }
}