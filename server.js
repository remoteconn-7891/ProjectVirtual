const express = require('express');
const app = express();
const sqlconn = require('mysql2');

const port = 3060;

// Connecting to MySQL database
const connection = sqlconn.createConnection({

    host: '127.0.0.1',
    user: 'root',
    password: 'VirtualDB@87',
    database: 'virtual_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Database connection successful");
});


//Router for user registering an account with middleware
app.post('/register', (req, res) => {
    const {email, password, passwordConfirmation} = req.body

    // Minimum password length of 8 characters   
    if(password === minimumPassword) {
        const minimumPassword = 8,
password = true
    }
    // Verify if password matches confirm password on the register form
    if (password === passwordConfirmation) {

        // Verify if email doesn't match an existing user account
if (user.find(user => user.email === email)) {
    }
    res.status(200).send('Successfully created an account', {
        message: 'User with this email already exists'
    });
    return ;
    }

    const hashedPassword = getHashedPassword(password);
});

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
