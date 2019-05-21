let navi = document.querySelector(".navi--button");

navi.addEventListener("click", e => {

  e.preventDefault();

  document.body.classList.toggle("navi--visible");

});