let gamesWon = 0;
let gamesLost = 0;
let gamesTied = 0;
let result = null;
let playerString = null;
let itemSelected = false;
let numberOfGames = 0;

function game(){
    if (itemSelected){
        let playerString = this.dataset.value;
        play(playerString);
        numberOfGames++;
    }

    gamesWon = 0;
    gamesLost = 0;
    gamesTied = 0;
    result = null;
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
    playerString = string;

    result = compare(playerString, computerString);

    result += "<br> Games Won: " + gamesWon + "<br>Games Lost: " + gamesLost + "<br> Games Tied: " + gamesTied;    // console.log(result);
    // let pResult = document.createElement("p");
    // pResult.textContent = result;
    document.querySelector(".results").innerHTML = result;

}

function compare(playerString, computerString){
    // add a string of win / loss / tie to easily compare
    if (playerString === "rock" && computerString === "scissors"){
        result = "win";
        gamesWon++;
        return "You Win! Rock beats scissors!";
    } else if (playerString === "rock" && computerString === "rock"){
        result = "tie";
        gamesTied++;
        return "Its a tie! You both chose rock!";
    } else if (playerString === "rock" && computerString === "paper"){
        result = "loss";
        gamesLost++;
        return "You Lose! Paper beats rock!";
    } else if (playerString === "paper" && computerString === "paper"){
        result = "tie";
        gamesTied++;
        return "Its a tie! You both chose paper!";
    } else if (playerString === "paper" && computerString === "rock"){
        result = "win";
        gamesWon++;
        return "You Win! Paper beats rock!";
    } else if (playerString === "paper" && computerString === "scissors"){
        result = "loss";
        gamesLost++;
        return "You Lose! Scissors beats paper!";
    } else if (playerString === "scissors" && computerString === "scissors"){
        result = "tie";
        gamesTied++;
        return "Its a tie! You both chose scissors!";
    } else if (playerString === "scissors" && computerString === "paper"){
        result = "win";
        gamesWon++;
        return "You Win! Scissors beats paper!";
    } else if (playerString === "scissors" && computerString === "rock"){
        result = "loss";
        gamesLost++;
        return "You Lose! Rock beats scissors!";
    }
}

function onMouseDown(){
    itemSelected = true;
    //this.setAttribute("style", "border: 3px solid yellow");
}

function addImageListeners(){
    const images = document.querySelectorAll("img.left");
    console.log(images);
    images.forEach(image => image.addEventListener("mousedown", onMouseDown));
    images.forEach(image => image.addEventListener("mouseup", game));
}

    addImageListeners();
    game();
