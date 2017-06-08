transform

英 [træns'fɔːm; trɑːns-; -nz-]  美 [træns'fɔrm]
vt. 改变，使…变形；转换
vi. 变换，改变；转化

perspective

英 [pə'spektɪv]  美 [pɚ'spɛktɪv]
n. 观点；远景；透视图
adj. 透视的


2d

3d 
perspective : 500px;
transform-style:preserve-3d


```
    div {  舞台
        width: 258px;
        height: 300px;
        border: 1px solid #000;
        perspective: 800px; 舞台加一个景深效果
        margin: 100px;
    }
    
    img { 演员
        border: 1px solid #000;
        transform: rotateX(40deg); 演员负责变形  可以想象成单杠
        -webkit-transition: all 1s ease 0s;
        -moz-transition: all 1s ease 0s;
        transition: all 1s ease 0s;
    }
    
    div:hover img {
        transform: none;
    }
```


关于景深的理解：
iPhone7 plus  单反  微单 里面

景深是指在摄影机镜头或其他成像器前沿能够取得清晰图像的成像所测定的被摄物体前后距离范围。在聚焦完成后，在焦点前后的范围内都能形成清晰的像，这一前一后的距离范围，便叫做景深。在镜头前方（调焦点的前、后）有一段一定长度的空间，当被摄物体位于这段空间内时，其在底片上的成像恰位于焦点前后这两个弥散圆之间。被摄体所在的这段空间的长度，就叫景深。换言之，在这段空间内的被摄体，其呈现在底片面的影象模糊度，都在容许弥散圆的限定范围内，这段空间的长度就是景深。


transform: rotateX(40deg); 演员负责变形  可以想象成单杠

正方向 是后仰，负方向是像你磕头。

transform: rotateY(40deg); 演员负责变形  可以想象成钢管舞


结合 x y z 这几个轴理解一下


backface-visibility:hidden; 把图片翻转背景隐藏


transform-origin: 0% 0px;
transform:rotateY(45deg);  

transform:rotateY的时候就是绕着Y周转，
transform:rotateX的时候就是绕着X周转，

空间移动
translateX 
translateY
translateZ



css3中最经常干的事，就是先让一个元素有 rotateX 或rotateY 或者两个都有，然后再进行空间移动

让教主飞 
transform: rotateX(500deg) rotateY(530deg) translateX(500px) translateZ(500px);

加上这句话之后，就可以让内部的子元素可以实现3d效果
transform-style:preserve-3d  想让一个组合实现3d，必须在他父亲上面加上这句话。

应用transform-style: preserve-3d声明的元素确实是这样表现的，但是，如果使用默认的flat值，其效果表现——恕我想象力有限——想不通：妹子的脸还是左转45度的，同时脑袋似乎移到了身体以外的地方！

因此，基本上，我们想要根据现实经验实现一些3D效果的时候，transform-style: preserve-3d是少不了的。一般而言，该声明应用在3D变换的兄弟元素们的父元素上，也就是舞台元素。




