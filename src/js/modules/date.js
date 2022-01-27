const textWrap = document.querySelector('.modal-text-wrap');

const startTime = 8;
const secondTime = 9;
const mediumTime = 15;
const endTime = 21;
const day = new Date().getDay();
const nowHours = new Date().getHours();

if ((nowHours >= startTime && nowHours < endTime && day !== 0) || (nowHours >= secondTime && nowHours < mediumTime && day === 0)) {
	textWrap.innerHTML =
		'<p class="modal-text modal-text--consultation">Наш медицинский координатор свяжется с вами и уточнит все детали в течение 15 минут</p>';
} else {
	textWrap.innerHTML =
		'<p class="modal-text modal-text--consultation">Наш медицинский координатор свяжется с вами в ближайшее рабочее время<br />  Пн-Сб с 08:00 - 21:00<br /> Вс 09:00 - 15:00</p>';
}
