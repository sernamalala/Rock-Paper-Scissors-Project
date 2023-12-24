
//add Event listeners to the buttons
const items = ["Rock","Paper","Scissors"];
let userScore = 0;
let computerScore = 0;
let h3Text = document.querySelector("h3");
let h4 = document.querySelector("h4");
let userScoreDisplay = document.querySelector(".user-score");
let computerScoreDisplay = document.querySelector(".computer-score");
function UserInput(){
console.log(`Button is clicked. ${this.id}`);

if(this.id === "rock-btn"){

    console.log("Rock");
    return "Rock";
}
else if(this.id === "paper-btn"){

    console.log("Paper");
    return "Paper";
}
else{

    console.log("Scissors");
    return "Scissors";
}
}

function returnChoice(){

    gameRound(UserInput(), computerInput());
}
let rockButton = document.querySelector("#rock-btn");
rockButton.addEventListener("click",returnChoice)

let paperButton = document.querySelector("#paper-btn");
paperButton.addEventListener("click", returnChoice);;

let scissorsButton = document.querySelector("#scissors-btn");
scissorsButton.addEventListener("click", returnChoice);

function computerInput(){

    let randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);

    let choice = items[randomNumber];
    return choice;
}

function gameRound(userChoice,computerChoice){

    
    h3Text.innerHTML = "User vs Computer";
    if(userChoice === computerChoice){

        h3Text.innerHTML = "It's a tie! play another round."
    }
    //user Winning Outcomes
    else if(userChoice === "Rock" && computerChoice === "Scissors"){

        h3Text.innerHTML = `${userChoice} beats ${computerChoice}!\nUser has won this round!.`
        userScore++;
    }
   
    else if(userChoice === "Paper" && computerChoice === "Rock"){

        h3Text.innerHTML = `${userChoice} beats ${computerChoice}!\nUser has won this round!.`
        userScore++;
    }
    else if(userChoice === "Scissors" && computerChoice === "Paper"){

        h3Text.innerHTML = `${userChoice} beats ${computerChoice}!\nUser has won this round!.`
        userScore++;
    }

    //Computer Winning Outcomes
    else if(computerChoice === "Rock" && userChoice === "Scissors"){

        h3Text.innerHTML = `${computerChoice} beats ${userChoice}!\nComputer has won this round!.`
        computerScore++;
    }
   
    else if(computerChoice === "Paper" && userChoice === "Rock"){

        h3Text.innerHTML = `${computerChoice} beats ${userChoice}!\nComputer has won this round!.`
        computerScore++;
    }
    else if(computerChoice === "Scissors" && userChoice === "Paper"){

        h3Text.innerHTML = `${computerChoice} beats ${userChoice}!\nComputer has won this round!.`
        computerScore++;
    }


userScoreDisplay.innerHTML = `User Score : ${userScore}`;


computerScoreDisplay.innerHTML = `Computer Score : ${computerScore}`;

if((userScore === 5) && (computerScore<userScore) ){

    h3Text.innerHTML = "User has Won!!!!!!!!!🎉🎊🎊";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    let h4 = document.querySelector("h4");
h4.innerHTML = "RESTART❓❓";

}
else if((computerScore === 5) && (userScore<computerScore) ){

    h3Text.innerHTML = "Computer has won🥹🥺Try again?";

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;


h4.innerHTML = "RESTART❓❓";

}

}

gameRound(UserInput,computerInput);

function restart(){
    userScore = 0;
    computerScore = 0
    userScoreDisplay.innerHTML = `User Score : ${userScore}`;
    computerScoreDisplay.innerHTML = `Computer Score : ${computerScore}`;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    h3Text.innerHTML = "User vs Computer";
    h4.innerHTML = "";

    
}
h4.addEventListener("click",function(){
    restart();
})

