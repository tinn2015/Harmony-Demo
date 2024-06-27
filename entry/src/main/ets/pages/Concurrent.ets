import router from '@ohos.router';
import taskpool from '@ohos.taskpool';
import worker from '@ohos.worker';

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

      Button('I/O密集测试')
        .onClick(() => {
          // ConcurrentFunc()
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