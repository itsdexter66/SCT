const container = document.getElementById("container");
const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");
const footer = document.getElementById("footer");

var output, correct, right = 0, wrong = 0, time = 0;
var running = false;

var sound = new Audio();

function randomSum() {
    var a = Math.floor(Math.random() * 9 + 1);
    var b = Math.floor(Math.random() * 9 + 1);
    output = a + " * " + b;
    correct = a * b;
    myAssignment.innerHTML = "<h3>" + output + "</h3>";
    myAnswer.focus();
}

function waiting() { 
    time = 0;
    myAnswer.value = "";
    footer.style.background = "none";
    footer.innerHTML = "<p>Goed: " + right + "</p><p>Fout: " + wrong + "</p>";
    running = false;
    randomSum();
}

randomSum();
myAnswer.addEventListener("keyup", function(e) {
    e.preventDefault();
    if(e.keyCode === 13 && !running) {
        if(correct.toString() === myAnswer.value) {
            footer.style.background = "green";
            footer.innerHTML = "<p>CORRECT</p>";
            right++;
            sound.src = "sounds/correct.wav";
            sound.play();
            console.log(e)
        } else {
            footer.style.background = "red";
            footer.innerHTML = "<p>INCORRECT</p>";
            wrong++;
            sound.src = "sounds/wrong.wav";
            sound.play();
            console.log(e)
        }
        running = true;
        window.setTimeout(waiting, 2000);
    }
});


