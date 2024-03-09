/*Toggle style switcher*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open"); //opens the colour changing toggle bar by firing the css files
});
/*hiding style switcher on scroll*/
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    //checks whether the toggle bar is already open or not
    document.querySelector(".style-switcher").classList.remove("open"); //closes the already opened toggle bar.
  }
});
/* Theme Colours*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color == style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
/*theme light to dark switcher */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight
    .querySelector("i")
    .classList.toggle(
      "fa-sun"
    ); /*selecting the i tag and adding fa-sun and moon icons in the toggle window */
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle(
    "light"
  ); /*adding or removing with respect to its presence a light class with the body tag ,whose css will be triggered on demand*/
});
window.addEventListener("load", () => {
  /*when the dark theme gets active as soon as the site is openes the .light class will be removed and then if we click on the theme changer the onclick event event listener will be active and make the theme light by checking the if else condition and adding respective class.*/
  if (document.body.classList.contains("light")) {
    dayNight.querySelector("i").classList.add("fa-moon");
  } else {
    dayNight.querySelector("i").classList.add("fa-sun");
  }
});
