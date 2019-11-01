//gets elements with the class name box
let boxes = document.getElementsByClassName("box");

let counter = 0;
let playersTurn = true;

//adds event listener to each box
for(i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click", onBoxClick);

    boxes[i].dataset.customVariable = "clicked";
    boxes[i].dataset.clicked = 'false';
}

//when they click the box
function onBoxClick(){
    if(this.dataset.clicked == 'false' && playersTurn){
        this.firstElementChild.innerHTML = "X";
        counter++;
        playersTurn = false;
        this.dataset.clicked = 'true';

        let win = testWin();

        console.log(counter + " : counter")

        if(!win && counter == 5){
            console.log("end0")
            endScreen(true);
        }else{
            realAI();
        }
    }
}


//test win condition
function testWin(){
    //go through each value of p tags to see if a win condition is met

    pArray = []
    for(i=0;i<boxes.length;i++){
        pArray.push(boxes[i].firstElementChild.innerHTML);
    }

    //rows
    if((pArray[0] == "X" || pArray[0] == "O") && pArray[0] == pArray[1] && pArray[0] == pArray[2]){
        console.log('end1')
        endScreen();
        return true;
    }else if((pArray[3] == "X" || pArray[3] == "O") && pArray[3] == pArray[4] && pArray[3] == pArray[5]){
        console.log('end2')
        endScreen();
        return true;
    }else if( (pArray[6] == "X" || pArray[6] == "O") && pArray[6] == pArray[7] && pArray[6] == pArray[8]){
        console.log('end3')
        endScreen();
        return true;
    }

    //colums
    if((pArray[0] == "X" || pArray[0] == "O") && pArray[0] == pArray[3] && pArray[0] == pArray[6]){
        console.log('end4')
        endScreen();
        return true;
    }else if((pArray[1] == "X" || pArray[1] == "O") && pArray[1] == pArray[4] && pArray[1] == pArray[7]){
        console.log('end5')
        endScreen();
        return true;
    }else if( (pArray[2] == "X" || pArray[2] == "O") && pArray[2] == pArray[5] && pArray[2] == pArray[8]){
        console.log('end6')
        endScreen();
        return true;
    }

    //diagonal
    if((pArray[0] == "X" || pArray[0] == "O") && pArray[0] == pArray[4] && pArray[0] == pArray[8]){
        console.log('end7')
        endScreen();
        return true;
    }else if((pArray[2] == "X" || pArray[2] == "O") && pArray[2] == pArray[4] && pArray[2] == pArray[6]){
        console.log('end8')
        endScreen();
        return true;
    }

    return false;
    
}


//end screen
function endScreen(tie){
    let endMessage = "Game ended, it was a tie.";
    if(!tie){
        endMessage = "O wins";
        if(!playersTurn){
            endMessage = "X wins";
        }
    }
    
    location.reload();
}


//AI

//first version just picks random square to choose

function AI(){
    console.log("ai")
    squareFree = false;
    square = 0;
    freeBoxes = [];

    for(i=0;i<boxes.length;i++){
        if (boxes[i].dataset.clicked == 'false'){
            freeBoxes.push(boxes[i]);
        }
    }

    while(!squareFree){
        rndNum = Math.floor(Math.random() * freeBoxes.length)
        if(freeBoxes[rndNum].dataset.clicked == "false"){
            square = rndNum;
            squareFree = true;
        }
    }

    freeBoxes[square].firstElementChild.innerHTML = "O";
    freeBoxes[square].dataset.clicked = "true";

    end = testWin();
    console.log(end)
    if(!end){
        playersTurn = true;
    }

}



//second version with real AI

//if theres 2 of X in a row or column with 1 unclicked square then click that square
//2 in a diagonal with 1 unclicked then click that one
//otherwise click a square on the opposite side of an X
//if no available squares pick a random one

//defining rows, colums and diagonal squares to easily access
let rows = [ [boxes[0], boxes[1],boxes[2] ], [ boxes[3],boxes[4],boxes[5] ] , [ boxes[6], boxes[7], boxes[8] ] ];
let columns = [ [boxes[0],boxes[3],boxes[6] ] , [ boxes[1],boxes[4],boxes[7] ] ,[ boxes[2],boxes[5],boxes[8] ] ];
let diagonals = [ [ boxes[0], boxes[4],boxes[8] ] , [ boxes[2],boxes[4], boxes[6] ] ];
let allSquares = [rows, columns, diagonals];


function realAI(){

    let found = false;

    for(firstIteration=0;firstIteration<allSquares.length;firstIteration++){
        //console.log(firstIteration)
        console.log(allSquares[firstIteration].length)
        for(x=0;x<(allSquares[firstIteration].length);x++){
            if(allSquares[firstIteration][x][0].firstElementChild.innerHTML != "" && allSquares[firstIteration][x][0].firstElementChild.innerHTML == allSquares[firstIteration][x][1].firstElementChild.innerHTML && allSquares[firstIteration][x][2].firstElementChild.innerHTML == ""){
                found = true;
                clickSquare(allSquares[firstIteration][x][2]);
                break;
            }else if(allSquares[firstIteration][x][1].firstElementChild.innerHTML != "" && allSquares[firstIteration][x][1].firstElementChild.innerHTML == allSquares[firstIteration][x][2].firstElementChild.innerHTML && allSquares[firstIteration][x][0].firstElementChild.innerHTML == ""){
                found = true;
                clickSquare(allSquares[firstIteration][x][0]);
                break;
            }else if(allSquares[firstIteration][x][0].firstElementChild.innerHTML != "" && allSquares[firstIteration][x][0].firstElementChild.innerHTML == allSquares[firstIteration][x][2].firstElementChild.innerHTML && allSquares[firstIteration][x][1].firstElementChild.innerHTML == ""){
                found = true;
                clickSquare(allSquares[firstIteration][x][1]);
                break;
            }
        }
        if(found){
            break;
        }
    }

    //if no smart moves to do run the previous ai function that selects a random square
    if(!found){
        AI();
    }


}


//function that clicks the square
function clickSquare(boxToClick){
    boxToClick.firstElementChild.innerHTML = "O";
    boxToClick.dataset.clicked = "true";

    end = testWin();

    if(!end){
        playersTurn = true;
    }

}