// NEW GIT TESTS

const btn = document.querySelectorAll("button");

const userChoice = document.querySelector("#userChoice");
const compChoice = document.querySelector("#computerChoice");
const roundResultElement = document.querySelector("#result");
const playerScoresElement = document.querySelector("#playerScores");
const computerScoresElement = document.querySelector("#computerScores");

function showChoices(buttonID, computerChoice) {
    
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    
    if(buttonID === "rock") 
        userChoice.textContent = `Your choice: ${rock}!`;
    else if (buttonID === "paper")
        userChoice.textContent = `Your choice: ${paper}`;
    else if(buttonID === "scissors")
        userChoice.textContent = `Your choice: ${scissors}`;

    if(computerChoice === "rock")
        compChoice.textContent = `Computer's choice: ${rock}!`;
    else if (computerChoice === "paper")
        compChoice.textContent = `Computer's choice: ${paper}`;
    else
        compChoice.textContent = `Computer's choice: ${scissors}`;

    if(buttonID === "reset") {
        userChoice.textContent = "Your choice: ";
        compChoice.textContent = "Computer's choice: ";
    }
};

function getComputerChoice() {
    const choicesArr = ["rock", "paper", "scissors"];
    const arrLength = choicesArr.length;
    let randomNumber = Math.floor(Math.random() * arrLength); 
    let computerChoice = choicesArr[randomNumber];

    console.log(computerChoice);
    return computerChoice; 
}

function playRound_new(humanChoice, computerChoice) {

    let roundScore = "";

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
    else if(humanChoice === "scissors"){
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
    else // if reset
        roundScore = "reset";

    return roundScore;
}

function showScores(roundResultVar) {
    if(roundResultVar !== "reset")
        roundResultElement.textContent =  `Result: ${roundResultVar}`;
    else
        roundResultElement.textContent =  `Result: `;
}

const sumScores = (() => {
    let userScores = 0;
    let computerScores = 0;

    return function (roundResultVar) {
        switch (roundResultVar) {
            case 'human':
                userScores++;
                playerScoresElement.textContent = `Player's scores: ${userScores}`;
                break;
            case 'computer':
                computerScores++;
                computerScoresElement.textContent = `Computer's scores: ${computerScores}`;
                break;
            case 'draw':
                break;
            case 'reset':
                userScores = 0;
                computerScores = 0;
                playerScoresElement.textContent = `Player's scores: ${userScores}`;
                computerScoresElement.textContent = `Computer's scores: ${computerScores}`;
                break;
        }
        // Return the current scores as an object
        return { userScores, computerScores };
    };
})();

function finishTheGame(scores) {
    const playerWin = "Player won!";
    const computerWin = "Computer won!";

    if (scores.userScores === 5) {
        alert(playerWin);
        roundResultElement.textContent = `Result: ${playerWin}`;
        disableButtons();
    } else if (scores.computerScores === 5) {
        alert(computerWin);
        roundResultElement.textContent = `Result: ${computerWin}`;
        disableButtons();
    }
}

function disableButtons() {
    btn.forEach((button) => {
        if (button.id !== "reset") {
            button.disabled = true; // Disable all buttons except the reset button
        }
    });
}

function enableButtons() {
    btn.forEach((button) => {
        button.disabled = false; // Enable all buttons
    });
}

btn.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonID = button.id;

        if (buttonID === "reset") {
            sumScores("reset"); // Reset scores
            roundResultElement.textContent = `Result: `;
            showChoices(buttonID, ""); // Clear choices
            enableButtons(); // Enable all buttons
        } else {
            let computerChoiceVar = getComputerChoice();
            let roundResultVar = playRound_new(buttonID, computerChoiceVar);

            showChoices(buttonID, computerChoiceVar);
            showScores(roundResultVar);

            // Get the current scores after updating them
            const currentScores = sumScores(roundResultVar);

            // Check if the game should finish
            finishTheGame(currentScores);
        }
    });
});