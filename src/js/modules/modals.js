const storyModal = new bootstrap.Modal(document.getElementById('story'));
const consultation = new bootstrap.Modal(document.getElementById('consultation2'));
const webinar = new bootstrap.Modal(document.getElementById('webinar'));
const storyModalTrigger = document.querySelectorAll('.stories__slide');
const videoWrap = document.querySelector('.modal-video-wrap');
const btnClose = document.querySelector('.btn-close--story');

const iframeTemplate = url => {
	const iframe = document.createElement('iframe');
	iframe.classList.add('modal-video');
	iframe.setAttribute('allow', 'fullscreen');
	iframe.setAttribute('src', `https://www.youtube-nocookie.com/embed/${url}`);
	iframe.setAttribute('scrolling', `no`);
	iframe.setAttribute('loading', `lazy`);

	return iframe;
};

storyModalTrigger.forEach(item => {
	item.addEventListener('click', () => {
		const videoUrl = item.dataset.video;
		storyModal.show();
		if (videoWrap.querySelector('iframe')) {
			videoWrap.querySelector('iframe').remove();
		}
		videoWrap.append(iframeTemplate(videoUrl));
	});
});

btnClose.addEventListener('click', () => {
	if (videoWrap.querySelector('iframe')) {
		videoWrap.querySelector('iframe').remove();
	}
});

const _ouibounce = ouibounce(false, {
	aggressive: true,
	timer: 0,
	callback: function () {
		consultation.show();
	},
});

setTimeout(() => {
	webinar.show();
}, 40000);
