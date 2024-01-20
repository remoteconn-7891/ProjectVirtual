const express = require('express');
const mysql = require('mysql2');
const bcryptjs = require('bcryptjs');
const bodyParser = require('body-parser');
const passwordValidator = require('password-validator');
const emailValidator = require('email-validator');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Connecting to MySQL database
const connection = mysql.createConnection({

    host: '127.0.0.1',
    user: 'root',
    password: 'Virtualdb@87',
    database: 'userLogin',
});

connection.connect((err, connection) => {
    if (err) throw (err);
    console.log("Database connection successful");
});


const port = 3060;

// Route & middleware for registering users using HTTP POST method 
app.post('/register', async (req, res) => {
const {email, password, confirm_password} = req.body

if (!email) {
    res.status(400).json({ error: "Email required! "});
}

if (password) {
return res.json({ message: "Valid email!" })
} else {
return res.status(400).json({error: "Invalid email" });
}

const schema = passwordValidator();

schema
.is().string()
.is().min(8)
.is().max(20)
.has().lowercase(a-z)
.has().uppercase(A-Z)
.has().specialcharacter('!@#%&*')

const passwordError = {
min: "Password should contain a minimum of 8 characters",
max: "Password should contain a maximum of 24 characters",
uppercase: "Password should contain at least 1 uppercase letter",
lowercase: "Password should contain at least 1 lowercase letter",
number: "Password should contain at least 1 number"
}
const query = `INSERT INTO loginDB ( email, password, confirm_password) VALUES (' '${email}', '${password}', '${confirm_password})`;
connection.query(query, (err, results) => {
  if (err) throw err;
  console.log('Successfully registered account')
});
});

// Router (API) for login in Express.js using HTTP Req & Res (POST)
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT * FROM loginDB WHERE email = '${email}' AND password = '${password}'`;
    connection.query(query, (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        console.log('Valid email/password');
      }
    });
  });

  app.post('/logout', (req, res) => {
    if (err) throw err;
    console.log('Successfully logged out');
  });
// server is listening on port 3060
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});