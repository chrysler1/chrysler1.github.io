//-----------------------------------------------------------------
// Function to get all <tags> with .lazyBGLoading and
// add class which contains background image src with media queries
function lazyBGLoading() {
	$('.lazyBGLoading').each(function(index, element) {
        $(this).addClass($(this).attr('data-lazybgloading'));
    });
}
lazyBGLoading();
// #lazyBGLoading

//-----------------------------------------------------------------
// Function to get all <tags> with .lazyIMGLoading and
// add class which contains image src
function lazyIMGLoading() {
	$('.lazyIMGLoading').each(function(index, element) {
        $(this).attr('src', $(this).attr('data-lazyimgloading'));
    });
}
lazyIMGLoading();
// #lazyBGLoading

//
$(document).ready(function(e) {
	// Set phone mask:
	$('#inputphone').inputmask('+38 (999) 999-99-99');
	
	// Mobile Menu
	$('.menu-link, .dark-bg, .close-menu-bg').click(function(e) {
        $('.header').toggleClass('menu-opened');
		$('.dark-bg').height($(document).innerHeight());
    });
	// Doc scrolling
	$(document).scroll(function(e) {
		// Show to-top button:
		$(document).scrollTop() > 500 ? $('#btn-totop').fadeIn(1000) : $('#btn-totop').fadeOut(1000);
		// Do fixed header:
		checkScroll();
		// Message alignment
		if($(document).scrollTop() == 0) {
			$('.msg').css('top','63px');
		} else {
			$('.msg').css('top','55px');
		}
	});
	// Check scrolling position
	function checkScroll() {
		$(document).scrollTop() > 10 ? $('body').addClass('fixed') : $('body').removeClass('fixed');
	}
	checkScroll();
	// Scroll to id
	$('.anchor-link').on("click touchstart", function(e) {
		var elem = e.target.getAttribute('data-href');
		var dy = $(elem).offset().top;
		$('body,html').animate({scrollTop: dy}, 800);
		// Hide mobile menu always
		$('.header').removeClass('menu-opened');
		e.preventDefault();
	});
	// Count slides
	$('.comments-list').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.comments-info').text(i + '-' + (i + (slick.getSlideCount() - 1)) + ' отзывов из ' + slick.slideCount);
	});
	
	// Main slider
	$('.review-list').slick({
	  infinite: true,
	  lazyLoad: 'ondemand',
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  dots: true,
	  speed: 600,
	  responsive: [
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false
		  }
		}
	  ]
	});
	
	// Count slides
	$('.review-list').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		var j = i + (slick.getSlideCount() - 1);
		if(j > slick.slideCount) { 
			j = slick.slideCount; 
			i = j - (slick.getSlideCount() - 1);
		}
		$('.reviews-info').text(i + '-' + j + ' яхты из ' + slick.slideCount);
	});
	
	//  Hide on click
	$('.preview').on("click", function(e) {
		if(e.target.className === 'preview') {
        	$('.preview').fadeOut(300);
		}
    });
	$('.preview').keydown(function(e) {
        if(e.keyCode == 27) {
			$('.preview .btn-close').click();
		}
    });
	$('.preview .btn-close').on("click", function(e) {
        $('.preview').fadeOut(300);
    });
	// Main slider item click
	$('.review-list .slick-slide button, .review-list .slick-slide img').on("click", function(e) {
		// Get current preview slider class name
		var preview = '.preview-' + $(this).parents('.slick-slide').attr('data-value');
		// Set dark background width and show it
		$('.preview').height($(document).height());
		$('.preview').fadeIn(500);
		// Hide all preview sliders
		$('.preview-list').parent('.preview-wrap').fadeOut(0);
		// Show current preview slider
		$(preview).fadeIn(800);
		// Set top position of slider
		$(preview).parent('.preview-box').css('top', ($(document).scrollTop() + 85));
		// Refresh slider
		$(preview + ' .slick-dots > li:first-child button').click();
    });
	
	// Preview slider
	$('.preview-list').slick({
	  infinite: true,
	  lazyLoad: 'ondemand',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  speed: 600,
	  responsive: [
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true
		  }
		}
	  ]
	});
	
	// Comments slider
	$('.comments-list').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  dots: false,
	  speed: 600,
	  adaptiveHeight: true,
	  responsive: [
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: false,
			adaptiveHeight: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			adaptiveHeight: true
		  }
		}
	  ]
	});
	
	//
	$('#btn-totop').on("click", function(e) {
        $('body,html').animate({scrollTop: 0}, 800);
    });
	// Close msg
	$('.close-msg').on("click", function(e) {
        $('.msg').fadeOut(400);
    });

	/////////////////
	// VALIDATIORS //
	/////////////////
	
	// Function Validate Phone:
	function validatePhone(id) {
		var phone_regexp = /\+\d\d\s[(]\d\d\d[)]\s\d\d\d\-\d\d-\d\d/;
		var valid_phone = phone_regexp.test($(id).val());
		return valid_phone;
	}
	// Function Validate Name:
	function validateFirstName(id) {
		var name_regexp = /^[a-zA-Zа-яА-ЯёЁ\s]{2,128}$/;
		var valid_name = name_regexp.test($(id).val());
		return valid_name;
	}
	
	// General validating function .input
	function validateField(id, evt, vfunc) {
		var flag = 0;
		var errtxt = $(id).parent('div').children('.error-text');
		
		if($(id).val().length == 0) {
			$(id).addClass('err').removeClass('valid');
			evt.preventDefault();
			flag = 0;
		} else if(!vfunc(id)) {
			$(id).addClass('err').removeClass('valid');
			evt.preventDefault();
			flag = 0;
		} else {
			$(id).addClass('valid').removeClass('err');
			flag = 1;
		}
		
		$(id).hasClass('err') ? errtxt.fadeIn(400) : errtxt.fadeOut(400);
		
		return flag;
	}
	
	// General reAct function
	function reActField(id, evt, vfunc) {
		$(id).removeClass('valid err');
		if(vfunc(id)) {
			$(id).addClass('valid');
		}
	}
	
	// Send e-mail via ajax
	function sendEmail(form) {
		var formData = new FormData($(form)[0]);

		//Send msg
		$.ajax({
			url: 'https://blabla-october.herokuapp.com/t.php',
			type: 'POST',
			data: formData,
			async: false,
			success: function (data) {
				$('.success').fadeIn(400);
				$('.failure').fadeOut(0);
				//yaCounter37833555.reachGoal('ORDER'); return true;

			},
			error: function(data) {
				$('.success').fadeOut(0);
				$('.failure').fadeIn(400);
			},
			complete: function() {
				// Clear form
				$('#btnsubmit').removeClass('sending').text('Отправить заявку').attr('disabled', false);
				$(form)[0].reset();
				$('#main-form input').removeClass('valid');
			},
			cache: false,
			contentType: false,
			processData: false
		});
	}
	
	// Validate contact form
	$('#main-form').submit(function(e) {
		
		var sum = 0;
		
		// Validate First Name
		sum += validateField('#inputname', e, validateFirstName);
		// Validate Phone
		sum += validateField('#inputphone', e, validatePhone);
		
		if(sum == 2) {
			$('#btnsubmit').addClass('sending').html('Отправка...').attr('disabled', true);
			setTimeout(function(){
				sendEmail($('#main-form'));
			}, 200);
		}
		
		e.preventDefault();
	});

	// Validation ReAct Name:
	$('#inputname').keyup(function(e) {
		// If Enter
		if(e.keyCode == 13) {
			$('#main-form').submit();
		} else {
		// Listen to validation
			if(!validateFirstName('#inputname')) {	
				$(this).removeClass('valid err');
				e.preventDefault();
			} else {
				$(this).addClass('valid').removeClass('err');
			}
		}
	});
	
	// Validation ReAct Phone:
	$('#inputphone').keyup(function(e) {
		// If Enter
		if(e.keyCode == 13) {
			$('#main-form').submit();
		} else {
		// Listen to validation
			if(!validatePhone('#inputphone')) {	
				$(this).removeClass('valid err');
				e.preventDefault();
			} else {
				$(this).addClass('valid').removeClass('err');
			}
		}
	});

	// Preventing keys according to regexp /^[a-zA-Z\s',.]{2,128}$/
	/*
	$('#inputname').keydown(function(e) {
		if(e.shiftKey) {
			if(e.keyCode < 65 || e.keyCode > 90) {		// Enable letters
				e.preventDefault();
			}
		} else
		if(e.keyCode < 65 	&& e.keyCode != 46 			// Delete
							&& e.keyCode != 32 			// Space
							&& e.keyCode != 37 			// Left key
							&& e.keyCode != 38 			// Up key
							&& e.keyCode != 39 			// Right key
							&& e.keyCode != 40 			// Down key
							&& e.keyCode != 13 			// Enter
							&& e.keyCode != 9 			// Tab
							&& e.keyCode != 8 			// Backspace
		|| e.keyCode > 90 	&& e.keyCode != 190 		// .
							&& e.keyCode != 188 		// ,
							&& e.keyCode != 222) {		// '
			e.preventDefault();
		}
	
	});
	*/
	
	// Bluring
	$('#inputname').blur(function(e) {
		// Validate First Name
		validateField('#inputname', e, validateFirstName);
	});
	$('#inputphone').blur(function(e) {
		// Validate Phone
		validateField('#inputphone', e, validatePhone);
	});
	
});