
// /*
// Write a function that takes in a word and encodes it based on the fact that
// a = 1 , b = 2, c = 3 etc
// So Abba should return 1221
// */

// alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// word = "abba";


// wordArr = word.toUpperCase().split("");

// finalArr = [];

// for(i = 0; i < wordArr.length;i++){
//     finalArr.push(alphabet.indexOf(wordArr[i]) + 1)
// }


// // console.log(wordArr)
// // console.log(finalArr.join(""));



// /*
// Write a function that takes in an interger and dispalys the times table for that number up to 10
// For example 2 should return
// 2 , 4 , 6, 8, 10. 12. 14. 16, 18, 20
// */

// number = 10;

// function timesTable(number){
//     table = [];
//     for(i=1;i<=10;i++){
//         table.push(number * i);
//     }
//     return table;
// }

// //console.log(timesTable(number));

/*
BONUS - 5! is the same a 5 * 4 * 3 * 2 * 1 so is 120
Write ONE function that takes in a number and returns the factor
*/

let number = 5;

function factorial(number){
    if(number == 0){
        return 1;
    }else{
        return number * factorial(number-1);
    }
}

console.log(factorial(8))