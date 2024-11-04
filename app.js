const gameChoices = ["ROCK", "PAPER", "SCISSORS"];
let humanScore = 0;
let computerScore = 0;
playGame();

function getComputerChoice(){
    return gameChoices[Math.floor(Math.random() * 3)]; // get choices from index 0, 1 or 2
}

function getHumanChoice() {
    return prompt("What's your choice? ROCK? PAPER? SCISSORS?");
}

function playRound(humanChoice, computerChoice) {
    if (!gameChoices.includes(humanChoice.toUpperCase())) {
        alert(`You entered invalid choice: ${humanChoice}\n It should be one of these ${gameChoices}`);
    } else if ((humanChoice.toUpperCase() === gameChoices[0] && computerChoice.toUpperCase() === gameChoices[0]) 
    || (humanChoice.toUpperCase() === gameChoices[1] && computerChoice.toUpperCase() === gameChoices[1])
    || (humanChoice.toUpperCase() === gameChoices[2] && computerChoice.toUpperCase() === gameChoices[2])) {
        // tie
        console.log("It's a tie!");
    } else if ((humanChoice.toUpperCase() === gameChoices[0] && computerChoice.toUpperCase() === gameChoices[1])
    || (humanChoice.toUpperCase() === gameChoices[1] && computerChoice.toUpperCase() === gameChoices[2])
    || (humanChoice.toUpperCase() === gameChoices[2] && computerChoice.toUpperCase() === gameChoices[0])) {
        // computer win
        console.log(`You loose! (computer) ${computerChoice}  beats (you) ${humanChoice}`);
        computerScore++;
    } else {
        // player win
        console.log(`You win! (you) ${humanChoice} beats (computer) ${computerChoice}`);
        humanScore++;
    }
}
  
function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log(`Win! You: ${humanScore} > Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`Loose! You: ${humanScore} < Computer: ${computerScore}`);
    } else {
        console.log(`Tie! You: ${humanScore} = Computer: ${computerScore}`);
    }
}