"use strict";
function computerPlay() {
  let items = ["Rock", "Paper", "Scissors"];
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
}

let wins = 0;
let losses = 0;

function startGame(playerSelection, computerSelection) {
  if (playerSelection == "Rock") {
    switch (computerSelection) {
      case "Rock":
        return `Both of you chose ${computerSelection}`;
      case "Paper":
        losses += 1;
        return `You lost! ${computerSelection} beats ${playerSelection}`;
      case "Scissors":
        wins += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection == "Paper") {
    switch (computerSelection) {
      case "Rock":
        wins += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
      case "Paper":
        return `Both of you chose ${computerSelection}`;
      case "Scissors":
        losses += 1;
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
  } else {
    switch (computerSelection) {
      case "Rock":
        losses += 1;
        return `You lost! ${computerSelection} beats ${playerSelection}`;
      case "Paper":
        wins += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
      case "Scissors":
        return `Both of you chose ${computerSelection}`;
    }
  }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", game);
paperBtn.addEventListener("click", game);
scissorsBtn.addEventListener("click", game);

let clicks = 0;

function game(e) {
  if (clicks < 5) {
    let choice = e.target.innerText;
    let container = document.querySelector("#container");
    let div = document.createElement("div");
    startGame(choice, computerPlay());
    div.innerText = `Wins: ${wins}, Loss: ${losses}`;
    container.appendChild(div);
    clicks++;
  } else {
    let result = "Tie";
    result = wins > losses ? "You win" : "You lose";
    let h1 = document.createElement("h1");
    h1.innerText = result;
    container.appendChild(h1);
  }
}
