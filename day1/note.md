洗衣服
step1:把衣服收拾好
step2:打开洗衣机
step3：把衣服放进去
step4:把衣服拿出来
step5:把衣服晾好

面向对象的思想
洗衣服

洗衣机
女朋友

使用面向对象时，只关注对象提供的功能，不关注其内部细节。

程序中面向对象介绍？
面向对象的语言有一个标志，那就是他们都有类的概念，
而通过类可以创建任意多个具有相同属性和方法的对象。

## 创建对象的方式
  1.字面量的创建方式
  ```
      var obj  = {
          name: "stark",
          age: "18",
          sex: "男"
      }
    // console.log(obj);
    // console.log(obj.name);
    // console.log(typeof obj);
  ```
  {}就是对象的界定符，就是对象的字面量，对象有属性，所有的属性就是这个对象的特性，name，age，sex都是这个对象的属性（preperty）

  对象的定义
  无序属性的集合,其属性可以包含基本值、对象或者函数。
  ”严格来讲, 这就相当于说对象是一组没有特定顺序的值。
  对象的每个属性或方法都有一个名字,而每个名字都映射到一个值。“

  我们可以用，点语法，方括号方法来获得一个对象的属性，那么你就会发现，和数组有点相似，只不过数组的下标只是数字 0,1,2,3. ..  而我们对象，可以用任何的词来当做属性名。

  特殊形式的key必须加上引号，检索属性的时候，必须加上方括号
  ```
  var obj = {
    "#@!$$%^&^*HHGFYG*" : "哈哈哈",
    "hello stark" : "hi",
    "var" : "么么哒",
    "function" : "xixi",
    age : "xixi",
  }
  // console.log(obj['#@!$$%^&^*HHGFYG*']);
  // console.log(obj['hello stark']);
  // console.log(obj['var']);
  // console.log(obj['var']);
  console.log(obj['a' + 'ge']);

  // console.log(obj.'hello stark'); 错误
  ```

## 面向对象创建的第二种方式 new Object()
  ```
  var obj = new Object(); // 这是一个空对象，里面没有任何属性
  obj.name = "stark";
  obj.age = 18;
  obj.sex = "man";

  console.log(obj);
  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.sex);
  ```
  new 是一种运算符，表示新创建一个对象。
  Object（） O必须是大写
  下面就可以用用 obj.name  来追加属性了。

  在我们平时都比较喜欢用字面量的方式创建对象


  ##对象的方法
  当一个对象的属性值，是一个函数，那么这个函数我们就称为对象的方法（method）。

  ```
  var xiaoming = {
    name:"小明",
    age:18,
    sex: "男",
    sayHello : function(){
      alert("你好，我是" + this.name);
      alert("今年" + this.age + "岁了");
      alert("我是可爱的小" + this.sex +"生");
    },
    zhangda : function(){
      this.age++;
    },
    bianxing : function(){
       if (this.sex == "男") {
           this.sex = "女";
       }else{
         this.sex = "男";
       }
    }


  }

  xiaoming.sayHello();
  xiaoming.zhangda();
  xiaoming.zhangda();
  xiaoming.zhangda();
  xiaoming.zhangda();
  xiaoming.bianxing();
 //  xiaoming.bianxing();
 //  xiaoming.bianxing();
 //  xiaoming.bianxing();
 //  xiaoming.bianxing();
  xiaoming.sayHello();
  ```
  如入上面的案列，
 当一个对象的属性值，是个函数，那么这个函数就成为对象的方法
 比如上面的sayhello就是个属性，所以我们就可以说xiaoming这个对象，有sayHello方法。
一个对象，方法函数里面有this 指的就是这个对象。

### apply 和 call
```
function xiaoming(a, b, c) {
    alert(this.name)
    console.log(a + b +c);
}

// xiaoming.apply(obj,[2,3,4]);
xiaoming.call(obj,2,3,4);
```
call 和 apply 功能是一样的，就是让一个函数里面的this自定义设置为一个指定对象，xiaoming() 函数里面的this 就是obj对象，但是我们发现这个函数里面有参数，那么我们现在又想设置this对象，又想把参数往里面传，此时就有区别了。
obj object 对象
fn.call(obj,参数1，参数2，参数3 .....);
fn.apply(obj,[参数1，参数2，参数3]);

call需要你用逗号罗列所有参数，但是apply是把所有参数写在数组里面，即使只有一个参数，也必须写在数组里面。
```
function showInfo(n){
  for(var i=1; i<=n; i++){
    console.log(this.name);
  }
}
showInfo.apply(obj,[10]);
showInfo.call(obj,10);
```

##构造函数

```
function People(){
  this.name = "xiaoming";
  this.age = 18;
  this.sex = "man";
}

var xiaoming = new People();
```
>  当new 调用之后发生的事情
    构造函数的执行顺序:
   1.隐秘的创健一个空对象 {}
   2.this就指向这个创建的空对象
   3.顺序执行函数体里面的语句
   4.执行完毕之后返回这个对象

  当我们new 多少次，里面的语句就会执行多少次，
  并且返回一个对象，这个对象里面就会有name 属性， age属性
  sex 属性，这些返回的对象都有相同的属性群，
  所以可以看做是一类的东西；
  那么People这个构造函数，
  也可以看成类的定义；

   ```
   function Dog(name,pingzhong,age,sex){
     this.name = name;
     this.pingzhong = pingzhong;
     this.age = age;
     this.sex = sex;
   }

   var taidi = new Dog('xiaohuang','taidi',2,"母狗");
   var zangao = new Dog('大黄','藏獒',2,"公狗");
   ```

    构造函数中，不允许出现return语句，
    出现return语句了，将不能返回新创建的对象

```
function People(name,age,sex){
  this.name = name;
  this.age = age;
  this.sex = sex;
  return {'a':1,"b":2};
}
var xiaobai = new People("xiaobai",19,"man");
// console.log(xiaobai);
```

```
// js没有规定构造函数中语句的规范，想怎么写就怎么写
function People(name,age,tall){
  this.age = age;
  this.name = name;
  this.address = "beijing";
  this.tall = tall;
  // this.status = "成年";
  if (this.age >= 18) {
      this.status = "成年";
  }else {
      this.status = "未成年";
  }

}

var xiaobai = new People("xiaobai",19, "180cm");
console.log(xiaobai.tall);
```
