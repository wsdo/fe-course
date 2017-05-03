贪吃蛇笔记

绘制地图
  ```
  // 绘制地图
  var table = document.getElementById("table");

  var maxTable = 20; //最大表格
  var tds = []; //把表格都存为二维数组 方便蛇身读取
  for(var i = 0; i < maxTable; i++){
      var tr = document.createElement("tr");
      // 声明一个空数组，用来存放里面的td
      var thisrowid = [];
      for(var j = 0; j < maxTable; j++){
          var td = document.createElement("td");
          tr.appendChild(td);
          // 把td追加到里面行的数组
          thisrowid.push(td);
      }
      // console.log(thisrowid);
      // 把行和列的数组追加到一个新的数组
      tds.push(thisrowid);
      table.appendChild(tr);
  }
  // console.log(tds);
    // tds[4][4].className = "red";
  ```


让小蛇动起来

```
this.bodyArr.unshift({
  x : this.bodyArr[0].x + 1,
  y : this.bodyArr[0].y
})
这个方法可以在小蛇的头部添加一个像素（td）
因为y就是列不变，x行增加了一个 就会在右边头部增加一个
```

```
this.bodyArr.pop(); //删除尾巴
这个代码可以让小蛇的尾巴删除
```

```
Snake.prototype.move = function(){
    this.bodyArr.pop(); //删除尾巴
    // this.bodyArr.unshift({
    //   x : this.bodyArr[0].x + 1,
    //   y : this.bodyArr[0].y
    // })
    // 让蛇能改变方向
    switch (this.direction) {
      case "right":
          this.bodyArr.unshift({
            x : this.bodyArr[0].x,
            y : this.bodyArr[0].y + 1
          })

        break;
      case "up":
          this.bodyArr.unshift({
            x : this.bodyArr[0].x -1,
            y : this.bodyArr[0].y
          })

        break;
      case "down":
          this.bodyArr.unshift({
            x : this.bodyArr[0].x +1,
            y : this.bodyArr[0].y
          })

        break;
      case "left":
          this.bodyArr.unshift({
            x : this.bodyArr[0].x,
            y : this.bodyArr[0].y - 1
          })

        break;
      default:

    }
    // 蛇头 和食物的x坐标 y左边相等
    // 表示蛇吃到食物了此时就调用长大方法
    if (this.bodyArr[0].x == food.foodx && this.bodyArr[0].y == food.foody) {
        // 食物改变位置
        food.change();
        // 小蛇自己长大一个td
        this.growup();
    }
}

Snake.prototype.bingEvent = function(){
    var self = this;
    document.onkeydown = function(event){
        event = event || window.event;
        switch (event.keyCode) {
          case 37:
              if (self.direction == "right") {
                  return;
              }
              self.direction = "left";
            break;
          case 38:
              if (self.direction == "down") {
                  return;
              }
              self.direction = "up";
            break;
          case 39:
              if (self.direction == "left") {
                  return;
              }
              self.direction = "right";
            break;
          case 40:
              if (self.direction == "up") {
                  return;
              }
              self.direction = "down";
            break;
          default:

        }

    }
}
```
