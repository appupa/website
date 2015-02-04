"use strict";
$(function() {


  /* ============== DETECT MOBILE DEVICES ============== */
  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };




  /* ============== PRELOADER ============== */
  jQuery(window).load(function() {
    jQuery('#preloader').fadeOut(300);
  });



  // In this place you can put all run scripts



  /* ============== TYPED HEADER ============== */
  jQuery('.typed').typed({
    strings: ["AWESOME.", "PARALLAX."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    backDelay: 5000,
    startDelay: 500
  });


  /* ============== REVOLUTION SLIDERS ============== */
  jQuery('.rev-banner').revolution({
    delay: 9000,
    startWithSlide: 0,
    fullScreen: "off",
    autoHeight: "off",
    startwidth: 960,
    startheight: 650,
    navigationType: "none",
    shadow: 0
  });

  jQuery('.rev-banner-2').revolution({
    delay: 9000,
    startWithSlide: 0,
    fullScreen: "off",
    autoHeight: "off",
    startwidth: 960,
    startheight: 340,
    navigationType: "none",
    shadow: 0
  });


  /* ============== GO TO HASH ============== */
  jQuery(window).load(function() {
    if (window.location.hash) {
      var hash = window.location.hash;
      jQuery('html, body').animate({
        scrollTop: jQuery(hash).offset().top - height_menu - 50
      });
    }
  });



  /* ============== MENU ============== */
  var windows_top = jQuery(window).scrollTop();
  var height_menu = jQuery('#main-menu').height();
  var size;

  if (jQuery('body.blog, body.portfolio').length > 0) {
    size = 0.3;
  } else
    size = 0.8;

  // Effect menu appear
  if (windows_top > size * jQuery(window).height())
    jQuery('#main-menu.effect-on').addClass('menu-visible');
  else
    jQuery('#main-menu.effect-on').removeClass('menu-visible');
  jQuery(window).scroll(function() {
    windows_top = $(window).scrollTop();
    if (windows_top > size * jQuery(window).height())
      jQuery('#main-menu.effect-on').addClass('menu-visible');
    else
      jQuery('#main-menu.effect-on').removeClass('menu-visible');
  });


  jQuery('#main-menu').localScroll({
    offset: {
      top: -height_menu
    },
    duration: 1000
  });

  jQuery('#side-menu').localScroll();


  // Current menu item desktop menu
  $.currentItem();

  jQuery(window).scroll(function() {
    $.currentItem();
  });


  // Sticky Menu
  jQuery('.sticky').sticky({
    topSpacing: 0
  });


  // Mobile menu
  jQuery('#mobile-button').click(function() {
    if (jQuery('#mobile-menu .menu-container').css('display') == 'none')
      jQuery('#mobile-menu .menu-container').slideDown(300);
    else
      jQuery('#mobile-menu .menu-container').slideUp(300);
  });

  jQuery('#mobile-menu a').click(function() {
    var parent_menu = jQuery(this).parent();
    if (jQuery('> .sub-menu', parent_menu).length == 0) jQuery('#mobile-menu .menu-container').slideUp(300);
  });


  // Sub-Menu
  jQuery('#main-menu .desktop-menu .menu-container li').hover(function() {
    jQuery('> .sub-menu', this).stop().show();
  }, function() {
    jQuery('> .sub-menu', this).stop().hide();
  });


  // Mobile Menu
  jQuery('#mobile-menu li').each(function() {
    if (jQuery('.sub-menu', this).length > 0) {
      jQuery(this).append('<i class="fa fa-angle-down"></i>');
    }
  });

  jQuery('#mobile-menu li a').click(function() {
    var parent_mobile = jQuery(this).parent();
    if (jQuery(this).attr('href') == '#') {
      if (jQuery('> .sub-menu', parent_mobile).length > 0 && jQuery('> .sub-menu', parent_mobile).css('display') == 'none') {
        jQuery('> .sub-menu', parent_mobile).slideDown(300);
        return false;
      } else if (jQuery('> .sub-menu', parent_mobile).length > 0 && jQuery('> .sub-menu', parent_mobile).css('display') == 'block') {
        jQuery('> .sub-menu', parent_mobile).slideUp(300);
        return false;
      } else {
        return false;
      }

    }
  });



  /* ============== PARALLAX EFFECTS ============== */
  if (!isMobile.any()) {
    if (jQuery('.parallax').length) {
      jQuery('.parallax').each(function() {
        jQuery(this).parallax('50%', "0.1");
      });
    }
  }


  /* ============== ANIMATION EFFECTS ============== */
  jQuery('[data-animate]').appear(function() {
    var my_animation = jQuery(this).data('animate');
    if (!isMobile.any()) {
      jQuery(this).addClass('animated');
      jQuery(this).addClass(my_animation);
    }
  });

  /* ============== PORTFOLIO ============== */
  var $container = jQuery('#portfolio-items');
  var layout;
  if ($container.parent().hasClass('portfolio-type-3')) layout = 'fitRows';
  else layout = 'masonry';
  $container.isotope({
    itemSelector: '.item',
    transitionDuration: '1s',
    layoutMode: layout,
  });


  jQuery(window).load(function() {
    $container.isotope('layout');
  });

  $container.isotope('layout');

  jQuery('#portfolio-container nav li a').click(function() {
    jQuery('#portfolio-container nav li').removeClass('current-category');
    var filterValue = jQuery(this).attr('data-filter');
    $container.isotope({
      filter: filterValue
    });
    jQuery(this).parent().addClass('current-category');
    return false;
  });


  // Position image hover
  var height_desc;

  jQuery('.portfolio-type-1 .item, .portfolio-type-4 .item').hover(function() {
    if (!isMobile.any()) {
      height_desc = parseInt(jQuery('.portfolio-info', this).css('height'), 10);
      jQuery('.portfolio-info', this).css({
        bottom: -height_desc,
        visibility: 'visible',
      });
      jQuery('.portfolio-info', this).css('bottom', 0);
      jQuery('img', this).css({
        top: -(height_desc / 2)
      });
    }
  }, function() {
    if (!isMobile.any()) {
      jQuery('img', this).css({
        top: 0
      });
      jQuery('.portfolio-info', this).css('bottom', -height_desc);
    }
  });

  jQuery(window).on("debouncedresize", function(event) {
    $container.isotope('layout');
    jQuery('.portfolio-info').css({
      visibility: 'hidden'
    });
  });


  // Load project
  var target_portfolio;

  jQuery(document).on('click touchstart', '.portfolio-type-1 #portfolio-items a, #portfolio-nav .navigate', function() {
    target_portfolio = jQuery(this).attr('href');
    jQuery('#portfolio-content').css({
      opacity: 0,
      visibility: 'hidden'
    });

    jQuery('#portfolio-display').css({
      display: 'block'
    });

    jQuery('html, body').animate({
      scrollTop: $('#portfolio-container').offset().top - height_menu - 50
    }, {
      complete: function() {
        jQuery('#portfolio-loader').stop().fadeIn(300, function() {


          $.ajax({
            url: target_portfolio,
            success: function(content) {
              jQuery('#portfolio-content').html(content);
              jQuery('#portfolio-loader').delay(1000).stop().fadeOut(300, function() {
                jQuery('#portfolio-content').css({
                  visibility: 'visible',
                  opacity: 1
                });
              });

            }
          });

        });

      }
    });
    return false;
  });



  jQuery(document).on('click touchstart', '#close-portfolio', function() {
    jQuery('#portfolio-display').slideUp(1000);
    return false;
  });


  // Show portfolio type 2
  jQuery('.portfolio-type-2, .portfolio-type-4').appear(function() {
    jQuery('.item', this).each(function(i, el) {
      setTimeout(function() {
        jQuery('img, .portfolio-info-2, .portfolio-info', el).css({
          opacity: 1
        }, 200);
      }, 300 + (i * 300));
    });
  });


  /* ============== FIT VIDEOS ============== */
  jQuery('.fit').fitVids();


  /* ============== POST SLIDESHOW ============== */
  jQuery('.media ul').responsiveSlides({
    nav: true, // Boolean: Show navigation, true or false
    prevText: '<i class="fa fa-angle-left"></i>', // String: Text for the "previous" button
    nextText: '<i class="fa fa-angle-right"></i>' // String: Text for the "next" button
  });


  /* ============== PROGRESS BAR ============== */
  jQuery('.progress-bar').appear(function() {
    var progress = jQuery(this).data('progress');
    jQuery('.bar-fill', this).animate({
      width: progress + '%'
    });
    jQuery('.bar-fill > span', this).fadeIn(2000);
    jQuery('span span', this).countTo();
  });


  /* ============== TESTIMONIALS ============== */
  if (jQuery('.testimonials').length) {
    jQuery('.testimonials').each(function() {
      jQuery('ul', this).bxSlider({
        adaptiveHeight: true,
        pause: 10000,
        auto: true,
        controls: false
      });
    });
  }



  /* ============== CLIENTS ============== */
  if (jQuery('.clients-slider').length) {
    jQuery('.clients-slider').each(function() {
      $(this).bxSlider({
        minSlides: 2,
        maxSlides: 4,
        slideWidth: 300,
        moveSlides: 1,
        auto: true,
        pager: false,
        controls: false,
        slideMargin: 10
      });
    });
  }



  /* ============== PRETTY PHOTO ============== */
  jQuery('a[data-gal="prettyPhoto"]').prettyPhoto({
    deeplinking: false
  });


  /* ============== SMOOTH SCROLL ============== */
  jQuery('.smooth-scroll').click(function() {
    var target_scroll = jQuery(this).attr('href');
    jQuery('html, body').animate({
      scrollTop: jQuery(target_scroll).offset().top - height_menu
    }, 1000);
    return false;
  });



  /* ============== INFOBOX 2 ANIMATION ============== */
  jQuery('.infobox-2').hover(function() {
    jQuery(this).addClass('infobox-2-hover');
  }, function() {
    jQuery(this).removeClass('infobox-2-hover');
  });





  /* ============== INFOBOX 3 ANIMATION ============== */
  jQuery('.section').appear(function() {
    jQuery('.infobox-3', this).each(function(i, el) {
      setTimeout(function() {
        jQuery('i', el).css({
          opacity: 1
        }, 500);
      }, 500 + (i * 300));
    });
  });


  /* ============== ACCORDIONS ============== */
  jQuery('.accordions > div').click(function() {
    var parent_accordion = jQuery(this).parent();
    if (jQuery('> span', this).css('display') == 'none') jQuery('> span', this).slideDown(600);
    else jQuery('> span', this).slideUp(600);
  });



  /* ============== TABS ============== */
  jQuery('.tabs nav ul').each(function() {
    var $ul = jQuery(this);
    var $li = $ul.children('li');

    $li.each(function() {
      var $trescTaba = $($(this).children('a').attr('href'));
      if (jQuery(this).hasClass('active-tab')) {
        $trescTaba.show();
      } else {
        $trescTaba.hide();
      }
    });
    $li.click(function() {
      $(this).children('a').click();
    });
    $li.children('a').click(function() {
      $li.removeClass('active-tab');
      $li.each(function() {
        jQuery(jQuery(this).children('a').attr('href')).hide();
        jQuery(jQuery(this).children('a').attr('href')).removeClass('animated');
        jQuery(jQuery(this).children('a').attr('href')).removeClass('fadeIn');
      });
      jQuery(this).parent().addClass('active-tab');
      jQuery(jQuery(this).attr('href')).show();
      jQuery(jQuery(this).attr('href')).addClass('animated');
      jQuery(jQuery(this).attr('href')).addClass('fadeIn');
      return false;
    });
  });


  var targets = 0;
  if (jQuery('.tabs-2').length) {
    jQuery('.tabs-2').each(function() {
      jQuery('a', this).each(function() {
        var target_tab = jQuery(this).attr('href');
        if (targets == 0)
          jQuery(target_tab).css('display', 'block');
        else
          jQuery(target_tab).css('display', 'none');
        targets++;
      });
      targets = 0;
    });
  }


  jQuery('.tabs-2 a').click(function() {
    var parent_tab = jQuery(this).parent();
    var current_tab = jQuery(this).attr('href');
    var target_hidden;
    jQuery('a', parent_tab).each(function() {
      target_hidden = jQuery(this).attr('href');
      jQuery(target_hidden).css('display', 'none');
    });
    jQuery(current_tab).css('display', 'block');

    return false;
  });

});
