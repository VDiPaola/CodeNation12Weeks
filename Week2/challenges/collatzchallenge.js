let lengths = [];
let numbers = [];
let amount = 1000000;



const collatz = (number) =>{
    //reset numbers array
    numbers = [];
    numbers.push(number);
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
        numbers.push(number);
    }
    //push length of array into lengths array
    lengths.push(numbers.length);

    //maxes.push(Math.max(...lengths) + " " + lengths.indexOf(Math.max(...lengths)));
}
collatz(13)

console.log(lengths);