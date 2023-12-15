const sitebanner = document.querySelector("#weather-banner");
const bannerbutton = document.querySelector("#bannerclose");
const todayDate = new Date();
const meetWeekdayNotice = [1,2,3,4,5,6,7]

if (!meetWeekdayNotice.includes(todayDate.getDay()))
{
    hideBanner();
}

bannerbutton.addEventListener("click", () => {
    hideBanner();
});

function hideBanner() {
    if (!sitebanner.classList.contains("hide-banner")) {
        sitebanner.classList.toggle("hide-banner");
    }
     
}