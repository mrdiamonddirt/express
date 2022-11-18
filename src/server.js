const express = require("express");
const app = express();
const path = require("path");

app.use('/static', express.static('public')) 
app.use('/home', express.static('public/home.html')) 
app.use('/another', express.static('public/another.html')) 


app.listen(5001, () => {
    console.log("Listening on Port 5001")
});