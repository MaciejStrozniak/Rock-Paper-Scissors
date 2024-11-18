
// TESTING NEW BRANCH ON GITHUB

let log = console.log;
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

function getComputerChoice() {
    const choicesArr = ["rock", "paper", "scissors"];
    const arrLength = choicesArr.length;
    let randomNumber = Math.floor(Math.random() * arrLength); 
    let computerChoice = choicesArr[randomNumber];

    return computerChoice; 
}

function getHumanChoice() {
    let humChoice;
    let condition = true;

    while (condition) {

        humChoice = prompt(
            `What's You choice? Type it's full name:
            1. Rock
            2. Paper
            3. Scissors`);
        
        humChoice = humChoice.toLowerCase();

        if (humChoice === "rock" || humChoice === "paper" || humChoice === "scissors") {            

            condition = false;
            alert(`You chose: ${humChoice}`);

        } else {

            alert(`Wrong answer. Let's try again!`);            

        }                
    }

    return humChoice;
}

function playRound(humanChoice, computerChoice) {
    
    let roundScore;

    if(humanChoice === `rock`){
        switch(computerChoice) {
            case 'rock':
                roundScore = 'draw';
                break;
            case 'paper':
                roundScore = 'computer';
                break;
            case 'scissors':
                roundScore = 'human';
                break;
        }
    }
    else if(humanChoice === 'paper'){
        switch(computerChoice) {
            case 'rock':
                roundScore = 'human';
                break;
            case 'paper':
                roundScore = 'draw';
                break;
            case 'scissors':
                roundScore = 'computer';
                break;
        }
    }
    else {
        switch(computerChoice) {
            case 'rock':
                roundScore = 'computer';
                break;
            case 'paper':
                roundScore = 'human';
                break;
            case 'scissors':
                roundScore = 'draw';
                break;
        }
    }

    switch(roundScore) {
        case 'human':
            humanScore ++;
            alert('You win! :)');
            break;
        case 'computer':
            computerScore ++;
            alert('You lose! :(');
            break;
        case 'draw':
            alert('Draw!');
            break;            
    }    
}

function playGame() {
    let round = 1;
    let isPlaying = true;
    let newGame = true;

    while(isPlaying) {
        
        if(round <= 5) {
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);        
            round ++;
        } else 
            isPlaying = false;   
    }

    if(humanScore > computerScore)
        alert('YOU WON!');
    else if (humanScore < computerScore)
        alert('COMPUTER WON!')
    else
        alert(`That's a draw!`);

    while(newGame) {
        let input = prompt(`Do You want to play again? Y/N`);
        input = input.toLowerCase();

        if(input === 'y')
            playGame();
        else if (input === 'n') {
            newGame = !newGame;
            alert(`That's it for today`);
        }
            else
            alert(`Wrong answer. Try again.`);
    }
}

playGame();