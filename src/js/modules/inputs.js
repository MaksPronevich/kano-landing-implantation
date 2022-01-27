const inputs = document.querySelectorAll('input[name=phone]');

inputs.forEach(input => {
	const iti = intlTelInput(input, {
		initialCountry: 'by',
		hiddenInput: 'phone',
		autoHideDialCode: true,
		separateDialCode: true,
		preferredCountries: ['by', 'ru', 'ua'],
		utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js',
	});
});

$('input[name="phone"]').on('close:countrydropdown', function (e, countryData) {
	$(this).val('');
	$(this).mask($(this).attr('placeholder').replace(/[0-9]/g, 'd'));
});

$.mask.definitions['9'] = '';
$.mask.definitions['d'] = '[0-9]';

$('input[name=phone]').mask('dd ddd-dd-dd');
