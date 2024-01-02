const express = require('express');
const mysql = require('mysql')
const app = express();

const port = 3060;

// Connect to MySQL database
const sqlconn = mysql.createConnection({
    email: "localhost",
    password: "Password!1",
    name: "Corey James",
    database: "Virtual-DB"
});

sqlconn.connect((err) => {
    if (err) throw err;
    console.log("Database connection successful");
});

//Router for user registering an account with middleware
app.post('/register', (req, res) => {
    
    res.status(200).send('Successfully created an account')

});

// Router (API) for login in Express.js using HTTP Req & Res (POST)
app.post('/login', (req, res) => {

    const email = 'example@email.com'
    const password = 'Password123!'
    
    if(!email) res.status(401).send('Invalid email')
    if(!password) res.status(401).send('Invalid password')
    res.status(200).send('Successful login')
});

// Router for logging out user
app.post('/logout', (req, res) => {
    res.status(200).send('Successfully logged out')
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
})
