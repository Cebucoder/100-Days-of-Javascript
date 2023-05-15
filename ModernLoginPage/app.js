function Signin(){
    let userName = document.getElementById("user-name").value;
    let err = document.getElementById("err-alert");
    let user = document.getElementById("user");
    if(userName == ""){
        err.classList.add("show-err");
        setTimeout(() =>{
            err.classList.remove("show-err");
        },2000)
    }else{
        // alert("success");
        window.location.replace("dashboard.html");

        // save the inputes name to local stoarge
        localStorage.setItem("UserID",JSON.stringify(userName));
    }
}


// display the user name from local storage to dashboard
let userData = JSON.parse(localStorage.getItem("UserID"));

document.getElementById("user").innerHTML = `${userData}`;


function SignOut(){

    // remove save dat from local storage
    localStorage.removeItem("UserID");
    window.location.replace("index.html");

}


// adding greetings

function getGreetings() {
    const currentHour = new Date().getHours();
    let greeting;
  
    if (currentHour >= 5 && currentHour <= 11) {
      greeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour <= 17) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }
  
    return greeting;
  }

const greeting = getGreetings();
document.getElementById("day").innerHTML = greeting;