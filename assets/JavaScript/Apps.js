var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

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

var json = {
  title: "Quick Random Quiz!",
  showProgressBar: "bottom",
  showTimerPanel: "top",
  $setTime(){},
  firstPageIsStarted: true,
  startSurveyText: "Start Quiz",
  pages: [
    {
      questions: [
        {
          type: "html",
          html: "You are about to start quiz! <br/>You have to get as many right in as little time as possible!<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
        }
      ]
    }, {
      questions: [
        {
          type: "radiogroup",
          name: "games",
          title: "What does D&D stand for?",
          choices: [
            "Donuts and Drinks", "Darkness and Daggers", "Dungeons and Dragons", "Drums and Didgeridoos"
          ],
          correctAnswer: "Dungeons and Dragons"
        }
      ]
    }, {
      questions: [
        {
          type: "radiogroup",
          name: "complex",
          title: "What is the correct spelling?",
          choicesOrder: "random",
          choices: [
            "pneumonoultramicroscopicsilicovolcanoconiosis", "pneumonoulcanoconiosis", "pneumonoultorliopisoncanoconiosis", "pneumonoulwalteroilipcanoconiosis"
          ],
          correctAnswer: "pneumonoultramicroscopicsilicovolcanoconiosis"
        }
      ]
    }, {
      questions: [
        {
          type: "radiogroup",
          name: "fakeName",
          title: "Which of these is the fake name?",
          choicesOrder: "random",
          choices: [
            "Digimon", "Regimon", "Pokemon", "Bakugan"
          ],
          correctAnswer: "Regimon"
        },
        {
          questions: [
            {
              type: "radiogroup",
              name: "boredGames",
              title: "Which of these is Not a board game?",
              choicesOrder: "random",
              choices: [
                "Uno", "Sorry", "Clue", "Monopoly"
              ],
              correctAnswer: "Uno"
            }
          ]
        },
        {
          questions: [
            {
              type: "radiogroup",
              name: "englishWords",
              title: "Which of these is a actual word?",
              choicesOrder: "random",
              choices: [
                "Fliondeso", "Parede", "Shorogyt", "Woebegone"
              ],
              correctAnswer: "Woebegone"
            }
          ]
        },
      ]
    }
  ],
  completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

let model= new survey.Model(json);


survey
  .onComplete
  .add(function (result) {
    document
      .querySelector('#answerChoice')
      .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
  });

$("#main").Survey({ model: survey });
