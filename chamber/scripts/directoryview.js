let list = document.querySelector("#button-list");
let grid = document.querySelector("#button-grid");
let single = document.querySelector("#button-single");
let memberdir = document.querySelector("#directory")


list.addEventListener("click", () => {
    if (!list.classList.contains("list-active")) {

        memberdir.classList.toggle("grid-view");
        list.classList.add('list-active');
        single.classList.remove('list-active');
        grid.classList.remove('list-active');

        if (memberdir.classList.contains("single-view")) {
            memberdir.classList.toggle("single-view");
        }
    }

});

grid.addEventListener("click", () => {
    if (!grid.classList.contains("list-active")) {
        if (!memberdir.classList.contains("single-view")) {
            memberdir.classList.toggle("grid-view");
        }
        grid.classList.add('list-active');
        list.classList.remove('list-active');
        single.classList.remove('list-active');

        if (memberdir.classList.contains("single-view")) {
            memberdir.classList.toggle("single-view");
        }
    }
});

single.addEventListener("click", () => {

    if (!single.classList.contains("list-active")) {

        if (!memberdir.classList.contains("grid-view")) {
            memberdir.classList.toggle("grid-view");
        }

        grid.classList.remove('list-active');
        list.classList.remove('list-active');
        single.classList.add('list-active');


        memberdir.classList.toggle("single-view");
    }
});