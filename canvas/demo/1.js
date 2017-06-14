function CircleText(option) {
    this._init(option);
}
CircleText.prototype = {
    _init: function(option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.innerRadius = option.innerRadius || 0; //内圆半径
        this.outerRadius = option.outerRadius || 0; //圆环半径
        this.innerStyle = option.innerStyle || 'red'; //内部圆颜色
        this.outerStyle = option.outerStyle || 'blue' //圆环颜色
        this.text = option.text || 'canvas'; //填充文字
        //让内圆，圆环，字体在一个组中，便于管理
        this.group = new Konva.Group({
            x: this.x,
            y: this.y,
        });
        //初始化一个内圆
        var innerCircle = new Konva.Circle({
            x: 0,
            y: 0,
            radius: this.innerRadius,
            fill: this.innerStyle,
            opacity: .7
        });
        this.group.add(innerCircle);
        //初始化一个圆环
        var outerRing = new Konva.Ring({
            x: 0,
            y: 0,
            innerRadius: this.innerRadius,
            outerRadius: this.outerRadius,
            fill: this.outerStyle,
            opacity: .4
        });
        this.group.add(outerRing);
        //初始化一个文字
        var text = new Konva.Text({
            x: 0 - this.outerRadius,
            y: -7,
            width: this.outerRadius * 2,
            fill: '#fff',
            text: this.text,
            align: 'center',
            fontSize: 17,
            fontFamily: '微软雅黑',
            fontStyle: 'bold'
        });
        this.group.add(text);
    },
    addToGroupOrLayer: function(arg) {
        arg.add(this.group);
    }
}