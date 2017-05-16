
[580, 0, 0]
[580, 433, 0]
[580, 433, 433]
 [580, 1139, 433]
 [580, 1139, 866]

 初始化 [0,0,0];
 // 第一次
  找出数组当中的最小值
  最小值为下标为0
  把下标为零的这个值更改为当前的盒子高度
  第一个盒子高度为 580
  把第一个盒子的高度给这个数组下标为0的值
  [580,0,0]
  colHeight = [580,0,0];





 // 第二次
    此时数组为[580,0,0];
    找出数组当中最小值
    找到最小值的下标为1
    然后把它更改为当前盒子的高度 443
    [580,443,0];

 // 第三次

     此时数组为[580,443,0];
     找出数组当中最小值
     找到最小值的下标为1
     然后把它更改为当前盒子的高度 443
     [580,443,443];

 // colHeight = [580,433,433];
 // 第四次
 // [580,]




 // 第一次
  找出数组当中的最小值
  colHeight = [0,0,0];
  var minValue = _.min(colHeight);
  此时打算更改这个数组中最小值
  第一步先找到这个数组中最小值所在的下标位置
  var minIndex = _.indexOf(colHeight,minValue)

  第二步根据这个下标位置去更改这个数组
  var outerHeight =  $(this).outerHeight() + 30;
  colHeight[minIndex] += outerHeight;


  最小值为下标为0
  把下标为零的这个值更改为当前的盒子高度
  第一个盒子高度为 580
  把第一个盒子的高度给这个数组下标为0的值
  [580,0,0]
  colHeight = [580,0,0];


  // each 循环第一次的时候 []
    var minValue = _.min(colHeight);
    // console.log(minValue);
    // console.log(colHeight);
    var minIndex = _.indexOf(colHeight,minValue)
    // 判断上面哪个最矮，就放在哪个下面
    // 每次循环得到盒子的高度
     var outerHeight =  $(this).outerHeight() + 30;
      // console.log(outerHeight);
    colHeight[minIndex] += outerHeight;

    [10,20,30]
    $(this).outerHeight()
      把这个数组看成三列
      每次都累加
      colHeight[minIndex] += outerHeight;


      $(this).css({
        "top": minValue,
        "left" : minIndex * boxWidth,
      })
