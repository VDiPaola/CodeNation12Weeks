//method 1
function isPrime (number) {
    if (number !== 2 && number !== 3 && number !== 5 && number % 2 === 0 || number % 3 === 0 || number % 5 === 0) {
        return number + ' is not a prime number.'
    }
    return number + ' is a prime number.'
}
console.log(isPrime(96));
