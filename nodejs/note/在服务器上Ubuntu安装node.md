
## 第一步先更新需要库软件
```
apt-get install vim openssl build-essential libssl-dev wget curl git
```
##　安装脚本　Install script

To install or update nvm, you can use the install script using cURL:

你安装或者更新　ｎｖｍ　你使用下面的方式

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash

```

or Wget:

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```


The script clones the nvm repository to ~/.nvm and adds the source line to your profile (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).


```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm

```