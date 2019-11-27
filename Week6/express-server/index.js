const express = require("express");
const app = express();
const path = require('path')

app.listen(3000, function(){
    console.log("listening");
})

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/test.html', function (req, res) {
    res.send("sent from server")
})


app.use(express.static(path.join(__dirname, 'public')));
