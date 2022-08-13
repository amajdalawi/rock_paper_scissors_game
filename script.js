'use strict';

function getComputerChoice() {
    // returns 'Rock', 'Paper' or 'Scissors' based on a value calculated randomly.
    let compChoice = Math.floor(Math.random()*3) + 1; 
    return (compChoice === 1) ? 'Rock' : 
            (compChoice === 2) ? 'Paper' :
            'Scissors';
}

