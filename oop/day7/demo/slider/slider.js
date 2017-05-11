(function(){
    window.Slider = function Slider(argsJSON){
        if (!argsJSON.ID) {
            throw new Error("对不起，传入的参数中必须有ID");
            return;
        }
        // * 代表所有的tagName
        this.carousel = document.getElementById(argsJSON.ID);
        // console.log(elems);
        this.leftBtn = this._findClassName("leftBtn")[0];
        // 获取class 为 imageList dom
        this.imageList = this._findClassName("imageList")[0];
        // 这个是获取图片列表
        this.imageLis = this.imageList.getElementsByTagName("li");
        // 主动设置间隔时间
        this.interval = 200;

        // 信号量
        this.idx = 0;
        // 用户传进来的自动播放间隔时间
        this.autoplayinterval = argsJSON.autoplayinterval;
        // 获取有多少张图片
        this.imageLength = this.imageLis.length;
        // 自动播放
        this._autoplay();
        // 缓冲公式
        // 第一个参数是 t 表示当前的帧编号
        // 第二个参数是 b 表示起始位置
        // 第三个参数是 c 表示变化量
        // 第四个参数是 d 表示总帧数
        this.tween = argsJSON.tween || function (t,b,c,d){
                    return c * t / d + b;
                }
    }

    // 获取dom
    // 在原型上面加 _ 下划线是约定俗成的仅供内部调用的
    Slider.prototype._findClassName = function(className){
        var elems = this.carousel.getElementsByTagName("*");
        var arr = [];
        for (var i = 0; i < elems.length; i++) {
            if (elems[i].nodeType == 1 && elems[i].className.indexOf(className) != -1) {
                arr.push(elems[i]);
            }
        }
        return arr;
    }

    Slider.prototype._next = function(){
        if (this.timer) {
            return;
        }
        // 备份开始张位置
        var oldidx = this.idx;
        this.idx++;

        // 判断当前的幻灯片的张数是否超过了总张数
        if (this.idx > this.imageLength - 1) {
            this.idx = 0;
        }
        // 调用animate 动画
        this._animate([
            {
                "obj" : this.imageLis[oldidx],
                "start" : 0,
                "target" : -600
            },
            {
                "obj" : this.imageLis[this.idx],
                "start" : 600,
                "target" : 0
            }
        ],1000);
        // this._animate(this.imageLis[oldidx], 0, -600, 1000);
        // this._animate(this.imageLis[this.idx], 600, 0, 1000);
    }

    // 动画
    Slider.prototype._animate = function(arr,time){
        var self = this;
        // 当前帧
        var currentFrame = 0;
        // 最大帧数
        var maxFame = parseInt( time / this.interval )
        clearInterval(self.timer);
        this.timer = setInterval(function(){
            currentFrame++;
            // 当前帧数不能大于总帧数
            if (currentFrame >= maxFame) {
                clearInterval(self.timer);
                self.timer = null;
            }
            for (var i = 0; i < arr.length; i++){
                // 设置当前图片的移动
                arr[i].obj.style.left = self.tween(currentFrame,arr[i].start,arr[i].target - arr[i].start,maxFame) + "px";
            }
        },this.interval)
    }

    // 自动播放
    Slider.prototype._autoplay = function(){
        var self = this;
        this.time2 = setInterval(function(){
            self._next();
        },this.autoplayinterval)
    }
})()
