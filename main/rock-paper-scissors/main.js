const computerChoiceDisplay =document.getElementById("Computer-choice");
const resultDisplay =document.getElementById("result");
const  userChoiceDisplay=document.getElementById("user-choice");
const  possbileChoices=document.querySelectorAll("button");
let userChoice
let computerChoice
let result
  possbileChoices.forEach(possbileChoice =>possbileChoice.addEventListener("click", (e) =>{
userChoice = e.target.id;
userChoiceDisplay.innerHTML = userChoice;
genratecomputerChoice();
getresult ();
    }));
function genratecomputerChoice (){
    const randomNumber = Math.floor(Math.random() *3)+1;
    if(randomNumber === 1) {
        computerChoice = 'rock'
    };
    if(randomNumber === 2) {
        computerChoice = 'scissors'
    };
    if (randomNumber === 3) {
        computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
};
function getresult () {
    if (computerChoice === userChoice) {
        result = 'its a draw'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'You Win!!! '
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You lost!!! '
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'You Win!!! '
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'You lost!!! '
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You Win!!! '
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You Win!!! '
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'You lost!!! '
    }
     resultDisplay.innerHTML = result;
};
