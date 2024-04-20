let computerScore = 0;
let playerScore = 0;
let roundWinner = '';


//Get random variable from computer player
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    switch(random){
        case 0:
            return 'ROCK'
        case 1:
            return 'SCISSORS'
        case 2:
            return 'PAPER'
    }
}

function playRound(computerSelection, playerSelection){
    if (computerSelection === playerSelection){
        roundWinner = 'TIE'
    }
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ||
        playerSelection === 'PAPER' && computerSelection === 'ROCK' ||
        playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
            playerScore++
            roundWinner = 'Player'
    }
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER' ||
        playerSelection === 'PAPER' && computerSelection === 'SCISSORS' ||
        playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
            computerScore++
            roundWinner = 'Computer'
        }
    updateScore(roundWinner, computerSelection, playerSelection);
    if(gameOver()){
        if (computerScore > playerScore){
            alert('Computer wins game!')
        } else{
            alert('Player wins game!')
        }
    }
}

function updateScore(roundWinner, computerSelection, playerSelection){
    if (roundWinner === 'Player'){
        alert(`${roundWinner} wins! ${playerSelection} beats ${computerSelection}.`)
    } else if(roundWinner === 'TIE'){
        alert(`TIE`)
    } else {
        alert(`${roundWinner} wins! ${computerSelection} beats ${playerSelection}.`)
    }
}

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

rock.addEventListener('click', () => playGame('ROCK'))
paper.addEventListener('click', () => playGame('PAPER'))
scissors.addEventListener('click', () => playGame('SCISSORS'))

function gameOver() {
    return computerScore === 5 || playerScore === 5
}

function playGame(playerSelection){
    if (gameOver()){
        alert('NEW GAME. CLICK AGAIN.');
        playerScore = 0;
        computerScore = 0;
    } else{
        let computerSelection = getComputerChoice()
        playRound(computerSelection, playerSelection);
    }

}