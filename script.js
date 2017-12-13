function game(){
    let numberOfGames = 0;
    while (numberOfGames < 5){
        let playerString = prompt("Rock, Paper, Or scissors").toString().trim().toLowerCase();
        // converts input to a string, lowercase, and trim whitespaces
        if (playerString === "rock" || playerString === "paper" || playerString === "scissors"){
            play(playerString);
            numberOfGames++;
            // only adds with valid inputs
        } else {
            console.log("Invalid input, try again!");
        }
    }
}

function computer_play(){
    let rand = Math.random();

    if (rand < 0.33){
        return "rock"
    } else if (rand >= 0.33 && rand < 0.66){
        return "paper"
    } else {
        return "scissors"
    }
}

function play(string){
    let computerString = computer_play();
    let playerString = string;

    console.log(compare(playerString, computerString));
}

function compare(playerString, computerString){
    if (playerString === "rock" && computerString === "scissors"){
        return "You Win! Rock beats scissors!";
    } else if (playerString === "rock" && computerString === "rock"){
        return "Its a tie! You both chose rock!";
    } else if (playerString === "rock" && computerString === "paper"){
        return "You Lose! Paper beats rock!";
    } else if (playerString === "paper" && computerString === "paper"){
        return "Its a tie! You both chose paper!";
    } else if (playerString === "paper" && computerString === "rock"){
        return "You Win! Paper beats rock!";
    } else if (playerString === "paper" && computerString === "scissors"){
        return "You Lose! Scissors beats paper!";
    } else if (playerString === "scissors" && computerString === "scissors"){
        return "Its a tie! You both chose scissors!";
    } else if (playerString === "scissors" && computerString === "paper"){
        return "You Win! Scissors beats paper!";
    } else if (playerString === "scissors" && computerString === "rock"){
        return "You Lose! Rock beats scissors!";
    }
}

game();