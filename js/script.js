$(document).ready(function(){
    $('.slides__box').slick({
        speed: 1400,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slides/icons/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slides/icons/arrow-right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
      });
  });