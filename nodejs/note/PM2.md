PM2 是一个带有负载均衡功能的 Node 应用的进程管理器。


在使用pm2之前使用node方式来启动 
node app.js
使用node启动方式，有很大弊端
当修改代码后必须重启node

后来使用了supervisor
更改了文件自己重载 不需要重启node

pm2可以实现0秒重载

第一步安装pm2
npm install -g pm2

第二步：
pm2 start app.js
pm2 stop app.js

$ npm install pm2 -g     # 命令行安装 pm2 
$ pm2 start app.js -i 4  # 后台运行pm2，启动4个app.js 
                         # 也可以把'max' 参数传递给 start
                         # 正确的进程数目依赖于Cpu的核心数目
$ pm2 start app.js --name my-api # 命名进程
$ pm2 list               # 显示所有进程状态
$ pm2 monit              # 监视所有进程
$ pm2 logs               # 显示所有进程日志
$ pm2 stop all           # 停止所有进程
$ pm2 restart all        # 重启所有进程
$ pm2 reload all         # 0 秒停机重载进程 (用于 NETWORKED 进程)
$ pm2 stop 0             # 停止指定的进程
$ pm2 restart 0          # 重启指定的进程
$ pm2 startup            # 产生 init 脚本 保持进程活着
$ pm2 web                # 运行健壮的 computer API endpoint (http://localhost:9615)
$ pm2 delete 0           # 杀死指定的进程
$ pm2 delete all         # 杀死全部进程

运行进程的不同方式
$ pm2 start app.js -i max    # 根据有效CPU数目启动最大进程数目
$ pm2 start app.js -i 3      # 启动3个进程
$ pm2 start app.js -x        #用fork模式启动 app.js 而不是使用 cluster
$ pm2 start app.js -x -- -a 23   # 用fork模式启动 app.js 并且传递参数 (-a 23)
$ pm2 start app.js --name serverone  # 启动一个进程并把它命名为 serverone
$ pm2 stop serverone       # 停止 serverone 进程
$ pm2 start app.json        # 启动进程, 在 app.json里设置选项
$ pm2 start app.js -i max -- -a 23                   #在--之后给 app.js 传递参数
$ pm2 start app.js -i max -e err.log -o out.log  # 启动 并 生成一个配置文件
你也可以执行用其他语言编写的app  ( fork 模式):
$ pm2 start my-bash-script.sh    -x --interpreter bash
$ pm2 start my-python-script.py -x --interpreter python