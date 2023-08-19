let pageAudio = document.getElementById('pageAudio');
pageAudio.volume = 0.1;

let buttons = document.querySelectorAll(".input-button");

buttons.forEach( (button) => {button.addEventListener('click', ( () => runGame(button.getAttribute('name'))))})

let computerOutputDiv = document.getElementById("computer-output-div");
let playerInputDiv = document.getElementById("input-div");


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
            changeIndicatorBackground('playerWin');
            playerScore++
        } else if (winner === 'c'){
            console.log(`Computer selected ${computerSelection}. You lose this round...`);
            changeIndicatorBackground('computerWin');
            computerScore++
        } 
    }

    let optionsArray = ['rock', 'paper', 'scissors']
    //logic for game win or lose
    if (computerSelection === playerSelection) {
        console.log('It\'s a tie!');
        changeIndicatorBackground('tie');
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
        changeIndicatorBackground('playerVictory');
    } else {
        console.log(`You Lost... Computer: ${computerScore}, You: ${playerScore}`);
        changeIndicatorBackground('computerVictory');
    } 
    resetGame();
}

function changeIndicatorBackground(winner) {
    if (winner === 'playerWin') {
        setIndicatorDivColors('lightgreen', 'pink')
    } else if (winner === 'computerWin') {
        setIndicatorDivColors('pink', 'lightgreen')
    } else if (winner === 'tie') {
        setIndicatorDivColors('lightblue', 'lightblue')
    } else if (winner === 'playerVictory') {
        setIndicatorDivColors('yellow')
    } else if (winner === 'computerVictory') {
        setIndicatorDivColors(undefined,'yellow')
    } else {
        console.log('error with changeIndicatorBackground()')
    }
}

function setIndicatorDivColors(playerColor, computerColor) {
    playerInputDiv.setAttribute('style', `background-color: ${playerColor}`)
    computerOutputDiv.setAttribute('style', `background-color: ${computerColor}`)
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    console.log('game reset');
}