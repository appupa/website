(function($) {

  "use strict";

  /* ==========================================================================
     When document is ready, do
     ========================================================================== */

  $(document).ready(function() {

    // twitterFetcher
    // http://jasonmayes.com/projects/twitterApi/

    if (typeof twitterFetcher !== 'undefined' && ($('.ewf_widget_latest_tweets').length > 0)) {

      $('.ewf_widget_latest_tweets').each(function(index) {

        var account_id = $('.ewf-tweet-list', this).attr('data-account-id'),
          items = $('.ewf-tweet-list', this).attr('data-items'),
          newID = 'ewf-tweet-list-' + index;

        $('.ewf-tweet-list', this).attr('id', newID);

        var config = {
          "id": account_id,
          "domId": newID,
          "maxTweets": items
        };

        twitterFetcher.fetch(config);
      });

    }

    // Youtube video background
    // https://github.com/pupunzi/jquery.mb.YTPlayer

    if (typeof $.fn.mb_YTPlayer !== 'undefined') {

      $('.player').mb_YTPlayer();

    }

    // simplePlaceholder - polyfill for mimicking the HTML5 placeholder attribute using jQuery
    // https://github.com/marcgg/Simple-Placeholder/blob/master/README.md

    if (typeof $.fn.simplePlaceholder !== 'undefined') {

      $('input[placeholder], textarea[placeholder]').simplePlaceholder();

    }

    // Fitvids - fluid width video embeds
    // https://github.com/davatron5000/FitVids.js/blob/master/README.md

    if (typeof $.fn.fitVids !== 'undefined') {

      $('.fitvids').fitVids();

    }

    // Superfish - enhance pure CSS drop-down menus
    // http://users.tpg.com.au/j_birch/plugins/superfish/options/

    if (typeof $.fn.superfish !== 'undefined') {

      $('#menu').superfish({
        delay: 500,
        animation: {
          opacity: 'show',
          height: 'show'
        },
        speed: 100,
        cssArrows: true
      });

    }

    // Revolution Slider

    if (typeof $.fn.revolution !== 'undefined') {

      $('.fullwidthbanner').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 810,
        autoHeight: "off",
        fullScreenAlignForce: "off",

        onHoverStop: "on",

        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 3,

        hideThumbsOnMobile: "off",
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResoluition: 0,

        hideThumbs: 0,
        hideTimerBar: "off",

        keyboardNavigation: "on",

        navigationType: "bullet",
        navigationArrows: "solo",
        navigationStyle: "round",

        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 40,

        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 0,
        soloArrowLeftVOffset: 0,

        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 0,
        soloArrowRightVOffset: 0,


        touchenabled: "off",
        swipe_velocity: "0.7",
        swipe_max_touches: "1",
        swipe_min_touches: "1",
        drag_block_vertical: "false",

        stopAtSlide: -1,
        stopAfterLoops: -1,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        hideSliderAtLimit: 0,

        dottedOverlay: "none",

        fullWidth: "off",
        forceFullWidth: "off",
        fullScreen: "off",
        fullScreenOffsetContainer: "#topheader-to-offset",

        shadow: 0
      }).css("visibility", "visible");

    }

    // bxSlider - responsive slider
    // http://bxslider.com/options

    if (typeof $.fn.bxSlider !== 'undefined') {

      $('.portfolio-slider .slides').bxSlider({
        mode: 'horizontal', // Type of transition between slides: 'horizontal', 'vertical', 'fade'		
        speed: 500, // Slide transition duration (in ms)
        infiniteLoop: true, // If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
        hideControlOnEnd: false, // If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
        pager: true, // If true, a pager will be added
        pagerType: 'full', // If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
        controls: true, // If true, "Next" / "Prev" controls will be added
        auto: false, // If true, slides will automatically transition
        pause: 4000, // The amount of time (in ms) between each auto transition
        autoHover: true, // Auto show will pause when mouse hovers over slider
        useCSS: false // If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
      });

      $('.blog-post-slider .slides').bxSlider({
        mode: 'horizontal', // Type of transition between slides: 'horizontal', 'vertical', 'fade'		
        speed: 500, // Slide transition duration (in ms)
        infiniteLoop: true, // If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
        hideControlOnEnd: false, // If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
        pager: false, // If true, a pager will be added
        pagerType: 'full', // If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
        controls: true, // If true, "Next" / "Prev" controls will be added
        auto: false, // If true, slides will automatically transition
        pause: 4000, // The amount of time (in ms) between each auto transition
        autoHover: true, // Auto show will pause when mouse hovers over slider
        useCSS: false, // If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
        slideWidth: "370",
        minSlides: 1,
        maxSlides: 5,
        moveSlides: 1,
        slideMargin: 30
      });

      $('.testimonial-slider .slides').bxSlider({
        mode: 'fade', // Type of transition between slides: 'horizontal', 'vertical', 'fade'		
        speed: 800, // Slide transition duration (in ms)
        infiniteLoop: true, // If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
        hideControlOnEnd: false, // If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
        pager: true, // If true, a pager will be added
        pagerType: 'full', // If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
        controls: false, // If true, "Next" / "Prev" controls will be added
        auto: true, // If true, slides will automatically transition
        pause: 4000, // The amount of time (in ms) between each auto transition
        autoHover: true, // Auto show will pause when mouse hovers over slider
        useCSS: false // If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
      });

      $('.carousel .slides').bxSlider({
        mode: 'horizontal', // Type of transition between slides: 'horizontal', 'vertical', 'fade'		
        speed: 500, // Slide transition duration (in ms)
        infiniteLoop: true, // If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
        hideControlOnEnd: false, // If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
        pager: true, // If true, a pager will be added
        pagerType: 'full', // If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
        controls: false, // If true, "Next" / "Prev" controls will be added
        auto: false, // If true, slides will automatically transition
        pause: 4000, // The amount of time (in ms) between each auto transition
        autoHover: true, // Auto show will pause when mouse hovers over slider
        useCSS: false // If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
      });

      $('.vertical-carousel .slides').bxSlider({
        mode: 'vertical', // Type of transition between slides: 'horizontal', 'vertical', 'fade'		
        speed: 500, // Slide transition duration (in ms)
        infiniteLoop: true, // If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
        hideControlOnEnd: false, // If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
        pager: true, // If true, a pager will be added
        pagerType: 'full', // If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
        controls: false, // If true, "Next" / "Prev" controls will be added
        auto: false, // If true, slides will automatically transition
        pause: 4000, // The amount of time (in ms) between each auto transition
        autoHover: true, // Auto show will pause when mouse hovers over slider
        useCSS: false // If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
      });

    }

    // Magnific PopUp - responsive lightbox
    // http://dimsemenov.com/plugins/magnific-popup/documentation.html

    if (typeof $.fn.magnificPopup !== 'undefined') {

      $('.magnificPopup').magnificPopup({
        disableOn: 400,
        closeOnContentClick: true,
        type: 'image'
      });

      $('.magnificPopup-gallery').magnificPopup({
        disableOn: 400,
        type: 'image',
        gallery: {
          enabled: true
        }
      });

      $('.magnificPopup-project').magnificPopup({
        type: 'ajax',
        closeOnContentClick: true,
        gallery: {
          enabled: true
        }
      })

    }

    // EasyTabs - tabs plugin
    // https://github.com/JangoSteve/jQuery-EasyTabs/blob/master/README.markdown

    if (typeof $.fn.easytabs !== 'undefined') {

      $('.tabs-container').easytabs({
        animationSpeed: 300,
        updateHash: false
      });

      $('.vertical-tabs-container').easytabs({
        animationSpeed: 300,
        updateHash: false
      });

    }

    // gMap -  embed Google Maps into your website; uses Google Maps v3
    // http://labs.mario.ec/jquery-gmap/

    if (typeof $.fn.gMap !== 'undefined') {

      $('.google-map').each(function() {

        var $t = $(this),
          mapZoom = parseInt($t.attr("data-zoom"), 10),
          mapAddress = $t.attr("data-address"),
          mapCaption = $t.attr("data-caption"),
          mapType = "ROADMAP",
          popUp = false;

        if ($t.attr("data-maptype") !== undefined) {
          mapType = $t.attr("data-maptype");
        }

        if ($t.attr("data-popup") !== undefined) {
          popUp = $t.attr("data-popup");
        }

        $t.gMap({
          maptype: mapType,
          scrollwheel: false,
          zoom: mapZoom,
          markers: [{
            address: mapAddress,
            html: mapCaption,
            popup: popUp
          }],
          controls: {
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false
          }
        });

      });

    }

    // Isotope - portfolio filtering
    // http://isotope.metafizzy.co/beta/

    if ((typeof $.fn.isotope !== 'undefined') && (typeof $.fn.imagesLoaded !== 'undefined') && ($('.portfolio-isotope').length > 0)) {

      // initialize isotope after images are loaded

      $('.portfolio-isotope').imagesLoaded(function() {

        var container = $('.portfolio-isotope');

        container.isotope({
          itemSelector: '.item',
          layoutMode: 'masonry',
          transitionDuration: '0.5s'
        });

        $('.portfolio-filter li a').click(function() {
          $('.portfolio-filter li a').removeClass('active');
          $(this).addClass('active');

          var selector = $(this).attr('data-filter');
          container.isotope({
            filter: selector
          });

          return false;
        });

        $(window).resize(function() {

          container.isotope({});

        });

      });

      // Load More

      var portfolio_track_click = 0,
        portfolio_offset = 0,
        portfolio_items_loaded = 3;

      $('.load-more').click(function(event) {

        event.preventDefault();

        $.ajax({
          type: "POST",
          url: "portfolio-load-more.html",
          dataType: "html",
          cache: false,
          msg: '',
          success: function(data) {
            var items = $(data).filter('.item'),
              length = items.length,
              html = '';
            if (length > 0) {

              if (portfolio_offset !== length) {

                for (var i = 0; portfolio_offset < length && i < portfolio_items_loaded; portfolio_offset++, i++) {
                  html += items.eq(portfolio_offset).prop('outerHTML');
                }

                $('.portfolio-isotope').append(html);

                $('.portfolio-isotope').imagesLoaded(function() {

                  $(window).trigger('resize');
                  $('.portfolio-isotope').isotope('reloadItems').isotope();

                });
                if (length <= portfolio_items_loaded || portfolio_offset == length) {
                  $('.load-more').text('No more Posts to show').css({
                    "cursor": "default"
                  });
                }

                $('.magnificPopup-gallery').magnificPopup({
                  disableOn: 400,
                  type: 'image',
                  gallery: {
                    enabled: true
                  }
                });

                $('.magnificPopup-project').magnificPopup({
                  type: 'ajax',
                  closeOnContentClick: true,
                  gallery: {
                    enabled: true
                  }
                })

              } else {
                $('.load-more').text('No more Posts to show').css({
                  "cursor": "default"
                });
              }

            } else {
              $('.load-more').text('No more Posts to show').css({
                "cursor": "default"
              });
            }

          }
        });

      });

      //


    }

    //

    // scrollspy
    if (typeof $.fn.scrollspy != 'undefined') {

      $('body').scrollspy({
        target: '#header',
        offset: 100
      });

    }

  });

})(window.jQuery);

// non jQuery plugins below
