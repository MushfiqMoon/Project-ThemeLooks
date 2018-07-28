
        /*==================================
* Author        : "Mushfiq"
* Template Name :  "Circle" | One Page Personal Portfolio HTML Template
* Version       : 1.0
==================================== */


/*=========== TABLE OF CONTENTS ===========

			## Counter up
			## owl
			## Smooth Scroll
			## Sticky menu

			
======================================*/

		

$(document).ready(function () {
	"use strict";
	

		//for counter up
		$(window).on('load', function(){	
			$('.counter').counterUp({
				delay: 10,
				time: 3500
			});	
		});	


		// for home Clint
		$("#clint").owlCarousel({
			items: 3,
			autoplay: true,
			loop: true,
			dots:false,
			mouseDrag:true,
			nav:true,
			smartSpeed:1000,
			transitionStyle:"fade",
			animateIn: 'fadeIn',
			animateOut: 'fadeOutRight',
			navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
			responsiveClass:true,
			responsive : {
				0 : {
					items: 1,
				},
				640 : {
					items: 2,
				},
				992 : {
					items: 3,
				}
			}
		});	


		// Smooth Scroll
		$('a.data-scroll').on("click", function(e) {
			e.preventDefault();
			var anchor = $(this);
				$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 0
			}, 1200);
		});	


		// Custom function which toggles between sticky class (is-sticky)
		var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
			var stickyHeight = sticky.outerHeight();
			var stickyTop = stickyWrapper.offset().top;
			if (scrollElement.scrollTop() >= stickyTop) {
				stickyWrapper.height(stickyHeight);
				sticky.addClass("is-sticky");
			}
			else {
				sticky.removeClass("is-sticky");
				stickyWrapper.height('auto');
			}
		};


		// Find all data-toggle="sticky-onscroll" elements
		$('[data-toggle="sticky-onscroll"]').each(function () {
			var sticky = $(this);
			var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
			sticky.before(stickyWrapper);
			sticky.addClass('sticky');

			// Scroll & resize events
			$(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
				stickyToggle(sticky, stickyWrapper, $(this));
			});

			// On page load
			stickyToggle(sticky, stickyWrapper, $(window));
		});		

	
/*

	// preloader

	$(window).on('load',function() {
		$(".preloader").delay(1000).fadeOut(500);
	});
	

	// scrollUp
	
		$.scrollUp({
			scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		});	

	
	// wow js
		new WOW().init();	
	









	*/
	

	

	
	
	
});

