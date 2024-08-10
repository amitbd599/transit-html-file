(function ($) {
  "use strict";
  let device_width = window.innerWidth;
  $.exists = function (selector) {
    return $(selector).length > 0;
  };


  var initJs = {
    m: function (e) {
      initJs.d();
      initJs.methods();
    },
    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },

    methods: function (e) {
      initJs.videoPopup();
      initJs.accordion();
      initJs.numberCounter();
      initJs.imgPopup();
      initJs.sidebarToggle();
      initJs.bodyOverlay();
      initJs.bannerStyleOne();
      initJs.bannerStyleTwo();
      initJs.testimonialOne__carousel();
      initJs.teamOne__carousel();
      initJs.blogOne__carousel();
      initJs.marquee_mode();
      initJs.niceSelect();
      initJs.brandOne__carousel();
      initJs.scrollToTarget();
      initJs.mobileMenu();
      initJs.scrollToTop();
      initJs.menuLast();
      initJs.preloader();
      initJs.contactForm();
      initJs.title_animation();
      initJs.skew_up();
      initJs.sectionSlideUp();
      initJs.sectionSlideDown();
      initJs.wowAnimation();





    },


    // Video Popup
    videoPopup: function () {
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
    },

    // accordion
    accordion: function () {
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
    },

    // counter
    numberCounter: function () {
      $(document).ready(function () {
        (() => {
          const counter = document.querySelectorAll(".counter");
          const array = Array.from(counter);
          array.map((item) => {
            let counterInnerText = item.textContent;
            let count = 1;
            let speed = item.dataset.speed / counterInnerText;
            function counterUp() {
              item.textContent = count++;
              if (counterInnerText < count) {
                clearInterval(stop);
              }
            }
            const stop = setInterval(() => {
              counterUp();
            }, speed);
          });
        })();
      });
    },

    // img-popup
    imgPopup: function () {
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
    },



    // Sidebar toggle
    sidebarToggle: function () {
      $('.sidebar-toggle-btn').on('click', function () {
        $('.sidebar__area').addClass('sidebar-opened');
        $('.body-overlay').addClass('opened');
      });
      $('.sidebar__close-btn').on('click', function () {
        $('.sidebar__area').removeClass('sidebar-opened');
        $('.body-overlay').removeClass('opened');
      });
    },

    // body-overlay
    bodyOverlay: function () {
      $('.body-overlay').on('click', function () {
        $('.sidebar__area').removeClass('sidebar-opened');
        $('.body-overlay').removeClass('opened');
      });
    },

    // banner-style-one
    bannerStyleOne: function () {
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
    },

    // banner-style-two
    bannerStyleTwo: function () {
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
          autoplay: false,
          autoplayHoverPause: true,
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
    },

    // testimonial-one__carousel
    testimonialOne__carousel: function () {
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
    },

    // blog-one__carousel
    blogOne__carousel: function () {
      if ($('.blog-one__carousel').length) {
        $('.blog-one__carousel').owlCarousel({
          loop: true,
          margin: 10,
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
              items: 2,
            },
            1000: {
              items: 2,
            },
            1200: {
              items: 2,
            },
          },
        });
      }
    },

    // team-one__carousel
    teamOne__carousel: function () {
      if ($('.team-one__carousel').length) {
        $('.team-one__carousel').owlCarousel({
          loop: true,
          margin: 0,
          nav: false,
          dots: true,
          autoWidth: false,
          autoplay: false,
          smartSpeed: 700,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          groups: 1,
          responsive: {
            0: {
              items: 1, dots: false,
            },
            480: {
              items: 1, dots: false,
            },
            600: {
              items: 2,
              dots: false,

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
    },

    // marquee_mode
    marquee_mode: function () {
      if ($('.marquee_mode').length) {
        $('.marquee_mode').marquee({
          speed: 20,
          gap: 0,
          delayBeforeStart: 0,
          direction: 'left',
          duplicated: true,
          pauseOnHover: true,
          startVisible: true,
        });
      }
    },

    // niceSelect
    niceSelect: function () {
      $('select').niceSelect();
    },

    // brand-one__carousel
    brandOne__carousel: function () {
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
    },

    // scroll-to-target
    scrollToTarget: function () {
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
    },

    // mobile-menu
    mobileMenu: function () {
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: '991',
        meanExpand: ['<i class="fal fa-plus"></i>'],
      });
    },

    // scroll-to-top
    scrollToTop: function () {
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
    },

    // menu-last
    menuLast: function () {
      $('.main-menu nav > ul > li ').slice(-2).addClass('menu-last');
    },

    // preloader
    preloader: function () {
      $(window).on('load', function () {
        if ($('.preloader').length) {
          $('.preloader').fadeOut('slow');
        }
      });
    },

    // contact-form
    contactForm: function () {
      $(function () {
        // Get the form.
        var form = $("#contact-form");

        // Get the messages div.
        var formMessages = $(".form-Messages");

        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
          // Stop the browser from submitting the form.
          e.preventDefault();

          // Serialize the form data.
          var formData = $(form).serialize();

          // Submit the form using AJAX.
          $.ajax({
            type: "POST",
            url: $(form).attr("action"),
            data: formData,
          })
            .done(function (response) {
              // Make sure that the formMessages div has the 'success' class.
              $(formMessages).removeClass("error");
              $(formMessages).addClass("success");

              // Set the message text.
              $(formMessages).text(response);

              // Clear the form.
              $("#contact-form input,#contact-form textarea").val("");
            })
            .fail(function (data) {
              // Make sure that the formMessages div has the 'error' class.
              $(formMessages).removeClass("success");
              $(formMessages).addClass("error");

              $(formMessages).text(
                "Oops! An error occured and your message could not be sent."
              );
            });
        });
      });
    },

    // gsap Start Title animation -1 || split-collab
    title_animation: function () {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(SplitText);
      if (window.innerWidth > 768) {
        $(document).ready(function () {
          let addAnimation = function () {
            $(".split-collab").each(function (index) {
              const textInstance = $(this);
              const text = new SplitText(textInstance, {
                type: "chars",
              });

              let letters = text.chars;

              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: textInstance,
                  start: "top 85%",
                  end: "top 85%",
                  onComplete: function () {
                    textInstance.removeClass(".split-collab");
                  },
                },
              });

              tl.set(textInstance, { opacity: 1 }).from(letters, {
                duration: 0.5,
                autoAlpha: 0,
                x: 50,
                // scaleY: 0,
                // skewX: 50,
                stagger: { amount: 1 },
                ease: "back.out(1)",
              });
            });
          };

          addAnimation();

          window.addEventListener("resize", function (event) {
            if ($(window).width() >= 992) {
              addAnimation();
            }
          });
        });
      }
    },


    // gsap Start Title animation -1 || skew-up , skew-up-2
    skew_up: function () {
      gsap.registerPlugin(SplitText);
      if (window.innerWidth > 768) {
        $(document).ready(function () {
          let addAnimation = function () {
            $(".skew-up").each(function (index) {
              const text = new SplitType($(this), {
                types: "lines, words",
                lineClass: "word-line",
              });
              let textInstance = $(this);
              let line = textInstance.find(".word-line");
              let word = line.find(".word");
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: textInstance,
                  start: "top 85%",
                  end: "top 85%",
                  onComplete: function () {
                    $(textInstance).removeClass("skew-up");
                  },
                },
              });
              tl.set(textInstance, { opacity: 1 }).from(word, {
                y: "100%",
                skewX: "-5",
                duration: 2,
                stagger: 0.09,
                ease: "expo.out",
              });
            });
          };
          addAnimation();
          window.addEventListener("resize", function (event) {
            if ($(window).width() >= 992) {
              addAnimation();
            }
          });
        });
      }

      if (window.innerWidth > 768) {
        $(document).ready(function () {
          let addAnimation = function () {
            $(".skew-up-2").each(function (index) {
              const textInstance = $(this);
              const text = new SplitText(textInstance, {
                type: "chars",
              });

              let letters = text.chars;

              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: textInstance,
                  start: "top 85%",
                  end: "top 85%",
                  onComplete: function () {
                    textInstance.removeClass("skew-up-2");
                  },
                },
              });

              tl.set(textInstance, { opacity: 1 }).from(letters, {
                duration: 0.4,
                autoAlpha: 0,
                y: 50,
                // scaleX: 0,
                // skewX: 50,
                stagger: { amount: 1 },
                ease: "back.out(0)",
              });
            });
          };

          addAnimation();

          window.addEventListener("resize", function (event) {
            if ($(window).width() >= 992) {
              addAnimation();
            }
          });
        });
      }
    },



    // Start Area Slide up Animation || vre-slide-up-gsap
    sectionSlideUp: function () {
      gsap.registerPlugin(ScrollTrigger);

      $(document).ready(function () {
        $(".vre-slide-up-gsap").each(function () {
          let vre_SkewInUp = gsap.timeline({
            scrollTrigger: {
              trigger: this,
              start: "top bottom",
              markers: false,
            },
          });

          vre_SkewInUp.from(
            this,
            {
              duration: 2,
              skewY: 0,
              transformOrigin: "left top",
              autoAlpha: 0,
              y: 100,
              ease: Expo.easeOut,
              toggleActions: "restart pause resume reverse",
              clearProps: "all",
            },
            "+=0.2"
          );
        });
      });
    },

    // Start Area Slide down Animation //vre-slide-down-gsap
    sectionSlideDown: function () {
      gsap.registerPlugin(ScrollTrigger);

      $(document).ready(function () {
        $(".vre-slide-down-gsap").each(function () {
          let vre_SkewInUp = gsap.timeline({
            scrollTrigger: {
              trigger: this,
              start: "top bottom",
              markers: false,
            },
          });

          vre_SkewInUp.from(
            this,
            {
              duration: 2,
              skewY: 0,
              transformOrigin: "right bottom",
              autoAlpha: 0,
              x: 100,
              ease: Expo.easeOut,
              toggleActions: "restart pause resume reverse",
              clearProps: "all",
            },
            "+=0.2"
          );
        });
      });
    },



    // Start Wow Animation
    wowAnimation: function () {
      $(document).ready(function () {
        new WOW().init();
      });
    },





  }





  initJs.m();
})(jQuery, window);
