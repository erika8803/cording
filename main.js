$(function(){

  /*-------------------------------------------
  🍔メニュークリック時の処理
  -------------------------------------------*/
  $('.hamburger-btn').on('click', function() {
    if( $('#header').hasClass('open') ) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  /*-------------------------------------------
  🍔メニューを押下後、クリックエリアでの閉じる処理
  -------------------------------------------*/
  $('#hamburger-btn-area').on('click', function() {
    $('#header').removeClass('open');
  }) ;

  // リンクをクリックした時にメニューを閉じる
  $('#hamburger-btn-area a').on('click', function() {
    $('#header').removeClass('open');
  });


  /*-------------------------------------------
　　スライダー処理
  -------------------------------------------*/
  var getTranslate;
  var slideWidth;
  // swiperオブジェクト呼び出し
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000, // デフォルト値を設定
    },
    slidesPerView: 5,
    initialSlide: 5,
  })



});


