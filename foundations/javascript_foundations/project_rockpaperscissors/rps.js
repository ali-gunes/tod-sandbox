function getComputerChoice(){
    let choice = Math.floor(Math.random() * 10 % 3)
    let options = {
        0: "rock",
        1: "paper",
        2: "scissors"
    }
    return options[choice]
}

console.log(getComputerChoice())
