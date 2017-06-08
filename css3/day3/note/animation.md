动画的定义：
做简单的动画，用from{} to{},还能用百分比，就表示动画时间流逝了这么多的时候，应该处于的状态。

```
    @-webkit-keyframes move {
        0% {
            left: 100px;
        }
        90% {
            left: 150px;
        }
        100% {
            left: 700px;
        }
    }
```
任何属性都能参与动画，transition能的，animation也能。


动画的调用：
animation 属性完整的调用一共有7个参数：
animation: move 1s linear 0s infinite alternate forwards;
第一个参数：动画的名字
第二个参数：动画的总时长
第三个参数：设置动画将如何完成一个周期， 缓冲名字。
第四个参数：设置动画在启动前的延迟间隔，延迟时间，注意如果动画进行很多次，只有第一次开始前有延迟。
第五个参数：运动次数，要无限次就写 infinite 也可以单独设置次数，5
第六个参数：是否来回运动，如果写alternate 那么第偶数次将是时间轴的逆向。就是往返
第七个参数：forwards 表示运动结束之后让这个元素保留在原地。

如果想让动画暂停就给设置动画的dom写上这句话
animation-play-state: paused 让动画暂停。
```
img:hover {
    animation-play-state: paused;
}
```