const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach(item => {
    const title = item.querySelector(".accordion__title");

    title.addEventListener("click", () => {
        item.classList.toggle("accordion__item--open");

        const content = item.querySelector(".accordion__copy");
        content.classList.toggle("accordion__copy--hidden");
    });
});