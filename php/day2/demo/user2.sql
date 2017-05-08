/*
Navicat MySQL Data Transfer

Source Server         : webclassFE7
Source Server Version : 100121
Source Host           : localhost:3306
Source Database       : fe7

Target Server Type    : MYSQL
Target Server Version : 100121
File Encoding         : 65001

Date: 2017-05-08 15:36:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '名字',
  `age` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `sex` tinyint(3) DEFAULT NULL COMMENT '性别 1：男；2：女；3：保密',
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `mobile` int(11) DEFAULT NULL COMMENT '手机号',
  `realname` varchar(255) DEFAULT NULL COMMENT '真实姓名',
  `created_time` int(11) DEFAULT NULL,
  `updated_time` int(11) DEFAULT NULL,
  `status` tinyint(3) DEFAULT NULL COMMENT '状态：',
  `note` text COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4;
SET FOREIGN_KEY_CHECKS=1;
