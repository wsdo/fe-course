/*
Navicat MySQL Data Transfer

Source Server         : webclassFE7
Source Server Version : 100121
Source Host           : localhost:3306
Source Database       : fe7

Target Server Type    : MYSQL
Target Server Version : 100121
File Encoding         : 65001

Date: 2017-05-11 15:10:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT '0',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `content` text COMMENT '留言内容',
  `status` tinyint(3) DEFAULT '10' COMMENT '状态：10正常默认显示 20删除',
  `created_time` int(11) DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
SET FOREIGN_KEY_CHECKS=1;
