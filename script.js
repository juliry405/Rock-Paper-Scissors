let playerScore = 0
let computerScore = 0


function computerPlay (){
    const selection = ['rock', 'paper', 'scissors']
  
    return selection[Math.floor(Math.random()*selection.length)]
  
}

function playRound(playerSelection){
  let computerSelection = computerPlay()
  let result = ""
  
if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
   (playerSelection == 'scissors' && computerSelection == 'paper') ||
   (playerSelection == 'paper' && computerSelection == 'rock')){
  
}
}