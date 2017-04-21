# 重申 this

#### 那我们复习一下现在，我们调用函数的方式有哪些？这些调用函数的方式，里面的this又是谁？

> * 直接用()运算符来调用函数，那么函数里面的this指的是window对象
> * 函数如果绑定给了某个HTML元素的事件上，那么函数里面的this就是这个HTML对象
> * 用定时器调用函数，函数内部的this就是window对象
> * 用对象打点（方法）来调用函数，函数里面的this指的是这个对象
> * 用apply、call，可以人工设置this是谁了，百变。

说白了，我们学习“方法”，无非就是学习了一种函数的调用方式。这个函数里面的this指的是这个对象。
函数里面的this到底是谁，在函数定义的时候并不知道，要看函数如何被调用。



```
function fun(){
alert(this);
}

// 直接用()调用函数，函数里面的this指的是window对象
// fun();


// 函数绑定给了一个事件，那么事件发生的时候函数将执行，this就是触发事件的那个HTML对象
// var box = document.getElementById("box");
// box.onclick = fun;


// 用定时器来调用函数，函数里面的this是window
// setInterval(fun,1000);


// 创建一个对象，将这个对象的haha属性，设置为刚才的fun函数。那么用对象的方法来调用的时候，函数里面的this是这个对象
// var obj = {
// name : "stark",
// sex : "男",
// haha : fun
// }
// obj.haha();

说白了apply、call功能是一样的，功能都是：让函数调用，并且给函数设置this是谁。
call就是英语呼叫的意思，apply是应用的意思。

// 我们调用一个函数的时候，也可以通过apply、call来调用这个函数。此时能够人工设置函数里面的this是谁。
var obj = {
name : "考拉",
sex : "男"
}
fun.apply(obj);
fun.call(obj);
```


现在说说区别：

		var obj = {
			"name" : "考拉",
			"age" : 18,
			"jiehun" : false
		}


		function xianshixinxi(a,b,c){
			console.log(this.name);
			console.log(a + b + c);
		}

		xianshixinxi.call(obj,2,3,4);
		xianshixinxi.apply(obj,[2,3,4]);

call和apply功能一样，就是让一个函数里面的this设置为一个对象。
拿上例来说，xianshixinxi函数里面的this就是obj对象。但是我们发现，xianshixinxi这个函数，有参数。那么我们现在又想设置this是谁，又想把参数往里传，此时就有区别了：
fn.call(obj,参数1,参数2,参数3……);

fn.apply(obj,[参数1,参数2,参数3……]);
call需要你用逗号罗列所有参数，但是apply是把所有参数写在数组里面。即使只有一个参数，也必须写在数组里面。

比如：
		function showInfo(n){
			for(var i = 1 ; i <= n ; i++){
				console.log(this.name);
			}
		}
		showInfo.call(obj,10);
		showInfo.apply(obj,[10]);
一定不要记混，apply要的是数组，你想啊，ly、ly、ly长得像list，就是数组。

总结一下，这两个东西功能一致，就是把一个函数里面的this设置为某个对象。区别就是后面的参数的语法。

