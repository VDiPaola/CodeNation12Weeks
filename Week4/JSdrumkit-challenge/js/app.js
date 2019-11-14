
// Play drum by keyboard press
document.addEventListener("keydown",function(e){
    if(e.keyCode == 87){
        playSound("boom");
    }else if(e.keyCode == 69){
        playSound("clap");
    }else if(e.keyCode == 82){
        playSound("hihat");
    }else if(e.keyCode == 84){
        playSound("kick");
    }else if(e.keyCode == 89){
        playSound("openhat");
    }else if(e.keyCode == 85){
        playSound("ride");
    }else if(e.keyCode == 73){
        playSound("snare");
    }else if(e.keyCode == 79){
        playSound("tink");
    }else if(e.keyCode == 80){
        playSound("tom");
    }
})

// Play music by mouse click
let buttons = document.getElementsByClassName("button");

for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        //gets name of sound from button
        let name = this.innerHTML.split("(")[0];
        playSound(name)
    })
}


//function to play sound
function playSound(soundName){
    let audio = new Audio("../sounds/" + soundName + ".wav");
    audio.play();
}