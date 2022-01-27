let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreboard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    //Create a new array with the three options for the comp
    let choices = ['Rock', 'Paper', 'Scissors']

    //Create a variable that chooses a number by random between 0 and 2
    let ranNum = Math.floor(Math.random() * 3);

    //return a random value in the array
    return choices[ranNum];
}

console.log(getComputerChoice());

