const computerChoice = ["Rock", "Paper", "Scissors"]
console.group(computerChoice)

function computerPlay() {
    let choice = Math.floor(Math.random() * 4);
    console.log(computerChoice[choice])
}
computerPlay()