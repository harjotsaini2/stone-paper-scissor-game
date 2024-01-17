let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const genCompChoice = () => {
    // rock paper scissor
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#081b31";
    userScore++;
    compScore++;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
         msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
         msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);

    const compChoice = genCompChoice();
    console.log("compChoice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin === "scissors" ? false : true;
        }
        else {
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});