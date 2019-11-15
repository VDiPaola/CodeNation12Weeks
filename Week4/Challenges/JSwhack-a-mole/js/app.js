//elements
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.getElementsByClassName("mrbump");
const missed = document.getElementById("missed");
const leaderboardDiv = document.getElementById("leaderboard");
const leaderboardButton = document.getElementById("leaderboardButton");


//vars
let gameStart = false;
//total moles before game runs out
let moleTotal = 20;
//start button
const startButton = document.getElementById("start");

startButton.addEventListener("click", startGame)


//function when game starts
async function startGame(){
    //time that user has to click
    let seconds = 1.2;
    //time between each mole appears (decreases over time)
    let betweenTime = 1;
    if(gameStart == false){
        gameStart = true;
        startButton.innerHTML = "reset";
        clearGame();
        while(gameStart){
            await moleClicked(seconds);
            await timer(betweenTime);
            seconds -= .03;
            betweenTime = betweenTime <=0.1 ? betweenTime = .1: betweenTime -= .02
            if(Number(missed.innerHTML) + Number(scoreBoard.innerHTML) >= moleTotal ){
                //game ends if mole total is reached
                gameStart = false;
                //add score to leaderboards
                leaderboardDiv.innerHTML += `<p>${scoreBoard.innerHTML}</p>`
            }
        }
    }else{
        
        clearGame();
        startButton.innerHTML = "Start!";
        gameStart = false;
        
        
    }
}

//function that resets game
function clearGame(){
    scoreBoard.innerHTML = "0";
    missed.innerHTML = "0";
    for(i=0;i<moles.length;i++){
        moles[i].style.display = "none";
    }

}

//function to make mole appear and wait for it to be clicked
function moleClicked(secs){
    return new Promise((resolve,reject)=>{
        //picks random mole
        let rndMole = Math.floor(Math.random() * moles.length);
        moles[rndMole].style.display = "block";
        setTimeout(() => {
            //when time has run out make mole disappear
            if(moles[rndMole].style.display != "none"){
                moles[rndMole].style.display = "none";
                missed.innerHTML = Number(missed.innerHTML) + 1;
            }

            resolve();
        }, secs * 1000);
    })
}

//function for when you click a mole
for(i=0;i<moles.length;i++){
    moles[i].addEventListener("click", function(){
        scoreBoard.innerHTML = Number(scoreBoard.innerHTML) + 1;
        this.style.display = "none";
    });
}

function timer(seconds){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    })
}


//show leaderboard

leaderboardButton.addEventListener("click", function(){
    if(leaderboardDiv.style.display != "block"){
        leaderboardDiv.style.display = "block";
        
    }else{
        console.log(leaderboardDiv.style.display)
        leaderboardDiv.style.display = "none";
    }
})