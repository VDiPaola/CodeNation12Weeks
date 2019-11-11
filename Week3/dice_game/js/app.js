let button = document.getElementById("start");
let button2 = document.getElementById("roll");
let img = document.getElementById("dice");

const pink = ()=>{
    button.style.backgroundColor = "pink";
}

button.addEventListener("click", pink);

button2.addEventListener("click", roll);

function roll(){
    let rndNum = Math.ceil(Math.random() *6);
    console.log(rndNum);
    img.src = "img/"+ rndNum + ".png";
}