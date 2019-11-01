
/* challenge 11
 Given a string return a string where the case has been swapped. For example Abba Is Cool becomes aBBA iS cOOL
*/

//vars
let string = "Hello theRe"


const swap = (string) =>{
    string = string.trim();
    words = string.split(" ")

    //nested for loop that checks every letter, if its capital then change it to lower case and vise versa
    for(i=0;i<words.length;i++){
        let letters = words[i].split("")
        for(x=0;x<letters.length;x++){
            if(letters[x] == letters[x].toUpperCase()){
                letters[x] = letters[x].toLowerCase();
            }else{
                letters[x] = letters[x].toUpperCase();
            }
        }
        words[i] = letters.join("");
    }

    return words.join(" ");
}

console.log(swap(string));
