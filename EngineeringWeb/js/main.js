$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});




//Back to Top button
$(document).ready(function () {
	$(function () {
		$(document).on('scroll', function () {
			if ($(window).scrollTop() > 100) {
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});
		$('.back-to-top').on('click', scrollToTop);
	});

	function scrollToTop() {
		verticalOffset = typeof (verticalOffset) != 'undefined' ? verticalOffset : 0;
		element = $('body');
		offset = element.offset();
		offsetTop = offset.top;
		$('html, body').animate({ scrollTop: offsetTop }, 500, 'linear');
	}
});
//END Back to Top button


// GRID
$(document).ready(function () {

	$(".box").on("click", function () {
		$(this).siblings().toggleClass("hidden");
		$(this).toggleClass("full");
		$(".captionBox").toggleClass("hiddenText");
		$(this).children().animate({
			opacity: "1"
		}, 500, function () { });
	});

	if ($(window).width() < 768) {
		$(".box").on("click", function () {
			$("#gridGallery").toggleClass("mobileFunction");
		});
	}

	if ($(window).width() >= 768) {

		$(".box").hover(function () {
			$(this).siblings().toggleClass("opacity");
		});

	}

	$(".horizontal").click(function () {
		$(this).toggleClass("full");
		$(".captionBox").toggleClass("hiddenText");
		$(this).children().animate({
			opacity: "1"
		}, 500, function () { });
	});

	$(".horizontal").hover(function () {
		$(this).siblings().toggleClass("opacity");
	});

});

var sickPrimary = {
      autoplay: true,
      autoplaySpeed: 2400,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 1800,
      cssEase: 'cubic-bezier(.84, 0, .08, .99)',
      asNavFor: '.text-slider',
      centerMode: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
}

var sickSecondary = {
      autoplay: true,
      autoplaySpeed: 2400,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1800,
      cssEase: 'cubic-bezier(.84, 0, .08, .99)',
      asNavFor: '.image-slider',
      prevArrow: $('.prev'),
      nextArrow: $('.next')
}

$('.image-slider').slick(sickPrimary);
$('.text-slider').slick(sickSecondary);

 // Reset
 $(".touch .client-wrap").click(function (event) {
	var target = $(event.target);
	if (target.hasClass("client-close")) {
	 $(".client-wrap div.client").addClass("reset");
	} else {
	 $(".client-wrap div.client").removeClass("reset");
	}
 });
 
 // White BG for client top
 $(".no-touch .project-list li").hover(function (e) {
	$(this)
	 .parents(".client-meta")
	 .next(".overflow-wrapper")
	 .toggleClass("white-bg");
	$(".touch .client-wrap").toggleClass(".solid");
 });
 
 // David Walsh simple lazy loading
 [].forEach.call(document.querySelectorAll("img[data-src]"), function (img) {
	img.setAttribute("src", img.getAttribute("data-src"));
	img.onload = function () {
	 img.removeAttribute("data-src");
	};
 });
 
 