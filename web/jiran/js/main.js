$(function() {
	// alert($('body').height)()) // li높이값 * li 개수
	var doc_height = $('body').height();
	$('.bk_bg').css({'height' : doc_height - 110})
	
	//sub_gnb
	$('#gnb>li').click(function() {
		var n = $(this).index();
		$('.gnb_bg').slideUp();
		$('.bg_' + (n+1)).slideDown();
		$('.gnb2').hide();
		$('.gnb2').eq(n).slideDown();
		
		$('.bk_bg').hide();
	})

	//gnb_info

	for(var i = 0; i <= 4; i++) {
		$('.gnb_info').eq(i).css({
			'background-image' : 'url(img/bg_gnb_info_prod_0' + (i+1) + '.png)'
		})
	}
	//Header_btn
	$('.all_menu_btn').click(function() {
		$('.all_menu').show();
		$('.search_wrap').hide();
		$('.gnb_bg, .gnb2').hide();
	})
	$('.search_btn').click(function() {
		$('.search_wrap').show();	
		$('.all_menu').hide();
		$('.gnb_bg, .gnb2').hide();
	})
	$('.close_btn').click(function() {
		$('.search_wrap').hide();
		$('.all_menu').hide();
	})

	//banner_control
	var ban_num = 1;
	$('.banner_controler button').click(function() {
		//alert($(this).attr('class'));
		switch($(this).attr('class')) {
			case 'prev_num': 
				if(ban_num <= 1) {ban_num = 5}
				else {ban_num--;}
			break;
			case 'next_num':
				if(ban_num >= 5) {ban_num = 1}
				else {ban_num++;}
			break;
		}

		$('.prev_num span').text(ban_num);
		$('.banner_wrap li').hide();
		$('.banner_wrap li:nth-child(' + ban_num + ')').show();
	})
	//banner_auto
	var ban_num = 1;
	var auto_ban = setInterval(ban_rol,1000)
	function ban_rol() {
		//$('.banner_wrap li:first-child').insertAfter('.banner_wrap li:last-child')
		if(ban_num >= 5) {ban_num = 1}
		else {ban_num++;}
		$('.prev_num span').text(ban_num);
		$('.banner_wrap li').hide();
		$('.banner_wrap li:nth-child(' + ban_num + ')').show();
	}
	/*
	$('.next_num').click(function() {
		//5가 되면 1로 바뀌고 증가
		if(ban_num >= 5) {ban_num = 1}
		else {ban_num++}
		$('.prev_num span').text(ban_num);
		$('.banner_wrap li').hide();
		$('.banner_wrap li:nth-child(' + ban_num + ')').show();
	})
	$('.prev_num').click(function() {
		if(ban_num <= 1) {ban_num = 5}
		else {ban_num--}
		//1이 되면 5로 바뀌고 감소
		$('.prev_num span').text(ban_num);
		$('.banner_wrap li').hide();
		$('.banner_wrap li:nth-child(' + ban_num + ')').show();
	})

	$('.next_num').click(function() {

	})
*/
	//Family_Site
	var fm_elm = $('.f_pc li');
	var fm_num = fm_elm.height() * fm_elm.length + 10;
	var fm_h;
	
	$('.f_pc button').click(function() {
		if($('.f_pc ul').height() == 0) {fm_h = fm_num}
		else {fm_h = 0}
		$('.f_pc ul').animate({
			'height' : fm_h, 'top' : -fm_h
		})
	})
	var m_fm_elm = $('.f_m li');
	var m_fm_num = m_fm_elm.height() * m_fm_elm.length;
	var m_fm_h;
	
	$('.f_m button').click(function() {
		if($('.f_m ul').height() == 0) {m_fm_h = m_fm_num}
		else {m_fm_h = 0}
		$('.f_m ul').animate({
			'height' : m_fm_h, 'bottom' : -m_fm_h
		})
	})
})//ready();
