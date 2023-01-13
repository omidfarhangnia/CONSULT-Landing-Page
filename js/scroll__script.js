const NAVIGATION__BAR = document.querySelector(".navigation__bar");
const PAGE__SCROLL = document.querySelector(".page__scroll");

window.addEventListener("scroll", scrolled)


function scrolled() {
    let userPageHeight = window.innerHeight;
    let pageHeight =  document.body.scrollHeight;
    let onePercentOfUserPageHeight = (pageHeight - userPageHeight)/ 100;
    let currentPercent = window.scrollY / onePercentOfUserPageHeight;

    PAGE__SCROLL.style.width = `${currentPercent}%`
}