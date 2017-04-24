属性的类型
  数据属性
  访问器属性

  属性的类型
  Object.defineProperty() 方法
  这个方法默认接收三个参数：
    参数一： 属性所在的对象
    参数二： 属性的名字 ，记住一定要加引号
    参数三： 一个描述符对象

      描述符descriptor 对象的属性必须是：
          configurable
          enumerable
          writable
          value

      configurable :
        表示是否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，
        或者能否吧属性修改为访问器属性。
        默认值为true

      enumerable：
        表示能否通过  for in 循环返回属性
        默认值为true

      writable：
        表示是否修改属性的值
        默认值为true

      value：
        包含整数型的数据值，读取属性值的时候，从这个位置读取；
        写入的时候，把新值保存在这个位置。
        默认值为 underfind

    访问器属性
        访问器属性不包含数据值
        它包含一对 getter  setter 函数，这个函数负责返回有效值
      
