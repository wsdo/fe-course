
angular what is?

基于js开发的客户端应用框架，是我们可以更加快捷，简单开发web应用。

诞生于2009年，后来被Google收够，用在了很多项目中。

适用于crud 应用或者spa单页网站开发

CRUD是指在做计算处理时的增加(Create)、读取查询(Retrieve)、更新(Update)和删除(Delete)几个单词的首字母简写。主要被用在描述软件系统中数据库或者持久层的基本操作功能。

angular资源
    www.angular.org
    github.com/angular
    angularjs.cn
    ngnice.com

angular api
https://docs.angularjs.org/api
http://docs.ngnice.com/api


https://material.angularjs.org/HEAD/layout/children

http://angular-ui.github.io/bootstrap/#!#%2Fmodal

http://ng-table.com/#/

angular js 有哪些特性？
mvc 模式
模块系统
指令系统
依赖注入
双向数据绑定

angular 的作用域

$scope
$rootScope
依赖注入
服务

ng-app
ng-controller


手册里面的
directive
    指令
    带ngIf
    ngClass
    这些是内置指令
    大概60几个

angulajs 把所有的功能划分，打算使用其他功能必须以插件的方式引入
https://code.angularjs.org/1.6.5/angular-route.min.js


angular get 请求数据


data – {string|Object} – The response body transformed with the transform functions.
status – {number} – HTTP status code of the response.
headers – {function([headerName])} – Header getter function.
config – {Object} – The configuration object that was used to generate the request.
statusText – {string} – HTTP status text of the response.
xhrStatus – {string} – Status of the XMLHttpRequest (complete, error, timeout or abor


// Simple GET request example:
$http({
  method: 'GET',
  url: '/someUrl'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

$http({method: 'GET',url:'/someURl?username:stark',{age:18}}).then(回调函数1，回调函数2);
回调函数1接收正确请求的
回调函数2当发生错误的时候


watch方法用法
$watch(watchFn,watchAction,deepWatch)
watchFn:angular表达式或函数的字符串
watchAction(newValue,oldValue,scope):watchFn发生变化会被调用
deepWatch：可选的布尔值命令检查被监控的对象的每个属性是否发生变化
$watch会返回一个函数，想要注销这个watch可以使用函数
