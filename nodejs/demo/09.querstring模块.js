var querstring = require('querystring');
var obj = querstring.parse('username=stark&age=18&hobby=lanqiu');
console.log(obj);


// { username: 'stark', age: '18', hobby: 'lanqiu' }