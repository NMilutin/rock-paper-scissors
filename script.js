let computerChoice,playerChoice,playerChoiceInput,computerWins,playerWins,outcome,i;
function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * 3);
}
function playRound(){
    playerChoiceInput = prompt("Rock paper or scissors?");
    playerChoice = playerChoiceInput.toLowerCase();

    if (playerChoice === "rock") playerChoice = 0;
    else if (playerChoice === "paper") playerChoice = 1;
    else if (playerChoice === "scissors") playerChoice = 2;
    
    if (playerChoice === 0 && computerChoice === 1){
        computerWins = computerWins + 1;
        outcome = "Computer Wins";
    }
    else if (playerChoice === 0 && computerChoice === 2){
        playerWins = playerWins + 1;
        outcome = "You Win";
    }
    else if (playerChoice === 1 && computerChoice === 0){
        playerWins = playerWins + 1;
        outcome = "You Win";
    }
    else if (playerChoice === 1 && computerChoice === 2){
        computerWins = computerWins + 1;
        outcome = "Computer Wins";
    }
    else if (playerChoice === 2 && computerChoice === 0){
        computerWins = computerWins + 1;
        outcome = "Computer Wins";
    }
    else if (playerChoice === 2 && computerChoice === 1){
        playerWins = playerWins + 1;
        outcome = "You Win";
    }
    else outcome = "Draw";
}
function play(){
    playerWins = 0;
    computerWins = 0;
    while (playerWins < 5 && computerWins < 5){
        getComputerChoice();
        playRound();
        console.log(outcome);
        console.log(playerWins);
        console.log(computerWins);
    }
    if (computerWins === 5) console.log (`Game over! Computer won ${computerWins} by ${playerWins}`);
    else if (playerWins === 5) console.log (`Game over! You won ${playerWins} by ${computerWins}`);
}