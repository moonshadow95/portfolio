$(function() {
if($(window).width() > 1249) {pc()}
if($(window).width() <= 1250) {mo()}
$(window).resize(function () {
	if($(window).width() > 1249) {pc()}
	if($(window).width() <= 1250) {mo()}
})
	//gnb_scroll
	var state = 0;
	$(window).scroll(function() {
		if($(window).scrollTop() >= 1) {
			$('header').addClass('header_hover')
			$('.btn_menu span').css({
				'background-position':'0 0'
			})
		}
		if($(window).scrollTop() == 0) {
			if(state == 0) {
				$('header').removeClass('header_hover')
				$('.btn_menu span').css({
				'background-position':'0 -30px'
				})
			}
			else {}
		}
	})
	//home_visual_text
	//bb()
	
	setInterval(aa,6100)
	//setInterval(bb,30500)
	function aa() {
		$('.visual_1 li:first-child').insertAfter('.visual_1 li:last-child');
	}
	/*function bb() {
		for(var n = 1;n >= 2; n++) {
			$('.visual_2 li:first-child').css({
				'animation-name':'fine',
				'animation-duration':'3.05s'
			}).insertAfter('.visual_2 li:last-child')	
		}	
	}*/
	//section underline
	$('.inner_cont a').hover(function() {
		$(this).find('strong').css({'text-decoration':'underline'})
		}, function() {
			$(this).find('strong').css({'text-decoration':'none'})
	})
})//ready
function pc() {
	$('header').off()
	//header
	$('header').hover(function() {
		$(this).addClass('header_hover')
		state = 1
	}, function() {
		if($(window).scrollTop() == 0) {
			$(this).removeClass('header_hover')
		}
		else {}
		state = 0;
	})
	
	//gnb_hover
	$('.gnb_wrap>li>a, .recruit_link').hover(function() {
		$(this).find('.gnb_txt').addClass('gnb_hover')
		}, function() {
			$(this).find('.gnb_txt').removeClass('gnb_hover')
	})
	$('.gnb_wrap>li, recruit_link>li').hover(function() {
		$('.gnb2,.gnb2_bg').show()
	},function() {
		$('.gnb2, .gnb2_bg').hide()
	})
	$('.gnb2 a').hover(function() {
		$(this).children('.gnb2_txt').addClass('gnb2_hover')	
		}, function() {
			$(this).children('.gnb2_txt').removeClass('gnb2_hover')	
	})
	//footer
	$('.footer_menu li').hover(function() {
		$(this).children('a').css({'color':'#333'})
	},function() {
		$(this).children('a').css({'color':'#777'})
	})
	var f_state = 1;
	$('.relation_site button').click(function() {
		
		if(f_state <= 0) {
			f_state = 1
			$(this).next('ul').hide();			
			$('#foot_mo strong').css({'color':'#999'})
		}
		else {
			$(this).next('ul').show();
			f_state--
			$('#foot_mo strong').css({'color':'#FFF'})
		}
		$('#foot_pc .more_btn').css({
			'transform':'rotate('+ (f_state * 180) +'deg)'
		})
		$('#foot_mo .more_btn').css({
			'transform':'rotate('+ ((f_state-1) * -45) +'deg)'
		})
	})
	//gnb_scroll
	var state = 0;
	$(window).scroll(function() {
		if($(window).scrollTop() >= 1) {
			$('header').addClass('header_hover')
			$('.btn_menu span').css({
				'background-position':'0 0'
			})
		}
		if($(window).scrollTop() == 0) {
			if(state == 0) {
				$('header').removeClass('header_hover')
				$('.btn_menu span').css({
				'background-position':'0 -30px'
				})
			}
			else {}
		}
	})
}
function mo() {
	$('header').off()
	$('.gnb_wrap>li>a, .recruit_link').off()
	//gnb_mo
	var ham_state = 0;
	$('.btn_menu').click(function () {
		if(ham_state == 1) {
			$('#gnb').hide();
			$('header').css({
				'background':'none','height':'54px'
			})
			$('.btn_menu span').css({
				'width':'24px','height':'24px','background-position':'0 -30px'
			})
			$('.footer_content').removeClass('ham_footer')
			$('.footer_menu, .relation_site').show()
			ham_state = 0
		}
		else {
			$('#gnb').show();
			$('header').css({
				'background':'#0d0f13','height':'100%'
			})
			$('.btn_menu span').css({
				'width':'26px','height':'26px','background-position':'-70px 0'
			})
			$('.footer_content').addClass('ham_footer')
			$('.footer_menu, .relation_site').hide()
			ham_state = 1
		}
	})
	$('#gnb .gnb_wrap li').click(function() {
		var mo_gnbi = $(this).index()
		if(mo_gnbi == 3 || mo_gnbi == 5 || mo_gnbi == 6) {}
		else {
			$(this).children('ul').toggle();
		}	
	})
}