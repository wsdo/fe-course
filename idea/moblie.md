移动端常见问题

1.开始页面叠在一块，然后图片出来后，又把dom撑开，这样体验很差
```
用js计算image的高度
    var zWin = $(window);
    var poster = {
        "with": 800,
        "height": 455,
    }
    var winWidth = zWin.width();
    var winHeight = zWin.height();
    var posterHeight = (winWidth / poster.with) * poster.height + 'px';

然后再img标签里面设置高度
    <img class="activity-photo" style="height:' + posterHeight + '" src="' + activity.poster + '" alt="activity photo"/>' +
```
2.刚开始加载很乱，可以使用开场动画。
    不要写固定时间
    判断ajax，等到完全把dom填充完后再把开场动画隐藏。

    http://www.cnblogs.com/lhb25/p/loading-spinners-animated-with-css3.html

    http://www.internetke.com/jsEffects/2015121401/


```

dom

<!-- 加载动画 -->
<div class="startAnimation">
    <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    </div>
</div>


 $.ajax({
    success: function(data) {
        等盗success里面把dom加载完后，把动画隐藏。

        $('.infinite-scroll-bottom .list-container').append(html);
        setTimeout(function() {
            $('.startAnimation').hide();
            $('#actList').show();
        }, 200);


    }
}
```

3.返回列表，跳转到之前浏览的位置。
```
 // 实现跳回到浏览页面
    $(function() {
        var value = sessionStorage.getItem("list_id");
        if (value !== null && value !== undefined && value !== '') {
            setTimeout(function() {
                var h = sessionStorage.getItem("scrolltop_id");
                $(".content").scrollTop(h);
            }, 500)
        }
        $(".content").tap(function() {
            var scroll = $(".content").scrollTop();
            sessionStorage.setItem("scrolltop_id", scroll);
        });

        // $(document).on('touchstart', function(ev) {
        //     var scroll = $(document).scrollTop();
        //     sessionStorage.setItem("scrolltop_id", scroll);
        // })
        var storage_html = $('.list-container').html();
        sessionStorage.setItem("list_id", storage_html);
    })
```

4.无线滚动
使用sui来做
自己使用瀑布流布局方式