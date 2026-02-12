const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
app.use(express.urlencoded({ extended: true }));
app.get('/register', (req, res) => {
    let { naam, passcode } = req.query;
    console.log(req.query);
    console.log(`Username: ${naam}, Password: ${passcode}`);
    res.send(`Registration page by get request of username: @${naam} and @password: ${passcode}`);
});

app.post('/register', (req, res) => {
    let { username, password } = req.body;
    console.log(req.body);
    res.send(`${username}'s Form submitted successfully with password: ${password}  by post request`);
});