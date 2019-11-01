//difference between let and var

function startLet(){
    for(let i = 0; i< 5; i++){
        console.log(i);
    }
    //console.log(i);
}

function startVar(){
    for(var i = 0; i< 5; i++){
        console.log(i);
    }
    console.log(i);
}

console.log("Running with let: ");
startLet();

console.log("Running with var: ");
startVar();
