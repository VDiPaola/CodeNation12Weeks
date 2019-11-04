
for(i=0;i<seagullImages.length;i++){
    document.getElementsByTagName("body")[0].innerHTML += "<img id='image' src=" + seagullImages[i] + ">";
}

let images = document.getElementsByTagName("img");
for(i=0;i<images.length;i++){
    images[i].addEventListener("click", (event)=>{
        event.target.src = "images/angry.jpg";
    })
}