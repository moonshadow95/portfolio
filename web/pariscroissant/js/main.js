$(function() {
  $('.gnb_wrap>li').hover(function() {
    $(this).children('.gnb2').addClass('gnb_hover')
  }, function() {
    $(this).children('.gnb2').removeClass('gnb_hover')
  })
  $('.search, .mo_search').click(function() {
    $('.search_bg').show();
    $('.search_header').animate({
      'margin-top': '0'
    }, 200);
  })
  $('.close_btn').click(function() {
    $('.search_bg').hide();
    $('.search_header').animate({
      'margin-top': '-90px'
    });
  })
  var state = 0;
  $('.foot_section button').click(function() {
    if (state == 0) {
      $('.brand_site').css({
        'height': '540px',
        'top': '-356px'
      });
      $('.brand_site>ul').animate({
        'margin-top': '-21px'
      });
      $(this).children('i').css({
        'transform': 'rotate(180deg)'
      });
      state = 1;
    } else {
      $('.brand_site').css({
        'height': '0',
        'top': '0'
      });
      $('.brand_site>ul').css({
        'margin-top': '540px'
      });
      $(this).children('i').css({
        'transform': 'none'
      });
      state = 0;
    }
  })
  $('.gnb_wrap>li').click(function() {
    $('.gnb2').hide();
    $(this).children('.gnb2').show();
    $('.gnb_wrap i').css({
      'transform': 'rotate(180deg)'
    })
    $(this).find('i').css({
      'transform': 'rotate(0)'
    })
  })
  $('.mo_nav').click(function() {
    $(this).hide();
    $('#gnb').animate({
      'margin': '70px 0 0 0'
    }, 100);
    $('.mo_nav_bg').show();
  })
  $('.nav_close').click(function() {
    $('#gnb').animate({
      'margin': '70px 0 0 -200%'
    });
    $('.mo_nav_bg').hide();
    $('.mo_nav').show();
  })

  // Hot&New
  var roll_len = $('#roll_menu li').length;
  var roll_wid = $('#roll_menu li:nth-child(2)').outerWidth(true);
  $('#roll_menu ul').css({
    'width': roll_len * roll_wid
  })

  $('#roll_menu button').click(function() {
    var btnName = $(this).attr('class')
    if (btnName == 'btn_r') {
      $('#roll_menu ul').stop(false, true).animate({
        'margin-left': -roll_wid
      }, function() {
        $('#roll_menu li:first-child').insertAfter($('#roll_menu li:last-child'));
        $('#roll_menu ul').css({
          'margin-left': 0
        })
      })
    }
    if (btnName == 'btn_l') {
      $('#roll_menu li:last-child').insertBefore($('#roll_menu li:first-child'));
      $('#roll_menu ul').css({
        'margin-left': -roll_wid
      })
      $('#roll_menu ul').stop().animate({
        'margin-left': 0
      })
    }
  })

  // instagram
  var ins_len = $('.sns_wrap li').length;
  var ins_wid = $('.sns_wrap li:nth-child(2)').outerWidth(true);
  $('.sns_wrap>ul').css({
    'width': ins_len * ins_wid
  })

  $('.sns_header button').click(function() {
    var btnName = $(this).attr('class')
    if (btnName == 'btn_r') {
      $('.sns_wrap ul').stop(false, true).animate({
        'margin-left': -ins_wid
      }, function() {
        $('.sns_wrap li:first-child').insertAfter($('.sns_wrap li:last-child'));
        $('.sns_wrap ul').css({
          'margin-left': 0
        })
      })
    }
    if (btnName == 'btn_l') {
      $('.sns_wrap li:last-child').insertBefore($('.sns_wrap li:first-child'));
      $('.sns_wrap ul').css({
        'margin-left': -ins_wid
      })
      $('.sns_wrap ul').stop().animate({
        'margin-left': 0
      })
    }
  })
  var sec_len = $('section li').length;
  var sec_wid = $('section li:nth-child(2)').outerWidth(true);
  $('section ul').css({
    'width': sec_len * sec_wid
  })

//배너롤링
  var news_roll = setInterval(roll_news, 2000)
  var event_roll = setInterval(roll_event, 2000)
  var reserv_roll = setInterval(roll_reserv, 2000)

  function roll_news() {
    $('#news ul').stop(false, true).animate({
      'margin-left': -sec_wid
    }, function() {
      $('#news li:first-child').insertAfter($('#news li:last-child'));
      $('#news ul').css({'margin-left': 0})
    })
  }

  $('#news .mask').hover(function() {
    clearInterval(news_roll)
  },function() {
    news_roll = setInterval(roll_news, 2000)
  })

  function roll_event() {
    $('#event ul').stop(false, true).animate({
      'margin-left': -sec_wid
    }, function() {
      $('#event li:first-child').insertAfter($('#event li:last-child'));
      $('#event ul').css({'margin-left': 0})
    })
  }

  $('#event .mask').hover(function() {
    clearInterval(event_roll)
  },function() {
    event_roll = setInterval(roll_event, 2000)
  })

  function roll_reserv() {
    $('#reserv ul').stop(false, true).animate({
      'margin-left': -sec_wid
    }, function() {
      $('#reserv li:first-child').insertAfter($('#reserv li:last-child'));
      $('#reserv ul').css({'margin-left': 0})
    })
  }

  $('#reserv .mask').hover(function() {
    clearInterval(reserv_roll)
  },function() {
    reserv_roll = setInterval(roll_reserv, 2000)
  })
})
