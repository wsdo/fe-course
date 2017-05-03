  /*导航轮播*/
$(document).ready(function(){
	var _index=0;
	$('.carousel_figure img').eq(0).show().siblings('img').hide();
	$('.button li').mouseover(function(){
		clearInterval(timer2);
		_index=$(this).index();
		$(this).addClass('hover').siblings('li').removeClass('hover');
		$('.carousel_figure img').eq(_index).fadeIn().siblings('img').fadeOut();
	})
	$('.button li').mouseout(function(){
		timer2=setInterval(timer,1000);
	})
	var timer=function(){
		_index++;
		if(_index<4){
			if(_index==3){_index=-1}
			$('.button li').eq(_index).addClass('hover').siblings('li').removeClass('hover');
			$('.carousel_figure img').eq(_index).fadeIn().siblings('img').fadeOut();
		}		
	}
	var timer2=setInterval(timer,1000);
	//左右按钮
	//左按钮
	$('span').eq(0).click(function(){
		clearInterval(timer2);
		_index-=1;
		if(_index<0){_index=3}
		console.log(_index);
		$('.button li').eq(_index).addClass('hover').siblings('li').removeClass('hover');
		$('.carousel_figure img').eq(_index).fadeIn().siblings('img').fadeOut();
	})
	$('span').eq(0).mouseout(function(){
		timer2=setInterval(timer,1000);
	})
	//右按钮
	$('span').eq(1).click(function(){
		clearInterval(timer2);
		_index+=1;
		if(_index>3){_index=0}
		console.log(_index);
		$('.button li').eq(_index).addClass('hover').siblings('li').removeClass('hover');
		$('.carousel_figure img').eq(_index).fadeIn().siblings('img').fadeOut();
	})
	$('span').eq(1).mouseout(function(){
		timer2=setInterval(timer,1000);
	})
})