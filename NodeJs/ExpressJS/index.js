const express = require('express');
const app = express();
//yha express ek function hai and app is an object
// console.dir(app);
let port = 3000;
app.listen(port, () => {
    console.log("app is listening on port", port);
}) ,
// app.use((req, res) => {
//     console.log("request has been received");
//     // res.send("this is first response recieved by express");
//     const fal = `
//     <h1>Fruits name</h1>
//         <ul>
//           <li>Apple</li>
//           <li>Banana</li>
//           <li>Mango</li>
//         </ul>`;

//     res.send(
//         //{ apple:"red",
//         // banana:"yellow",}
//         fal)
// })
app.get("/", (req, res) => {
    res.send("I am root directory");
});
app.get("/application", (req, res) => {
    res.send("you try to contacted with application directory");
});
app.get("/lib", (req, res) => {
    res.send("you try to contacted with lib directory");
});
app.get("/:username/:id", (req, res) => {
    const { username, id } = req.params;   // 👈 params nikaale
    console.log("My new params", req.params);
    res.send(`You tried to contact with @${username}, id = ${id}`);
});
app.get("/search", (req, res) => {
    // console.log(req)
    console.log(req.query); // { q: 'frtyuiop', color: 'reddish black' }
    res.send(`no result, color: ${req.query.color}`);
});
// req.query yha ye ek object hai.असल में Node.js/Express  में req.query एक object होता है जिसमें सारे query parameters आते हैं।


