let button = document.getElementById("add");
let textBox = document.getElementById("input");
let ul = document.getElementById("todo");

let itemTemplate = "<li>TEXT</li>"

const addItem = ()=>{
    
    let liItem = document.createElement("li");
    liItem.innerHTML = textBox.value;
    ul.appendChild(liItem);

    /* other way
    let item = itemTemplate.replace("TEXT", textBox.value);
    ul.innerHTML += item;
    */

    textBox.value = "";
    textBox.focus();
}

button.addEventListener("click", addItem)
input.addEventListener("keyup", function(event) {
    //pressing enter key
    if (event.keyCode === 13) {
      addItem();
    }
  });