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
    //e.g. timeEl.textContent = "Game Over."
}
//Run timer function.
ADD EVENT LISTENER FOR BUTTON CLICK HERE setTimeout();

//Multiple choice questions
//Update HTML and CSS elements through JavaScript ConvolverNode
//Store high scores
//Start button - event listener start timer and present first question
//Next question pops up when answer submitted
//Incorrect response results in lost time
//Ends upon running out of questions or timer expiring
//Upon game over, option to save initials and score