/* challenge 15
There are three piles of chips represented as a three integer array. For example [3,4,4]. 
Each pile can have between 1 and 20 chips. Two seagulls play a game they are called Fluffers and Fred. 
They take turns to remove between 1 and 3 chips from ANY one pile.
The Seagull that takes the last chip in the game LOSES. Simulate a game between the two seagulls.
*/

//variables
let chips = [];
let fredsTurn = true;

//for loop to create the array of chips
for(i=0;i<3;i++){
    let rndNum = (Math.floor(Math.random() * 20) + 1);
    chips.push(rndNum);
}

//while theres still chips left
while(chips[0] > 0 || chips[1] > 0 || chips[2] > 0){
    //randomly get amount of chips and which pile
    let amountOfChips = (Math.floor(Math.random() * 3) + 1);
    let pileSelect = (Math.floor(Math.random() * 3));
    //while the pile is empty pick a different random one
    while(chips[pileSelect] <= 0){
        pileSelect = (Math.floor(Math.random() * 3));
    }

    //pick name depending on whos turn it is
    let seagullName = "Fred";
    if(!fredsTurn){
        seagullName = "Fluffers";
    }

    //remove random number from the pile
    chips[pileSelect] -= amountOfChips;
    if(chips[pileSelect] < 0){
        chips[pileSelect] = 0;
    }

    console.log(seagullName + " takes " + amountOfChips + " chips from pile " + (pileSelect+1));
    console.log("chips in each pile: " + chips);


    fredsTurn = !fredsTurn;
}

let name = "Fred";
if(!fredsTurn){
    name = "Fluffers";
}

console.log(name + " wins");