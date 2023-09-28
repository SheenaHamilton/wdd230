document.querySelector("#lastModified").innerHTML = "Last Modified: " + document.lastModified;

const currentDate= new Date();
document.querySelector("#currentYear").innerHTML = currentDate.getFullYear();