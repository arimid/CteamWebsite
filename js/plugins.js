/*global $, jquery, alert ,console ,scrollY*/
var showcolor = document.getElementById('showcolor'),
	color = document.getElementById('color'),
	clickbut = document.getElementById('clickbut'),
	switcher = document.getElementById('switcher');

clickbut.onclick = function () {
	'use strict';
	
	$('#showcolor').css('background-color', color.value);
	$('#act').css('border-color', color.value);
	$('#color, #tur').css('color', color.value);
	$('#clickbut').css('border-color', color.value);
	$('#clickbut').css('color', color.value);
	$('#color').css('border-color', color.value);
	$('.cir ,.but-ab2 ').css({backgroundColor: color.value});
	$('.sec-3 , .sec-3 p,.but-ab1,.text-mar button').css('color', color.value);
	$('.but-ab1,.text-mar button').css('border-color', color.value);
	$('.sec-3 p,.text-mar button').css('color', color.value);
	$('.text-mar button').css('border-color', color.value);
	$('.fa-facebook-square ,.fa-facebook').css('color', color.value);
	$('.fa-twitter-square ,.fa-twitter').css('color', color.value);
	$('.fa-linkedin-square ,.fa-linkedin').css('color', color.value);
	$('.fa-behance-square ,.fa-behance').css('color', color.value);
	$('.fa-google-plus-square ,.fa-google-plus').css('color', color.value);
	$('.lasbut').css('background-color', color.value);
	$('.box').hover(function () {
		$(this).css('background-color', color.value);
		$(this).css('color', 'white');
		$(this).children(".cir").css('color', color.value);
		$(this).children(".cir").css('background-color', 'white');
	}, function () {
		$(this).css('background-color', 'white');
		$(this).css('color', 'gray');
		$(this).children(".cir").css('color', 'white');
		$(this).children(".cir").css('background-color', color.value);
	});
	$('.abbut').hover(function () {
		$(this).css('background-color', color.value);
		$(this).css('border-color', 'transparent');
		$(this).css('color', 'white');
	}, function () {
		$(this).css('background-color', 'transparent');
		$(this).css('border-color', color.value);
		$(this).css('color', color.value);
	});
	$('.lin').hover(function () {
		$(this).css('border-color', color.value);
	}, function () {
		$(this).css('border-color', 'transparent');
	});
	$('.but-ab1').hover(function () {
		$(this).css('background-color', color.value);
		$(this).css('color', 'white');
		$(this).css('border-color', 'transparent');
	}, function () {
		$(this).css('background-color', 'white');
		$(this).css('color', color.value);
		$(this).css('border-color', color.value);
	});
	$('.lasbut').hover(function () {
		$(this).css('background-color', 'transparent');
		$(this).css('color', color.value);
		$(this).css('border-color', color.value);
	}, function () {
		$(this).css('background-color', color.value);
		$(this).css('color', 'white');
		$(this).css('border-color', "transparent");
	});
	$('.text-mar button').hover(function () {
		$(this).css('background-color', color.value);
	}, function () {
		$(this).css('background-color', 'transparent');
	});
	$('.fa-facebook-square ,.fa-facebook').hover(function () {
		$(this).css('color', '#3b5998');
	}, function () {
		$(this).css('color', color.value);
	});
	$('.fa-twitter-square ,.fa-twitter').hover(function () {
		$(this).css('color', '#1da1f2');
	}, function () {
		$(this).css('color', color.value);
	});
	$('.fa-linkedin-square ,.fa-linkedin').hover(function () {
		$(this).css('color', '#0077b5');
	}, function () {
		$(this).css('color', color.value);
	});
	$('.fa-behance-square ,.fa-behance').hover(function () {
		$(this).css('color', '#131418');
	}, function () {
		$(this).css('color', color.value);
	});
	$('.fa-google-plus-square ,.fa-google-plus').hover(function () {
		$(this).css('color', '#db4437');
	}, function () {
		$(this).css('color', color.value);
	});
	$('.but-ab2').hover(function () {
		$(this).css('background-color', 'transparent');
		$(this).css('color', color.value);
		$(this).css('border-color', color.value);
	}, function () {
		$(this).css('background-color', color.value);
		$(this).css('color', 'white');
		$(this).css('border-color', 'transparent');
	});
	$('.but-ab2').hover(function () {
		$(this).css('background-color', 'white');
	}, function () {
		$(this).css('background-color', color.value);
	});
	$('.text-mar button').hover(function () {
		$(this).css('color', 'white');
	}, function () {
		$(this).css('color', color.value);
	});
};

function calc() {
	"use strict";
	if (document.getElementById('ch').checked) {
		document.getElementById('navbar').style.position = 'fixed';
	} else {
		document.getElementById('navbar').style.position = 'absolute';
	}
}

$('#tur').on('click', function () {
	'use strict';

	var boxRight = $(".box-op").css('right');
    if (boxRight === "-99.5px") {
        $(".box-op").animate({
            right: '0px'
        });
    } else {
        $(".box-op").animate({
            right: '-99.5px'
        });
    }
});
		
$(function () {
	"use strict";
	$(".h3").typed({
		strings: ["Title Of Project - PSD Template"],
		typeSpeed: 50
	});
});

$.fn.extend({
    animateCss: function (animationName) {
        "use strict";
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
    }
});