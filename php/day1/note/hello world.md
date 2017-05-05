端口默认是80

localhost 在浏览器上用lockhost 访问 默认就是访问的就是80端口
localhost:80 == localhost
127.0.0.1:80  
127.0.0.1  这个ip地址是你电脑或服务器自己的内置ip
192.168.
如果端口是80 浏览器就会自动省略

Listen 80
在你的电脑上 cmd 或 poweshell 输入 ipconfig
显示新info 读取  ipv4 192.168.30.110

此时这个就是局域网地址
192.168.30.110

apache

httpd.conf  

DocumentRoot "D:/xampp/htdocs"
# DocumentRoot: The directory out of which you will serve your
# documents. By default, all requests are taken from this directory, but
# symbolic links and aliases may be used to point to other locations.
DocumentRoot 代表你本地访问的网站的跟路径
D:/xampp/htdocs 就是设置的路径



<IfModule dir_module>
    <!-- 按照这个顺序读取 -->
    DirectoryIndex index.php index.pl index.cgi index.asp index.shtml index.html index.htm \
                   default.php default.pl default.cgi default.asp default.shtml default.html default.htm \
                   home.php home.pl home.cgi home.asp home.shtml home.html home.htm
</IfModule>


notice ：
更改任何文件的时候一定要重启Apache

notice ： php 不能右键直接在浏览器打开了 只能用web服务器的这种方式打开， localhost/index.php
