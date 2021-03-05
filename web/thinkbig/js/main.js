$(function() {
	$('.gnb>li').hover(function() {
		//mouse enter
		$(this).children('ul').show();
	}, function() {
		//mouse leave
		$('.gnb ul').hide();
	});
	//key_visual
	$('.visual_btn .nbtn').click(function() {
		$('.visual_btn .nbtn').removeClass('visual_on')
		$(this).addClass('visual_on')
		var n = $(this).index()
		$('.key_visual li').fadeOut()
		$('.key_visual li').eq(n).fadeIn();	
	})
	//key_visual_auto
	var vis_auto = setInterval(vis_roll,1000)
	var vis_n = 0
	function vis_roll() {
		if(vis_n >= $('.key_visual li').length-1) {vis_n = 0}
		else {vis_n++;}
		$('.key_visual li').fadeOut()
		$('.key_visual li').eq(vis_n).fadeIn();
		$('.visual_btn .nbtn').removeClass('visual_on')
		$('.visual_btn .nbtn').eq(vis_n).addClass('visual_on')
	}
	$('.visual_btn .pause').click(function() {
		clearInterval(vis_auto);
		$(this).hide();
		$('.visual_btn .play').show();
	})
	$('.visual_btn .play').click(function() {
		vis_auto = setInterval(vis_roll,1000);
		$(this).hide();
		$('.visual_btn .pause').show();
	})
	//slider_img
	for(var i = 0;i <= $('.slider li').length;i++) {
		$('.slider li').eq(i).css({
			'background': 'url(img/rollingBanner_'+(i+1)+'.jpg)'
		})
	}
	//roll_banner
	$('.rolling_banner .control_btn button').click(function() {
		var btn_i = $(this).index()
		$('.control_btn button').removeClass('control_btn_on')
		$(this).addClass('control_btn_on')
		$('.slider').stop().animate({
			'margin-left': -$('.slider_mask li').width() * btn_i
		}, function() {
			$('.slider>li:first-child').insertAfter($('.slider>li:last-child'))
			$('.slider').css({'margin-left': 0})
		})
	})
/*
		$('.banner_wrap ul').stop().animate({
			'margin-left':-$('.banner_wrap li').width()
		},function() {
			$('.banner_wrap li:first-child').insertAfter($('.banner_wrap li:last-child'))
			$(this).css({'margin-left' : 0})
		})*/
	
	//family_site
	$('.family_site button').click(function() {
		$('.family_site .family_link').toggle();
	})
});//ready()