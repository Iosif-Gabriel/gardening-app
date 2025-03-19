import AOS from "aos";
import "aos/dist/aos.css"


const menu_btn = document.getElementById("menu-ham")
const menu = document.querySelector(".header__menu")
const menu_items = document.querySelectorAll(".header__menu-elements")
let rotated = false;

menu_btn.addEventListener("click", () => {
  rotated = !rotated;

  menu_btn.style.transform = rotated ? "rotate(90deg)" : "rotate(0deg)";

  const isMenuOpen = menu.classList.contains("header__menu-on-mobile");

  if (isMenuOpen) {
    menu.classList.remove("header__menu-on-mobile");
    menu.classList.add("header__menu");
    document.body.classList.remove("no-scroll");
  } else {
    menu.classList.remove("header__menu");
    menu.classList.add("header__menu-on-mobile");
    document.body.classList.add("no-scroll");
  }
});

menu_items.forEach(item => {
  item.addEventListener("click", () => {
 
    menu.classList.remove("header__menu-on-mobile");
    menu.classList.add("header__menu");
    rotated = false;
    menu_btn.style.transform = "rotate(0deg)";
    document.body.classList.remove("no-scroll");
  });
});

AOS.init({
  duration: 500,
  offset:100,
})
