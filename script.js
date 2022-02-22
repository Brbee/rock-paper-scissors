computerPlay = () => {
  let items = ["Rock", "Paper", "Scissors"];
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
};

startGame = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() == "rock") {
    switch (computerSelection.toLowerCase()) {
      case "rock":
        return `Both of you chose ${computerSelection}`;
      case "paper":
        return `You lost! ${computerSelection} beats ${playerSelection}`;
      case "scissors":
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection.toLowerCase() == "paper") {
    switch (computerSelection.toLowerCase()) {
      case "rock":
        return `You win! ${playerSelection} beats ${computerSelection}`;
      case "paper":
        return `Both of you chose ${computerSelection}`;
      case "scissors":
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
  } else {
    switch (computerSelection.toLowerCase()) {
      case "rock":
        return `You lost! ${computerSelection} beats ${playerSelection}`;
      case "paper":
        return `You win! ${playerSelection} beats ${computerSelection}`;
      case "scissors":
        return `Both of you chose ${computerSelection}`;
    }
  }
};

let wins = 0;
let losses = 0;

game = () => {
  for (let i = 0; i < 5; i++) {
    let choice = prompt("Rock, Paper, Scissors?");
    let comp = computerPlay();
    console.log(startGame(choice, comp));
    if (startGame(choice, comp).includes("win")) wins += 1;
    else if (startGame(choice, comp).includes("lost")) losses += 1;
  }
};

game();
let result = "Tied";
result = wins > losses ? "You win more rounds!" : "You lost more rounds";
console.log(result);
