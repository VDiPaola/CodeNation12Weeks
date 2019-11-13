let addButtons = document.getElementsByClassName("itemAdd");

//adds event to each add item button
for(i=0;i<addButtons.length;i++){
    addButtons[i].addEventListener("click", addItem);
}

function addItem(e){
    //deleteAllCookies();
    //gets div then all the values from the div
    let div = e.target.parentElement;
    let name = div.querySelector(".itemTitle").innerHTML;
    let amount = div.querySelector(".itemAmount").value;
    let url = div.querySelector(".itemImage").src;

    //object with all values in
    let itemObject = {
        name: name,
        amount: amount,
        url: url,
        cookieIndex: basketArray.length
    }
    
    //save object to array
    basketArray.push(itemObject);
    //saves object values in cookie with key of index
    document.cookie = String(basketArray.length-1) + "=" + name + "," + amount + "," + url + ";";
    console.log(basketArray)
    console.log(document.cookie)
    
}


//function that deletes all cookies (yoinked)
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    basketArray = [];
}