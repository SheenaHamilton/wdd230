const tempValue = document.querySelector('#temp-input');
const windValue = document.querySelector('#wind-input');

tempValue.addEventListener('input', CalculateWindChill);
windValue.addEventListener('input',CalculateWindChill);

function CalculateWindChill() {

    const windChillinput = document.querySelector('#windchill-value');
    const windChillIcon = document.querySelector('#windchill .icon');

	const tempValue = document.querySelector('#temp-input');
	const windValue = document.querySelector('#wind-input');
	
    if ((tempValue.value <= 50) && (windValue.value > 3))
    {
        let windchill =  35.74 + (0.6215 * tempValue.value) - (35.75 * (windValue.value ** 0.16)) + (0.4275 * ((tempValue.value) * (windValue.value ** 0.16)));

        let windchillRounded = windchill.toFixed(1);

	    windChillinput.innerHTML =  windchillRounded + "&deg;F";
        windChillIcon.classList.remove("show");
    }
    else
    {
        windChillinput.innerHTML = "N/A";
        windChillIcon.classList.add("show");
    }

};
