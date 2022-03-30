let playerScore = 0
let computerScore = 0

function computerPlay(){
    const selection = ['rock', 'paper', 'scissors']
  
    return selection[Math.floor(Math.random()*selection.length)]
}

function playRound(){
let computerSelection = computerPlay()

let playerSelection =  prompt("What's your selection?");
  
  if(playerSelection == "rock" && computerSelection == "scissors"){
    alert("You Selected Rock! Rock Beats Scissors!")
  }else if(playerSelection == "paper" && computerSelection == "rock"){
    alert("You Selected Paper! Paper Beats Rock!")
  }else if(playerSelection == "scissors" && computerSelection == "paper"){
    alert("You Selected Scissors! Scissors Beats Paper!")
  }else if(playerSelection == "paper" && computerSelection == "paper"){
    alert("It's a tie! You both selected paper!")
  }else if(playerSelection == "scissors" && computerSelection == "scissors"){
    alert("It's a tie! You both selected scissors!")
  }else if(playerSelection == "rock" && computerSelection == "rock"){
    alert("It's a tie! You both selected rock!")
  }
  
  if(computerSelection == "rock" && playerSelection == "scissors"){
    alert("The Computer Selected Rock! Rock Beats Scissors!")
  }else if(computerSelection == "scissors" && playerSelection == "paper"){
    alert("The Computer Selected Scissors! Scissors Beats Paper!")
  }else if(computerSelection == "paper" && playerSelection == "rock"){
    alert("The Computer Selected Paper! Paper Beats Rock!")
  }else if(computerSelection == "rock" && playerSelection == "rock"){
    alert("It's a tie! You both selected rock!")
  }else if(computerSelection == "scissors" && playerSelection == "scissors"){
    alert("It's a tie! You both selected scissors!")
  }else if(computerSelection == "paper" && playerSelection == "paper"){
    alert("It's a tie! You both selected paper!")
  }
}