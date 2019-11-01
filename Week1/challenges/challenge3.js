//challenge 3


/*
3 - Create a function called softwareUpdate that takes a string of a version number and returns the next version. 
For example 1.3.2 becomes 1.3.3 However only the first number can be greater then 10 so 1.4.9 becomes 1.5.0
*/

let softwareVersion = "1.9.9";
//split string into array
softwareVersion = softwareVersion.split(".").reverse();

//loop through numbers in array
function softwareUpdate(softwareVersion){

    for(i=0;i<softwareVersion.length;i++){

        if(softwareVersion[i] >= 9){
            if(softwareVersion[i+1]){
                //if number exists in array add 1 to it
                softwareVersion[i+1] = Number(softwareVersion [i+1]) + 1;
            }else{
                //if number doesnt exist add a 1 to the array
                softwareVersion.push("1");
            }
            softwareVersion[i] = "0";
        }else if(i == 0){
            softwareVersion[i] = Number(softwareVersion[i]) + 1;
            break;
        }
    }
    return softwareVersion.reverse().join(".");
}


console.log(softwareUpdate(softwareVersion));