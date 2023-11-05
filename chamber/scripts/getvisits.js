//Welcome Banner
const currentDate = new Date() ;

let welcomeBanner = document.querySelector("#welcome-banner");
let numDiscoverVisits = Number(window.localStorage.getItem("cgc-numDiscoverVisits")) || 0;
let lastVisitDate = new Date(Date.parse(window.localStorage.getItem("cgc-lastvisit")) || currentDate);

numDiscoverVisits++;

// get time difference 
let timeDiff = currentDate.getTime() - lastVisitDate.getTime();   

// calc days between
let daysSinceLastVisit = Math.trunc(timeDiff / (1000 * 3600 * 24)); 

if (numDiscoverVisits == 1) {
	welcomeBanner.textContent = "Welcome! Let us know if you have any questions.";
} else if (daysSinceLastVisit < 1) {
	welcomeBanner.textContent = "Back so soon! Awesome!";
} else {
    if (daysSinceLastVisit == 1) {
        welcomeBanner.textContent = "You last visited " + daysSinceLastVisit + " day ago.";
    } else {
        welcomeBanner.textContent = "You last visited " + daysSinceLastVisit + " days ago.";
    }  
}

localStorage.setItem("cgc-numDiscoverVisits", numDiscoverVisits);
localStorage.setItem("cgc-lastvisit", currentDate);