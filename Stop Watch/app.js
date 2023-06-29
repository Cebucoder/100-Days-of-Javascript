var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var milliisecondsLabel = document.getElementById("milliiseconds");

var startButton = document.getElementById("startButton");
var stopButton  = document.getElementById("stopButton");
var resetButton = document.getElementById("resetButton");

var totalMilliseconds = 0;
var stopwatchInterval;

function updateStopWatch(){
    totalMilliseconds += 10;

    var minutes = Math.floor((totalMilliseconds / 60000) % 60);
    var seconds = Math.floor((totalMilliseconds / 1000) % 60);
    var milliiseconds = Math.floor((totalMilliseconds % 1000) / 10);

    minutesLabel.innerHTML = padNumber(minutes);
    secondsLabel.innerHTML = padNumber(seconds);
    milliisecondsLabel.innerHTML = padNumber(milliiseconds);
}

function padNumber(number){
    return (number < 10) ? "0" + number : number;
}

startButton.addEventListener("click", function(){
    stopwatchInterval = setInterval(updateStopWatch, 10);
    startButton.disabled = true;
});

stopButton.addEventListener("click", function(){
    clearInterval(stopwatchInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
});

resetButton.addEventListener("click", function(){
    clearInterval(stopwatchInterval);
    totalMilliseconds = 0;
    minutesLabel.innerHTML = "00";
    secondsLabel.innerHTML = "00";
    milliisecondsLabel.innerHTML = "00";
    startButton.disabled = false;
    stopButton.disabled = false;
});
