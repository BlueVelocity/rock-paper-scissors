
let computerOutputDiv = document.getElementById("computer-output-div");
let playerInputDiv = document.getElementById("input-div");
let computerScoreCounter = document.getElementById("computer-score");
let playerScoreCounter = document.getElementById("player-score");
let computerOutputFigure = document.getElementById('computer-output-figure')
let victoryAnnouncementOutput = document.getElementById('victory-announcement');
let buttons = document.querySelectorAll(".input-button");

let playerScore= 0;
let computerScore = 0;

//audio handlers
let pageAudio = document.getElementById('pageAudio');
let attackAudio = document.getElementById('attackAudio');
pageAudio.volume = 0.1;
firstHover = true;
window.addEventListener('click', () => {
    if (firstHover === true) {
        pageAudio.play();
        setTimeout( () => pageAudio.play(), 260000);
    }
})

buttons.forEach( (button) => {button.addEventListener('click', ( () => playerButtonClick(button)))})

function playerButtonClick(button) {
    runGame(button.getAttribute('name'));
    button.setAttribute('width', '90');
    button.setAttribute('height', '90');
    setTimeout(() => {
        button.setAttribute('width', '100');
        button.setAttribute('height', '100');
    }, 75)
}

function getComputerChoice() {
    let x = Math.random()
    if (x < 0.333) {
        computerOutputFigure.setAttribute('src', './photo/fire_rune.png');
        return 'rock';
    } else if (x < 0.666) {
        computerOutputFigure.setAttribute('src', './photo/water_rune.png');
        return 'paper';
    } else if (0.666 < x) {
        computerOutputFigure.setAttribute('src', './photo/nature_rune.png');
        return 'scissors';
    }
}

function runGame(playerSelection) {
    
    let computerSelection = getComputerChoice();
    //keeps score and displays winner/loser
    function announcer(winner) {
        if (winner === 'tie') {
            changeIndicatorBackground('tie');
        } else if (winner  === 'p') {
            changeIndicatorBackground('playerWin');
            playerScore++
            playerScoreCounter.textContent = `${playerScore}`;
        } else if (winner === 'c'){
            changeIndicatorBackground('computerWin');
            computerScore++;
            computerScoreCounter.textContent = `${computerScore}`;
        } 
    }
    //logic for game win or lose
    if (computerSelection === playerSelection) {
        announcer('tie');
    } else if (
        (computerSelection === 'rock' && playerSelection === 'paper') || 
        (computerSelection === 'paper' && playerSelection === 'scissors') || 
        (computerSelection === 'scissors' && playerSelection === 'rock')) {
        announcer('p');
    } else {
        announcer('c');
    }
    
    if (playerScore === 5 || computerScore === 5) {
        winOrLose();
    }
}

function winOrLose() {
    if (playerScore > computerScore) {
        changeIndicatorBackground('playerVictory');
    } else {
        changeIndicatorBackground('computerVictory');
    } 
    resetGame();
}

function changeIndicatorBackground(winner) {
    if (winner === 'playerWin') {
        setIndicatorDivColors('lightgreen', 'pink');
        resetAudioTimer(attackAudio);
    } else if (winner === 'computerWin') {
        setIndicatorDivColors('pink', 'lightgreen');
        resetAudioTimer(attackAudio);
    } else if (winner === 'tie') {
        setIndicatorDivColors('lightblue', 'lightblue');
    } else if (winner === 'playerVictory') {
        setIndicatorDivColors('yellow');
        victoryAnnouncementOutput.textContent = 'You are the winner!';
        setTimeout( () => victoryAnnouncementOutput.textContent = 'Who will win?', 3000);
    } else if (winner === 'computerVictory') {
        setIndicatorDivColors(undefined,'yellow');
        victoryAnnouncementOutput.textContent = 'The AI has won...';
        setTimeout( () => victoryAnnouncementOutput.textContent = 'Who will win?', 3000);
    } else {
        console.log('error with changeIndicatorBackground()');
    }
}

function setIndicatorDivColors(playerColor, computerColor) {
    playerInputDiv.setAttribute('style', `background-color: ${playerColor}`);
    computerOutputDiv.setAttribute('style', `background-color: ${computerColor}`);
}

function resetAudioTimer(audio) {
    audio.currentTime = 0;
    audio.play();
}

function resetGame() {
    playerScoreCounter.textContent = '0';
    computerScoreCounter.textContent = '0';
    playerScore = 0;
    computerScore = 0;
    console.log('game reset');
}