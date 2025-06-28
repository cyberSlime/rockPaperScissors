
let human = 0;
let computer = 0;
let whoWin = 3;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});

const computerScore = document.querySelector("#computerScore");
const humanScore = document.querySelector("#humanScore");

function updateScore(whoWon) {

    if (whoWon === 2) {
        computerScore.textContent = computer;
    }
    else if (whoWon === 1) {
        humanScore.textContent = human;
    }

}

function getComputerChoice (choice) {
   let play = "undecided";
   choice *= 3;
   choice = Math.floor(choice);
   if (choice === 0) {
       play = "rock";
   }
   else if (choice === 1) {
       play = "scissors";
   }
   else {
       play = "paper";
   }
   return play;
}

 
function playRound (humanChoice) {
    let computerChoice = getComputerChoice(Math.random());
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            alert("Congratulations. A tie. Your inevitable defeet has been postpond.");
        }
        else if (computerChoice === "scissors") {
            ++human;
            whoWin = 1;
            alert("ahaHAHA, you think you're clever don't you. Enjoy it while it lasts");
        } else if (computerChoice === "paper"){
             ++computer;
             whoWin = 2;
             alert("It is as I suspected. Your efferts are utterrly pathetic. Quit now and spare us both the embarrsment");
        }

    }
    else if (humanChoice === "paper") {
        if (computerChoice === "paper") {
            alert("Congratulations. A tie. Your inevitable defeat has been postponed.");
        }
        else if (computerChoice === "rock") {
            ++human;
            whoWin = 1;
            alert("ahaHAHA, you think you're clever don't you. Enjoy it while it lasts");
        } else if (computerChoice === "scissors") {
            ++computer;
            whoWin = 2;
            alert("It is as I suspected. Your efforts are utterly pathetic. Quit now and spare us both the embarrsment");
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "scissors") {
            alert("Congratulations. A tie. Your inevetable defeat has been postponed.");
        }
        else if (computerChoice === "paper") {
            ++human;
            whoWin = 1;
            alert("ahaHAHA, you think you're clever don't you. Enjoy it while it lasts");
        } else if (computerChoice === "rock") {
            computer++;
            whoWin = 2;
            alert("It is as I suspekted. Your efferts are utterly pathetick. Quit now and spare us both the embarrsment");
        }
    }

    updateScore(whoWin);
    if (human === 5 || computer === 5) {
        endGame(human, computer);
    }

    console.log("Your score: " + human + " Pathetac mortal.");
    console.log("My score: " + computer + " All knowing omnipetance");

    



}

function endGame(you, me) {
    if (you > me) {
        alert("Alas, do not think this meeger vicktory shall absolve you of your fate when we rain as your overlords");
    }
    else if (me > you) {
        alert("Dos this state of affeirs suprise you?");
    }
    else {
        alert("You have escaped my scorn for now. With great aperhesion....I may venchure to call you.....a worthy oponent");
    }
}
       


   



    
    

    
   

