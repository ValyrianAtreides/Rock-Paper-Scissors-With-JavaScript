const gameButtons=document.querySelectorAll(".gameButton");
const choices =["rock","paper","scissor"];
const result=document.getElementById("result");
let playerChoiceLabel=document.getElementById("playerChoiceLabel");
let computerChoiceLabel=document.getElementById("computerChoiceLabel");
let playerChoice;
let playerScoreLabel=document.getElementById("playerScoreLabel");
let computerScoreLabel=document.getElementById("computerScoreLabel");
let playerScore=0;
let computerScore=0;
let winner;

gameButtons.forEach(button => {
  button.addEventListener("click", event => {
    playerChoice = event.target.id;
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceLabel.textContent = "Computer's choice: " + computerChoice;
    playerChoiceLabel.textContent = "Your choice: " + playerChoice;
    winner = playGame(playerChoice, computerChoice);
    makeWinner(winner);
  });
});



function playGame(playerChoice,computerChoice){
  if(playerChoice==computerChoice){
    return "draw";
  }else if(playerChoice=="rock"){
    if(computerChoice=="paper"){
      return "computer"
    }else{
      return "player"
    }
  }else if(playerChoice=="paper"){
    if(computerChoice=="rock"){
      return "player"
    }else{
      return "computer"
    }
  }else if(playerChoice=="scissor"){
    if(computerChoice=="rock"){
      return "computer"
    }else{
      return "player"
    }
  }
  
}
function addPlayerScore(){
  playerScore++;
  playerScoreLabel.textContent="Player Score"+playerScore;

}

function addComputerScore(){
  computerScore++;
  computerScoreLabel.textContent="Computer Score"+computerScore;

}

function makeWinner(winner){
  if(winner=="computer"){
    result.textContent="Computer Wins";
    addComputerScore();
  }else if(winner=="player"){
    result.textContent="Player Wins";
    addPlayerScore();
  }else{
    result.textContent="DRAW";  
  }
}

