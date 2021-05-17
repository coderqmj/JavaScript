function getData() {
  return new Promise((resolve, reject) => {
    // 这里面写请求的代码
    if ("成功") {
      resolve("success");
    } else {
      reject();
    }
  });
}
const promise = getData();
promise.then((res) => {
  console.log("成功了", res);
});
