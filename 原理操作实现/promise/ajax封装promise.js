function promiseAjax (url, type, params, options = {}) {  
  return new Promise((res, rej) => {  
    try {  
      ajax(url, {  
        data: params,  
        dataType: options.dataType || 'json',//服务器返回json格式数据  
        type: type,//HTTP请求类型  
        timeout: options.timeout || 10000,//超时时间设置为10秒；  
        headers: options.headers || { 'Content-Type': 'application/json' },  
        success: function (data) {  
          res(data)  
        },  
        error: function (xhr, type, errorThrown) {  
          rej(errorThrown)  
        },  
      })  
    } catch (e) {  
      rej(e)  
    }  
  })  
}  

export default {  
  get (url, params, options) {  
    return promiseAjax(url, 'get', params, options)  
  },  
  post (url, params, options) {  
    return promiseAjax(url, 'post', params, options)  
  },  
} 