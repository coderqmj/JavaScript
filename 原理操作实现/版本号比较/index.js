function compare( version1 ,  version2 ) {
  if(version1==version2) return 0;
  let ver1 = version1.split('.');
  let ver2 = version2.split('.');
  let len = Math.max(ver1.length, ver2.length);
  for(let i=0;i<len;i++) {
      if(Number(ver1[i])<Number(ver2[i])) {
          return -1;
      }else if(Number(ver1[i])>Number(ver2[i])) {
          return 1;
      }else {
          continue;
      }
  }
  return version1.length < version2.length ? -1 : 1;
}

