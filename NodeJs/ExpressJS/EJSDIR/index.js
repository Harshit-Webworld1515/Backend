const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs");
app.get("/", (req, res) => {
res.render("home", { 
    harshit: "harshit",
    students: ["Harshit", "Aman", "Rohit"]
});
}); 

app.get("/about/:username", (req, res) => {
    const { username } = req.params;
    const profile=require("./data.json");
    // console.log(profile[username]);          
    res.render("about.ejs", {  profile, username });
}); 

app.get("/rolldice", (req, res) => {
    const guess = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice", { diceValue: guess});
});
app.get("/instagram/home/:username", (req, res) => {
    const { username } = req.params;
    res.render("instagram.ejs", { username });
});
app.get("/instagram/home", (req, res) => {
    res.render("instahome.ejs");
})

app.get("/lib", (req, res) => {
    res.send("Hello World! from ExpressJS library route");
});