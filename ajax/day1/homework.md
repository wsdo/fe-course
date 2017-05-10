CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '名字',
  `age` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `sex` tinyint(3) DEFAULT NULL COMMENT '性别 1：男；2：女；3：保密',
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `mobile` int(11) DEFAULT NULL COMMENT '手机号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;


要求手敲5遍

1.自己封装post 五分钟搞定
2.写一个留言板
    要求用ajax

    提交留言并且展示
    列表
    删除留言
    
