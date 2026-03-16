const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

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
// if we specify a path then it will only work for that path or its subpaths and not for other paths like http://localhost:8080/random/abc
app.use("/random", (req, res, next) => {
    console.log("This will only work on /random path");
    next();
})
//This is also a middleware for /api path
let checkToken = ("/api", (req, res, next) => {
    let { token } = req.query;
    if (token !== "dhurandhar") {
        throw new ExpressError("Invalid token given by the user", 401);
    }
    console.log("This will only work on /api path");
    next();
})
// if / root path passed, it will work for all the paths because all the paths start with /, but if we use /random then it will only work for /random path and its subpaths like /random/abc

app.get("/random", (req, res) => {
    res.send("Welcome to the random page!");
})

app.get("/api", checkToken, (req, res) => {
    console.log("This is our API route");
    res.send("Welcome to the API page!");
})

app.get("/", (req, res) => {
    res.send("Hello, World! from the root directory");
})
app.get("/err", (req, res) => {
    abc=abc; // this will throw an error because abc is not defined
    res.send("This will not be executed because of the error");
})
app.use((err, req, res, next) => {
    console.log("Error1: Something went wrong!");
    next(err); // Call the next error handler middleware in the stack
});
app.use((err, req, res, next) => {
    console.log("Error2: Something went wrong!" + err.message);
    next(err); // Call the next error handler middleware in the stack
    res.send(err.message);
});


//exploring app.use() for 404 error handling
// app.use((req, res) => {
//     res.status(404).send("404 Page not found");
// })

app.listen(8080, () => {
    console.log("server listening to port 8080");
})