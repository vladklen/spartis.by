const burger = document.querySelector(".header__burger");
const menyBurger = document.querySelector(".header__menu");
const bodyLock = document.querySelector("body");

burger.onclick = function () {
	burger.classList.toggle("active");
	menyBurger.classList.toggle("active");
	bodyLock.classList.toggle("lock");
}
