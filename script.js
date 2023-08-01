//randomly generate computer answer, return answer
function getComputerChoice() {
    let x = Math.random()
    if (x < 0.333) {
        return 'rock';
    } else if (x < 0.666) {
        return 'paper';
    } else if (0.666 < x) {
        return 'scissors';
    }
}

function promptUser() {
    let playerSelection = prompt('Rock, paper, or scissors?');
    
    //check if user entered appropriate value, if not re-prompt
    let continueLoop = true;
    while(continueLoop) {
        //make playerSelection case insensitive
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
            continueLoop = false;
            return playerSelection;
        } else {
            playerSelection = prompt('Sorry, that\'s not valid! Please enter rock, paper, or scissors.')
        }
    }
}

//function to run the game
function runGame() {
    //for loop to run the game 5 times, prompt user each loop
    for (i = 0; i < 5; i++) {

        let playerSelection = promptUser();

        //get computerChoice, store in variable
        let computerSelection = getComputerChoice();

        //logic for game win or lose
        if (computerSelection === playerSelection) {
            console.log('It\'s a tie!');
        } else if (computerSelection === 'rock') {
            if (playerSelection === 'paper') {
                console.log(`Computer selected ${computerSelection}. You Win!`);
            } else {
                console.log(`Computer selected ${computerSelection}. You Lose!`);
            }
        } else if (computerSelection === 'paper') {
            if (playerSelection === 'scissors') {
                console.log(`Computer selected ${computerSelection}. You Win!`);
            } else {
                console.log(`Computer selected ${computerSelection}. You Lose!`);
            }
        } else if (computerSelection === 'scissors') {
            if (playerSelection === 'rock') {
                console.log(`Computer selected ${computerSelection}. You Win!`);
            } else {
                console.log(`Computer selected ${computerSelection}. You Lose!`);
            }
        }
    }
}

runGame();