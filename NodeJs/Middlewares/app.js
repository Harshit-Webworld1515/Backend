const express = require("express");
const app = express();

//our first middleware
app.use((req, res, next) => {
    let { query } = req.query;
    // console.log(query);
    console.log("This is our first middleware");
    next(); // Call the next middleware in the stack
});

app.use((req, res, next) => {
    console.log("This is our second middleware");
    // logger middleware
    // console.log(req);
    req.time = new Date(Date.now()).toString();//manupulate the request object by adding a new property time to it
    console.log(`method - ${req.method} url - ${req.url} hostname - ${req.hostname} time - ${req.time}`);
    next(); // Call the next middleware in the stack
});

//exploring app.use() for specific path 
// if we specify a path then it will only work for that path or its subpaths and not for other paths
app.use("/random",(req,res,next)=>{
    console.log("This will only work on /random path");
    next();
})
let checkToken=("/api",(req,res,next)=>{
    let { token } = req.query;
    if(token !== "dhurandhar"){
        return res.status(401).send("UNAUTHORIZED! ACCESS DENIED");
    }
    console.log("This will only work on /api path");
    next();
})
// if / root path passed, it will work for all the paths because all the paths start with /, but if we use /random then it will only work for /random path and not for other paths like /about or /contact

app.get("/random", (req, res) => {
    res.send("Welcome to the random page!");
})

app.get("/api",checkToken, (req, res) => {
    res.send("Welcome to the API page!");
})

app.get("/", (req, res) => {
    res.send("Hello, World! from the root directory");
})

//exploring app.use() for 404 error handling
app.use((req, res) => {
    res.status(404).send("404 Page not found");
})

app.listen(8080, () => {
    console.log("server listening to port 8080");
})