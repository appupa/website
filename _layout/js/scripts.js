(function($) {

  "use strict";

  /* ==========================================================================
     ieViewportFix - fixes viewport problem in IE 10 SnapMode and IE Mobile 10
     ========================================================================== */

  function ieViewportFix() {

    var msViewportStyle = document.createElement("style");

    msViewportStyle.appendChild(
      document.createTextNode(
        "@-ms-viewport { width: device-width; }"
      )
    );

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {

      msViewportStyle.appendChild(
        document.createTextNode(
          "@-ms-viewport { width: auto !important; }"
        )
      );
    }

    document.getElementsByTagName("head")[0].
    appendChild(msViewportStyle);

  }

  /* ==========================================================================
     exists - Check if an element exists
     ========================================================================== */

  function exists(e) {
    return $(e).length > 0;
  }

  /* ==========================================================================
     isTouchDevice - return true if it is a touch device
     ========================================================================== */

  function isTouchDevice() {
    return !!('ontouchstart' in window) || (!!('onmsgesturechange' in window) && !!window.navigator.maxTouchPoints);
  }
  /* ==========================================================================
     animateMilestones
     ========================================================================== */

  function animateMilestones() {

    $('.milestone:in-viewport').each(function() {

      var $t = $(this),
        n = $t.find(".milestone-value").attr("data-stop"),
        r = parseInt($t.find(".milestone-value").attr("data-speed"), 10);

      if (!$t.hasClass("already-animated")) {
        $t.addClass("already-animated");
        $({
          countNum: $t.find(".milestone-value").text()
        }).animate({
          countNum: n
        }, {
          duration: r,
          easing: "linear",
          step: function() {
            $t.find(".milestone-value").text(Math.floor(this.countNum));
          },
          complete: function() {
            $t.find(".milestone-value").text(this.countNum);
          }
        });
      }

    });

  }

  /* ==========================================================================
     animateProgressBars
     ========================================================================== */

  function animateProgressBars() {

    $('.progress-bar .progress-bar-outer:in-viewport').each(function() {

      var $t = $(this);

      if (!$t.hasClass("already-animated")) {
        $t.addClass("already-animated");
        $t.animate({
          width: $t.attr("data-width") + "%"
        }, 2000);
      }

    });

  }

  /* ==========================================================================
     enableParallax
     ========================================================================== */

  function enableParallax() {

    // vertical parallax
    if (typeof $.fn.parallax !== 'undefined') {

      $('.parallax').each(function() {

        var $t = $(this);
        $t.addClass("parallax-enabled");
        $t.parallax("49%", 0.3, false);

      });

    }

    // horizontal parallax
    if (typeof $.fn.hparallax !== 'undefined') {

      $('.horizontal-parallax').each(function() {

        var $t = $(this);
        $t.addClass("horizontal-parallax-enabled");
        $t.hparallax();

      });

    }

    //animated parallax
    if (typeof $.fn.animatedparallax !== 'undefined') {

      $('.animated-parallax').each(function() {

        var $t = $(this);
        $t.addClass("animated-parallax-enabled");
        $t.animatedparallax();

      });

    }

    //mouse direction parallax
    if (typeof $.fn.parallax_mouse_direction != 'undefined') {

      $('.scene').parallax_mouse_direction();

    }

  }

  /* ==========================================================================
     handleContactForm - validate and ajax submit contat form
     ========================================================================== */

  function handleContactForm() {

    if (typeof $.fn.validate !== 'undefined') {

      $('#contact-form').validate({
        errorClass: 'validation-error', // so that it doesn't conflict with the error class of alert boxes
        rules: {
          name: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          subject: {
            required: true
          },
          message: {
            required: true
          }
        },
        messages: {
          name: {
            required: "Field is required!"
          },
          email: {
            required: "Field is required!",
            email: "Please enter a valid email address"
          },
          subject: {
            required: "Field is required!"
          },
          message: {
            required: "Field is required!"
          }
        },
        submitHandler: function(form) {
          var result;
          $(form).ajaxSubmit({
            type: "POST",
            data: $(form).serialize(),
            url: "_layout/php/send.php",
            success: function(msg) {

              if (msg === 'OK') {
                result = '<div class="alert success"><i class="fa fa-check-circle-o"></i>The message has been sent!</div>';
                $('#contact-form').clearForm();
              } else {
                result = '<div class="alert error"><i class="fa fa-times-circle"></i>' + msg + '</div>';
              }
              $("#formstatus").html(result);

            },
            error: function() {

              result = '<div class="alert error"><i class="fa fa-times-circle"></i>There was an error sending the message!</div>';
              $("#formstatus").html(result);

            }
          });
        }
      });

    }

  }


  /* ==========================================================================
     handleMobileMenu 
     ========================================================================== */

  var MOBILEBREAKPOINT = 979;
  var menu2 = $('#menu-2 > li');

  function handleMobileMenu() {

    var appended = false;

    if ($(window).width() < MOBILEBREAKPOINT && !appended) {
      appended = true;
      menu2.appendTo('#menu-1');
    } else {
      appended = false;
      menu2.appendTo('#menu-2');
    }

    if ($(window).width() > MOBILEBREAKPOINT) {

      $("#mobile-menu").hide();
      $("#mobile-menu-trigger").removeClass("mobile-menu-opened").addClass("mobile-menu-closed");

    } else {

      if (!exists("#mobile-menu")) {

        $(".sf-menu").clone().attr({
          id: "mobile-menu",
          "class": "fixed"
        }).insertAfter("#header");

        $("#mobile-menu > li > a, #mobile-menu > li > ul > li > a").each(function() {
          var $t = $(this);
          if ($t.next().hasClass('sub-menu') || $t.next().is('ul') || $t.next().is('.sf-mega')) {
            $t.append('<span class="fa fa-angle-down mobile-menu-submenu-arrow mobile-menu-submenu-closed"></span>');
          }
        });

        $(".mobile-menu-submenu-arrow").click(function(event) {
          var $t = $(this);
          if ($t.hasClass("mobile-menu-submenu-closed")) {
            $t.parent().siblings("ul").slideDown(300);
            $t.parent().siblings(".sf-mega").slideDown(300);
            $t.removeClass("mobile-menu-submenu-closed fa-angle-down").addClass("mobile-menu-submenu-opened fa-angle-up");
          } else {
            $t.parent().siblings("ul").slideUp(300);
            $t.parent().siblings(".sf-mega").slideUp(300);
            $t.removeClass("mobile-menu-submenu-opened fa-angle-up").addClass("mobile-menu-submenu-closed fa-angle-down");
          }
          event.preventDefault();
        });

        $("#mobile-menu li, #mobile-menu li a, #mobile-menu ul").attr("style", "");

      }

    }

  }

  /* ==========================================================================
     showHideMobileMenu
     ========================================================================== */

  function showHideMobileMenu() {

    $("#mobile-menu-trigger").click(function(event) {

      var $t = $(this),
        $n = $("#mobile-menu");

      if ($t.hasClass("mobile-menu-opened")) {
        $t.removeClass("mobile-menu-opened").addClass("mobile-menu-closed");
        $n.slideUp(300);
      } else {
        $t.removeClass("mobile-menu-closed").addClass("mobile-menu-opened");
        $n.slideDown(300);
      }
      event.preventDefault();

    });

  }

  /* ==========================================================================
     handleAccordionsAndToogles
     ========================================================================== */

  function handleAccordionsAndToogles() {

    // accordion

    $(".accordion .accordion-item").click(function(e) {
      e.preventDefault();
      if ($(this).next("div").is(":visible")) {
        $(this).removeClass('active').next("div").slideUp("slow");
      } else {
        $('.accordion .accordion-item').removeClass('active');
        $(".accordion .accordion-item-content").slideUp("slow");
        $(this).addClass('active').next("div").slideToggle("slow");
      }
    });

    // toggle

    $(".toggle .toggle-item").click(function(e) {
      e.preventDefault();
      $(this).toggleClass('active').next("div").slideToggle("slow");
    });

  }

  /* ==========================================================================
     handleBackToTop
     ========================================================================== */

  function handleBackToTop() {

    $('#back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 'slow');
      return false;
    });

  }

  /* ==========================================================================
     showHidebackToTop
     ========================================================================== */

  function showHidebackToTop() {

    if ($(window).scrollTop() > $(window).height() / 2) {
      $("#back-to-top").removeClass('gone');
      $("#back-to-top").addClass('visible');
    } else {
      $("#back-to-top").removeClass('visible');
      $("#back-to-top").addClass('gone');
    }

  }

  /* ==========================================================================
     handleVideoBackground
     ========================================================================== */

  var min_w = 0,
    video_width_original = 1920,
    video_height_original = 1080,
    vid_ratio = 1920 / 1080;

  function handleVideoBackground() {

    $('.fullwidth-section .fullwidth-section-video').each(function(i) {

      var $sectionWidth = $(this).closest('.fullwidth-section').outerWidth(),
        $sectionHeight = $(this).closest('.fullwidth-section').outerHeight();

      $(this).width($sectionWidth);
      $(this).height($sectionHeight);

      // calculate scale ratio
      var scale_h = $sectionWidth / video_width_original,
        scale_v = $sectionHeight / video_height_original,
        scale = scale_h > scale_v ? scale_h : scale_v;

      // limit minimum width
      min_w = vid_ratio * ($sectionHeight + 20);

      if (scale * video_width_original < min_w) {
        scale = min_w / video_width_original;
      }

      $(this).find('video').width(Math.ceil(scale * video_width_original + 2));
      $(this).find('video').height(Math.ceil(scale * video_height_original + 2));

    });

  }

  /* ==========================================================================
     handleSearch
     ========================================================================== */

  function handleSearch() {

    $('#custom-search-button').click(function(e) {

      e.preventDefault();

      if (!$("#custom-search-button").hasClass('open')) {

        $("#custom-search-form").fadeIn();
        $("#custom-search-button").addClass('open');

      } else {

        $("#custom-search-form").fadeOut();
        $("#custom-search-button").removeClass('open');

      }

    });

  }

  // -------------------------------------------------------------------------------------------------------
  //  handleStickyHeader
  // -------------------------------------------------------------------------------------------------------

  function handleStickyHeader() {

    var b = document.documentElement,
      e = false,
      a = 420; // the sticky menu trigger point, in pixels

    function c() {

      return window.pageYOffset || b.scrollTop;

    }

    function d() {

      var h = c();

      if (h >= a) {
        $('#header').addClass("stuck");
      } else {
        $('#header').removeClass("stuck");
      }

      e = false;
    }

    function f() {

      window.addEventListener("scroll", function(h) {

        if (!e) {
          e = true;
          setTimeout(d(), 250);
        }
      }, false);

      window.addEventListener("load", function(h) {

        if (!e) {
          e = true;
          setTimeout(d(), 250);
        }
      }, false);
    }


    var stickyHeader = false;

    if ($('body').hasClass('sticky-header')) {
      stickyHeader = true;
    }

    if (stickyHeader && ($(window).width() > 1024)) {

      f();

    }

  }

  // -------------------------------------------------------------------------------------------------------
  //  handleSmoothScrolling
  // -------------------------------------------------------------------------------------------------------

  function handleSmoothScrolling() {

    $('.sf-menu a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 50
          }, 1000);
          return false;
        }
      }
    });
  }

  // -------------------------------------------------------------------------------------------------------
  //  handlePageLoader
  // -------------------------------------------------------------------------------------------------------	

  function handlePageLoader() {

    if ($('#page-loader').length > 0) {

      var hash = window.location.hash;

      $(".loader-img").delay(500).fadeOut();
      $("#page-loader").delay(1000).fadeOut("slow");

      if (!hash) {
        // Do nothing //
      } else {
        $(document).scrollTop($(hash).offset().top - 56);
      }

    }
  }

  /* ==========================================================================
     When document is ready, do
     ========================================================================== */

  $(document).ready(function() {

    ieViewportFix();

    animateMilestones();
    animateProgressBars();

    if (!isTouchDevice()) {
      enableParallax();
    }

    handleContactForm();

    handleMobileMenu();
    showHideMobileMenu();

    handleAccordionsAndToogles();

    handleBackToTop();
    showHidebackToTop();

    handleVideoBackground();

    handleSearch();

    handleStickyHeader();

    handleSmoothScrolling();

  });

  /* ==========================================================================
     When the window is scrolled, do
     ========================================================================== */

  $(window).scroll(function() {

    animateMilestones();
    animateProgressBars();

    showHidebackToTop();
    handleStickyHeader();


  });

  /* ==========================================================================
     When the window is resized, do
     ========================================================================== */

  $(window).resize(function() {

    handleMobileMenu();
    handleVideoBackground();
    handleStickyHeader();
  });

  /* ==========================================================================
     When the window is loading, do
     ========================================================================== */

  $(window).load(function() {

    handlePageLoader();

  });


})(window.jQuery);

// non jQuery scripts below
