
// 备份
// 动画
Slider.prototype._animate = function(obj, start, target, time){
    var self = this;
    // 当前帧
    var currentFrame = 0;
    // 最大帧数
    var maxFame = parseInt( time / this.interval )
    // 总变化量
    var totalVariation = target - start;

    this.timer = setInterval(function(){
        currentFrame++;
        if (currentFrame >= maxFame) {
            clearInterval(this.timer);
            self.timer = null;
        }
        obj.style.left = self.tween(currentFrame,start,totalVariation,maxFame) + "px";
    },this.interval)
    // 缓冲公式
    this.tween = function (t,b,c,d){
                return c * t / d + b;
            }



}
