(function ($) {
  'use strict';
  if ($('.video-popup').length) {
    $('.video-popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: true,

      fixedContentPos: false,
    });
  }
  if ($('.accrodion-grp').length) {
    var accrodionGrp = $('.accrodion-grp');
    accrodionGrp.each(function () {
      var accrodionName = $(this).data('grp-name');
      var Self = $(this);
      var accordion = Self.find('.accrodion');
      Self.addClass(accrodionName);
      Self.find('.accrodion .accrodion-content').hide();
      Self.find('.accrodion.active').find('.accrodion-content').show();
      accordion.each(function () {
        $(this)
          .find('.accrodion-title')
          .on('click', function () {
            if ($(this).parent().hasClass('active') === false) {
              $('.accrodion-grp.' + accrodionName)
                .find('.accrodion')
                .removeClass('active');
              $('.accrodion-grp.' + accrodionName)
                .find('.accrodion')
                .find('.accrodion-content')
                .slideUp();
              $(this).parent().addClass('active');
              $(this).parent().find('.accrodion-content').slideDown();
            }
          });
      });
    });
  }

  if ($('.counter').length) {
    $('.counter').counterUp({
      delay: 10,
      time: 1000,
    });
  }

  if ($('.img-popup').length) {
    var groups = {};
    $('.img-popup').each(function () {
      var id = parseInt($(this).attr('data-group'), 10);

      if (!groups[id]) {
        groups[id] = [];
      }

      groups[id].push(this);
    });

    $.each(groups, function () {
      $(this).magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: { enabled: true },
      });
    });
  }

  if ($('.video-popup').length) {
    if ($('.main-navigation .navigation-box .sub-menu').length) {
      var subMenu = $('.main-navigation .sub-menu');
      subMenu
        .parent('li')
        .children('a')
        .append(function () {
          return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
        });
      var mainNavToggler = $('.header-navigation .menu-toggler');
      var subNavToggler = $('.main-navigation .sub-nav-toggler');
      mainNavToggler.on('click', function () {
        var Self = $(this);
        var menu = Self.data('target');
        $(menu).slideToggle();
        $(menu).toggleClass('showen');
        return false;
      });
      subNavToggler.on('click', function () {
        var Self = $(this);
        Self.parent().parent().children('.sub-menu').slideToggle();
        return false;
      });
    }
    $('.video-popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: true,

      fixedContentPos: false,
    });
  }

  $('.sidebar-toggle-btn').on('click', function () {
    $('.sidebar__area').addClass('sidebar-opened');
    $('.body-overlay').addClass('opened');
  });
  $('.sidebar__close-btn').on('click', function () {
    $('.sidebar__area').removeClass('sidebar-opened');
    $('.body-overlay').removeClass('opened');
  });

  $('.body-overlay').on('click', function () {
    $('.sidebar__area').removeClass('sidebar-opened');
    $('.body-overlay').removeClass('opened');
  });

  if ($('.banner-style-one').length) {
    $('.banner-style-one').owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      dots: true,
      nav: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      active: true,
      smartSpeed: 1000,
      autoplay: 5000,
    });
    $('.banner-carousel-btn .left-btn').on('click', function () {
      $('.banner-style-one').trigger('next.owl.carousel');
      return false;
    });
    $('.banner-carousel-btn .right-btn').on('click', function () {
      $('.banner-style-one').trigger('prev.owl.carousel');
      return false;
    });
  }

  if ($('.banner-style-two').length) {
    $('.banner-style-two').owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      dots: true,
      nav: false,
      animateOut: 'slideOutDown',
      animateIn: 'fadeIn',
      active: true,
      smartSpeed: 1000,
      autoplay: 5000,
    });
    $('.banner-carousel-btn .left-btn').on('click', function () {
      $('.banner-style-two').trigger('next.owl.carousel');
      return false;
    });
    $('.banner-carousel-btn .right-btn').on('click', function () {
      $('.banner-style-two').trigger('prev.owl.carousel');
      return false;
    });
  }

  if ($('.testimonial-one__carousel').length) {
    $('.testimonial-one__carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoWidth: false,
      autoplay: false,
      smartSpeed: 700,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 1,
        },
        991: {
          items: 1,
        },
        1000: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }
  if ($('.team-one__carousel').length) {
    $('.team-one__carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoWidth: false,
      autoplay: false,
      smartSpeed: 700,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      groups:1,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        600: {
          items: 2,
        },
        991: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }


  if ($(".marquee_mode").length) {
    $('.marquee_mode').marquee({
        speed: 80,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true,
        startVisible:true,
    });
}


  if ($('.brand-one__carousel').length) {
    $('.brand-one__carousel').owlCarousel({
      loop: true,
      margin: 70,
      nav: false,
      dots: false,
      autoWidth: false,
      autoplay: true,
      smartSpeed: 700,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        600: {
          items: 2,
        },
        991: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  if ($('.scroll-to-target').length) {
    $('.scroll-to-target').on('click', function () {
      var target = $(this).attr('data-target');
      // animate
      $('html, body').animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000,
      );

      return false;
    });
  }

  

  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: '991',
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });

  $(window).on('scroll', function () {
    if ($('.scroll-to-top').length) {
      var strickyScrollPos = 100;
      if ($(window).scrollTop() > strickyScrollPos) {
        $('.scroll-to-top').fadeIn(500);
      } else if ($(this).scrollTop() <= strickyScrollPos) {
        $('.scroll-to-top').fadeOut(500);
      }
    }
    if ($('.stricky').length) {
      var headerScrollPos = 100;
      var stricky = $('.stricky');
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.removeClass('slideIn animated');
        stricky.addClass('stricky-fixed slideInDown animated');
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass('stricky-fixed slideInDown animated');
        stricky.addClass('slideIn animated');
      }
    }
  });
  $(window).on('load', function () {
    if ($('.preloader').length) {
      $('.preloader').fadeOut('slow');
    }
  });
})(jQuery);
