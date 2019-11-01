
// challenge 5 - Create a function that reverses every other word in a string  


function reverse(word){
    //split string into array of words
    words = word.split(" ");
    //go through each word
    for(i=1;i<words.length;i+=2){
        //reverses word
        words[i] = words[i].split("").reverse().join("");
    }

    return words.join(" ");
}


let string = "hello there this is a string";

console.log(reverse(string));