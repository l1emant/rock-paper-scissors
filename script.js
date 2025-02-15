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
    userInput = prompt("Invalid choice! choose one: Rock, Paper, Scissors").toLowerCase();
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
    return "tie";
  }

  //here to determine the winner at each case
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "human";
  } else {
    return "computer";
  }
}

//GAME LOGIC
function playGame(){
  for(let round = 1; round <= 5; round++){
    console.log(`\nRound ${round}`);
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice()

    let roundResult = playRound(humanChoice, computerChoice);
  
    if(roundResult === "human"){
      humanScore++;
      console.log("You win this round");
    }else if (roundResult === "computer"){
      computerScore++;
      console.log("computer wins this round")
    }else {
      console.log("It's a tie");
    }
    console.log(`score: You: ${humanScore}, Computer: ${computerScore}`); 
  }

  console.log("\ngame Over");
  if(humanScore > computerScore){
    console.log("congratulations! you won");
  }else if(humanScore < computerScore){
    console.log("computer wins the Game");
  }else{
    console.log("It's a tie")
  }
}
//Initialize Game 
playGame();