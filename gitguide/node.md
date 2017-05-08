git

notice
    1.在一个git项目里面不允许在里面再创建一个git项目
比如我git clone https://github.com/7fe/guide.git  shangke

    2.在提交自己的代码之前，
    0. git pull 协同的时候必须使用
    1. git status 查看哪些文件改动，以防你提交一些不必要的东西。
    2. git diff  查看你的文件更改的地方 是否是真正是你想要更改的 ，如果不是去编辑器更改你的代码。
    3. git push  把你本地的代码提交到远程

    notice ：先pull 然后再push

场景1：
自己新创建一个仓库
    打算把本地的项目代码推送到远程仓库
    这个时候需要你执行
    git init  初始化 产生一个.git 隐藏文件夹 这个时候会产生一个master分支
    git add . 把所有的项目添加到本地仓库
    git commit -am'init' 提交到仓库

    git remote add origin https://github.com/7fe/guides.git

    给本地的仓库添加一个远程地址

    git push origin master  把本地的master分支提交到远程

    此时你的项目就可以在远程打开了


    git remote -h  查看关于remote帮助

    git remote -v 查看本地项目库的远程地址

    git remote remove origin 这个是把远程的地址删掉

    怎么更改远程库地址？

    git remote -v  查看本地远程库地址
    git remote remove origin  删除本地的地址
    git remote add origin 远程库地址比如(https://github.com/7fe/guides.git)

    怎么切换分支？
    git checkout -b 创建并切换分支
    git checkout 分支名字  切换到这个分支

    协同开发的时候怎么授权别人可以提交代码？

    之前正则分支的文件在正则分支里面能看见,在master分支里面看不见,这是为什么?

    分支是什么？
    分支解决什么问题？

    git版本控制，这个版本又是什么？


    在一个分支里面pull下来文件到本地 然后我切换分支在pull  之前pull下来的看不到了？

        answer：分支？
        相当于window上面的文件夹，复制一个留了一个备份


        在开发项目的过程中，正在开发一个模块中，此时你老板紧急让你修改一个bug ，
        怎么办？
        把此时的代码复制一份，再把所有的代码撤销到没开发这个功能之前，再修改bug

    有了git就不需要这么麻烦了
        开发这个功能之前，先创建一个特性分支，就是这个功能分支，当你老板让你紧急修复bug的时候，你此时只需要把你的分支切换到master分支，然后再创建一个紧急修复bug 分支，修改完了测试好了，再合并到master主分支，上线，然后再切换到你这个特性分支继续开发!
