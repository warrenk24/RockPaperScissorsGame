let playerCount = 0;
let compCount = 0;


const rockButton = document.querySelector('#rock[data-choice]')
rockButton.addEventListener('click', e => {
    const choiceName = rockButton.dataset.choice
    console.log(playRound(choiceName, getComputerChoice()))
    if (playerCount === 5 || compCount === 5){
        declareWinner();
    }
})

const paperButton = document.querySelector('#paper[data-choice]')
paperButton.addEventListener('click', e => {
    const choiceName = paperButton.dataset.choice
    console.log(playRound(choiceName, getComputerChoice()))
    if (playerCount === 5 || compCount === 5){
        declareWinner();
    }
})
const scissorButton = document.querySelector('#scissor[data-choice]')
scissorButton.addEventListener('click', e => {
    const choiceName = scissorButton.dataset.choice
    console.log(playRound(choiceName, getComputerChoice()))
    if (playerCount === 5 || compCount === 5){
        declareWinner();
    }
})




// This function will randomly choose rock, paper, or scissors
const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}


const playRound = (playerChoice, compChoice) => {
    
    //Draw
    if (playerChoice === compChoice) {
        return 'This game was a draw'
    }

    //playerChoice = scissors
    if (playerChoice === 'scissors' && compChoice === 'paper') {
        playerCount++;
        return 'You Win! Scissors beats Paper'
    }else if (playerChoice === 'scissors' && compChoice === 'rock'){
        compCount++;
        return 'You Lose! Rock beats Scissors'
    }
    //playerChoice = rock
    if (playerChoice === 'rock' && compChoice === 'scissors') {
        playerCount++;
        return 'You Win! Rock beats Scissors'
    }else if (playerChoice === 'rock' && compChoice === 'paper'){
        compCount++;
        return 'You Lose! Paper beats Rock'
    }
    //playerChoice = paper
    if (playerChoice === 'paper' && compChoice === 'rock') {
        playerCount++;
        return 'You Win! Paper beats Rock'
    }else if (playerChoice === 'paper' && compChoice === 'scissors'){
        compCount++;
        return 'You Lose! Scissors beats Paper'
    }
 
    
}




const declareWinner = () => {
    if(playerCount > compCount){
        console.log('YOU WIN')
    }else{
        console.log('YOU LOSE')
    }
}
// const buttons = document.querySelectorAll('[data-choice]')

// buttons.forEach(button => {
//     button.addEventListener('click', e => {
//        const choiceName = button.dataset.choice
//        console.log(playRound(choiceName, getComputerChoice()))
       
//     })
// })



//Will play five games total and pick the winner
// const game = () => {

// for (let i = 0; i < 5; i++){
       
// }

// if (playerCount === compCount){
//     return 'Draw!'
// }else if (playerCount > compCount){
//     return 'You Won the game!'
// }else {
//     return 'You Lost the game!'
// }

// }



