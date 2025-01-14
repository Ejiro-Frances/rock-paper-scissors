"use strict";

// get elements
const gamePageOneEl = document.querySelector("#game-page-1");
const gamePageTwoEl = document.querySelector("#game-page-2");
const outcomeContainerEl = document.querySelector("#outcome-container");
const outcomeEl = document.querySelector("#outcome");
const playAgainEl = document.querySelector("#again-button");
const userScoreEl = document.querySelector("#user-score");

// rules elements
const rulesEl = document.querySelector("#rules");
const rulesButtonEl = document.querySelector("#rules-btn");
const rulesCloseButtonEl = document.querySelector("#rules-close-btn");

// the containers for rock paper scissors
const userChoicesEl = document.querySelectorAll(".img-holder");
const rockEl = document.querySelector("#rock");
const paperEl = document.querySelector("#paper");
const scissorsEl = document.querySelector("#scissors");

// output elements
let displayUserChoice = document.querySelector("#user-pick");
let displayHouseChoice = document.querySelector("#house-pick");

// initial states
let choiceByUser, choiceByHouse;
let score = 0;

// -------FUNCTIONS------------

// function to hide and show game pages
const toggleVisibility = function (elHide, elShow) {
  elHide.classList.add("hide");
  elShow.classList.remove("hide");
};

// function to update text content
const updateOutput = function (takeIn, outcome) {
  takeIn.textContent = outcome;
};

//  function to play game
function rockPaperScissors() {
  if (choiceByUser === "rock" && choiceByHouse === "scissors") {
    updateOutput(outcomeEl, "You Win");
    score++;
    updateOutput(userScoreEl, score);
  } else if (choiceByUser === "scissors" && choiceByHouse === "rock") {
    updateOutput(outcomeEl, "You Lose");
    score == 0 ? score : score--;
    updateOutput(userScoreEl, score);
  } else if (choiceByUser === "paper" && choiceByHouse === "rock") {
    updateOutput(outcomeEl, "You Win");
    score++;
    updateOutput(userScoreEl, score);
  } else if (choiceByUser === "rock" && choiceByHouse === "paper") {
    updateOutput(outcomeEl, "You Lose");
    score == 0 ? score : score--;
    updateOutput(userScoreEl, score);
  } else if (choiceByUser === "scissors" && choiceByHouse === "paper") {
    updateOutput(outcomeEl, "You Win");
    score++;
    updateOutput(userScoreEl, score);
  } else if (choiceByUser === "paper" && choiceByHouse === "scissors") {
    updateOutput(outcomeEl, "You Lose");
    score == 0 ? score : score--;
    updateOutput(userScoreEl, score);
  } else if (choiceByUser === choiceByHouse) {
    updateOutput(outcomeEl, "It's a tie");
  }
}

// ------FUNCTION DECLARATIONS END------

// Set user choice
for (let i = 0; i < userChoicesEl.length; i++) {
  userChoicesEl[i].addEventListener("click", () => {
    displayUserChoice.innerHTML = "";
    const clonedUserChoice = userChoicesEl[i].cloneNode(true);
    clonedUserChoice.classList.add("img-holder-active");
    toggleVisibility(gamePageOneEl, gamePageTwoEl);
    setTimeout(() => {
      displayUserChoice.appendChild(clonedUserChoice);

      if (userChoicesEl[i] === rockEl) {
        choiceByUser = "rock";
      } else if (userChoicesEl[i] === paperEl) {
        choiceByUser = "paper";
      } else if (userChoicesEl[i] === scissorsEl) {
        choiceByUser = "scissors";
      }
    }, 100);
    // computer choice
    displayHouseChoice.innerHTML = "";
    let houseChoice = Math.random();
    setTimeout(() => {
      if (houseChoice <= 0.33) {
        const clonedRock = rockEl.cloneNode(true);
        clonedRock.classList.add("img-holder-active");
        displayHouseChoice.appendChild(clonedRock);

        choiceByHouse = "rock";
      } else if (houseChoice <= 0.66) {
        const clonedPaper = paperEl.cloneNode(true);
        clonedPaper.classList.add("img-holder-active");
        displayHouseChoice.appendChild(clonedPaper);
        choiceByHouse = "paper";
      } else {
        const clonedScissors = scissorsEl.cloneNode(true);

        clonedScissors.classList.add("img-holder-active");

        displayHouseChoice.appendChild(clonedScissors);

        choiceByHouse = "scissors";
      }
      rockPaperScissors();
    }, 300);
  });
}

// play again
playAgainEl.addEventListener("click", () => {
  toggleVisibility(gamePageTwoEl, gamePageOneEl);
});
// Display rules
rulesButtonEl.addEventListener("click", () => {
  rulesEl.classList.remove("hide");
});
rulesCloseButtonEl.addEventListener("click", () => {
  rulesEl.classList.add("hide");
});
