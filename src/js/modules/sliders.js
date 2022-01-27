//  Swiper(stories)
const swiper = new Swiper('.swiper1', {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 20,
	preloadImages: false,
	lazy: true,

	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},

	breakpoints: {
		300: {
			slidesPerView: 1.3,
			spaceBetween: 12,
		},

		767: {
			slidesPerView: 2,
			spaceBetween: 10,
		},

		1199: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});

// Swiper(specialists)
const swiper2 = new Swiper('.swiper2', {
	slidesPerView: 2,
	spaceBetween: 20,
	navigation: {
		nextEl: '.button-next_2',
		prevEl: '.button-prev_2',
	},

	breakpoints: {
		300: {
			slidesPerView: 1.3,
			spaceBetween: 10,
		},

		767: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		1199: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
	},
});

//  Swiper(before-after)
const swiper3 = new Swiper('.swiper3', {
	slidesPerView: 4,
	spaceBetween: 20,
	preloadImages: false,
	lazy: true,
	navigation: {
		nextEl: '.button-next_3',
		prevEl: '.button-prev_3',
	},

	breakpoints: {
		300: {
			slidesPerView: 1.3,
			spaceBetween: 10,
		},

		767: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1199: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
});

// Swiper(internship)
const swiper4 = new Swiper('.swiper4', {
	slidesPerView: 3,
	spaceBetween: 20,
	preloadImages: false,
	lazy: true,

	breakpoints: {
		300: {
			slidesPerView: 1.3,
			spaceBetween: 10,
		},

		767: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1199: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});
