let lightmode  = document.getElementById("light");
let lighticon = document.getElementById("toggle-dark");
let darkicon  = document.getElementById("toggle-light");

let body = document.getElementById("dark-light");


function toggleLight(){
    lightmode.classList.toggle("toggle-darkmode");
    lighticon.classList.toggle("hide-darkmode-icon");
    darkicon.classList.toggle("show-lightmode-icon");
    body.classList.toggle("body-light");

}