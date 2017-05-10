!(function(){
    var sajax = window.sajax = {};
        sajax.get = function(url,json,callback){
            // 兼容ie6
            if (window.XMLHttpRequest) {
                var xhr = new XMLHttpRequest();
            }else {
                var xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhr.onreadystatechange = function(){
                if (xhr.readyState == 4) {

                    if (xhr.status >=200 && xhr.status < 300 || xhr.status == 304) {
                        callback(xhr.responseText,null);
                    }else {
                        callback(undefined,new Error("请求的文件发送错误"))
                    }
                }
            }
            var getData = sajax._json2string(json);
            xhr.open("get",url + "?" + getData,true);
            xhr.send(null);
        }

        sajax._json2string = function(json){
            var arr = [];
            for(var k in json ){
                arr.push(k + "=" + json[k]);
            }
            return arr.join("&");
        }
}())
