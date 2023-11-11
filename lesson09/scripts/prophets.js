const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayProphets(data.prophets);
        //console.table(data.prophets);
    }
}

const displayProphets =  (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        card.setAttribute("class","card");
        let fullName = document.createElement("h2");
        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("p");
        let portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute("src",prophet.imageurl);
        portrait.setAttribute("alt",`Photo of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading","lazy");
        portrait.setAttribute("width",200);
        portrait.setAttribute("height", 300);
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        cards.appendChild(card);

    });
}




getProphetData() ;