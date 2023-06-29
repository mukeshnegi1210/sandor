


$(function () {
  $('#mixit-container').mixItUp();

  var $gallery = new SimpleLightbox('#Gallery1 a');
  var $gallery2 = new SimpleLightbox('#Gallery2 a');

 

  handleFixedHeader();

  // handling on scroll header
  $(window).scroll(function () {
    handleFixedHeader();

  });

  // handle bg of header on scroll 
  function handleFixedHeader() {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {

      $("header").addClass("fixed-header");
    }
    else {
      $("header").removeClass("fixed-header");
    }
  }


  // scroll top ===============================
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').addClass("d-none");
    } else {
      $('.scrollToTop').addClass("d-inline-block");
    }
  });


  $('.scrollToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 100);
    return false;
  });

  // scroll top ends ===============================

  $('.menu-open').click(function () {
    $('.primary-menu-outer').addClass('active');
  })
  $('.menu-close').click(function () {

    $('.primary-menu-outer').removeClass('active');
  })
  // block scroll ===============================
  $('.primary-menu li a, .footer-quick-links li a').click(function () {
    $('.primary-menu-outer').removeClass('active');
    var get_scroll_id = $(this).attr('data-scroll');
    $('.primary-menu li a').removeClass("active");
    $(this).addClass("active");
    $("html, body").animate({
      scrollTop: $(get_scroll_id).offset().top - 70
    }, 600);

  });

  if (window.location.hash) {
    $('.primary-menu li a').removeClass("active");
    $(`.primary-menu li a[data-scroll="${window.location.hash}"]`).addClass("active")
    $('html, body').animate({ scrollTop: 0 }, 100);
    setTimeout(function () {

      $("html, body").delay(300).animate({
        scrollTop: $(window.location.hash).offset().top - 70
      }, 600);
    }, 1000);

  }

})

$(window).on('load', function () {
  $('#aa-preloader-area').delay(300).fadeOut('d-none');
});