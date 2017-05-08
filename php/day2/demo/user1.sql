/*
Navicat MySQL Data Transfer

Source Server         : webclassFE7
Source Server Version : 100121
Source Host           : localhost:3306
Source Database       : fe7

Target Server Type    : MYSQL
Target Server Version : 100121
File Encoding         : 65001

Date: 2017-05-08 15:36:37
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

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '李爽', '20', null, '1', null, null, null, null, null, null, null, null);
INSERT INTO `user` VALUES ('2', '刘效荣', '18', null, '1', null, null, null, null, null, null, null, null);
INSERT INTO `user` VALUES ('3', 'stark', '18', 'wsd', '1', null, 'wsd@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('4', 'stark', '18', 'a02065951cc9bf77a167b500bbebb6aa', '1', null, 'wsd@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('5', 'stark', '18', 'a02065951cc9bf77a167b500bbebb6aa', '1', null, 'wsd@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('6', 'stark', '18', 'a02065951cc9bf77a167b500bbebb6aa', '1', null, 'wsd@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('7', 'stark', '18', 'a02065951cc9bf77a167b500bbebb6aa', '1', null, 'wsd@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('8', 'stark', '18', 'a02065951cc9bf77a167b500bbebb6aa', '1', null, 'wsd@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('9', 'stark', '18', 'a02065951cc9bf77a167b500bbebb6aa', '1', null, 'wsd@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('10', 'stark', '18', 'a02065951cc9bf77a167b500bbebb6aa', '1', null, 'wsd@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('11', 'stark', '18', 'a02065951cc9bf77a167b500bbebb6aa', '1', null, 'wsd@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('12', 'stark', '18', 'a02065951cc9bf77a167b500bbebb6aa', '1', null, 'wsd@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('13', '张祎白', '25', 'a9f11e21494887e4eaecb5b1206641e5', '1', null, '969992826@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('14', '', '0', 'd41d8cd98f00b204e9800998ecf8427e', '0', null, '', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('15', '张祎白', '25', 'a9f11e21494887e4eaecb5b1206641e5', '1', null, '969992826@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('16', '嗯嗯嗯呢', '20', '0b4e7a0e5fe84ad35fb5f95b9ceeac79', '1', null, '2312@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('17', '嗯嗯嗯呢', '20', '0b4e7a0e5fe84ad35fb5f95b9ceeac79', '1', null, '2312@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('18', 'asdg', '11', '7e6a6a87bf3ffb29a6dd9f14afdc3b88', '1', null, 'sdag@as.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('19', '宫杰', '11', '202cb962ac59075b964b07152d234b70', '1', null, '123@afdsaf', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('20', '李爽爱张佳鹏', '18', '7a954e9de78e29c5ee742da0d822e5af', '2', null, '123@123.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('21', '徐成凯', '24', 'e10adc3949ba59abbe56e057f20f883e', '1', null, '123456@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('22', '张佳鹏爱李爽', '18', 'fa3733ba66bb33f6c850811dc93bf78c', '2', null, '123@123.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('23', '李爽爱张佳鹏', '18', '7a954e9de78e29c5ee742da0d822e5af', '2', null, '123@123.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('24', '徐成凯', '24', 'e10adc3949ba59abbe56e057f20f883e', '1', null, '123456@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('25', '', '0', 'd41d8cd98f00b204e9800998ecf8427e', '0', null, '', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('26', '徐成凯', '24', 'e10adc3949ba59abbe56e057f20f883e', '1', null, '123456@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('27', '徐成凯', '24', 'e10adc3949ba59abbe56e057f20f883e', '1', null, '123456@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('28', '徐成凯', '24', 'e10adc3949ba59abbe56e057f20f883e', '1', null, '123456@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('29', '1', '1', 'c4ca4238a0b923820dcc509a6f75849b', '1', null, '1@1.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('30', '..', '0', '58b9e70b65a77700ba66e9c64d6b9f89', '2', null, '...@12', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('31', 'zys', '12', 'e10adc3949ba59abbe56e057f20f883e', '1', null, '2423@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('32', '12', '12', 'de872154ffbf91a5dcc0e539dd2d5106', '1', null, '123121@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('33', '..', '0', '58b9e70b65a77700ba66e9c64d6b9f89', '2', null, '...@12', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('34', '王云', '18', 'e10adc3949ba59abbe56e057f20f883e', '2', null, '123456@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('35', '111', '1111', 'b59c67bf196a4758191e42f76670ceba', '1', null, '1111@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('36', 'qw', '13', '006d2143154327a64d86a264aea225f3', '1', null, 'qw@qw.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('37', 'zys', '12', 'e10adc3949ba59abbe56e057f20f883e', '1', null, '2423@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('38', '1231231', '1', '466bd066eaea252f4853611938852cfc', '1', null, 'sad@qwe.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('39', '罗亮', '24', '8613b2a85a62e1ec13f81ad7d3a9c77a', '1', null, '674836599@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('40', 'zsh', '24', '01946e3fa4463c39442ff348aa36b0e8', '1', null, 'zsh@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('41', '23132', '312313', '9b0df268bcda8034bf93db3bb012e27b', '1', null, '3123213@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('42', '李世川', '22', '84aaccd9af06492117386d642bf764e7', '1', null, '1090252441@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('43', '1', '1', 'c4ca4238a0b923820dcc509a6f75849b', '1', null, '123@123.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('44', '', '0', 'd41d8cd98f00b204e9800998ecf8427e', '0', null, '', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('45', '23132', '312313', '9b0df268bcda8034bf93db3bb012e27b', '1', null, '3123213@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('46', '王云', '18', 'e10adc3949ba59abbe56e057f20f883e', '2', null, '123456@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('47', '葛亮', '30', '43d1fbf74e033a65aabc6e071c30f3ad', '2', null, 'sha@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('48', 'qqqq', '12121', 'b2ca678b4c936f905fb82f2733f5297f', '1', null, 'qwe@111.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('49', '刘效荣', '38', '202cb962ac59075b964b07152d234b70', '2', null, 'lxr@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('50', 'zcc', '19', '202cb962ac59075b964b07152d234b70', '2', null, '123@163.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('51', '萨达', '0', 'c99a11a53a3748269e3f86d7ac38df11', '1', null, 'asd2@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('52', '123', '123', '202cb962ac59075b964b07152d234b70', '2', null, '123@123.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('53', 'ewewq', '0', '4d1ea1367acf0560c6716dd076a84d7f', '1', null, 'aginQw@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('54', '罗亮', '24', '8613b2a85a62e1ec13f81ad7d3a9c77a', '1', null, '674836599@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('55', '罗亮', '24', '8613b2a85a62e1ec13f81ad7d3a9c77a', '1', null, '674836599@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('56', 'huangwei', '24', '769ecbb3440fd497d4cdae96294c035c', '1', null, '474590493@qq.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('57', 'asa', '111', 'baa7a52965b99778f38ef37f235e9053', '1', null, 'asa@dsa.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('58', '', '0', 'd41d8cd98f00b204e9800998ecf8427e', '0', null, '', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('59', '', '0', 'd41d8cd98f00b204e9800998ecf8427e', '0', null, '', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('60', '..', '0', '58b9e70b65a77700ba66e9c64d6b9f89', '2', null, '...@12', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('61', '..', '0', '58b9e70b65a77700ba66e9c64d6b9f89', '2', null, '...@12', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('62', '..', '0', '58b9e70b65a77700ba66e9c64d6b9f89', '2', null, '...@12', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('63', '..', '0', '58b9e70b65a77700ba66e9c64d6b9f89', '2', null, '...@12', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('64', '..', '0', '58b9e70b65a77700ba66e9c64d6b9f89', '2', null, '...@12', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('65', '', '0', 'd41d8cd98f00b204e9800998ecf8427e', '0', null, '', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('66', '12', '18', 'c20ad4d76fe97759aa27a0c99bff6710', '1', null, '123@123.com', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('67', '..', '0', '58b9e70b65a77700ba66e9c64d6b9f89', '2', null, '...@12', null, null, null, null, null, null);
INSERT INTO `user` VALUES ('68', 'ewewq', '0', '4d1ea1367acf0560c6716dd076a84d7f', '1', null, 'aginQw@qq.com', null, null, null, null, null, null);
SET FOREIGN_KEY_CHECKS=1;
