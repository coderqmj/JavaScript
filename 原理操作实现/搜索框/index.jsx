import React, { memo } from 'react'

export default memo(function index() {
  const [searchResult, setSearchResult] = useState([]);

  const [requestCounter, setRequestCounter] = useState(0);

  const search = document.getElementById('search');

  // 防抖
   function debounce(func,delay){
    let timer = null
    return function(...args){
      if(timer) clearTimeout(timer)
      timer = setTimeout(()=>{
        func.apply(this,args)
      },delay)
    }
  }

  const requestText = (text) => {
    fetchAction(text)
      .then((res) => {
        const finallyText = document.getElementById('search').value;
        if(text === finallyText) { // 1.判断请求参数是否一样
          setSearchResult(res);
        }
      })
      .catch(err => {
        console.error(err);
      })
  }

  search.addEventListener('input', e => {
    let text = e.srcElement.value;
    let requestTextReally = debounce(requestText, 300);
    requestTextReally(text);
  })
  return (
    <div>
      <input id="search" />
      {
        searchResult && searchResult.map((item, index) => {
          return <p key={item.id}>{item.text}</p>
        })
      }
    </div>
  )
})


const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.srcElement.value;
}