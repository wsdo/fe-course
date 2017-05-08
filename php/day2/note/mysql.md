1.foreach 报错
原因：注册了没有往数据库里面插入成功，
foreach读取了一个空数据 就报了这个错


SELECT * FROM user

select 这个是查询语句
* 代表所有字段

SELECT id,name,age FROM user;

from  这个是来自哪张表 后面跟的是表名字

sql 插入语法：
以下为向MySQL数据表插入数据通用的 INSERT INTO SQL语法：
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );
如果数据是字符型，必须使用单引号或者双引号，如："value"。


insert into user (name,age) values ('stark',18);

insert into tablename (表名);

user (字段1，字段2)

字段：id name age password


MySQL 查询数据

MySQL 数据库使用SQL SELECT语句来查询数据。
你可以通过 mysql> 命令提示窗口中在数据库中查询数据，或者通过PHP脚本来查询数据。
语法

以下为在MySQL数据库中查询数据通用的 SELECT 语法：
SELECT column_name,column_name
FROM table_name
[WHERE Clause]
[OFFSET M ][LIMIT N]
查询语句中你可以使用一个或者多个表，表之间使用逗号(,)分割，并使用WHERE语句来设定查询条件。
SELECT 命令可以读取一条或者多条记录。
你可以使用星号（*）来代替其他字段，SELECT语句会返回表的所有字段数据
你可以使用 WHERE 语句来包含任何条件。
你可以通过OFFSET指定SELECT语句开始查询的数据偏移量。默认情况下偏移量为0。
你可以使用 LIMIT 属性来设定返回的记录数。
