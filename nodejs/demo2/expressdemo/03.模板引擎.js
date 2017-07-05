var ejs = require("ejs");

var templateString = "好<%=xinqing%>啊，我买了个一个<%= dongxi %>";

var compileFunction = ejs.compile(templateString);

var obj = { 'xinqing': "高兴", "dongxi": "iphone8" };

var htmlString = compileFunction(obj);

console.log(htmlString);