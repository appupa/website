(function($){

	"use strict";

/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).ready(function(){						
	
	
		// simplePlaceholder - polyfill for mimicking the HTML5 placeholder attribute using jQuery
		// https://github.com/marcgg/Simple-Placeholder/blob/master/README.md
		
		if(typeof $.fn.simplePlaceholder !== 'undefined'){
			
			$('input[placeholder], textarea[placeholder]').simplePlaceholder();
		
		}
		
		// Revolution Slider
		
		if(typeof $.fn.revolution !== 'undefined'){
			
			$('.fullwidthbanner').revolution({
				 delay:9000,
				 startwidth:1170,
				 startheight:810,
				 autoHeight:"off",
				 fullScreenAlignForce:"off",
		 
				 onHoverStop:"on",
		 
				 thumbWidth:100,
				 thumbHeight:50,
				 thumbAmount:3,
		 
				 hideThumbsOnMobile:"off",
				 hideBulletsOnMobile:"off",
				 hideArrowsOnMobile:"off",
				 hideThumbsUnderResoluition:0,
		 
				 hideThumbs:0,
				 hideTimerBar:"off",
		 
				 keyboardNavigation:"on",
		 
				 navigationType:"bullet",
				 navigationArrows:"solo",
				 navigationStyle:"round",
		 
				 navigationHAlign:"center",
				 navigationVAlign:"bottom",
				 navigationHOffset:0,
				 navigationVOffset:40,
		 
				 soloArrowLeftHalign:"left",
				 soloArrowLeftValign:"center",
				 soloArrowLeftHOffset:0,
				 soloArrowLeftVOffset:0,
		 
				 soloArrowRightHalign:"right",
				 soloArrowRightValign:"center",
				 soloArrowRightHOffset:0,
				 soloArrowRightVOffset:0,
		 
		 
				 touchenabled:"off",
				 swipe_velocity:"0.7",
				 swipe_max_touches:"1",
				 swipe_min_touches:"1",
				 drag_block_vertical:"false",
		 
				 stopAtSlide:-1,
				 stopAfterLoops:-1,
				 hideCaptionAtLimit:0,
				 hideAllCaptionAtLilmit:0,
				 hideSliderAtLimit:0,
		 
				 dottedOverlay:"none",
		 
				 fullWidth:"off",
				 forceFullWidth:"off",
				 fullScreen:"off",
				 fullScreenOffsetContainer:"#topheader-to-offset",
		 
				 shadow:0
			}).css("visibility","visible");
				
		}
		
		// bxSlider - responsive slider
		// http://bxslider.com/options
		
		if(typeof $.fn.bxSlider !== 'undefined'){
			
			$('.portfolio-slider .slides').bxSlider({
				 mode: 'horizontal',					// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: true,						// If true, "Next" / "Prev" controls will be added
				 auto: false,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false  						// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
			$('.blog-post-slider .slides').bxSlider({
				 mode: 'horizontal',					// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: false,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: true,						// If true, "Next" / "Prev" controls will be added
				 auto: false,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false, 						// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
				 slideWidth: "370",
				 minSlides: 1,
				 maxSlides: 5,
				 moveSlides: 1,
				 slideMargin: 30
			});
			
			$('.testimonial-slider .slides').bxSlider({
				 mode: 'fade',							// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 800,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: false,						// If true, "Next" / "Prev" controls will be added
				 auto: true,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false  						// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
			$('.carousel .slides').bxSlider({
				 mode: 'horizontal',					// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: false,						// If true, "Next" / "Prev" controls will be added
				 auto: false,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false 							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
			$('.vertical-carousel .slides').bxSlider({
				 mode: 'vertical',						// Type of transition between slides: 'horizontal', 'vertical', 'fade'		
				 speed: 500,							// Slide transition duration (in ms)
				 infiniteLoop: true,					// If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa.
				 hideControlOnEnd: false,				// If true, "Next" control will be hidden on last slide and vice-versa. Only used when infiniteLoop: false
				 pager: true,							// If true, a pager will be added
				 pagerType: 'full',						// If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1/5)
				 controls: false,						// If true, "Next" / "Prev" controls will be added
				 auto: false,							// If true, slides will automatically transition
				 pause: 4000,							// The amount of time (in ms) between each auto transition
				 autoHover: true,						// Auto show will pause when mouse hovers over slider
				 useCSS: false 							// If true, CSS transitions will be used for animations. False, jQuery animations. Setting to false fixes problem with jQuery 2.1.0 and mode:horizontal
			});
			
		}
				
		// Magnific PopUp - responsive lightbox
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html
		
		if(typeof $.fn.magnificPopup !== 'undefined'){
		
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

		
/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */
   	
	$(window).scroll(function () {
	
		
		
	});

})(window.jQuery);

// non jQuery plugins below

