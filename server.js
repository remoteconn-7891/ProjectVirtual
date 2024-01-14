const express = require('express');
const mysql = require('mysql2');

const app = express();

function initial () {
    Role.create({
       id: 1,
       name: 'Job seeker' 
    });

    Role.create({
        id: 1,
        name: 'Company' 
     });  

}

// Parse request body of application/json content type
app.use(express.json());

// Parse request body of application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true }));

// Connecting to MySQL database
const connection = mysql.createConnection({

    host: '127.0.0.1',
    user: 'root',
    password: 'Virtualdb@87',
    database: 'sys',
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Database connection successful");
});

const port = 3060;

// Router (API) for login in Express.js using HTTP Req & Res (POST)
app.post('/login', (req, res) => {

    const email = 'example@email.com'
    const password = 'Password123!'
    
    if(!email) res.status(401).send('Invalid email')
    if(!password) res.status(401).send('Invalid password')
    res.status(200).send('Successful login')
});

// Route for navigating to the profile pages
app.get('/profile', (req, res) => {
    res.status(200).send('Create a profile')
});

// Router for logging out user
app.post('/logout', (req, res) => {
    res.status(200).send('Successfully logged out')
    
});

// server is listening on port 3060
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
})
