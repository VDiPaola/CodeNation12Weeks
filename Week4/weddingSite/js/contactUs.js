let name = document.getElementById("name");
let email = document.getElementById("email");

//functions for form inputs so it removes/adds the default text
function focusIn(tag, msg){
    if(msg == tag){
        if(tag.toLowerCase() == "name"){
            name.value = "";
        }else{
            email.value = "";
        }
    }
}
function focusOut(tag, msg){
    if(msg == ""){
        if(tag.toLowerCase() == "name"){
            name.value = tag;
        }else{
            email.value = tag;
        }
    }
}

let button = document.getElementById("submit");

button.addEventListener("click", function(){
    let nameText = name.value;
    let tabs = "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
    alert(`${tabs}Thank you ${nameText}\n${tabs}message sent!`);
})