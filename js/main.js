$(function(){

  /*-------------------------------------------
  ðã¡ãã¥ã¼ã¯ãªãã¯æã®å¦ç
  -------------------------------------------*/
  $('.hamburger-btn').on('click', function() {
    if( $('#header').hasClass('open') ) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  /*-------------------------------------------
  ðã¡ãã¥ã¼ãæ¼ä¸å¾ãã¯ãªãã¯ã¨ãªã¢ã§ã®éããå¦ç
  -------------------------------------------*/
  $('#hamburger-btn-area').on('click', function() {
    $('#header').removeClass('open');
  }) ;

  // ãªã³ã¯ãã¯ãªãã¯ããæã«ã¡ãã¥ã¼ãéãã
  $('#hamburger-btn-area a').on('click', function() {
    $('#header').removeClass('open');
  });


  /*-------------------------------------------
ããã¹ã©ã¤ãã¼å¦ç
  -------------------------------------------*/
  var getTranslate;
  var slideWidth;
  // swiperãªãã¸ã§ã¯ãå¼ã³åºã
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000, // ããã©ã«ãå¤ãè¨­å®
    },
    slidesPerView: 5,
    initialSlide: 5,
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    }
  })
});


