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

function win(userChoice, computerChoice) {
userScore++
userScore_span.innerHTML = userScore.toString();
result_p.innerHTML = "<sup class='badge-two>user</sup> " + userChoice + " beats " + "<sup class='badge-two'>comp</sup> " + computerChoice + ". You win!";
}

function lose(userChoice, computerChoice) {
    computerScore++
    computerScore_span.innerHTML = computerScore.toString();
    result_p.innerHTML = "<sup class='badge-two'>comp</sup> " + computerChoice + " beats " + "<sup class='badge-two'>user</sup> " + ". You lose!";
}

function tie(userChoice, computerChoice) {
    result_p.innerHTML = "<sup class='badge-two'>user</sup> " + userChoice + " ties " + "<sup class='badge-two'>comp</sup> " + ". You tied! Do better next time.";
}

function shootRock(){
    game('Rock');
}

function shootPaper() {
    game('Scissors');
}

function shootScissors() {
    game('Paper')
}

function game(userChoice) {
    let computerChoice = getComputerChoice()

    switch (userChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, computerChoice);
            break;

        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(userChoice, computerChoice);
            break;
            
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            tie(userChoice, computerChoice);
            break;
    }
}