//get users name
let name = prompt("what is your name adventurer?");
alert("hello " + name + ", what a great name!");

//vars
choices = "(type a choice: attack, run, search)";
directions = "(type a direction: left, right, straight)";
let choice = 0;
let fix = true;

//odds variable that changes throughout the game depending on your choices (higher = worse)
let odds = 5;

//death function
function death(){
    fix = false;
    location.reload();
}


//FIRST CHOICE
choice = prompt("You travel to an abandoned mine, for adventuring reasons. Standing in the doorway is a giant shadow that you cant make out, how do you proceed?" + choices);
choice = choice.toLowerCase();

if(choice == "run"){
    alert("Your trembling legs cause you to trip, instant death.");
    death();
}else if(choice == "attack"){
    alert("Hungry for blood you charge in swinging, the shadow belonged to a cute puppy that you turned into a pool of blood. not cool.")
    odds++;
}else if(choice == "search"){
    alert("you take a closer look and realise its just a small puppy, nothing to worry about.");
}else{
    alert("by sheer incompetence to type in a correct response, you ignore the shadow completely...")
}


//SECOND CHOICE
choice = prompt("you wonder down the mine eager for adventure when you realise you have seen that specific rock before, this mine was strangely laid out like a maze. which direction do you want to go in? " + directions);

//maze which decides if you get out depending on the odds variable, if you dont get out within 15 you die.
let notEscaped = true;
let count = 0;
while(notEscaped){
    let rndNum = Math.floor(Math.random() * odds);
    if(count == 15){
        alert("After failing to escape the maze you do the only thing possible, die of dehydration.");
        death();
        break;
    }
    if(rndNum == 1){
        alert("You finally see something different, a crack in the walls with smoke and red light searing out, naturally you enter.");
        notEscaped = false;
    }else{
        choice = prompt("You find yourself back at the same spot, where would you like to go now? " + directions);
    }
    count++;
}

//THIRD CHOICE
//make sure they make one of the choices
let forcedChoice = true;
while(forcedChoice && fix){
    choice = prompt("You are engulfed in mist and can hear the faint sound of screams in all directions, your adventurer senses tell you something is off about the situation. How do you proceed? (type a choice: leave, enter)");
    choice = choice.toLowerCase();
    forcedChoice = false;
    if(choice == "leave"){
        alert("you decide adventuring isnt for you, you turn around and have a long happy life");
        death()
        break;
    }else if(choice == "enter"){
        alert("For some reason you decide to enter the unknown territory that is very obviously hell")
    }else{
        alert("seriously just type 'enter' or 'leave'"  )
        forcedChoice = true;
    }
}

//FOURTH CHOICE
{

let forcedChoice = true;
while(forcedChoice && fix){
    choice = prompt("You dive deeper into hell to discover the devil laughing menacingly while torturing a young boy. His gaze turns to you and his face drops, he stands there tall on his goat legs, his rugged horns and blood red skin make it clear whos presence you are in. how do you proceed? (type a choice: attack, embrace, run)" );
    choice = choice.toLowerCase();
    forcedChoice = false;

    if(choice == "run"){
        alert("After coming all this way you decide that its enough adventure for one day, you explain this to the devil and politely ask for the way out. You spend eternity being tortured.");
    }else if(choice == "attack"){
        alert("This is just another day for an adventurer like you! you raise your sword and charge the devil. One quick slash is all it took...for you to die.");
    }else if(choice == "embrace"){
        alert("The morally questionable adventurer gives the devil a hug, the devils cold heart is warmed by your actions. You spend eternity co-ruling over hell with 4 demon children. congrats?")
    }else{
        forcedChoice = true;
    }
}

}