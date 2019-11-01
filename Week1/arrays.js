/*
numbers = [1,2,3,4,5,6,7,8,9]

const timesTwo = (a) => {
    return a*2;
}

map = numbers.map(timesTwo)


console.log(map);

map2 = numbers.filter(num => {return num>3;})

console.log(map2)

addUp = numbers.reduce((a,b) => a+b)

console.log(addUp)

*/

//challenge

array = [1,1,-1,-1,1,-1,1]


chips = array.filter(num => num < 0).length

seagulls = array.filter(num => num > 0).length

if(chips < seagulls){
    console.log(true);
}else{
    console.log(false);
}



