const express = require("express");
const app = express();


app.use("/static", express.static("public"));
app.use("/another", express.static("public/another.html"));
app.use("/home", express.static("public/home.html"));

app.listen(5001, () => {
    console.log("Server is running on port 5001");
});

