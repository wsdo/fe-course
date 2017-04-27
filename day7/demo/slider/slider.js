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
        // this.rightBtn = this._findClassName("rightBtn")[0];
        // console.log(this.rightBtn);
    }

    // 获取dom
    // 在原型上面加 _ 下划线是约定俗成的仅供内部调用的
    Slider.prototype._findClassName = function(className){
        var elems = this.carousel.getElementsByTagName("*");
        var arr = [];
        for (var i = 0; i < elems.length; i++) {
            // console.log(elems[i].nodeType);
            console.log(elems[i].className);

            if (elems[i].nodeType == 1 && elems[i].className.indexOf(className) != -1) {
                arr.push(elems[i]);
            }
        }
        return arr;
    }
})()
