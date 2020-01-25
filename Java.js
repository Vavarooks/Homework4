var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var oneBtn = document.getElementById("one");

var twoBtn = document.getElementById("two");

var threeBtn = document.getElementById("three");

var fourBtn = document.getElementById("four");

var secondsLeft = 76;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}
setTime();

var question1 =
{
  title: "Commonly used data types DO NOT include:",
  choices: ["strings", "booleans", "alerts", "numbers"],
  answer: "alerts"
};

var question2 =
{
  title: "The condition in an if / else statement is enclosed within ____.",
  choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
  answer: "parentheses"
};

var question3 = {
  title: "What does D&D stand for?",
  choices: ["Donuts and Drinks", "Darkness and Daggers", "Dungeons and Dragons", "Drums and Didgeridoos"],
  answer: "Dungeons and Dragons"
};

var question4 = {
  title: "What is the correct spelling?",
  choices: ["pneumonoultramicroscopicsilicovolcanoconiosis", "pneumonoulcanoconiosis", "pneumonoultorliopisoncanoconiosis", "pneumonoulwalteroilipcanoconiosis"],
  answer: "pneumonoultramicroscopicsilicovolcanoconiosis"
};

var question5 = {
  title: "Which of these is the fake name?",
  choices: ["Digimon", "Regimon", "Pokemon", "Bakugan"],
  answer: "Regimon",
};


