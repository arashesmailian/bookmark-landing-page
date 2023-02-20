const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-menue-btn");
const header = document.querySelector("header");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    header.style.visibility = "visible";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    header.style.visibility = "hidden";
  }
}

hamburger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);
