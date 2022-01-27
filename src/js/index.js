import tabs from './modules/tabs';
import './modules/nav';
import './modules/accordion';
import './modules/sliders';
import './modules/ymaps';
import './modules/inputs';
import './modules/modals';
import './modules/date';

window.addEventListener('DOMContentLoaded', () => {
	tabs('.types-nav__btn', '.types-content__item');
	tabs('.blockquotes__images-item', '.blockquotes__texts-item');
	tabs('.clinics__item', '.clinics__img');
});
