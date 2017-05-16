$(window).height()  //是获取当前 也就是你浏览器所能看到的页面的那部分的高度  这个大小在你缩放浏览器窗口大小时 会改变 与document是不一样的  根据英文应该也能理解吧
$(document).scrollTop() 获取垂直滚动的距离  即当前滚动的地方的窗口顶端到整个页面顶端的距离
$(document).scrollLeft() 这是获取水平滚动条的距离
要获取底端 只要获取scrollTop()>=$(document).height()-$(window).height()  就可以知道已经滚动到底端了


怎么判断滚动到底部
