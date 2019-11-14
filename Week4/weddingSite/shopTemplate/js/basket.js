
//let itemTemplate = "<div class='itemDiv'><h2 class='itemTitle'>NAME</h2><img class='itemImage' src='URL' alt='description of image'><h3 class='itemAmountText'>amount:</h3><input type='number' class ='itemAmount' min='1' max='50'><input type='button' value='Add to basket' class='itemAdd'></div>";
let basketContainer = document.getElementById("basketContainer");
//html template for basket item
let basketTemplate = "<div class='itemDiv'><p class='itemTitle'>NAME</p><img class='itemImage' src='URL' alt='description of image'><p class='itemAmountText'>AMOUNT</p><div class='itemRemove'></div></div>";

//adds all items into basket
for(i=0;i<basketArray.length;i++){
    let temp = basketTemplate.replace("NAME", basketArray[i].name);
    temp = temp.replace("AMOUNT", "Amount: " + basketArray[i].amount);
    temp = temp.replace("URL", basketArray[i].url);
    basketContainer.innerHTML += temp;
    basketContainer.children[basketContainer.children.length-1].dataset.cookieIndex = basketArray[i].cookieIndex;
    console.log(basketArray)
}

//when remove button is pressed
let removeButtons = document.getElementsByClassName("itemRemove");
for(i=0;i<removeButtons.length;i++){
    removeButtons[i].addEventListener("click", removeItem)
}

function removeItem(e){
    //DOESNT REMOVE FROM COOKIES OR ARRAY 
    //remove from cookie
    let cookies = document.cookie.split(";");
    let index = this.parentElement.dataset.cookieIndex;

    console.log(this.parentElement)

    for(i=0;i<cookies.length;i++){
        let num = cookies[i].split("=")[0];
        if(num == index){
            console.log("deleting cookie")
            delete_cookie(num);
            break;
        }
    }

    //remove from array
    
    for(i=0;i<basketArray.length;i++){
        if(basketArray[i].cookieIndex == index){
            console.log("deleting from array")
            basketArray.splice(i, 1);
            break;
        }
    }


    //removes from html
    let div = this.parentElement.parentElement;
    div.removeChild(this.parentElement);


    console.log(document.cookie)
    console.log(basketArray)
 
}


//deletes cookie
function delete_cookie( name ) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }