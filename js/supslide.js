$(function() {
	var i = 0;			//------计数器
	var firstUl = $('.slide ul').first().clone(); 
	//将第一个ul放到最后个ul后，设置.slide的宽度为图片张数*图片宽度
	$('slide').append(firstUl).width($('.slide ul').length * ($('.slide ul').width()));
	// 下一个按钮
	$('.next').click(function() {
		i++;
		if(i == $('.slide ul').length) {
			i = 1; //这里不是i=0
			$('.slide').css({
				left: 0
			}); //保证无缝轮播，设置left值
		};
		$('.slide').stop().animate({
			left: -i * 1200
		}, 500);
	})
	// 上一个按钮
	$('.prev').click(function() {
		i--;
		if(i == -1) {
			i = $('.slide ul').length - 2;
			$('.slide').css({
				left: -($('.slide ul').length - 1) * 1200
			});
		}
		$('.slide').stop().animate({
			left: -i * 1200
		}, 500);
	})
})
