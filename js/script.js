"use strict";

const gamePageOne = document.querySelector("#game-page-1");
const gamePageTwo = document.querySelector("#game-page-2");
const outcomeContainerEl = document.querySelector("#outcome-container");
const outcomeEl = document.querySelector("#outcome");
const playAgainEl = document.querySelector("#again-button");
const userScoreEl = document.querySelector("#user-score");
// rules
const rulesEl = document.querySelector("#rules");
const rulesButtonEl = document.querySelector("#rules-btn");
const rulesCloseButton = document.querySelector("#rules-close-btn");

// the containers for rock paper scissors
const userChoiceContainer = document.querySelector(".game-container");
const userChoices = document.querySelectorAll(".img-holder");
const rockEl = document.querySelector("#rock");
const paperEl = document.querySelector("#paper");
const scissorsEl = document.querySelector("#scissors");

// second part
let displayUserChoice = document.querySelector("#user-pick");
let displayHouseChoice = document.querySelector("#house-pick");

// cloning
const gameChoices = ["rock", "paper", "scissors"];
// User choices
// userChoices.forEach((userChoice) => {
//   userChoice.addEventListener("click", () => {
//     displayUserChoice.innerHTML = "";
//     // Clone the clicked container (with its styles and content)
//     const clonedUserChoice = userChoice.cloneNode(true);
//     // Add a class to reset styles
//     clonedUserChoice.classList.add("img-holder-active");

//     // Append the cloned container to the target container
//     displayUserChoice.appendChild(clonedUserChoice);

//     gamePageOne.classList.add("hide");
//     gamePageTwo.classList.remove("hide");
//     console.log(userChoice);
//   });
// });
let choiceByUser;
let choiceByHouse;
for (let i = 0; i < userChoices.length; i++) {
  userChoices[i].addEventListener("click", () => {
    displayUserChoice.innerHTML = "";
    const clonedUserChoice = userChoices[i].cloneNode(true);
    clonedUserChoice.classList.add("img-holder-active");
    displayUserChoice.appendChild(clonedUserChoice);
    gamePageOne.classList.add("hide");
    gamePageTwo.classList.remove("hide");
    // console.log(userChoices[i]);
    if (userChoices[i] === rockEl) {
      choiceByUser = "rock";
    } else if (userChoices[i] === paperEl) {
      choiceByUser = "paper";
    } else if (userChoices[i] === scissorsEl) {
      choiceByUser = "scissors";
    }
    console.log(choiceByUser);

    //   move computer choice here
    // computer choice
    displayHouseChoice.innerHTML = "";

    let houseChoice = Math.random();

    // let choiceByUser;
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
    console.log(choiceByHouse);
    rockPaperScissors();
  });
}

// // computer choice
// displayHouseChoice.innerHTML = "";

// let houseChoice = Math.random();
// let choiceByHouse;
// // let choiceByUser;
// if (houseChoice <= 0.33) {
//   const clonedRock = rockEl.cloneNode(true);
//   clonedRock.classList.add("img-holder-active");
//   displayHouseChoice.appendChild(clonedRock);
//   choiceByHouse = "rock";
// } else if (houseChoice <= 0.66) {
//   const clonedPaper = paperEl.cloneNode(true);
//   clonedPaper.classList.add("img-holder-active");
//   displayHouseChoice.appendChild(clonedPaper);
//   choiceByHouse = "paper";
// } else {
//   const clonedScissors = scissorsEl.cloneNode(true);

//   clonedScissors.classList.add("img-holder-active");
//   displayHouseChoice.appendChild(clonedScissors);
//   choiceByHouse = "scissors";
// }
// console.log(choiceByHouse);
let score = 0;
function rockPaperScissors() {
  if (choiceByUser === "rock" && choiceByHouse === "scissors") {
    outcomeEl.textContent = "You Win";
    score++;
    userScoreEl.textContent = score;
    // console.log("user wins");
  } else if (choiceByUser === "scissors" && choiceByHouse === "rock") {
    if (score > 1) {
      outcomeEl.textContent = "House Win";
      score--;
      userScoreEl.textContent = score;
    }
    // console.log("house wins");
  } else if (choiceByUser === "paper" && choiceByHouse === "rock") {
    outcomeEl.textContent = "You Win";
    score++;
    userScoreEl.textContent = score;
    // console.log("user wins");
  } else if (choiceByUser === "rock" && choiceByHouse === "paper") {
    if (score > 1) {
      outcomeEl.textContent = "House Win";
      score--;
      userScoreEl.textContent = score;
    }
    // console.log("house wins");
  } else if (choiceByUser === "scissors" && choiceByHouse === "paper") {
    outcomeEl.textContent = "You Win";
    score++;
    userScoreEl.textContent = score;
    // console.log("user wins");
  } else if (choiceByUser === "paper" && choiceByHouse === "scissors") {
    if (score > 1) {
      outcomeEl.textContent = "House Win";
      score--;
      userScoreEl.textContent = score;
    }
    // console.log("house wins");
  } else if (choiceByUser === choiceByHouse) {
    outcomeEl.textContent = "It's a tie";
    // console.log("its a tie");
  }
}

// play again
playAgainEl.addEventListener("click", () => {
  gamePageTwo.classList.add("hide");
  gamePageOne.classList.remove("hide");
});
// Display rules
rulesButtonEl.addEventListener("click", () => {
  rulesEl.classList.remove("hide");
});
rulesCloseButton.addEventListener("click", () => {
  rulesEl.classList.add("hide");
});
