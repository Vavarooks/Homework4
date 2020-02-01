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

  // let $h1 = document.createElement('h1');
  // $h1.textContent = questions[questionNum].title;
  // questEl.append($h1);
  disQuestion();
  console.log(setTime());
  console.log(questEl);
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

$('.score').append(`<textarea class= "scoreShow">  Initials </textarea>`);
$('.score').append(`<button class= "scoreBoard"> Submit </button>`);

$(`.scoreBoard`).click(function () {
  let stuff = $(`.scoreShow`).val();
  console.log(stuff);
});



// $(`.highScore`).text(`High-Score: ${stuff} , ${rightAnswer} correct, and ${wrongAnswer} inncorrect.`);


