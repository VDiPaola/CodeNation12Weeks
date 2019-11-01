//challenge 2

/*
Create a function that takes in an array of numbers (Ints) and a target number. Check to see if any 
two numbers in the array can be added together to make the target number. Return the indexes of these numbers
*/

//variables
let numbers = [4,8,12,6,9,32,12];
let target = 20;


const doesItSum = (numbers, target) =>{

    //nested for loop that checks if any of the elements can make the target number
    numbers.forEach(function(item, index){
        numbers.forEach(function(item2, index2){
            if(index != index2){
                if(item + item2 == target){
                    console.log([index, index2])
                }
            }
        });
    });

}


doesItSum(numbers, target);