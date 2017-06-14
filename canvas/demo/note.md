生成一个canvas
把变化的字体写入这个canvas里面
    var ctx = canvas.getContext("2d");
    ctx.font = "20px 微软雅黑";
    ctx.textAlign = "center";
    ctx.textBaseLine = "middle";
    ctx.fillStyle = color;
    ctx.fillText(txt, x, y);

    先写一个img 

ctx.drawImage(img, 0, 0);//img转换为canvas




再创建一个img标签，
var img = document.createElement("img");
 
给他这个img 的src 赋值 base64
img.src = dataUrl;
        document.body.appendChild(img);


再把这个img追加到dom里面


  var dataUrl = canvas.toDataURL();
        var img = document.createElement("img");
        img.src = dataUrl;
        document.body.appendChild(img);


jQuery 的 一个插件
可以把整个html 或div 都可以转成 img
html2img


 ctx.drawImage(img, 0, 0);//img转换为canvas  
            ctx.fillRect(0, 0, 50, 50);  
            var base64 = cav.toDataURL('images/png');//注意是canvas元素才有 toDataURL 方法  
            console.log(base64);  
            $('img')[0].src = base64;//canvas 转换为 img  

另一种处理方案
    你看 这个业务复杂吗？
    如果很复杂，你就和后台商量一下，就直接让用户填写完表单发送到后台，
    让后台处理好传给你一个 img 

    gd库专门处理这种img