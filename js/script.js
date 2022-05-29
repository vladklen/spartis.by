const burger = document.querySelector(".header__burger");
const menyBurger = document.querySelector(".header__menu");
const bodyLock = document.querySelector("body");

burger.onclick = function () {
	burger.classList.toggle("active");
	menyBurger.classList.toggle("active");
	bodyLock.classList.toggle("lock");
}

const card = document.querySelector('.objects__cards');

card.addEventListener('mousemove', rotate);

function rotate(event) {
	console.log('Наведение мышкой');
}