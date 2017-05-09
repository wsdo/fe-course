

管理mysql的方法
    第一种使用工具连接
        管理mysql的工具
            nvicat 收费
            sqlyog
            sequel pro
            https://www.mysql.com/products/workbench/  
            phpMyAdmin
    第二种是在命令行里面使用
        注意一下，命令行操作mysql 结尾需要加分号;

        mysql -uroot -p;

        use tablename;
        show tables; 显示表
        describe tablename; 表的详细描述

mysql:
    增删改查
    增：
        insert into tablename (
                filed1,filed2,filed3
            ) values (
                "stark","shudong","hehe"
            );
    INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );
如果数据是字符型，必须使用单引号或者双引号，如："value"。
    查：
    SELECT column_name,column_name
    FROM table_name


    SELECT * from user where name = "stark" ORDER BY id desc;

    Order By 是排序
    排序方式：
        desc 是倒序
        asc 默认 是正序

    GROUP BY 前面如果没有条件就不需要加where
        分组

    sum 统计所有字段累加
    count 统计次数

    更改：
    UPDATE table_name SET field1=new-value1, field2=new-value2 [WHERE Clause]

    SELECT * from user where name = "刘效荣";

--  UPDATE user set sex = 2 where name = "刘效荣";

删除
万不得已的时候尽量不要用这种东西

    开发程序的原则是：不允许删除任何数据
    平时说的那些删除，就是更改了一个数据的状态不让它显示了，就是删除！

    更改状态就是删除

    select * from  user where status = 10;

    -- UPDATE user set `status` = 30 where id = 2

DROP TABLE table_name ;
例子：
    DROP TABLE stark ;
DELETE FROM table_name [WHERE Clause]
例子：

DELETE FROM `user` WHERE id = 1

参考
http://www.runoob.com/mysql/mysql-union-operation.html

## mysql备份
    备份的两种方式：
        第一种是用：tool
            右键导出
        第二种是命令行：cli
        备份数据库
        一般用在Linux上面写定时任务，的时候自己备份。
        必须进入到你的mysql文件夹里面的bin里面执行
        D:\xampp\mysql\bin>mysqldump -uroot -p fe7 > d:/back/web1.sql

        mysqldump -uroot -p fe7 > d:/back/web1.sql

        把备份的数据恢复到数据库
        mysql -u root -p dbname < 备份的sql文件路径
        
        mysql -u root -p fe7s < d:\back\web1.sql
