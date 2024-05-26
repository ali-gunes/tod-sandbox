let options = {
    0: "rock",
    1: "paper",
    2: "scissors"
}

let asciiArt =  {
    0: `
    _______
    ---'   ____)
          (_____)
          (_____)
          (____)
    ---.__(___)
    `,
    1: `
    _______
    ---'   ____)____
              ______)
              _______)
             _______)
    ---.__________)
    
    `,
    2: `
    _______
    ---'   ____)____
              ______)
           __________)
          (____)
    ---.__(___)
    `
}

let currentRoundWinner = {
    0: "Computer",
    1: "Tie",
    2: "Human"
}

let humanScore = 0, computerScore = 0, remainingRounds = 5

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 10 % 3)
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice [rock/paper/scissors]").toLowerCase()
    humanChoice = getKeyByValue(options, humanChoice)
    while (typeof(humanChoice) === "undefined"){
        humanChoice = prompt("Please enter the correct option [rock/paper/scissors]").toLowerCase()
        humanChoice = getKeyByValue(options, humanChoice)
    }
    return humanChoice
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function playRound(humanChoice, computerChoice) {
    console.log(`Computer's Choice: ${options[computerChoice]}\n${asciiArt[computerChoice]}`)
    console.log("\n---------------------------\n")
    console.log(`Your Choice: ${options[humanChoice]}\n${asciiArt[humanChoice]}`)

    let roundWinner = 0  // 1 represents tie while 0 represents computer win and 2 represents human win

    if (humanChoice == 0 && computerChoice == 2) {
        humanScore++
        roundWinner = 2
    }
    else if (computerChoice == 0 && humanChoice == 2) {
        computerScore++
        roundWinner = 0
    }
    else if (computerChoice == humanChoice) {
        roundWinner = 1
    }
    else {
        humanChoice - computerChoice > 0 ? roundWinner = 2 : roundWinner = 0
        roundWinner > 0 ? humanScore++ : computerScore++
    }

    console.log("\n---------------------------\n")
    console.log(`And the winner of machine against the human is... ${currentRoundWinner[roundWinner]}`)
    remainingRounds--
    console.log(`${remainingRounds} rounds left.`)
}

function playGame() {
    console.log("Welcome to Rock/Paper/Scissors Olympics!\n\n\n")
    while (remainingRounds >= 0){
        playRound(getHumanChoice(), getComputerChoice())
        console.log("Human Score: ", humanScore)
        console.log("Computer Score: ", computerScore)
    }
    console.log("\n\nAfter five challenging rounds the winner is... ", humanScore > computerScore ? "Human!" : "Computer!")
    console.log("\n\nThank you for playing!")
}

playGame()