$(function() {
	//GNB 배경
	//$('.gnb li').mouseenter(function() {})
	//$('.gnb li').mouseleave(function() {})
	$('.gnb>li').hover(function() {
		var bg_height = $(this).children('.gray_bg').height();
		var gnbi = $(this).index();
		$('.header_bg').fadeIn();	
		$('.gray_bg').eq(gnbi).fadeIn();
		$('.gray_bg ul').fadeIn();
		$('.header_bg').css({'height' : bg_height})
	},function() {
		$('.header_bg').hide();
		$('.gray_bg').hide();
	})
	//Main Visual
	$('.vis_control button').click(function() {
		var vis_num = $(this).attr('class').slice(-1);
		$('.slide_box').hide();
		$('.slide' + vis_num).fadeIn();

		$('.vis_control button').css({
			'background-position' : '0 0'
		})
	})
		/*$('.gnb>li').click(function() {
		alert($(this).children('.gray_bg').height())
	})*/

	var lh, status = 0;

	//pd_slider
	/*var n = 0;
	$('.prod_btn button').click(function() {
		switch($(this).attr('class')) {
			case 'prod_right' : 
				if(n >= 3) {n = 3}
				else {n++;}
			break;
			case 'prod_left' :
				if(n <= 0) {n = 0}
				else {n--;}
			break;		
		}
		$('.product_list ul').animate({'margin-left':-390 * n})

	})*/
	var pdObj = $('.pd_slider li');
	var imgtype;
	for(var i = 0;i < pdObj.length;i++) {
		if(i == 6) {imgtype = 'png'}
		else {imgtype = 'jpg'}
		pdObj.eq(i).css({
			'background-image' : 'url(img/pd_'+ (i + 1) +'.'+ imgtype + ')'
		})
	}
	$('.prod_btn button').click(function() {
		var btnName = $(this).attr('class');
		if(btnName == 'prod_left') {
			$('.pd_slider li:last-child').insertBefore($('.pd_slider li:first-child'));
			$('.pd_slider ul').css({'margin-left' : -$('.pd_slider li').outerWidth(true)})
			$('.pd_slider ul').stop().animate({'margin-left':0})
		}
		if(btnName == 'prod_right') {
			$('.pd_slider ul').stop(false,true).animate({
				'margin-left':-390},function() {
				$('.pd_slider li:first-child').insertAfter($('.pd_slider li:last-child'));
				$(this).css({'margin-left':0})
			})
		}
	})
	var auto_prod = setInterval(prod,1000)
	function prod() {
			$('.pd_slider ul').stop(false,true).animate({
				'margin-left':-390},function() {
				$('.pd_slider li:first-child').insertAfter($('.pd_slider li:last-child'));
				$(this).css({'margin-left':0})
			})
	}

	//Footer 언어설정 버튼
	$('.language button').click(function() {
		/*if($('.language').height() <= 24) {lh = 74}*/
		if(status == 0) {lh = 50; status = 1;}
		else {lh = 0; status = 0}
		$('.language .list_wrap').animate({'height' :  lh});
	});
	var fsh = 0, fs = 0, t = -2;
	//Footer 패밀리사이트 버튼
	/* $('.family_site button').click(function() {
		switch(fs) {
			case 0 : fsh = 122; fs = 1; t = -124; break; 
			case 1 : fsh = 0; fs = 0; t = -2; break; 
		}
		$('.family_site .list_wrap').animate({'height' : fsh , 'top' : t}); 
	*/	

	var fsh, fss = 0, t;
	$('.family_site button').click(function(){
		if(fss == 0) {fsh = 122; t = -124; fss = 1;}
		else {fsh = 0; t = -2; fss = 0; }
		$('.family_site .list_wrap').animate({'height' : fsh, 'top' : t})
	})
	//SNS
	$('.sns_tabs li').mouseenter(function() {
		var cont_num = $(this).attr('class').slice(-1)
		$('.cont_box').hide();
		$('.cont' + cont_num).show();
	})
	var sns_num = 1;
	var auto = setInterval(sns_roll,1000);
	$('.tab1').addClass('tab_on_1')
	function sns_roll() {
		if(sns_num >= 3) {sns_num = 1}
		else {sns_num++}
		$('.sns_tabs li').removeClass('tab_on_'+(sns_num-1))
		$('.tab'+sns_num).addClass('tab_on_'+sns_num)
		$('.cont_box').hide();
		$('.cont'+ sns_num ).show();
	}
})//ready