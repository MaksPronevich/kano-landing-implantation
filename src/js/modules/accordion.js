const accordionTitles = document.querySelectorAll('.questions__title');

accordionTitles.forEach(accordionTitle =>
	accordionTitle.addEventListener('click', () => {
		let accordionContent = accordionTitle.nextElementSibling;

		if (accordionContent.style.maxHeight) {
			accordionContent.style.maxHeight = null;
			accordionContent.classList.toggle('active');
		} else {
			accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
			accordionContent.classList.toggle('active');
		}

		accordionTitle.classList.toggle('active');
	}),
);
