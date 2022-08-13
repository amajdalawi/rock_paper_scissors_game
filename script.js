'use strict';

// initialize the variables for the computer choice and the player's choice
let computerChoice;
let playerChoice;

//make a global variable that tracks the number of wins for the computer and for the player
let playerWins = 0;
let computerWins = 0;



function getComputerChoice() {
    // returns 'Rock', 'Paper' or 'Scissors' based on a value calculated randomly.
    let compChoice = Math.floor(Math.random()*3) + 1; 
    return (compChoice === 1) ? 'Rock' : 
            (compChoice === 2) ? 'Paper' :
            'Scissors';
}

function resetAllVars() {
    computerChoice = 0;
    playerChoice = 0;
    playerWins = 0;
    computerWins = 0;
}

function play() {
    for(let i = 1; i <= 5; i++) {
        playerChoice =  playRound();
        computerChoice = getComputerChoice();
        if (playerChoice === computerChoice) {
            i -= 1;
            console.log('its a tie!')
            continue;
        }
        // THE BELOW CONDITIONAL STATEMENTS SHOULD BE REWORKED INTO ITS OWN FUNCTION 
        if (playerChoice === 'Rock') {
            if (computerChoice === 'Scissors') {
                playerWins += 1;
            } else {
                computerWins += 1;
            }
        }
        if (playerChoice === 'Scissors') {
            if (computerChoice === 'Paper') {
                playerWins += 1;
            } else {
                computerWins += 1;
            }
        }
        if (playerChoice === 'Paper') {
            if (computerChoice === 'Rock') {
                playerWins += 1;
            } else {
                computerWins += 1;
            }
        }
        console.log(`player choice is ${playerChoice}`)
        console.log(`computer choice is ${computerChoice}`)
        
    }
    if (playerWins > computerWins) {
        console.log(`the player wins with ${playerWins} wins to ${computerWins} computer wins!`);

    } else {
        console.log(`the computer wins with ${computerWins} wins to ${playerWins} player wins!`);
    }
    resetAllVars();
}

function playRound() {
    let playerChoice;
    let sometruthValue = true;
    while(sometruthValue) {
        playerChoice = prompt('What is your choice? Rock? Paper? Scissors?');
        playerChoice = playerChoice.substring(0,1).toUpperCase() + playerChoice.substring(1).toLowerCase();
        if (playerChoice === 'Rock' || playerChoice === 'Paper' || playerChoice === 'Scissors') {
            sometruthValue = false;
        } else {
            alert('Please enter a valid value!');
        }
    }
    return playerChoice;
}