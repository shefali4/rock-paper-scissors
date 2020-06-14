




function computerPlay() {
	const randomInt = Math.floor(Math.random() * 3);
	var computerMove;
	console.log("Random int: " + randomInt);
	if (randomInt == 0) {
		computerMove = "rock";
	} else if (randomInt == 1) {
		computerMove = "paper";
	} else if (randomInt == 2) {
		computerMove = "scissors";
	}

	return computerMove;
}

function playerSelection() {
	var playerInput = prompt("Enter rock, paper, or scissors");
	var playerMove = playerInput.toLowerCase();
	return playerMove;



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

	console.log(playRound(playerSelection(), computerPlay()));


}
