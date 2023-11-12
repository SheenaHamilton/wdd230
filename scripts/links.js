
const lessonList = document.querySelector("#links");
const baseURL = "https://sheenahamilton.github.io/wdd230/";
const linksURL = "https://sheenahamilton.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        displayLinks(data.lessons);
    }
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        //Set the Week number
        let listItem = document.createElement("li");
        listItem.textContent = `${week.lesson}: `;
        var first = true;

        week.links.forEach((link) => {
            
            //add a pipe divider between the lesson links
            if (first != true) {
                listItem.appendChild(document.createTextNode(" | "));
            }
            else first = false;

            //Get the url and title from the JSON file
            // <a href="url">title</a>
            let lessonurl = document.createElement("a");
            lessonurl.setAttribute("href",link.url);
            lessonurl.textContent = link.title;

            //<li>NUM: <a href="url">title</a> | <a href="url">title</a> ...etc</li>
            listItem.appendChild(lessonurl);
            lessonList.appendChild(listItem);
        });

    });
}

getLinks();