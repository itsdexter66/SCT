const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");

let mySum;
let sound = new Audio();

function makeSum() {
  var a = Math.floor(Math.random() * 9 + 1);
  var b = Math.floor(Math.random() * 9 + 1);
  mySum = a + " * " + b;
  myAssignment.innerHTML = mySum;
  myAnswer.focus();
}

function keyPressed(evt) {
  if (evt.keyCode == 13) {
    if (eval(mySum) myAnswer.value) {
      feedback.src = "img/goed.png";
      sound.src = "img/good.wav";
      sound.play()
    } else {
      feedback.src = "img/fout.png";
      sound.src = "img/wrong.wav";
      sound.play();
    }
    window.setTimeout(waiting, 2000);
  }
}

function waiting() {
  feedback.src = "img/feedback.png";
  myAnswer.value = "";
  makeSum()
}

makeSum();
myAnswer.addEventListener("keydown", keyPressed, false);
