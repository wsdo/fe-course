虚拟主机 
多个域名绑定这一台主机？
    可以基于端口绑定
    基于虚拟主机配置方式



https://console.qcloud.com/cvm
安装Ubuntu server 16.04


在window上面使用xshell  Patty

Xshell 工具连接这个主机 
DSVSxRiqXeh6Py

lnmp
Linux nginx mysql php

nginx

lamp
Linux Apache mysql php

打开这个网址 lnmp一键安装包
https://lnmp.org/


执行下面步骤

```
wget -c http://soft.vpser.net/lnmp/lnmp1.4.tar.gz && tar zxf lnmp1.4.tar.gz && cd lnmp1.4 && ./install.sh lnmp

```


一个网站运行环境
需要一个web服务



域名解析

	主机记录	记录类型	线路类型	记录值	权重	MX优先级	TTL	操作

    主机记录
    @ 如果设置了@符号，表示使用  itnote.cn
    网址前面不需要加前缀就可以访问  比如itnote.cn  不需要 www.itnote.cn  加上www
       
切换root 账号
       sudo su -


在Ubuntu里面是用apt-get方式安装软件
在一台主机上添加网站
执行这条命令，安装一个软件，这个软件可以让你本地文件上传到远程服务器
apt-get install lrzsz
rz 命令是上传本地文件到主机
如果使用mac 或者Linux系统的话
使用scp 命令远程传送文件



项目：
收尾
加上描述
写一个reademe.md

这个项目提供了什么？

有什么特性：
轮播图响应式，响应式，pc 和手机

zepto 
 bootstrap
 sui

 运行在Ubuntu nginx 上面


最好自己上线，感受一下上线，
把网址附加在这。
git地址也放在这。



 上线方式

 基于镜像
 把所有的代码生成一个镜像

 镜像里面包括
 Ubuntu nginx code

 生成一个版本 1.0.1
 通过git tag 

 1.0.1
 小改动就在后面加
 大改动在前面加

 比如1.0.2上线了，突然发现问题，
 怎么尽快修复呢
 按照传统的方式
 修复bug，然后再把代码上传

 如果使用这种方式，发现bug了，直接回滚到上一个可用版本。
 里面回滚到1.0.1

vagrant 管理本地的景象