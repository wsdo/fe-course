复习
apache 的配置默认首页
<IfModule dir_module>
    DirectoryIndex index.php index.pl index.cgi index.asp index.shtml stark.html  index.html index.htm \
                   default.php default.pl default.cgi default.asp default.shtml default.html default.htm \
                   home.php home.pl home.cgi home.asp home.shtml home.html home.htm
</IfModule>



cretate table user (  //创建表
        id int(11) primary key not null auto_increment,
        name varchar(255) default null comment '名字',
        age int(11) default null,
        password varchar(255) default null comment '密码',
        sex tinyint(3) default null comment '性别 1：男；2：女；3：保密',
        address varchar(255) default null,
        email varchar(255) default null comment '邮箱',
        mobile int(11) default null comment '手机号',
        primary key('id')
)ENGINE=InnoDB auto_increment=3 default CHARSET=utf8mb4;

ENGINE=InnoDB
  MyISAM

    MyISAM是非事务安全型的，而InnoDB是事务安全型的。
    MyISAM锁的粒度是表级，而InnoDB支持行级锁定。
    MyISAM支持全文类型索引，而InnoDB不支持全文索引。
    MyISAM相对简单，所以在效率上要优于InnoDB，小型应用可以考虑使用MyISAM。
    MyISAM表是保存成文件的形式，在跨平台的数据转移中使用MyISAM存储会省去不少的麻烦。
    InnoDB表比MyISAM表更安全，可以在保证数据不会丢失的情况下，切换非事务表到事务表（alter table tablename type=innodb）。

MyISAM是MySQL的默认存储引擎，基于传统的ISAM类型，支持全文搜索，但不是事务安全的，而且不支持外键。每张MyISAM表存放在三个文件中：frm 文件存放表格定义；数据文件是MYD (MYData)；索引文件是MYI (MYIndex)。


MyISAM 不支持事务
InnoDB 支持事务


truncate tablename;  //把表删掉重新建立表结构 id会从1增加

delete from tablename; // 这个是把表内容删掉，表结构不会改变 id还是从删除的那开始计数

如果要从一开始就需要重新建表  如果表中存在信息不能全部删除  又想接着序号往后走呢  怎么做？
ALTER TABLE `stark` AUTO_INCREMENT=5;

 begin;  # 开始事务

 insert into age value(5);

 if(程序出现异常){
     rollback;   # 回滚
 }else{
     commit; # 提交事务
 }

 当事务提交了以后就不能回滚了


 <?php
try {
  $dbh = new PDO('odbc:SAMPLE', 'db2inst1', 'ibmdb2',
      array(PDO::ATTR_PERSISTENT => true));
  echo "Connected\n";
} catch (Exception $e) {
  die("Unable to connect: " . $e->getMessage());
}

try {  
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $dbh->beginTransaction(); 开启事务
  $dbh->exec("insert into staff (id, first, last) values (23, 'Joe', 'Bloggs')");
  $dbh->exec("insert into salarychange (id, amount, changedate)
      values (23, 50000, NOW())");
  $dbh->commit();

} catch (Exception $e) {
  $dbh->rollBack();
  echo "Failed: " . $e->getMessage();
}
?>
