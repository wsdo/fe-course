function fun(){
}
console.log(fun.prototype);
console.log(typeof fun.prototype);

原型的定义:

任何函数都有原型 如果是普通函数，那么它的原型没有用处

原型链查找机制
当我试图访问这个构造函数的对象时，如果自己身上有这个属性，
则返回，如果没有就去原型上面查找。

实例 .__proto__ 会指向构造函数的 prototype
console.log(anqila.__proto__ == Wangzhe.prototype);
Chrome Firefox Safari 在每个对象上都支持__proto__;
