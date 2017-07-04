var url = require('url');
var querstring = require('querystring');

var obj = url.parse("http://localhost:3000/index.html?username=stark&age=18");

let query = obj.query;

var obj1 = querstring.parse(query);
console.log(obj1);

// console.log(obj);