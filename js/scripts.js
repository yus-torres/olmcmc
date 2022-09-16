//Loader
$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});

//Add/remove class on page scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("header").addClass("append");
    } else {
        $("header").removeClass("append");
    }
});

//Add/remove class on page scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1000) {
        $(".utilities").addClass("show");
    } else {
        $(".utilities").removeClass("show");
    }
});

// Medical Department Carousel
$(document).on('ready', function() {
	$(".medical-departments-carousel").slick({
		infinite: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive: [
			{
			breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
			breakpoint: 560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
			breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2
				}
			},
			{
			breakpoint: 320,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});

// Hash Remover Smooth Scroll
$(window).on('hashchange', function(e){
	history.replaceState ("", document.title, e.originalEvent.oldURL);
});