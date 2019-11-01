//challenge 1

//array of fruit
array = ["apple", "banna", "pear", "orange", "carrot"];
//empty array for final output
selectedItems = [];
//number of fruit to randomly select
let num = 3; 

for(i=0;i<num;i++){
    //every loop pick random number from 0 to array length then put random fruit in final array
    rndNum = Math.floor(Math.random() * array.length);
    selectedItems.push(array[rndNum]);

    //remove the selected item from original array so it cant be re-selected
    array.splice(rndNum, 1);
}

//output final array
console.log(selectedItems);
