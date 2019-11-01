
/* challenge 8
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 
letters used in total. 
If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used? 
Do not count hyphens or spaces but remember the word and is used in British English i.e Three Hundred and forty 
(and this should be counted)
*/

//variables
ArrayOfWords = []
numberOfWords = 6;
total = 0;


numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen","sixteen","seventeen", "eighteen","nineteen"];
tens = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];


//loops and adds random word into array the specified number of times
for(i=0;i<numberOfWords;i++){
    let rndNum = (Math.floor(Math.random() * 1000))+1;
    tempNum = "";
    //if number is 1000 then print one thousand as that was the largest number possible
    if(rndNum == 1000){
        tempNum += "one thousand";
    }
    //if number is over 100 then see how many hundres there are and then minus that from the original number and add the 
    //written numbers to the array e.g. 5 hundreds will put "five" and "hundred" into the array
    if(rndNum >= 100){
        firstDigit = Number(rndNum.toString().split("")[0]);
        tempNum += numbers[(firstDigit-1)] + " hundred ";
        rndNum -= firstDigit * 100;
        if(rndNum > 0){
            tempNum += "and ";
        }
    }
    if(rndNum > 19){
        firstDigit = Number(rndNum.toString().split("")[0]);
        tempNum +=  tens[firstDigit-2] + " ";
        rndNum -= firstDigit * 10;
    }
    if(rndNum > 0){
        tempNum += numbers[rndNum-1];
    }

    ArrayOfWords.push(tempNum.trim());
}

//gets total number of characters
for(i=0;i<ArrayOfWords.length;i++){
    total += (ArrayOfWords[i].replace(/\s+/g, "").split("").length);
}


console.log(ArrayOfWords);
console.log(total);
