//creation des elements h2
const userChoiceDisplay = document.createElement("h2");
const computerChoiceDisplay = document.createElement("h2");
const resultDisplay = document.createElement("h2");

//designation du container principal
const gameBox = document.getElementById("game");

//ajouter tous les elements dans le container
gameBox.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

//creation de la liste des choix
const choices = ["Rock", "Paper", "Scissors"];

//creation des elements secondaires
let userChoice;
let ComputerChoice;
let result;

//iteration a travers les choix pour creer les buttons
for (let i = 0; i < choices.length; i++) {
  //creation des buttons
  const button = document.createElement("button");

  //ajout des choix pour former des buttons
  button.innerHTML = choices[i];

  /* le jeu est entre un joeur(humain) et la machine donc on creait le choix du joeur
   */

  //creation de l`evenement click
  button.addEventListener("click", () => {
    userChoice = choices[i];
    userChoiceDisplay.innerHTML = `User Choice : ${userChoice}`;

    randomChoice();
    finalResult();
  });

  //ajout des button ds le container
  gameBox.appendChild(button);
}
//choix de la machine
function randomChoice() {
  const randomNumber = Math.floor(Math.random() * choices.length) + 1;

  if (randomNumber === 1) {
    ComputerChoice = "Rock";
  } else if (randomNumber === 2) {
    ComputerChoice = "Paper";
  } else if (randomNumber === 3) {
    ComputerChoice = "Scissors";
  }

  computerChoiceDisplay.innerHTML = `Computer Choice : ${ComputerChoice}`;
}

//possibilite des resultats apres les differents choix
function finalResult() {
  if (userChoice === ComputerChoice) {
    result = "it is a draw";
  } else if (userChoice === "Rock" && ComputerChoice === "Paper") {
    result = "You have lost";
  } else if (userChoice === "Rock" && ComputerChoice === "Scissors") {
    result = "You have won";
  } else if (userChoice === "Paper" && ComputerChoice === "Rock") {
    result = "You have won";
  } else if (userChoice === "Paper" && ComputerChoice === "Scissors") {
    result = "You have lost";
  } else if (userChoice === "Scissors" && ComputerChoice === "Paper") {
    result = "You have won";
  } else if (userChoice === "Scissors" && ComputerChoice === "Rock") {
    result = "You have lost";
  }
  resultDisplay.innerHTML = `Result : ${result}`;
}
