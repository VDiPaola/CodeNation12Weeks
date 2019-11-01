
//arrays
arrayOfZeros = [];
lenOfArray = 15;

primeNums  = [2];


//adds zeros to array
for(i=0;i<lenOfArray;i++){
    arrayOfZeros.push(0);
}

//get prime numbers depending on how long arrays are
let iteration = 3;
while(primeNums.length != arrayOfZeros.length){
    prime = true;

    for(x=3;x<iteration ;x+=2){
        if(iteration  % x == 0){
            prime = false;
            break;
        }
    }
    if(prime){
        primeNums.push(iteration);
    }

    iteration +=2;
}

//change zeros to prime number and output arrays
for(i=0;i < arrayOfZeros.length;i++){
    tempArray = arrayOfZeros.slice();
    tempArray[i] = primeNums[i];
    console.log(tempArray);
}


