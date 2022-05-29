const burger = document.querySelector(".header__burger");
const menyBurger = document.querySelector(".header__menu");
const bodyLock = document.querySelector("body");

burger.onclick = function () {
	burger.classList.toggle("active");
	menyBurger.classList.toggle("active");
	bodyLock.classList.toggle("lock");
}

// const cardsItem = document.querySelectorAll('.card__item');
// for (let i = 0; i < cardsItem.length; i++) {
// 	const cardItem = cardsItem[i];
// 	cardItem.addEventListener('mousemove', startRotate);
// 	cardItem.addEventListener('mouseout', stopRotate);
// }

// function startRotate(event) {
// 	const card = this.querySelector('.card');
// 	const halfHeight = card.offsetHeight / 2;
// 	const halfWidth = card.offsetWidth / 2;
// 	card.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 15 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 15 + 'deg)';
// }


// function stopRotate(event) {
// 	const card = this.querySelector('.card');
// 	card.style.transform = 'rotate(0)';
// }