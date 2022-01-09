let playerScore = 0;
let computerScore = 0;
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


//this function will play a game of five rounds, keeping score
function game() {
    //this function plays a round - compares computerSelection and playerSelection and console.log's who wins
    function playRound() {
        if (computerSelection === playerSelection) {
            console.log("Draw!")
        }
        else if (computerSelection === "ROCK" && playerSelection === "SCISSORS" || computerSelection === "PAPER" && playerSelection === "ROCK" || computerSelection === "SCISSORS" && playerSelection === "PAPER") {
            computerScore++;
            console.log(`You lose, Opponent's score is now: ${computerScore}`)
        }
        else {
            playerScore++;
            console.log(`You win! Your score is now: ${playerScore}`)
        }
    }
    //once again don't know how to get my functions to just run
    playRound()

}
game()