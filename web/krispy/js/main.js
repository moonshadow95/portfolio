$(function() {
	//alert('test')
	//GNB
	$('.gnb li').hover(function() {
		$('.gnb_bg').stop().fadeIn();
		$('.gnb>li>ul').stop().fadeIn();
		},function() {
		$('.gnb_bg').stop().fadeOut();
		$('.gnb>li>ul').stop().fadeOut();
	})
	
	//Key_visual
	$('.vis_btn button').click(function() {
		n = $(this).index();
		vis_rol()
		
	})
	//Key_visual_auto
	var n = 1
	var auto_key = setInterval(vis_rol,1000)
	
	function vis_rol() {
		if(n >= 7) {n=1}
		else {n++}
		$('.slide_box').hide();
		$('.slide'+n).fadeIn(500)
		$('.vis_btn button').removeClass('vis_on')
		$('#btn'+n).addClass('vis_on')
		
	}
	$('.vis_btn #vis_stop').click(function() {
		clearInterval(auto_key)
	})
	$('.vis_btn #vis_play').click(function() {
		auto_key = setInterval(vis_rol,1000)
	})
	// 신제품 배너
	$('.new_pd button:nth-child(1)').click(function() {
		$('.new_pd li').hide();
		$('.new_pd li:nth-child(1)').show();
	});
	$('.new_pd button:nth-child(2)').click(function() {
		$('.new_pd li').hide();
		$('.new_pd li:nth-child(2)').show();
	});

	// 이벤트 배너
	
	$('.event button:nth-child(1)').click(function() {
		$('.event li').hide();
		$('.event li:nth-child(1)').show();
	});
	$('.event button:nth-child(2)').click(function() {
		$('.event li').hide();
		$('.event li:nth-child(2)').show();
	});

	// 홈서비스 배너
	$('.home_svc button').click(function() {
		$('.home_svc li').hide();
	})
	$('.home_svc button:nth-child(1)').click(function() {
		$('.home_svc li:nth-child(1)').show();
	});
	$('.home_svc button:nth-child(2)').click(function() {
		$('.home_svc li:nth-child(2)').show();
	});
	$('.home_svc button:nth-child(3)').click(function() {
		$('.home_svc li:nth-child(3)').show();
	});
	$('.home_svc button:nth-child(4)').click(function() {
		$('.home_svc li:nth-child(4)').show();
	});
	
	//모바일 쿠폰
	var coupon_wid = $('.coupon_box li').width();
	$('.prev_coupon').click(function() {
		$('.coupon li:last-child').insertBefore($('.coupon li:first-child'))
		$('.coupon_box ul').css({'margin-left': -coupon_wid})
		$('.coupon_box ul').stop().animate({'margin-left':0})
	})
	$('.next_coupon').click(function() {
		$('.coupon_box ul').stop().animate({
			'margin-left': -coupon_wid},function() {
			$('.coupon li:first-child').insertAfter($('.coupon li:last-child'))
			$('.coupon_box ul').css({'margin-left':0})
		})
	})

	// 버튼 스타일 변경
	/*$('.cont_btn button').click(function() {
		$('.cont_btn button').css('background','url(img/ban_control_off.png) no-repeat center')
		$(this).css('background','url(img/ban_control_on.png)')
	})*/
	$('.new_pd .cont_btn button').click(function() {
		$('.new_pd .cont_btn button').removeClass('cont_on')
		$(this).addClass('cont_on')
	})
	$('.event .cont_btn button').click(function() {
		$('.event .cont_btn button').removeClass('cont_on');
		$(this).addClass('cont_on');
	})
	$('.home_svc .cont_btn button').click(function() {
		$('.home_svc .cont_btn button').removeClass('cont_on')
		$(this).addClass('cont_on')
	})
	//Worldwide
	$('.world_map dd').hover(function() {
		$(this).children('span').show();
		$('.world_map dd').css({'z-index' : 1})
		$(this).css({'z-index' : 10})
		},function() {
		$('.world_map dd span').hide();
	})
	$('.world_close').click(function() {
		
	})
	$('.world').click(function() {

		$('.world_map').css({
			'border-top' : '5px solid #00704a','padding' : '50px 0','overflow' : 'visible'
		}).stop(false,true).animate({'height':'660px'})
		$('.world_close').show();
	})
	$('.world_close').click(function() {
		$('.world_map').css({
			'border-top' : 'none','padding' : '0','overflow' : 'hidden'
		}).stop(false,true).animate({
			'height':'0'})
		$(this).hide();

	})
	//family_site
	$('.fam_sel').click(function() {
		$('.fam_list').toggle();
	})
})//ready()














