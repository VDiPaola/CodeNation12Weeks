/* challenge 6
Nugget Sums. Nuggets come in boxes of 4, 6, 12 and 20. Write a function that takes in a number and returns the 
number of boxes (and types of boxes) so 12 could be 12 or 4 , 4 and 4 
*/

//variables
let number = 5;
let boxes = [4, 6, 12, 20]

const nugGenerator = (number) => {
    //empty array
    let nugSelection = [];
    for(i=0;i<number;i++){
        //get random number
        let randomNum = Math.floor(Math.random() * boxes.length);
        //put random box into array
        nugSelection.push(boxes[randomNum]);
    }
    //return array
    return nugSelection;
}

console.log(nugGenerator(number));