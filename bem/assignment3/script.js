const accordion = document.querySelector(".accordion__item");

accordion.addEventListener("click", () => {
    accordion.classList.toggle("accordion__item--open");
})