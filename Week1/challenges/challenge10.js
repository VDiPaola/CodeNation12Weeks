
//challenge 10 -- im too stupid for this one *****************************************************************
/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation: 
1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p). It is possible to make £2 in the following way: 
1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p How many different ways can £2 be made using any number of coins?
*/


//variables
let coins = [1,2,5,10,20,50,100]
coins = coins.reverse()

let finalArray = [];

//go through numbers backwards as you dont need to use a larger number once you have gone through it

function recursive(index){
    let total = 200;
    
    let i = index;
    for(i;i<coins.length;i++){
        let amount =  Math.floor(total / coins[i]);
        console.log("amount: " + amount + " coin: " + coins[i])
        if(amount != 0){
            for(x=0;x<amount;x++){
                finalArray.push(coins[i])
            }
            total -= amount * coins[i]
        }
    }

    if(index != coins.length){
        recursive(index+1)

    }
}

recursive(0)
