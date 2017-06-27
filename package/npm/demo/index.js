var lodash = require('lodash');
var shudong = require('shudong-test');
var fe7 = require('fe7');

var output = lodash.without([1, 2, 3], 2);
console.log(output);
console.log(shudong.hello());
console.log(fe7.hello());