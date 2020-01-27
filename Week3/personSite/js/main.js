//github button goes to my github page
document.getElementById("img1").addEventListener("click", function(){
    window.location = "https://github.com/VDiPaola";
});

document.getElementById("img2").addEventListener("click", function(){
    window.location = "https://www.linkedin.com/in/vincenzodipaoladeveloper/";
});

let buttons = document.getElementById("links").children;

for(i=0;i<buttons.length;i++){
    textColour(i);

}

//function to change text colour
let colours = ["#F9B3D1", "#89259F", "#ED254E","#87CBAC","white"]
function textColour(i){
    setTimeout(() => {
        buttons[i].style.color = "#8a8a8a";
    }, i * 500 + 2000);
}

let hovered = false;
document.getElementById("name").addEventListener("mouseover", function(){
    hovered = true;
    document.getElementById("underline").style.width = "30%";
    document.getElementById("underline").style.left = "35%";
})
document.getElementById("name").addEventListener("mouseout", function(){
    hovered = false;
    document.getElementById("underline").style.width = "0%";
    document.getElementById("underline").style.left = "100%";
    setTimeout(() => {
        if(!hovered){
            document.getElementById("underline").style.left = "0%";
        }
    }, 400);
})

//when hover on run animation
// async function hover(e){
//     let seconds = 1;
//     let border = "1px solid white";
//     let currSide = "";
//     e.target.hovering = "true";
//     while(e.target.hovering == "true"){
//         if(currSide == "top"){
//             e.target.style.borderRight = border;
//             currSide = "right";
//         }else if(currSide == "right"){
//             e.target.style.borderBottom = border;
//             currSide = "bottom";
//         }else if(currSide == "bottom"){
//             e.target.style.borderLeft = border;
//             currSide = "left";
//         }else if(currSide == "left"){
//             e.target.style.borderTop = border;
//             currSide = "top";
//         }else{
//             e.target.style.borderTop = border;
//             currSide = "top";
//         }
        
//         await timer(seconds);
//         e.target.style.border = "none";
//     }
// }
// //when you hover off a link changes variable
// function hoverOff(e){
//     e.target.hovering = "false";
//     e.target.style.border = "none";
// }

// //waits x amount of seconds before carrying on the async function
// function timer(seconds){
//     return new Promise((resolve, reject)=>{
//         setTimeout(function(){
//             resolve();
//         }, seconds * 1000);
//     });
// }



//links
document.getElementById('link1').addEventListener('click', function(){
    window.location.pathname = 'projects.html'
})
document.getElementById('link2').addEventListener('click', function(){
    window.location.pathname = 'cv.html'
})
document.getElementById('link3').addEventListener('click', function(){
    window.location.pathname = 'contact.html'
})
document.getElementById('link4').addEventListener('click', function(){
    window.location.pathname = 'aboutme.html'
})