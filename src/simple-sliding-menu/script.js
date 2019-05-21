const animation = document.querySelector(".menu--toggle");
const menu = document.querySelector(".menu");

animation.addEventListener("click", () => {

	animation.classList.toggle("active");
  menu.classList.toggle("active");
  
})
