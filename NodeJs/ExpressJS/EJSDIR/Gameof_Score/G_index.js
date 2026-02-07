const express = require("express");
const app = express();
const path = require("path");   
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs");  
app.get("/", (req, res) => {
    res.send("Hello World! from ExpressJS home route");
})
app.get("/game/:player", (req, res) => {
    const { player } = req.params;
    res.render("Match.ejs", { player });
});