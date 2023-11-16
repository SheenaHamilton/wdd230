let list = document.querySelector("#button-list");
let single = document.querySelector("#button-grid");
let memberdir = document.querySelector("#directory")


list.addEventListener("click", () => {
    if (!list.classList.contains("list-active")) {
        memberdir.classList.toggle("grid-view");
        list.classList.add('list-active');
        single.classList.remove('list-active');
    }

});

single.addEventListener("click", () => {
    if (!single.classList.contains("list-active")) {
        memberdir.classList.toggle("grid-view");
        single.classList.add('list-active');
        list.classList.remove('list-active');
    }
});