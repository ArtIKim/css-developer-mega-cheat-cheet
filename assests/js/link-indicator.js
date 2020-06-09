const menuMarker = document.querySelector(".menu__marker");
const menuLinks = document.querySelectorAll(".header__container a");

function indicateLink(e) {
    menuMarker.style.left = e.offsetLeft + "px";
    menuMarker.style.width = e.offsetWidth + "px";
}

function activeLink(e) {
    menuLinks.forEach((el) => el.classList.remove("active"));
    e.classList.add("active");
}

menuLinks.forEach((el) => {
    el.addEventListener("click", (e) => {
        indicateLink(e.target);
        activeLink(e.target);
    });
});
