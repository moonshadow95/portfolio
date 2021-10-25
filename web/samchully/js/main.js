$(function() {
	//GNB
	$('.gnb_menu>li, .gnb_other>li').hover(function() {
		$(this).children('ul').show();
	},function() {
		$(this).children('ul').hide();
	})
	//roll_banner
	/*	
	$('.btn_roll').click(function() {
		$('.btn_roll').children('img').attr('src','img/btn_off_2.gif')
		$(this).children('img').attr('src','img/btn_on_2.gif')

		$('.banner_wrap ul').animate({
			'margin-left' : -$('.banner_wrap li').width()
		}, function() {
			$(this).css({'margin-left' : 0})
			$('.banner_wrap li:first-child').insertAfter($('.banner_wrap li:last-child'))
		})
	})
	*/
	$('.btn_roll').click(function() {
		$('.btn_roll').children('img').attr('src','img/btn_off_2.gif')
		$(this).children('img').attr('src','img/btn_on_2.gif')

		$('.banner_wrap ul').stop().animate({
			'margin-left':-$('.banner_wrap li').width()
		},function() {
			$('.banner_wrap li:first-child').insertAfter($('.banner_wrap li:last-child'))
			$(this).css({'margin-left' : 0})
		})
	})
	//roll_banner_auto
	var auto_roll = setInterval(roll_ban,1000)
	var roll_n = 0
	function roll_ban() {
		$('.btn_roll').children('img').attr('src','img/btn_off_2.gif')
		$(this).children('img').attr('src','img/btn_on_2.gif')

		$('.banner_wrap ul').stop().animate({
			'margin-left':-$('.banner_wrap li').width()
		},function() {
			$('.banner_wrap li:first-child').insertAfter($('.banner_wrap li:last-child'))
			$(this).css({'margin-left' : 0})
		})
		if(roll_n >= $('.btn_roll').length-1) {roll_n = 0}
		else {roll_n++;}
		$('.btn_roll').children('img').attr('src','img/btn_off_2.gif')
		$('.btn_roll').eq(roll_n).children('img').attr('src','img/btn_on_2.gif')
	}
	$('.btn_stop').click(function() {
		$(this).hide()
		$('.btn_play').show()
		clearInterval(auto_roll)
	})
	$('.btn_play').click(function() {
		$(this).hide()
		$('.btn_stop').show()
		auto_roll = setInterval(roll_ban,1000)
	})
	//뉴스센터
	$('.news_wrap button').click(function() {
		$('.news_wrap button').children('img').attr('src','img/btn_off_3.gif')
		$(this).children('img').attr('src','img/btn_on_3.gif')
		var n = $(this).index()
		$('.news_wrap li').fadeOut()
		$('.news_wrap li').eq(n).fadeIn();	
	})
	//뉴스센터 auto_roll
	var auto_news = setInterval(roll_news,1000)
	var news_n = 0
	function roll_news() {
		if(news_n >= $('.news_wrap li').length-1) {news_n = 0}
		else {news_n++;}
		$('.news_wrap li').fadeOut()
		$('.news_wrap li').eq(news_n).fadeIn();
		$('.news_wrap button').children('img').attr('src','img/btn_off_3.gif')
		$('.news_wrap button').eq(news_n).children('img').attr('src','img/btn_on_3.gif')
	}
	$('.news_wrap').hover(function() {
		clearInterval(auto_news)
	},function() {
		auto_news = setInterval(roll_news,1000)
	})
	//사회공헌갤러리
	$('.roll_gal_btn_wrap button').click(function() {
		$('.roll_gal_btn_wrap button').children('img').attr('src','img/btn_off_1.gif')
		$(this).children('img').attr('src','img/btn_on_1.gif')
		var n = $(this).index()
		$('.welfare li').fadeOut()
		$('.welfare li').eq(n).fadeIn();
	})
	//사회공헌갤러리 auto_roll
	var auto_gal = setInterval(roll_gal,1000)
	var gall_n = 0
	function roll_gal() {
		if(gall_n >= $('.welfare li').length-1) {gall_n = 0}
		else {gall_n++;}
		$('.welfare li').fadeOut()
		$('.welfare li').eq(gall_n).fadeIn();
		$('.roll_gal_btn_wrap button').children('img').attr('src','img/btn_off_1.gif')
		$('.roll_gal_btn_wrap button').eq(gall_n).children('img').attr('src','img/btn_on_1.gif')
	}
	$('.welfare').hover(function() {
		clearInterval(auto_gal)
	},function() {
		auto_gal = setInterval(roll_gal,1000)
	})
	//Family_site
	$('.family_site button').click(function () {
		$('.family_site ul').toggle();
	})
	$('.family_site li').click(function() {
		//자신의 텍스트를 get
		//버튼에게 텍스트를 set
		var f_name = $(this).text();
		$('.family_site button').text(f_name)
		//부모 ul 숨김
		$('.family_site ul').hide();
		//자신의 url을 a태그의 href 속성에 set
		var url = $(this).attr('data-url');
		$('.family_site a').attr('href',url)
	})
})//ready