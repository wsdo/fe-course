!(function(){
    var sajax = window.sajax = {}; //命名空间
        sajax.get = function(url,json,callback){
            // 兼容ie6
            if (window.XMLHttpRequest) {
                // 核心 new XMLHttpRequest()
                // 第一步
                var xhr = new XMLHttpRequest();
            }else {
                var xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            // 第二步
            xhr.onreadystatechange = function(){
              // 第三部
                if (xhr.readyState == 4) {
                    // 默认的初始值
                    var status = 0;
                    var data = null;
                    // 规定的状态
                    var statusData = {
                        status : status,
                        data : data
                    }
                    // 第四部
                    if (xhr.status >=200 && xhr.status < 300 || xhr.status == 304) {
                        statusData.data = xhr.responseText;
                        // 规定1是正常
                        statusData.status = 1;
                        callback(statusData,null);
                    }else {
                        statusData.status = xhr.status;
                        callback(statusData,new Error("请求的文件发送错误"))
                    }
                }
            }
            var getData = sajax._json2string(json);
            // 第五步
            xhr.open("get",url + "?" + getData,true);
            // 第六部
            xhr.send(null);
        }

        sajax.post = function(url,json,callback){
            // 兼容ie6
            if (window.XMLHttpRequest) {
                // 核心 new XMLHttpRequest()
                var xhr = new XMLHttpRequest();
            }else {
                var xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhr.onreadystatechange = function(){
                if (xhr.readyState == 4) {
                    // 默认的初始值
                    var status = 0;
                    var data = null;
                    // 规定的状态
                    var statusData = {
                        status : status,
                        data : data
                    }
                    if (xhr.status >=200 && xhr.status < 300 || xhr.status == 304) {
                        statusData.data = xhr.responseText;
                        // 规定1是正常
                        statusData.status = 1;
                        callback(statusData,null);
                    }else {
                        statusData.status = xhr.status;
                        callback(statusData,new Error("请求的文件发送错误"))
                    }
                }
            }
            var PostData = sajax._json2string(json);
            console.log(PostData);
            xhr.open("post",url,true);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send(PostData);
        }

        sajax.jsonp = function jsonp(url,callbackname,callback){
            // 创建了一个script 标签
            var tagScript = document.createElement("script");
            // 给这个标签的src赋一个值
            tagScript.src = url;
            // 把这个标签追加到body里面
            document.body.appendChild(tagScript);
            // 给window赋一个全局的函数
            window[callbackname] = callback;
            // 用完就删除这个script src标签
            document.body.removeChild(tagScript);
          }
          
        // 把对象转化为字符串
        sajax._json2string = function(json){
            var arr = [];
            for(var k in json ){
                arr.push(k + "=" + json[k]);
            }
            return arr.join("&");
        }
}())
