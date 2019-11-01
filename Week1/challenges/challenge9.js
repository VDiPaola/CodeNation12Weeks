/* challenge 9
Given a string rearrange the letters into alphabetical order.  'Abba is cool' becomes Aabbciloos
*/
//vars
let string = "dcabaABE";

const alphaArrange = (string) =>{
    //replace spaces with nothing
    string = string.replace(" ", "");
    //array of letters
    stringArray = string.split("");
    let didSwitch = true
    //while loop that stops when no letters switched places
    while (didSwitch){
        didSwitch = false;
        string = stringArray.join("");
        //loops through letters and if one char code is less than the next letter it switches places
        for(i=0;i<stringArray.length;i++){
            if(string[i+1] && string.charCodeAt(i) > string.charCodeAt(i+1)){
                console.log(stringArray[i] + " " + stringArray[i+1])
                let temp = stringArray[i];
                stringArray[i] = stringArray[i+1];
                stringArray[i+1] = temp;
                didSwitch = true;
            }
        }
    }
    console.log(stringArray.join(""));
}

alphaArrange(string);


