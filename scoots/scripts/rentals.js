
const rentalList = document.querySelector("#rentals");
const docTitle = document.title;

const rentalInfo = "data/rentals.json";

async function getRentals() {
    const response = await fetch(rentalInfo);
    if (response.ok) {
        const data = await response.json();
        displayRentals(data.rentals);
    }
}

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {

        //Create a div for each rental block
        let rentalCard = document.createElement("div");
        rentalCard.setAttribute("class", "card");

        //Rental Name
        let type = document.createElement("h3");
        type.textContent = rental.type;
        type.setAttribute("class", "impact");

        //Rental Image
        let rentalImgDiv = document.createElement("div");
        rentalImgDiv.setAttribute("class", "rentalImg");

        let rentalImg = document.createElement("img");
        rentalImg.setAttribute("src",rental.image);
        rentalImg.setAttribute("alt", `Picture of ${rental.type}`);
        rentalImg.setAttribute("height", 400);
        rentalImg.setAttribute("width", 330);
        rentalImg.setAttribute("loading", "lazy");
        rentalImgDiv.appendChild(rentalImg);

        //Rental Description
        let desc = document.createElement("p");
        desc.textContent = rental.description;

        //Append the elements in the appropriate order
        rentalCard.appendChild(type);
        rentalCard.appendChild(rentalImgDiv);
        rentalCard.appendChild(desc);

        if (docTitle == "Scootz - Rental Information") {

            let rentalFeatures = document.createElement("ul");
            rentalFeatures.setAttribute("class","feature");

            rental.features.forEach ( (feature) => {
                let rentalfeature = document.createElement("li");
                rentalfeature.innerText = feature.value;
                rentalFeatures.appendChild(rentalfeature);
            });

            //Rental max-people number
            let maxPeopleNum = document.createElement("span");
            maxPeopleNum.setAttribute("class", "people");
            maxPeopleNum.textContent = rental.maxpeople;
            
            //Rental max-people
            let maxPeople = document.createElement("p");
            maxPeople.setAttribute("class", "max-people");
            maxPeople.innerHTML = "Max ";
            maxPeople.appendChild(maxPeopleNum);
            maxPeople.innerHTML += " persons";

            //Rental Table
            let ratesTable = document.createElement("table");
            let thead = document.createElement("thead");
            let tbody = document.createElement("tbody");

            thead.innerHTML = '<tr><th>Rates:</th><th scope="col">Reservation</th><th scope="col">Walk-in</th></tr>';
            tbody.innerHTML = `<tr><th class="right-align">Half Day (3hrs)</th><td>$${rental.price[0].halfday}</td><td>$${rental.price[1].halfday}</td></tr>
                            <tr><th class="right-align">Full Day</th><td>$${rental.price[0].allday}</td><td>$${rental.price[1].allday}</td></tr>`;

            ratesTable.appendChild(thead);
            ratesTable.appendChild(tbody);

            //Reserve Button
            let reserveButton = document.createElement("button");
            reserveButton.setAttribute("class","book");
            reserveButton.innerText = "Reserve Now";

            //Create the event listener for the button.
            reserveButton.addEventListener("click", () => {
                window.location.href = "reservations.html";
            })
            //Append the elements in the appropriate order
            rentalCard.appendChild(rentalFeatures);
            rentalCard.appendChild(maxPeople);
            rentalCard.appendChild(ratesTable);
            rentalCard.appendChild(reserveButton);
        }
        else {
            //Add a link to the image for the reservations page
            let rentallink = document.createElement("a");
            rentallink.setAttribute("href","rentals.html");
            rentallink.appendChild(rentalImg);
            rentalImgDiv.appendChild(rentallink);
        }

        //Append the new directory listing to the directory
        rentalList.appendChild(rentalCard);
    });
}

getRentals();