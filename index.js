//this is the array the computer picks from
const computerChoice = ["ROCK", "PAPER", "SCISSORS"]
//this function generates a random index and uses it to pick an item from the computerChoice array 
function computerPlay() {
    let pickRandom = Math.floor(Math.random() * 3);
    return computerSelection = computerChoice[pickRandom];
}
//I don't know how to get my functions to run other than calling them in the code so for now this is for testing purposes
computerPlay()

//prompts for a player selection and capitalizes it for comparision
let playerSelection = prompt("Rock, Paper or Scissors?")
playerSelection = playerSelection.toUpperCase();

//this just prints choices so I can test and see
console.log(computerSelection)
console.log(playerSelection)

//this function plays a round - compares computerSelection and playerSelection and console.log's who wins
function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        console.log("Draw!")
    }
    else if (computerSelection === "ROCK" && playerSelection === "SCISSORS" || computerSelection === "PAPER" && playerSelection === "ROCK" || computerSelection === "SCISSORS" && playerSelection === "PAPER") {
        console.log("You lose")
    }
    else {
        console.log("You win!")
    }
}
//once again don't know how to get my functions to just run
playRound()