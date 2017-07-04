// let username = "stark";
// let stark = "shudong";

// console.log(stark);
// console.log(username);
// let a = 2;
// let b = 1;

// if (a > b) {
//     let c = 10; //块级作用域
// }
// console.log(c);

// console.log(hello);
// var hello = "world";

// console.log(hello1);
// let hello1 = "world";

// var tmp = 123;

// if (true) {
//     tmp = 'abc'; // ReferenceError
//     let tmp;
// }

// let hi = 11;
// let hi = 22;


// 常量

// const PI = 3.1415;
// PI // 3.1415
// console.log(PI);

// PI = 3;
// TypeError: Assignment to constant variable.

// 解构赋值

// let a = 1;
// let b = 2;
// let c = 3;

// let [a, b, c] = [1, 2, 3];

// console.log(a, b, c);

// let [foo, [[bar], baz]] = [1, [[2], 3]];
// foo // 1
// bar // 2
// baz // 3

// let [ , , third] = ["foo", "bar", "baz"];
// third // "baz"

// let [x, , y] = [1, 2, 3];
// x // 1
// y // 3

// let [head, ...tail] = [1, 2];

// console.log(head);
// console.log(tail);
// head // 1
// tail // [2, 3, 4]

// let [x, y, ...z] = ['a'];
// console.log(x);
// x // "a"
// y // undefined
// z // []

// let { stark, shudong } = { stark: 'stark', shudong: 'shudong' };
// console.log(shudong);


// // 字符串
// const [a, b, c, d, e] = 'hello';
// console.log(a, b, c, d, e);
// console.log(b);

// // 函数参数的解构值
// function add([x, y]) {
//     return x + y;
// }

// console.log(add([3, 8]));

// let { length: len } = "stark";
// console.log(len);

// 函数：
// function hello(x, y) {
//     y = y || 'world';
//     console.log(x, y);
// }
// hello('wsd')
// hello('wsd', 'hi');


// function world(x, y = 'hi') {
//     console.log(x, y);
// }
// world('hello');
// world('world', 'wsd');

// (function(a) {}).length;

// console.log((function(a, b, c = 3) {}).length);

// function anqila(a, b, ...arr) {
//     // console.log(a, arr);
//     console.log(a);
//     console.log(b);
//     console.log(arr);
// }

// anqila(10, 11, 12, 14, 121312, 21321);

// 箭头函数
// 使用 "箭头" (=>) 定义函数

// const fn = a => a;
// console.log(fn(1));

// function fn(a){
//     return a;
// }

const fn = (a, b) => a + b;
console.log(fn(2, 248));

let fn1 = (a, b) => {
    a = a * 4;
    b = b * 8;
    return a + b;
}

console.log(fn1(4, 6));

let fn2;
fn2 = (a, b) => {
    a = a * 4;
    b = b * 8;
    return a + b;
}
console.log(fn2(4, 6));

// 箭头函数没有自己的this对象， 所以在使用的时候， 其内部this就是定义时， 所在的环境的对象，
// 而不是使用时所在的环境对象。

// 箭头函数体内没有arguments对象， 如果要使用的话， 就在括号里面设置。

// 不可以当作构造函数， 不可以使用new命令， 否则会抛出一个错误

// rest
// ES6 引入 rest 参数（ 形式为...变量名）， 用于获取函数的多余参数， 这样就不需要使用arguments对象了。 rest 参数搭配的变量是一个数组， 该变量将多余的参数放入数组中。

// const fn3 = (...arr) => arr;
// console.log(fn3(1, 2, 3, 4, 5));

// function fn5() {
// console.log(this);

// setTimeout(function() {
//     console.log(this);
// }, 1000);

// setTimeout(() => {
//     console.log(this);
// }, 1000)
// }


// const fn6 = a => {
//     // console.log(this.a);
// }

// var obj = { a: 1 };
// fn6.call(obj);

// const Fn7 = (a, b) => a + b;

// const f = new Fn7(1, 2);
// Fn7 is not a constructor

// function Timer() {
//     this.s1 = 0;
//     this.s2 = 0;
//     // 箭头函数
//     setInterval(() => this.s1++, 1000);
//     // 普通函数
//     setInterval(function() {
//         this.s2++; //此时和timer里面this.s2没有关系
//         // console.log(this);
//     }, 1000);
// }

// var timer = new Timer();

// setTimeout(() => console.log('s1: ', timer.s1), 3100);
// setTimeout(() => console.log('s2: ', timer.s2), 3100);


// 模板字符串

// let flag = true;
// var username = "姓名";
// let html = `<ul>
//         <li>
//             <span>${username}</span>
//             <span class="${flag ? 'show' : 'hide' }"></span>
//         </li>
//         </ul>`;


// console.log(html);


// function Ponit(name, age) {
//     this.name = name;
//     this.age = age;
// }

// var people = new Ponit('stark', '18');

// console.log(people.name);


class People {
    // constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello(a, b) {
        return a + b;
    }
}

let p = new People('stark', 18);
console.log(p.hello(2, 8));



class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        return this;
    }

    // sayHello(str){

    // }
}

class Xiaoxuesheng extends Person {
    constructor(name, age) {
        super(name, age);
        this.name = 'xioshuang';
        this.age = '18';
        return this;
    }


}

const xiaoshuang = new Xiaoxuesheng();
console.log(xiaoshuang.name);
console.log(xiaoshuang.age);



// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }

// timeout(100).then((value) => {
//     console.log(value);
// });

// let promise = new Promise(function(resolve, reject) {
//     console.log('Promise');
//     resolve();
// });

// promise.then(function() {
//     console.log('Resolved.');
// });

// console.log('Hi!');

// 上面代码中，Promise 新建后立即执行，
// 所以首先输出的是Promise。
// 然后，then方法指定的回调函数，
// 将在当前脚本所有同步任务执行完才会执行，
// 所以Resolved最后输出。


function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        var image = new Image();

        image.onload = function() {
            resolve('图片地址是正确的');
        };

        image.onerror = function() {
            reject(new Error('图片加载失败了，走reject ' + url));
        };

        image.src = url;
    });
}

// var img = loadImageAsync('./src/1.png');
// img.then(function(value) {
//     console.log(value + '1111111');
// }, function(err) {
//     console.log(err + '2222');
// });
// promise
//   .then(function(value) { console.log(value) })
//   .catch(function(error) { console.log(error) });


// function* helloWorldGenerator() {
//     yield 'hello';
//     yield 'world';
//     return 'ending';
// }

// var hw = helloWorldGenerator();
// hw.next();
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());

// {
//     value : 'hello',
//     done: false
// }

// function* f() {
//     for (var i = 0; true; i++) {
//         var reset = yield i;
//         if (reset) { i = -1; }
//     }
// }

// var g = f();

// console.log(g.next());
// console.log(g.next());

// g.next() // { value: 0, done: false }
// g.next() // { value: 1, done: false }
// g.next(true) // { value: 0, done: false }


// var firstName = 'Michael';
// var lastName = 'Jackson';
// var year = 1958;

// export { firstName, lastName, year };


let a = 1;
// const obj = {
//         a: a
//     }
// const obj = { a };

const obj = {
        fn: function() {
            console.log(111);
        },
        fn2() {
            console.log(2222);
        }
    }
    // console.log(obj);
obj.fn();
obj.fn2();


let obj1 = { a: 1 };
let obj2 = { a: 2, b: 3 };
let obj3 = { c: 'aaa' };

Object.assign(obj1, obj2, obj3);

console.log(obj1);