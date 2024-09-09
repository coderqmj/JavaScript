console.log("js start");

function requestData(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("setTimeout");
      resolve(url);
      console.log("setTimeout2");
    }, 2000);
  });
}

async function getData(url) {
  console.log("getData start");
  const res = await requestData("qmj");
  // requestData("qmj").then((res) => {
  //   console.log("then1", res);
  // });
  console.log("await1", res);
  console.log("getData end");
}

getData();

console.log("js end");

// js start => getData start => getData end => js end => setTimeout => then1 qmj 没有使用await
// await结果：js start => getData start => js end => setTimeout => setTimeout2 => await1 qmj => getData end
