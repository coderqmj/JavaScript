function formatUrl(urlList) {
  console.log(urlList)
  for(let i =0;i<urlList.length;i++) {
    if(urlList[i].slice(0,7) !== 'http://') {
      urlList[i] = 'http://' + urlList[i];
    }
  }
  let [...res] = new Set([...urlList]);
  return res;
}

console.log(formatUrl(["nodejs.org", "http://nodejs.org", "http://bytedance.com"]))