let timeEl = document.querySelector(".time");

let mainEl = document.getElementById("main");

let choiceEl = document.getElementById("answerChoice");

let questEl = document.getElementById("quest");

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
// console.log (setTime());
// let  result ="";

console.log(questions[0].title)

// body = document.createElement("h1");

// document.querySelector('#answerChoice').textContent = "Result JSON:\n" + JSON.stringify(json.data, null, 3);

mainEl.append(questions[0].title);

// let $answerChoices = document.getElementById('questions');


//   const $p = createElement('p');
//   $p.textContent = questions[i];
//   $answerChoices.append($p)
// }



choiceEl.append(questions[0].button);

choiceEl.addEventListener('click', function () {

  $('div').hide();
  $('p').hide();

  let $h1 = document.createElement('h1');
  $h1.textContent = questions[1].title;
  questEl.append($h1);

  for (let i = 0; i < questions[1].choices.length; i++) {


    var $div = document.createElement("div");

    $div.textContent = questEl.append(questions[1].choices[i]);

    $br = document.createElement("br");

    $br.textContent = questEl.append(" ");

  }

  // timeEl.append(setTime());
  console.log(setTime());
});




// const $button = document.createElement('button');
// $button.textContent(questions[0].button);
// $answerChoices.append($button)
