const body = document.querySelector("body");
const nav = document.querySelector("nav");
const map = document.querySelector(".map iframe");
const weather = document.querySelector(".weatherwidget-io")


darkmode.addEventListener("click", () => {
    body.classList.toggle("darkmode");
    map.classList.toggle("darkmode-map");
});
