/*
Challenge 4:
You will set an array containing a number of colours for example [“red”,”blue”,”blue”,”red”]These represent coloured gloves 
in a drawer. Create a function called getPairs that takes in this array and returns the number of possible pairs of gloves. 
(A pair is two gloves of the same colour) 
*/

//array of colours
let colours = ["red","blue","red","yellow","blue","blue","green","yellow"]

const getPairs = (array) => {
    let pairs = 0;

    //nested for loop to check for pairs then 'removes' them from the array
    array.forEach(function(item, index){
        array.forEach(function(item2, index2){
            if(index != index2){
                if(item == item2 && item != ""){
                    array[index] = "";
                    array[index2] = "";
                    pairs++;
                }
            }
        });
    });

    return pairs;
}
console.log(getPairs(colours))
