//Timed coding quiz
var timerEl = document.querySelector(".timer");
//var mainEl = document.getElementByID("main");
var secondsLeft = 60

function Timer() {
    var timerInterval = setInterval(function () {
        //Decrements seconds left by one
        secondsLeft--;
        //NEED TO ADD decrement for wrong answers
        timerEl.textContent = secondsLeft;

        if(secondsLeft <=0 || ADD CODE FOR NO QUESTIONS LEFT) {
            //Stops set Interval function
            clearInterval(timerIntverval);
            //Call message function
            sendmessage();
        }
    //Interval given in milliseconds
    }, 1000);
    }
function sendMessage() {
    //select location for message
    timeEl.textContent = "Game Over."
}

localStorage.setItem("initials", initials);
localStorage.setItem("score", score);
renderLastRegistered();

//Run timer function.
setTimeout();
