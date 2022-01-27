const sections = document.querySelectorAll('.section-scroll');
const headerNavLinks = document.querySelectorAll('.header-nav__link');

sections.forEach((section, i) => {
	window.addEventListener('scroll', () => {
		const distanceToTop = section.getBoundingClientRect().top;
		const sectionHeight = section.offsetHeight;
		const sectionId = section.getAttribute('id');
		const linkId = headerNavLinks[i].dataset.name;
		const headerHeight = document.querySelector('.header').offsetHeight;

		if (distanceToTop < headerHeight && distanceToTop > -sectionHeight + 100) {
			if (sectionId === linkId) {
				headerNavLinks[i].parentElement.classList.add('active');
			} else {
				headerNavLinks[i].parentElement.classList.remove('active');
			}
		} else if (distanceToTop < sectionHeight) {
			headerNavLinks[i].parentElement.classList.remove('active');
		}
	});
});

headerNavLinks.forEach(headerNavLink =>
	headerNavLink.addEventListener('click', () => {
		document.querySelectorAll('.header-nav__item').forEach(item => item.classList.remove('active'));
		headerNavLink.parentElement.classList.add('active');
	}),
);
