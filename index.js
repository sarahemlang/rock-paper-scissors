const computerChoice = ["Rock", "Paper", "Scissors"]

let playerSelection = prompt("Rock, Paper or Scissors?")

function computerPlay() {
    let pickRandom = Math.floor(Math.random() * 3);
    return computerSelection = computerChoice[pickRandom];
}
computerPlay()

console.log(computerSelection)
console.log(playerSelection)

function playRound() {
    if (computerSelection === playerSelection) {
        console.log("Draw!")
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors" || computerSelection === "Paper" && playerSelection === "Rock" || computerSelection === "Scissors" && playerSelection === "Paper") {
        console.log("You lose")
    }
    else {
        console.log("You win!")
    }
}
playRound()