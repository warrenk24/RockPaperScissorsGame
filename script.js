

// This function will randomly choose rock, paper, or scissors
const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}
console.log(getComputerChoice())



