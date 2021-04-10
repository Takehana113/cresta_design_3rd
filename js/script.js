$(function () {
  $(window).scroll(function () {
    scroll_effect();
  });

  //メニューに背景色をつける
  $(window).scroll(function () {
    let trigger = $('#nav-trigger').offset().top;
    let scroll = $(window).scrollTop();
    if (scroll >= trigger) {
      $('.header').css('background-color', 'rgba(160, 160, 160, 0.5)');
    } else {
      $('.header').css('background-color', 'transparent');
    }
  });

  $(".openbtn4").click(function () {
    $(this).toggleClass('active');
    menuToggle();
  });

  $(".menu-list__link").click(function () {
    $(".openbtn4").toggleClass('active');
    menuToggle();
  });

  $("#back-toppage").click(function () {
    window.location.href = "/";
  });

  $("#back-totop").click(function () {
    $('body, html').animate({ scrollTop: 0 });
  });

});

//menuボタンの状況に応じてメニューを表示非表示する関数
function menuToggle() {
  if ($(".openbtn4").hasClass('active')) {
    $('.menu-list').css('width', '570px');
  } else {
    $('.menu-list').css('width', '0px')
  }
}

//スクロールでふわっと表示させる関数
function scroll_effect() {
  var tt = $(window).scrollTop();
  var hh = $(window).height();
  $('.scroll-up').each(function () {
    var yy = $(this).offset().top + 100;//効果発生開始タイミングを操作したい場合は数値を変更する
    if (tt > yy - hh) {
      $(this).addClass('done');
    }
  });
}