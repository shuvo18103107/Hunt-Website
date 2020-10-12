//Smooth Scroll start
$('.header a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1500, function () {
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex', '-1');
						$target.focus();
					};
				});
			}
		}
	});
//Smooth SCroll End

//Menu Fixed start

$('.top_btn').click(function () {


	$('html,body').animate({

		scrollTop: 0

	}, 1000);


});

var $nav = $('.header').offset().top;

$(window).scroll(function () {

	$scrolling = $(this).scrollTop();

	if ($scrolling >= $nav) {

		$('.header').addClass('fixedmenu');

	} else {

		$('.header').removeClass('fixedmenu');

	}
	//Top Button
	if ($scrolling >= 400) {

		$('.top_btn').fadeIn();

	} else {

		$('.top_btn').fadeOut();

	}


});
//Menu Fixed End



//Banner Slider Start

$('.banner_slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	fade: true,
	cssEase: 'linear',
	prevArrow: '<i class="fa fa-arrow-left left"></i>',
	nextArrow: '<i class="fa fa-arrow-right right"></i>',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			}
    },
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				fade: true,
				cssEase: 'linear',
				arrows: false,
				autoplay: true,
				autoplaySpeed: 2000,
			}
    },
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				fade: true,
				cssEase: 'linear',
				arrows: false,
				autoplay: true,
				autoplaySpeed: 2000,

			}
    }
  ]
});

//Banner Slider End



//Portfolio Slider start

$('.port_slider').slick({
	infinite: true,
	speed: 900,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,

});


$('.port_veno').venobox({
	framewidth: '500px',
	frameheight: '400px',
	titleattr: 'data-title',
	numeratio: true,
	infinigall: true,
	spinner: 'wandering-cubes',
});
//Portfolio slider End



//Our Service Start
$('.service_slider').slick({
	infinite: true,
	speed: 900,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 2000,
	vertical: true,
	verticalSwiping: true,
	prevArrow: '<i class="fa fa-arrow-up slide_up"></i>',
	nextArrow: '<i class="fa fa-arrow-down slide_down"></i>',
	centerMode: true,
	centerPadding: '0px',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			}
    },
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
			}
    },
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
			}
    }
  ]
});

//Our Service End




//testimonial Start
$('.testimonial_text_slider').slick({
	infinite: true,
	speed: 800,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
//	autoplay: true,
//	autoplaySpeed: 2000,
	vertical: true,
	centerMode: true,
	centerPadding: '0px',
	asNavFor: '.testimonial_img_slider',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
    },
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
    },
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
    }
  ]
});

$('.testimonial_img_slider').slick({
	infinite: true,
	speed: 800,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
//	autoplay: true,
//	autoplaySpeed: 2000,
	vertical: true,
	draggable: true,
	centerMode: true,
	centerPadding: '0px',
	asNavFor: '.testimonial_text_slider',
	prevArrow: '<i class="fa fa-arrow-up test_up"></i>',
	nextArrow: '<i class="fa fa-arrow-down test_down"></i>',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
    },
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
    },
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
    }
  ]
});
//testimonial End


//team start
$('.team_slider').slick({
	infinite: true,
	arrows: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	speed: 1000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
    },
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
    },
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
    }
  ]
});

$('.team_lightbox').venobox({
	framewidth: '300px',
	frameheight: '500px',
	bgcolor: 'transparent',
	titleattr: 'data-title',
	numeratio: true,
	infinigall: true,
});
//team end

//brand Slider start

$('.brand_slider').slick({
	infinite: true,
	arrows: false,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 1,
	centerMode: true,
	centerPadding: '0px',
	autoplay: true,
	speed: 1000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
    },
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
    },
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
    }
  ]
});
//brand slider end


//Counter Start
$('.counter').counterUp({
	delay: 50,
	time: 1200
});
//Counter End
