const sitebanner = document.querySelector("#site-banner");
const bannerbutton = document.querySelector("#bannerclose");
const todayDate = new Date();
const meetWeekdayNotice = [1,2,3]

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