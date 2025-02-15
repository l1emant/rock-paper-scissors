//prints random words choice from COMPUTER
function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const randomWords = Math.floor(Math.random() * choice.length);
  return choice[randomWords];
}

//get input from HUMAN: rock ,paper or scissor
function getHumanChoice() {
  let userInput = prompt("choose one: Rock, Paper, Scissors").toLowerCase();

  //validation of user input
  while (
    userInput !== "rock" &&
    userInput !== "paper" &&
    userInput !== "scissors"
  ) {
    userInput = prompt("choose one: Rock, Paper, Scissors").toLowerCase();
  }
  return userInput;
}
// console.log(getHumanChoice());

//players variables score
let humanScore = 0;
let computerScore = 0;

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  // make humanChoice case Insensitive
  humanChoice = humanChoice.toLowerCase();

  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  //First if To check a tie, if true loop will exit here
  if (humanChoice === computerChoice) {
    console.log("It's a tie!")
    return "It's a tie!";
  }

  //here to determine the winner at each case
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log("You win!");
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    console.log("You lose!");
    computerScore++;
  }
  // console.log( `You lose! ${computerChoice} beats ${humanChoice}`);
}

//calling the function
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

