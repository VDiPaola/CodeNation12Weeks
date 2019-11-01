/* challenge 14
 Write a function that takes in a word and Mimics (prints out) a Mexican wave. For example: 
 Hello -> Hello, hEllo, heLlo, helLo, hellO
*/

//variables
let string = "mexican";
let array = [];
//make sure text is lower case
string = string.toLowerCase();


const wave = (word) =>{
    let letters = word.split("");
    //nested for loop that sets array[i] to be a capital and adds that to the array then does it for every loop
    for(i=0;i<letters.length;i++){
        letters = word.split("");
        letters[i] = letters[i].toUpperCase();
        array.push(letters.join(""));
    }
    
}

wave(string);
console.log(array)
