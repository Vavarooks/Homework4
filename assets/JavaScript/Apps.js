let timeEl = document.querySelector(".time");

let mainEl = document.getElementById("main");

let choiceEl = document.getElementById("answerChoice");

let questEl = document.getElementById("quest");

let buttons = document.getElementById("buttons");

let scores = document.getElementsByClassName(`score`);

let highScores = document.getElementsByClassName(`highScore`);

let rightAnswer = 0;

let wrongAnswer = 0;

let questionNum = 0;

let secondsLeft = 76;

var initialsEl = JSON.parse(localStorage.getItem("data"));

// var timers = localStorage.getItem("timeStop");

// var rightAnswer = localStorage.getItem("rightChoice");

// var wrongChoice = localStorage.getItem("wrongChoice");

function setTime() {

  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      var newDiv = document.createElement("div");
      newDiv.textContent = "Times up!";
      timeEl.appendChild(newDiv);
      ;
    }

  }, 1000);
};

$('.score').hide();

mainEl.append(questions[questionNum].title);

choiceEl.append(questions[questionNum].button);

questionNum++;

$(`#answerChoice`).on('click', function (event) {
  event.preventDefault();
  $('#main').hide();
  $('#answerChoice').hide();

  disQuestion();
  console.log(setTime());

});

function disQuestion() {
  $(`#quest`).text(questions[questionNum].title);
  $(`#buttons`).empty();
  for (let i = 0; i < questions[questionNum].choices.length; i++) {
    $('#buttons').append(`<button class= "choose" data-choice= "${questions[questionNum].choices[i]}"
data-type='${questions[questionNum].answer}'> ${questions[questionNum].choices[i]} </button>`)


  };
}

$('#buttons').on('click', '.choose', function (event) {
  event.preventDefault();
  var userChoice = $(this).attr('data-choice');
  var correctChoice = $(this).attr('data-type');

  alert(userChoice);
  console.log(correctChoice);

  if (userChoice === correctChoice) {
    alert("corret")
    rightAnswer++;
  }
  else {
    alert("wrong")
    wrongAnswer++;
  }

  if (questionNum < questions.length - 1) {
    questionNum++;
    disQuestion();
  }
  else {

    result();
  }

})

function result() {
  console.log(wrongAnswer);
  console.log(rightAnswer);
  $(`#buttons`).empty();
  $(`#quest`).text(`Great Job! You got ${rightAnswer} right and ${wrongAnswer} wrong. If you want to try again refresh the page.`);
  $('.score').show();
}

$('.score').append(`<textarea class= "scoreShow"> Initials Here </textarea>`);
$('.score').append(`<button class= "scoreBoard"> Submit </button>`);

$(`.scoreBoard`).click(function () {

  let initials = $(`.scoreShow`).val();

  console.log(initials);
  const scorer = {
    initials,
    right: rightAnswer,
    wrong: wrongAnswer,
    timeLeft: secondsLeft,
  }

  localStorage.setItem(`data`, JSON.stringify(scorer));

  // localStorage.setItem("initials", initials);

  // // localStorage.setItem("timeStop", timers);

  // localStorage.setItem("right", rightAnswer);

  // localStorage.setItem("wrongChoice", wrongAnswer);

});

$(`.highScore`).text(`High-Score: ${initialsEl.initials} ${initialsEl.right} correct, and ${initialsEl.wrong} inncorrect in ${initialsEl.timeLeft} seconds.`);

console.log(initialsEl.initials)
