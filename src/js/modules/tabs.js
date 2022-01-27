const tabs = (tabSelector, contentSelector) => {
	const tabs = document.querySelectorAll(tabSelector);
	const content = document.querySelectorAll(contentSelector);

	const hideTabContent = () => {
		tabs.forEach(tab => tab.classList.remove('active'));
		content.forEach(content => {
			content.classList.remove('active');
		});
	};

	tabs.forEach((tab, i) =>
		tab.addEventListener('click', () => {
			hideTabContent();
			tab.classList.add('active');
			content[i].classList.add('active');
		}),
	);
};

export default tabs;
