// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

$(document).ready(function () {

  // $('.slider-home').slick({
  //   prevArrow: '<span class="slider-home-button slider-button-prev"><img src="images/ico_fa-chevron.svg"></span>',
  //   nextArrow: '<span class="slider-home-button slider-button-next"><img src="images/ico_fa-chevron.svg"></span>',
  //   slidesToShow: 1,
  //   slidesToScroll: 1,

  //   speed: 300,
  //   infinite: true,
  //   fade: true,
  //   cssEase: 'linear',

  //   arrows: true,
  //   dots: false,
  //   responsive: [{
  //     breakpoint: 768,
  //     settings: {
  //       // fade: true,
  //       vertical: false,
  //       verticalSwiping: false,
  //     }
  //   }]
  // });

  const clickx = document.getElementById('pencet');
  

  clickx.addEventListener('click', function () {
    clickx.classList.toggle('Diam');
    // cHeader.toggle('active');

  });

  $(document).on('click', '.footer--top__title', function (e) {
    var item = $(this);
    $('.footer--top__title').not(this).removeClass('active');
    item.toggleClass('active');
    e.preventDefault;
  });

  // 
  var scrollElement = 'html, body';
  $('html, body').each(function () {
    var initScrollTop = $(this).attr('scrollTop');
    $(this).attr('scrollTop', initScrollTop + 1);
    if ($(this).attr('scrollTop') == initScrollTop + 1) {
      scrollElement = this.nodeName.toLowerCase();
      $(this).attr('scrollTop', initScrollTop);
      return false;
    }
  });

  $.fn.scrollButton = function (e) {

    e.preventDefault();
    var item = $(this);
    var target = item.data('scroll-button');

    var $target = $(target);
    var top = $target.offset().top - 50;
    $(scrollElement).stop().animate({
      'scrollTop': top
    }, 500, 'swing', function () {

    });

  };

  $(document).on('click', '[data-scroll-button]', function (e) {
    $(this).scrollButton(e);
  });

  const cHeader = $('.header');
  $(document).on('click', 'navbar-toggler', function (e) {
    cHeader.toggleClass('active');
  });

  
});

// 

$(window).scroll(function () {

  
});

// 

$(window).on('load', function () {

  $('.slider-home').slick('slickUnfilter');
  $('.slider-home').slick('slickGoTo', 0);

  //$('#slick, #slick-thumbs').slick('resize');
  //$('#slick').slick('slickSetOption', 'asNavFor', $currentSliderNav, false);

  setTimeout(function () {
    // DO SOMETHING
  }, 100);

});
