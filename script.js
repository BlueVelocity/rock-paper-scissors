let pageAudio = document.getElementById('pageAudio');
pageAudio.volume = 0.3;

let buttons = document.querySelectorAll(".input-button");

buttons.forEach( (button) => {button.addEventListener('click', ( () => playerButtonClick(button)))})

function playerButtonClick(button) {
    runGame(button.getAttribute('name'));
    button.setAttribute('width', '90');
    button.setAttribute('height', '90');
    setTimeout(() => {
        button.setAttribute('width', '100');
        button.setAttribute('height', '100');
    }, 100)
}

let computerOutputDiv = document.getElementById("computer-output-div");
let playerInputDiv = document.getElementById("input-div");

let computerScoreCounter = document.getElementById("computer-score");
let playerScoreCounter = document.getElementById("player-score");

let computerOutputFigure = document.getElementById('computer-output-figure')

//counter of wins for player
let playerScore= 0;
//counter of wins for computer
let computerScore = 0;

//randomly generate computer answer, return answer
function getComputerChoice() {
    let x = Math.random()
    if (x < 0.333) {
        computerOutputFigure.setAttribute('src', './photo/fire_rune.png');
        return 'rock';
    } else if (x < 0.666) {
        computerOutputFigure.setAttribute('src', './photo/water_rune.png')
        return 'paper';
    } else if (0.666 < x) {
        computerOutputFigure.setAttribute('src', './photo/nature_rune.png')
        return 'scissors';
    }
}

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
            playerScoreCounter.textContent = `${playerScore}`;
        } else if (winner === 'c'){
            console.log(`Computer selected ${computerSelection}. You lose this round...`);
            changeIndicatorBackground('computerWin');
            computerScore++
            computerScoreCounter.textContent = `${computerScore}`;
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
    playerScoreCounter.textContent = '0';
    computerScoreCounter.textContent = '0';
    playerScore = 0;
    computerScore = 0;
    console.log('game reset');
}