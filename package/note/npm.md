
有些疑惑
01 - What is npm?
    npm 是什么东东？

NPM的全称是Node Package Manager[1]  ，是一个NodeJS包管理和分发工具，已经成为了非官方的发布Node模块（包）的标准。
如果你熟悉ruby的gem，Python的pypi、setuptools，PHP的pear，那么你就知道NPM的作用是什么了。
Nodejs自身提供了基本的模块，但是开发实际应用过程中仅仅依靠这些基本模块则还需要较多的工作。幸运的是，Nodejs库和框架为我们提供了帮助，让我们减少工作量。但是成百上千的库或者框架管理起来又很麻烦，有了NPM，可以很快的找到特定服务要使用的包，进行下载、安装以及管理已经安装的包。



## 02 - Installing Node.js and updating npm
### Installing Node.js
    If you're using OS X or Windows, the best way to install Node.js is to use one of the installers from the Node.js download page.

    If you're using Linux, you can use the installer, or you can check NodeSource's binary distributions to see whether or not there's a more recent version that works with your system.

    Test: Run node -v. The version should be higher than v0.10.32.

    from the Node.js download page

    https://nodejs.org/en/download/

### Updating npm

Node comes with npm installed so you should have a version of npm. However, npm gets updated more frequently than Node does, so you'll want to make sure it's the latest version.

npm install npm@latest -g

Test: Run npm -v. The version should be higher than 2.1.8.

Installing npm manually

For more advanced users.

The npm module is available for download at https://registry.npmjs.org/npm/-/npm-{VERSION}.tgz.


##　Installing npm packages locally
    There are two ways to install npm packages: locally or globally. You choose which kind of installation to use based on how you want to use the package.

    If you want to depend on the package from your own module using something like Node.js' require, then you want to install locally, which is npm install's default behavior. On the other hand, if you want to use it as a command line tool, something like the grunt CLI, then you want to install it globally.

    To learn more about the install command's behavior, check out the CLI doc page.

    ### Installing

    A package can be downloaded with the command

    > npm install <package_name>
    This will create the node_modules directory in your current directory(if one doesn't exist yet), and will download the package to that directory.


## Using a package.json

The best way to manage locally installed npm packages is to create a package.json file.

A package.json file affords you a lot of great things:

1.It serves as documentation for what packages your project depends on.
它可以作为你的项目所依赖的包的文档
2.It allows you to specify the versions of a package that your project can use using semantic versioning rules.
它允许您指定一个包的版本，您的项目可以使用语义版本控制规则。

3.Makes your build reproducible which means that its way easier to share with other developers.
使您的构建具有可复制性，这意味着它更容易与其他开发人员共享。


To create a package.json run:

> npm init

This will initiate a command line questionnaire that will conclude with the creation of a package.json in the directory you initiated the command.

You can get a default package.json by running npm init with the --yes or -y flag:

> npm init --yes
This will ask no questions, and instead will generate a default package.json using information extracted from the current directory.

name: the current directory name
version: always 1.0.0
description: info from the readme, else an empty string ""
main: always index.js
scripts: by default creates a empty test script
keywords: empty
author: empty
license: ISC
bugs: info from the current directory, if present
homepage: info from the current directory, if present