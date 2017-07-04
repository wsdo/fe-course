// index.js
// import { firstName, lastName, year } from './index';

// function setName(element) {
//     element.textContent = firstName + ' ' + lastName;
// }


// console.log(firstName);
// console.log(lastName);
// console.log(year);

// 没有参数的情况
var s1 = Symbol();
var s2 = Symbol();

// s1 === s2 // false
console.log(s1 === s2);
// 有参数的情况
var s1 = Symbol('foo');
var s2 = Symbol('foo');

s1 === s2 // false

console.log(s1 === s2);


const username = Symbol('stark');
const obj8 = {};
obj8[username] = 'hello';
console.log(obj8);


let ss = Symbol('ss');
const data = {
    [ss]: 'stark'
}

console.log(data);
console.log(data[ss]);


// const s = new Set();

// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

// for (let i of s) {
//     console.log(i);
// }

const set = new Set([1, 2, 3, 4, 4]);


console.log([...set]);


// const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
// items.size
// console.log(items.size);
let s = new Set();
s.add(1).add(2).add(2);

console.log(s);
// 注意2被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false