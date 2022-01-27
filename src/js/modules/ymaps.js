ymaps.ready(function () {
	var myMap = new ymaps.Map(
			'map',
			{
				center: [53.916406, 27.422833],
				zoom: 9,
			},
			{
				searchControlProvider: 'yandex#search',
			},
		),
		// Создаём макет содержимого.
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
		myPlacemark = new ymaps.Placemark(
			myMap.getCenter(),
			{
				hintContent: '',
				balloonContent: '<span class="balloon__title">Клиника на ул. Казимировская, 21</span>',
			},
			{
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				hideIconOnBalloonOpen: false,
				// Своё изображение иконки метки.
				iconImageHref: '/assets/landing1/img/clinics/icon1.svg',
				// Размеры метки.
				iconImageSize: [43, 43],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [0, 0],
			},
		),
		myPlacemarkWithContent = new ymaps.Placemark(
			[53.908917, 27.426629],
			{
				hintContent: '',
				balloonContent: '<span class="balloon__title">Клиника на ул. Неманская, 4</span>',
				iconContent: '',
			},
			{
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				hideIconOnBalloonOpen: false,
				// Своё изображение иконки метки.
				iconImageHref: '/assets/landing1/img/clinics/icon3.svg',
				// Размеры метки.
				iconImageSize: [43, 43],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-0, -0],
			},
		);

	myPlacemarkWithContent2 = new ymaps.Placemark(
		[53.927672, 27.627283],
		{
			hintContent: '',
			balloonContent: '<span class="balloon__title">Клиника на пр-т Независимости, 92</span>',
			iconContent: '',
		},
		{
			// Опции.
			// Необходимо указать данный тип макета.
			hideIconOnBalloonOpen: false,
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: '/assets/landing1/img/clinics/icon2.svg',
			// Размеры метки.
			iconImageSize: [48, 48],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-24, -24],
		},
	);

	myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent).add(myPlacemarkWithContent2);
});
