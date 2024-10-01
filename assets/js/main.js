
jQuery(document).ready(function ($) {
  $('.ido-card-slider').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    infinite: true,
    prevArrow: $('.ido-slick-prev'),
      nextArrow: $('.ido-slick-next'),
    
     
    });

  // menu bg add
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 300) {
          $('header').addClass('menu-bg');
      } else {
          $('header').removeClass('menu-bg');
      }
  });
  $('.testimonial-sliders').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: $('.testimonial-left'),
    nextArrow: $('.testimonial-right'),
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

})
