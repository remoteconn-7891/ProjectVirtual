const express = require('express');
const app = express();
const connsql = require('mysql2')

const port = 3060;

// Connecting to MySQL database
const connection = connsql.createConnection({

    host: '127.0.0.1',
    user: 'root',
    password: 'VirtualDB@87',
    database: 'virtual_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Database connection successful");
});

app.get('/', (req, res) => {
    connsql.query('select 10 as randomNumber', (err, result, fields) => {
        console.log(result)
        res.end();
})


//Router for user registering an account with middleware
app.post('/register', (req, res) => {
    
    res.status(200).send('Successfully created an account') 
        
    }

);

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

// server is listening on port 3060
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
})})
