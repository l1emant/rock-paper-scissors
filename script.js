function getComputerChoice(){
    const choice = ["rock", "paper", "scissor"];
    const randomWords = Math.floor(Math.random() * choice.length);
    return choice[randomWords];
}
console.log(getComputerChoice());