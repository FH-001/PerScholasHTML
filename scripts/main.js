
const hand = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const index = Math.floor(Math.random() * hand.length);
    return hand[index];
}

function getHumanChoice() {
    const choice = prompt("Choose 1 Only: Rock, Paper, Scissors");
    return choice.toLowerCase();
} 

function playRound(humanChoice, computerChoice) {

    //tie
    if(humanChoice === computerChoice) {
        return "It's a tie.";
    }
    //human wins
    if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`
    }
    //ai wins - any other possibily means the ai wins.
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
}

function playGame() {
    for (let i = 0; i < 3; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        alert(`Round ${i + 1}:\n`
        +playRound(humanChoice, computerChoice)
        +`\nScore → You: ${humanScore} \nScore → Computer: ${computerScore}`
        );
        
    }


    if (humanScore > computerScore) {
        return "You win the game!";
    } else if (computerScore > humanScore) {
        return "You lose the game!";
    } else {
        return "The game is a tie!";
    }
}



// Start the game on page load
alert(playGame());
