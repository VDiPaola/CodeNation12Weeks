let basketArray = [
    // {
    //     name: "white ring",
    //     amount: 7,
    //     url: "https://www.candere.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/0/c006367_1_2.jpg"
    // }
];



//loads array from cookies
let cookies = document.cookie.split(";");

for(i=0;i<cookies.length;i++){
    let values = cookies[i].split("=");
    let cookie = values[0]

    values = values[1].split(",")
    let name = values[0];
    let amount = values[1];
    let url = values[2];
    
    let tempObject = {
        name: name,
        amount: amount,
        url: url,
        cookieIndex: cookie
    };

    basketArray.push(tempObject);
}