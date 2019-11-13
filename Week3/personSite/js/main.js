//github button goes to my github page
document.getElementById("img1").addEventListener("click", function(){
    window.location = "https://github.com/VDiPaola";
});

let buttons = document.getElementById("links").children;

for(var i=0;i<buttons.length;i++){
    buttons[i].dataset.hovering="false";
    buttons[i].addEventListener("mouseover", hover);
    buttons[i].addEventListener("mouseout", hoverOff);

    setTimeout(() => {
        buttons[i].style.color = "red";
    }, i * 500 + 2000);
}



let seconds = 1;
let border = "1px solid white";
let currSide = "";
//when hover on run animation
async function hover(e){
    e.target.hovering = "true";
    while(e.target.hovering == "true"){
        if(currSide == "top"){
            e.target.style.borderRight = border;
            currSide = "right";
        }else if(currSide == "right"){
            e.target.style.borderBottom = border;
            currSide = "bottom";
        }else if(currSide == "bottom"){
            e.target.style.borderLeft = border;
            currSide = "left";
        }else if(currSide == "left"){
            e.target.style.borderTop = border;
            currSide = "top";
        }else{
            e.target.style.borderTop = border;
            currSide = "top";
        }
        
        await timer(seconds);
        e.target.style.border = "none";
    }
}
//when you hover off a link changes variable
function hoverOff(e){
    e.target.hovering = "false";
    e.target.style.border = "none";
}

//waits x amount of seconds before carrying on the async function
function timer(seconds){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            resolve();
        }, seconds * 1000);
    });
}