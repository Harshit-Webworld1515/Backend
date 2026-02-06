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
res.render("home");
}); 

app.get("/lib", (req, res) => {
    res.send("Hello World! from ExpressJS library route");
});