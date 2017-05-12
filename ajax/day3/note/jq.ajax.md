## ajax jq版
```
$.ajax({
    请求的类型 可以是 get post
    type: "get",
    请求的url api
    url: "api/guishudi.php?mobile="+ mobile,
    传到服务器上的数据 有两种方式
    第一种可以使用json对象方式
    第二种可以使用 ?mobile=18032067618&name=wsd"
    如果使用第二种data 可以不用传惨 紧get使用

    // data: {mobile,mobile}, //

    成功请求后做的事情
    success: function(msg){
        data = JSON.parse(msg);
        var info = data.areaName +'-'+ data.providerName;
        $(".box").html(info);
    },
    请求发生错误的时候使用
    error: function(data){
          // $.toast();
          alert("服务器繁忙");
          console.log(data);
    }
});

```
