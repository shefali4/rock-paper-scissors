

var userScore = 0;
var rounds = 0;
var compScore = 0;
var rock_div       = document.querySelector("#rock");
var paper_div      = document.querySelector("#paper");
var scissors_div   = document.querySelector("#scissors");

function playerSelectionResult(){
    buttonRock.addEventListener('click', function (e){
        return "rock";
    })
    buttonPaper.addEventListener('click', function (e){
        return "paper";
    })
    buttonScissors.addEventListener('click', function (e){
        return "scissor";
    })
};

function playerSelection() {
	var playerInput = prompt("Enter rock, paper, or scissors");
	var playerMove = playerInput.toLowerCase();
	return playerMove;



}


function computerPlay() {
	const randomInt = Math.floor(Math.random() * 3);
	var computerMove;
	if (randomInt == 0) {
		computerMove = "rock";
	} else if (randomInt == 1) {
		computerMove = "paper";
	} else if (randomInt == 2) {
		computerMove = "scissors";
	}
	return computerMove;
}

var play = function(userChoice) {
					
	document.getElementById("player").innerHTML="";
	document.getElementById("opponent").innerHTML="";
	document.getElementById("results").innerHTML="";

	if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
		document.getElementById("player").innerHTML='You chose' + ' ' + userChoice + '.';
	}
}

function playRound(playerSelection, computerSelection) {
	

	if (playerSelection == computerSelection) {
		return "tie";
	}

	if (playerSelection == 'rock' && computerSelection == 'scissors') {
		return "rock beats scissors; you win";
	}
	if (playerSelection == 'rock' && computerSelection == 'paper') {
		return "paper beats rock; you lose";
	}


	if (playerSelection == 'paper' && computerSelection == 'scissors') {
		return "scissors beats paper; you lose";
	}
	if (playerSelection == 'paper' && computerSelection == 'rock') {
		return "paper beats rock; you win";
	}


	if (playerSelection == 'scissors' && computerSelection == 'paper') {
		return "scissors beats paper; you win";
	}
	if (playerSelection == 'scissors' && computerSelection == 'rock') {
		return "rock beats scissors; you lose";
	}
	return "nothing";
}



    
    


function game() {
	for (int i = 0; i < 5; i++) {
		console.log(playRound(playerSelection(), computerPlay()));
	}
  
}

game();







