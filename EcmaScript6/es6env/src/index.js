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
function hello(x, y) {
    y = y || 'world';
    console.log(x, y);
}
// hello('wsd')
hello('wsd', 'hi');