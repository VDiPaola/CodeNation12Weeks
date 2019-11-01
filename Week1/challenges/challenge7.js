
/* challenge 7
Create a function that returns True or False based on if a number inputted into it, is prime or not 
*/
///vars
let number = 33;

const isPrime = (number) =>{
    //if number is even return false
    if(number % 2 == 0){
        return false;
    }else{
        let prime = true
        //loops from 3 and adds 2 so its only odd numbers and sees if any of them can divide into the number, if it does
        //then its not prime
        for(i=3;i<number;i+=2){
            if(number % i == 0){
                prime = false;
            }
        }
        if(prime){
            return true;
        }else{
            return false;
        }

    }

}

console.log(isPrime(number));
