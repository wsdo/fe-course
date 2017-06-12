Velocity 是一个简单易用、高性能、功能丰富的轻量级JS动画库。它能和 jQuery 完美协作，并和$.animate()有相同的 API， 但它不依赖 jQuery，可单独使用。 Velocity 不仅包含了 $.animate() 的全部功能， 还拥有：颜色动画、转换动画(transforms)、循环、 缓动、SVG 动画、和 滚动动画 等特色功能。

它比 $.animate() 更快更流畅，性能甚至高于 CSS3 animation， 是 jQuery 和 CSS3 transition 的最佳组合，它支持所有现代浏览器，最低可兼容到 IE8 和 Android 2.3。

Velocity 目前已被数以千计的公司使用在自己的项目中，包括 WhatsApp, Tumblr, Windows, Samsung, Uber 等，这里 Libscore.com 统计了哪些站点正使用 velocity.js。

英文官网：http://velocityjs.org/

中文手册
http://www.mrfront.com/docs/velocity.js/

参数概述和基础写法：

Velocity 接收一组 css 属性键值对 (css map) 作为它的第一个参数，该参数作为动画效果的最终属性。第二个参数是可选参数 为动画的额外配置项。下面为参数的写法：

JavaScript
$element.velocity({
    width: "500px",        // 动画属性 宽度到 "500px" 的动画
    property2: value2      // 属性示例
}, {
    /* Velocity 动画配置项的默认值 */
    duration: 400,         // 动画执行时间
    easing: "swing",       // 缓动效果
    queue: "",             // 队列
    begin: undefined,      // 动画开始时的回调函数
    progress: undefined,   // 动画执行中的回调函数（该函数会随着动画执行被不断触发）
    complete: undefined,   // 动画结束时的回调函数
    display: undefined,    // 动画结束时设置元素的 css display 属性
    visibility: undefined, // 动画结束时设置元素的 css visibility 属性
    loop: false,           // 循环
    delay: false,          // 延迟
    mobileHA: true         // 移动端硬件加速（默认开启）
});


2-3. 逗号分割的参数写法（类似 $.animate）：

JavaScript
$element.velocity({ top: 50 }, 1000);
$element.velocity({ top: 50 }, 1000, "swing");
$element.velocity({ top: 50 }, "swing");
$element.velocity({ top: 50 }, 1000, function() { alert("Hi"); });

$("img").velocity({
    "rotateX": "40deg",
    "rotateY": "40deg",
    "translateZ": "400px"
}, 5000, function() {
    $(this).fadeOut();
})



Option 配置项

Velocity 提供了丰富的可选配置项，可以更好的控制动画，你也可以利用这些配置做出炫酷复杂的动画特效。

1. Duration 动画执行时间
Velocity 的动画执行时间以毫秒为单位，并支持 jQuery 中的动画速度关键字: "slow","normal","fast"。

JavaScript
$element.velocity({ opacity: 1 }, { duration: 1000 });

// 支持 jQuery 中的动画速度关键字：
$element.velocity({ opacity: 1 }, { duration: "slow" });


Progress

progress为动画执行过程中调用的函数， 有elementscomplete, remaining,start, tweenValue5个参数：

elements：当前执行动画的元素，可以用$(elements)来获取
complete：整个动画过程执行到百分之多少，该值是递增的，注意：该值为一个十进制数值 并不带单位 (%)
remaining：整个动画过程还剩下多少毫秒，该值是递减的
start：动画开始时的绝对时间 (Unix time)
tweenValue：动画执行过程中 两个动画属性之间的补间值


加参数的方式
$("img").velocity({
        height: "10em"
    }, {
        loop: 2,
        display: "none"  

        <!--直接在这加一些参数-->
    });


无线循环
loop: true