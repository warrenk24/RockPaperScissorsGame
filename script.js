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
        return  displayResults('This game was a draw!')
        
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
        displayResults('Nice work! You beat Master Jiraiya')
        
    }else{
        reset()
        displayResults('Better luck next time kid!')
        
    }
}
const reset = () => {
    container.textContent = ""
    playerCount = 0;
    compCount = 0;
    keepCompScore()
    keepPlayerScore()
}



