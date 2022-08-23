// navBar

const navbar__burger = document.querySelector(".navbar__burger");
const container = document.querySelector(".container");

navbar__burger.addEventListener("click", () => {
	container.classList.toggle("active");
});

