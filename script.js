

// This function will randomly choose rock, paper, or scissors
const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}


const playRound = (player, compChoice) => {
    let playerChoice = player.toLowerCase();
    //Draw
    if (playerChoice === compChoice) {
        return 'This game was a draw'
    }

    //playerChoice = scissors
    if (playerChoice === 'scissors' && compChoice === 'paper') {
        return 'You Win! Scissors beats Paper'
    }else if (playerChoice === 'scissors' && compChoice === 'rock'){
        return 'You Lose! Rock beats Scissors'
    }
    //playerChoice = rock
    if (playerChoice === 'rock' && compChoice === 'scissors') {
        return 'You Win! Rock beats Scissors'
    }else if (playerChoice === 'rock' && compChoice === 'paper'){
        return 'You Lose! Paper beats Rock'
    }
    //playerChoice = paper
    if (playerChoice === 'paper' && compChoice === 'rock') {
        return 'You Win! Paper beats Rock'
    }else if (playerChoice === 'paper' && compChoice === 'scissors'){
        return 'You Lose! Scissors beats Paper'
    }
   
}



