const burger = document.querySelector(".burger");
const windowElem = document.querySelector(".window");
const closeElem = document.querySelector(".window img");
const links = document.querySelectorAll(".window a");


burger.addEventListener("click", () => {
    windowElem.style.display = "block"
})

closeElem.addEventListener("click", () => {
    windowElem.style.display = "none"
})

for (link of links) {
    link.addEventListener("click", () => {
        windowElem.style.display = "none"
    });
}

$(".slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
});

$(".portfolio_items").slick({
    autoplay: true,
    autoplaySpeed: 1000,
});
