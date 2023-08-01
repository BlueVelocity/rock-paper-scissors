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
    //counter of wins for player
    playerWinCounter = 0;
    //counter of wins for computer
    computerWinCounter = 0;

    //for loop to run the game 5 times, prompt user each loop
    for (i = 0; i < 5; i++) {

        //prompt the user each round
        let playerSelection = promptUser();

        //get computerChoice, store in variable
        let computerSelection = getComputerChoice();

        //function to keep score and display winner/loser
        function winCounter(winner) {

            if (winner  === 'p') {
                console.log(`Computer selected ${computerSelection}. You win this round!`)
                playerWinCounter++
            } else if (winner === 'c'){
                console.log(`Computer selected ${computerSelection}. You lose this round...`);
                computerWinCounter++
            } 
        }

        //logic for game win or lose
        if (computerSelection === playerSelection) {
            console.log('It\'s a tie!');
        } else if (computerSelection === 'rock') {
            if (playerSelection === 'paper') {
                winCounter('p');
            } else {
                winCounter('c')
            }
        } else if (computerSelection === 'paper') {
            if (playerSelection === 'scissors') {
                winCounter('p');
            } else {
                winCounter('c');
            }
        } else if (computerSelection === 'scissors') {
            if (playerSelection === 'rock') {
                winCounter('p');
            } else {
                winCounter('c')
            }
        }

        //breaks the loop if a winner is decided, best 3 of 5
        if (playerWinCounter === 3 || computerWinCounter === 3) {
            break;
        }
    }

    //check for winner, display winner with score
    if (playerWinCounter > computerWinCounter) {
        console.log(`You win! You: ${playerWinCounter}, Computer: ${computerWinCounter}`);
    } else if (playerWinCounter < computerWinCounter) {
        console.log(`You Lost... Computer: ${computerWinCounter}, You: ${playerWinCounter}`);
    } else {
        console.log(`You tied! You: ${playerWinCounter}, Computer: ${computerWinCounter}`);
    }
}

runGame();