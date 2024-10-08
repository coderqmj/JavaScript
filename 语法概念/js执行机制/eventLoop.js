setTimeout(() => {
  console.log("setTimeout1");
  new Promise((resolve) => {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(() => {
      console.log("then4");
    });
    console.log("then2");
  });
});

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(() => {
  console.log("then1");
});

setTimeout(() => {
  console.log("setTimeout2");
});

console.log(2);

queueMicrotask(() => {
  console.log("queueMicrotask1");
});
// promise1 => 2 => then1 => queueMicrotask1
// setTimeout1 => then2 => then4 => setTimeout2
