var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var choiceEl = document.getElementById("answerChoice")

var secondsLeft = 76;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      var newDiv = document.createElement("div");
      newDiv.textContent = "Times up!";

      mainEl.appendChild(newDiv);
      ;
    }

  }, 1000);
};

// let  result ="";

console.log(questions[0].title)

// body = document.createElement("h1");

// document.querySelector('#answerChoice').textContent = "Result JSON:\n" + JSON.stringify(json.data, null, 3);

mainEl.append(questions[0].title);

let $answerChoices = document.getElementById('questions');

for (var i = 0; i < questions[0].title[0].choices; i++) {
  const $p = createElement('p');
  $p.textContent = questions[i];
  $answerChoices.append($p)
}

choiceEl.append(questions[0].button);


