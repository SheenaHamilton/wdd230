
const visitsDisplay = document.querySelector(".firstVisit");
const visitsNum = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsNum.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🌟 Welcome 🌟`;
	visitsNum.textContent = 1;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
