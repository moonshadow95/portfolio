$(function() {
	//팝업 닫기
	$('.pop_close').click(function() {
		$('.popup').hide();
	});
	
	//GNB
	$('#gnb li').hover(function() {
		$(this).children('ul').show();
	},function() {
		$(this).children('ul').hide();
	})
	$('.has_g3').hover(function() {
		$('.gnb2').css({'width':'400px'})
	},function() {
		$('.gnb2').css({'width':'200px'})
	})
	$('#gnb>li>a').hover(function() {
			$(this).after('<span class="gnb_ov"></span>')
			$('.gnb_ov').animate({'width' : $(this).width()})
		}, function() {
			$('#gnb>li>a+span').remove();
		})
	/*$('.gnb2>li').hover(function() {
		$(this).children('.gnb3').show();
	},function() {
		$(this).children('.gnb3').hide();
	})*/
	
	//All Menu
	$('.all_open').click(function() {
		$('.all_menu_wrap').show()
		$('html, body').css({'overflow-y':'hidden'})
	})
	$('.all_close').click(function() {
		$('.all_menu_wrap').hide()
		$('html, body').css({'overflow-y':'visible'})
	})

	//Quick Menu 배경 이미지
	var q = $('#quick_menu li').length;
	for(var i = 0; i < q;i++) {
		$('#quick_menu li').eq(i).css({
			'background-image':'url(img/icon_quick0'+ i + '.png)'
		})
	}
	//Quick Menu 배경 이미지 hover
	$('#quick_menu li').hover(function() {
		var n = $(this).index();
		$(this).css({
			'background-image':'url(img/icon_quick0' + n + '_ov.png)','background-color':'#bc2335','color':'#FFF'
			})
	},function() {
		var q = $('#quick_menu li').length;
		for(var i = 0; i < q;i++) {
			$('#quick_menu li').eq(i).css({'background-image':'url(img/icon_quick0'+ i + '.png)','background-color':'#FFF','color':'#555'
			})
		}
	})
	//Visual Slide
	$('.vis_btns button').click(function() {
		$('.vis_btns img').attr('src','img/slider_dot.png');
		$(this).children('img').attr('src','img/slider_dot_active.png');
		var vis_view = $('.visual_wrap li').width();
		var vis_i = $(this).index();
		//img_sliding
		$('.visual_wrap ul').animate({
			'margin-left': -vis_view * vis_i
		})
	})
	//원서접수 및 주요학사일정
	$('.schedule_tabs li').click(function() {
		$('.schedule_tabs li').removeClass('tab_on');
		$(this).addClass('tab_on');
		var active_elm = $(this).attr('id');
		var active_num = active_elm.indexOf('_')+1;
	 	var active = active_elm.substr(active_num)
		$('.content').hide();
		$('#cont_' + active).show();
		var sche_url;
		/*if($(this).attr('id') == 'tab_2') {
			sche_url = "https://www.w3schools.com/"
			$('.schedule_more')
		}
		if($(this).attr('id') == 'tab_1') {
			sche_url = "https://www.jiransecurity.com/"
			$('.schedule_more').attr('href',sche_url)
		}*/
		switch($(this).attr('id')) {
			case 'tab_1' :
				sche_url = "https://www.w3schools.com/";
			break;
			case 'tab_2' :
				sche_url = "https://www.jiransecurity.com/";
			break;
			default : sche_url = "#"
		}
		$('.schedule_more').attr('href',sche_url)
	})
	//Campus Life
	//$().on('이벤트이름',function() {})
	//css({p:v,p:v,p:v})
	//animate({p:v,p:v,p:v})
	//on({'evt':func,'evt':func})
	var cam_li = $('.campus_wrap li');
	var cam_ul = cam_li.width() * cam_li.length
	$('.campus_wrap ul').css({'width' : 434 * cam_ul})
	var imgSrc;
	$('.campus_btns button').hover(function() {
		imgSrc = $(this).children('img').attr('src').replace('.png','_ov.png');
		$(this).children('img').attr('src', imgSrc)
		}, function() {
		imgSrc = $(this).children('img').attr('src').replace('_ov.png','.png');
		$(this).children('img').attr('src', imgSrc)
	});
	$('.campus_btns .prev_btn').click(function() {
		$('.slider li:last-child').insertBefore($('.slider li:first-child'));
		$('.slider ul').css({'margin-left' : -430});
		$('.slider ul').animate({'margin-left' : 0});
	})
	$('.campus_btns .next_btn').click(function() {
		$('.slider ul').animate({'margin-left' : -430},function() {
			$('.slider li:first-child').insertAfter($('.slider li:last-child'));
			$(this).css({'margin-left' : 0});
		})
		
	})
	/*
	var imgObj, imgSrc, n = 0;
	$('.campus_btns button').on({
		'click':function() {
			n++;
			$('.slider ul').animate({
				'margin-left':-430 * n
			});
			$('.slider li:nth-child(2)').attr('id','')
			$('.slider li:nth-child(3)').attr('id','center_movie')
		},
		'mouseenter':function() {
			imgObj = $(this).children('img')
			imgSrc = imgObj.attr('src').replace('.png','_ov.png')
			imgObj.attr('src',imgSrc)
		},
		'mouseleave':function() {
			imgSrc = imgObj.attr('src').replace('_ov.png','.png')
			imgObj.attr('src',imgSrc)
		}
	})*/
	
	//Block Banner
	var blockWidth = $('.banner_wrap li').width();
	$('.banner_wrap li').css({'height':blockWidth})
	$('.banner_wrap li').hover(function() {
		$(this).stop().animate({'background-size': '150%'})
	}, function() {
		$(this).stop().animate({'background-size': '100%'})
	})
	//Footer
	
	var fam_len = $('.family_site li').length;
	$('.family_site button').click(function() {
		$('.family_site ul').animate({
			'height': 'toggle'
		})
	})
	$(window).scroll(function() {
		$('#quick_menu').stop().animate({'top':$(window).scrollTop()+180},500)
	//header fix
	var hd_top = $('header').offset().top
	if($(window).scrollTop() >= hd_top) {
		$('header').addClass('header_fix')
	}
	if($(window).scrollTop() <= 0) {
		$('header').removeClass('header_fix')
	}
	})
})//ready()