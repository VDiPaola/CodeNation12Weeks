/*
even = n/2
odd = 3*n + 1
*/

//vars
let total = 0;
let totalNums = [];
let amount = 1000000;
let lengths = [];

let maxes = [];

const collatz = (number) =>{
    //reset total
    total = 1;
    let originalNum = number;
    //while positive
    while(number > 1){
        if(number % 2 == 0){
            //even
            number = number/2;
        }else{
            //odd
            number = (number *3) + 1;
        }
        //push number into array
        total++;
    }
    //push length of array into lengths array
    if(lengths[0]){
        let temp = lengths[0].split(" ")
        temp = temp[0];
        if(temp < total){
            lengths[0] = total + " " + originalNum;
        }
    }else{
        lengths[0] = total + " " + originalNum;
    }
    

    //maxes.push(Math.max(...lengths) + " " + lengths.indexOf(Math.max(...lengths)));
}

//get multiples of a number
let multiples = 3;
for(i=multiples;i<amount;i+=multiples){
    totalNums.push(i);
}
/* highest output: 
 3:
 [ '509 626331' ]
*/

//put numbers in array
// for(i=amount-10000;i<amount;i++){
//     totalNums.push(i);
// }

//go through each number
for(i=0;i<totalNums.length;i++){
    console.log(totalNums[i]);
    collatz(totalNums[i]);
}

console.log(lengths);
