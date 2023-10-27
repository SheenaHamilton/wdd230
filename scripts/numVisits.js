
const visitsDisplay = document.querySelector(".firstVisit");
const visitsNum = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

numVisits++;
visitsNum.textContent = numVisits;

if (numVisits == 1) {
	visitsDisplay.textContent = `This is your first visit. 🌟 Welcome 🌟`;
	visitsNum.textContent = numVisits;
}

localStorage.setItem("numVisits-ls", numVisits);
