// Preloader
window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
}

// Burger
const burger = document.querySelector(".header__burger");
const menyBurger = document.querySelector(".header__menu");
const bodyLock = document.querySelector("body");

burger.onclick = function () {
	burger.classList.toggle("active");
	menyBurger.classList.toggle("active");
	bodyLock.classList.toggle("lock");
}

// Код для анимациии при прокрутке страницы

const animItems = document.querySelectorAll('._anim-items');
window.onload = function () {
	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_animation');
				} else {
					if (!animItem.classList.contains('_anim-stop')) {
						animItem.classList.remove('_animation')
					}
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
		setTimeout(() => {
			animOnScroll();
		}, 800);
	}
};




// JQuerry
jQuery(function ($) {
	if ($(".main__slider").length > 0) {
		$('.main__slider').slick({
			dots: true,
			infinite: true,
			arrows: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 2,
			autoplay: true,
			responsive: [
				{
					breakpoint: 1024,
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
						slidesToShow: 2,
						slidesToScroll: 2,
						arrows: true,
						dots: false,
					}
				},
				{
					breakpoint: 620,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: false,
						arrows: true,
					}
				}
			]
		});
	}
	if ($(".about__slider").length > 0) {
		$('.about__slider').slick({
			dots: true,
			infinite: true,
			arrows: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 2,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						arrows: false,
					}
				},
				{
					breakpoint: 620,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: false,
						arrows: true,
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});
	}
	$('[data-fancybox="object"]').fancybox({
		buttons: [
			"slideShow",
			"thumbs",
			"zoom",
			"fullScreen",
		],
		loop: false,
		arrows: true,
		infobar: true,
		buttons: true,
		slideShow: true,
	});

	$('[data-fancybox="certificates"]').fancybox({
		buttons: [
			"slideShow",
			"thumbs",
			"zoom",
			"fullScreen",
		],
		loop: false,
		arrows: true,
		infobar: true,
		buttons: true,
		slideShow: true,

	});
	$('[data-fancybox="reviews"]').fancybox({
		buttons: [
			"slideShow",
			"thumbs",
			"zoom",
			"fullScreen",
		],
		loop: false,
		arrows: true,
		infobar: true,
		buttons: true,
		slideShow: true,

	});

});