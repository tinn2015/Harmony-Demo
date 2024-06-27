import worker, { ThreadWorkerGlobalScope, MessageEvents, ErrorEvent } from '@ohos.worker';

var workerPort : ThreadWorkerGlobalScope = worker.workerPort;

// 定义训练模型及结果
let result = [];

// 定义预测函数
function predict(x) {
  return result[x];
}

// 定义优化器训练过程
function optimize() {
  result = [11,22,33,44,55,66,77];
}

// Worker线程的onmessage逻辑
workerPort.onmessage = function (e: MessageEvents) {
  let data = e.data
  console.log('woker线程收到消息：', JSON.stringify(data))
  // 根据传输的数据的type选择进行操作
  switch (data.type) {
    case 0:
    // 进行训练
      optimize();
    // 训练之后发送主线程训练成功的消息
      workerPort.postMessage({ type: 'message', value: 'train success.' });
      break;
    case 1:
    // 执行预测
      const output = predict(data.value);
    // 发送主线程预测的结果
      workerPort.postMessage({ type: 'predict', value: output });
      break;
    default:
      workerPort.postMessage({ type: 'message', value: 'send message is invalid' });
      break;
  }
}