let playerCount = 0;
let compCount = 0;
let container = document.querySelector('#result-container')
const rockButton = document.querySelector('#rock[data-choice]')
const paperButton = document.querySelector('#paper[data-choice]')
const scissorButton = document.querySelector('#scissor[data-choice]')

rockButton.addEventListener('click', e => {
    const choiceName = rockButton.dataset.choice
    console.log(playRound(choiceName, getComputerChoice()))
    if (playerCount === 5 || compCount === 5){
        declareWinner();
    }
})

paperButton.addEventListener('click', e => {
    const choiceName = paperButton.dataset.choice
    console.log(playRound(choiceName, getComputerChoice()))
    if (playerCount === 5 || compCount === 5){
        declareWinner();
    }
})

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
        return  displayResults('This game was a draw')
        
    }

    //playerChoice = scissors
    if (playerChoice === 'scissors' && compChoice === 'paper') {
        playerCount++;
        keepPlayerScore()
        return displayResults('You Win! Scissors beats Paper')
        
    }else if (playerChoice === 'scissors' && compChoice === 'rock'){
        compCount++;
        keepCompScore()
        return displayResults('You Lose! Rock beats Scissors')
        
    }
    //playerChoice = rock
    if (playerChoice === 'rock' && compChoice === 'scissors') {
        playerCount++;
        keepPlayerScore()
        return displayResults('You Win! Rock beats Scissors')
        
    }else if (playerChoice === 'rock' && compChoice === 'paper'){
        compCount++;
        keepCompScore()
        return displayResults('You Lose! Paper beats Rock')
        
    }
    //playerChoice = paper
    if (playerChoice === 'paper' && compChoice === 'rock') {
        playerCount++;
        keepPlayerScore()
        return displayResults('You Win! Paper beats Rock')
        
    }else if (playerChoice === 'paper' && compChoice === 'scissors'){
        compCount++;
        keepCompScore()
        return displayResults('You Lose! Scissors beats Paper')
        
    }
 
    
}
const displayResults = (str) => {
    return container.textContent = str
}

const keepPlayerScore = () => {
    let playerScore = document.querySelector('#playerScore')
    playerScore.textContent = playerCount
}

const keepCompScore = () => {
    let compScore = document.querySelector('#compScore')
    compScore.textContent = compCount
    
}

const declareWinner = () => {
    if(playerCount > compCount){
        reset()
        displayResults('YOU WIN')
        
    }else{
        reset()
        displayResults('YOU LOSE')
        
    }
}
const reset = () => {
    container.textContent = ""
    playerCount = 0;
    compCount = 0;
    keepCompScore()
    keepPlayerScore()
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



