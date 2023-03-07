const hamburger = document.querySelector('.promo__hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const overlay = document.querySelector('.menu__overlay');


hamburger.addEventListener('click', () => {
	menu.classList.add('active');
	document.body.style.overflow = 'hidden';
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
	document.body.style.overflow = '';
});


overlay.addEventListener('click', () => {
	menu.classList.remove('active');
	document.body.style.overflow = '';
});


const counter = document.querySelectorAll('.skills__raitings-counter'),
	lines = document.querySelectorAll('.skills__raitings-line span');

counter.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});



