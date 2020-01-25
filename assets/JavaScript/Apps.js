var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var startBtn = document.querySelector("#start");

startBtn.addEventListener("click", function(){

  var secondsLeft = 76;

  function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left.";
  
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Times Up!");
      }
  
    }, 1000);
  }
  setTime();

});


// var oneBtn = document.getElementById("one");

// var twoBtn = document.getElementById("two");

// var threeBtn = document.getElementById("three");

// var fourBtn = document.getElementById("four");