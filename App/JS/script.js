//creation des elements
const userChoiceDisplay = document.createElement("h2");
const computerChoiceDisplay = document.createElement("h2");
const resultDisplay = document.createElement("h2");

// recuperation du container du jeu
const gameBox = document.getElementById("game");

/**creation des elementaires secondaires*/
let userChoice;
let computerChoice;
let results;

//creation de la liste des choix

const choices = ["Rock", "Paper", "Scissors"];

choices.forEach((choice) => {
  //creation des elements button
  const button = document.createElement("button");
  // button.id = choice;
  button.innerHTML = choice;
  button.addEventListener("click", (e) => {
    userChoice = e.target.id;
    //creation du choix du player
    userChoiceDisplay.innerHTML = `User Choice : ${choice}`;

    gameBox.appendChild(userChoiceDisplay);
    randomChoice();
    result();
  });
  gameBox.appendChild(button);
});

//choix de la machine
function randomChoice() {
  const randomNumber = Math.floor(Math.random() * choices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "Rock";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  computerChoiceDisplay.innerHTML = `Computer Choice : ${computerChoice}`;
  gameBox.appendChild(computerChoiceDisplay);
}

function result() {
  if (userChoice === computerChoice) {
    results = `Result : It is a draw`;
  } else if (userChoice === "Rock" && computerChoice === "Paper") {
    results = `Result : you have lost`;
  } else if (userChoice === "Rock" && computerChoice === "Scissors") {
    results = `Result : you have won`;
  } else if (userChoice === "Paper" && computerChoice === "Rock") {
    results = `Result : you have won`;
  } else if (userChoice === "Paper" && computerChoice === "Scissors") {
    results = `Result : you have lost`;
  } else if (userChoice === "Scissors" && computerChoice === "Paper") {
    results = `Result : you have won`;
  } else if (userChoice === "Scissors" && computerChoice === "Rock") {
    results = `Result : you have lost`;
  }
  resultDisplay.innerHTML = results;
  gameBox.appendChild(resultDisplay);
}
