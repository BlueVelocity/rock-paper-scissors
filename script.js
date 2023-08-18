let buttons = document.querySelectorAll("button");

buttons.forEach( (button) => {button.addEventListener('click', ( () => runGame(button.getAttribute('name'))))})

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

//counter of wins for player
let playerScore= 0;
//counter of wins for computer
let computerScore = 0;

//function to run the game
function runGame(playerSelection) {

    //get computerChoice, store in variable
    let computerSelection = getComputerChoice();

    //function to keep score and display winner/loser
    function announcer(winner) {
        if (winner  === 'p') {
            console.log(`Computer selected ${computerSelection}. You win this round!`)
            playerScore++
        } else if (winner === 'c'){
            console.log(`Computer selected ${computerSelection}. You lose this round...`);
            computerScore++
        } 
    }

    let optionsArray = ['rock', 'paper', 'scissors']
    //logic for game win or lose
    if (computerSelection === playerSelection) {
        console.log('It\'s a tie!');
    } else if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            announcer('p');
        } else {
            announcer('c')
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'scissors') {
            announcer('p');
        } else {
            announcer('c');
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            announcer('p');
        } else {
            announcer('c')
        }
    }
    
    if (playerScore === 5 || computerScore === 5) {
        winOrLose()
    }

}

function winOrLose() {
    if (playerScore > computerScore) {
        console.log(`You win! You: ${playerScore}, Computer: ${computerScore}`);
    } else {
        console.log(`You Lost... Computer: ${computerScore}, You: ${playerScore}`);
    } 
    resetGame();
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    console.log('game reset');
}