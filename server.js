const express = require('express');
const mysql = require('mysql2');
const bcryptjs = require('bcryptjs');
const bodyParser = require('body-parser');

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
const query = `INSERT INTO user_details ( email, password, confirm_password) VALUES (' '${email}', '${password}', '${confirm_password})`;
connection.query(query, (err, results) => {
  if (err) throw err;
  console.log('Successfully registered account')
});
});

// Router (API) for login in Express.js using HTTP Req & Res (POST)
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT * FROM user_details WHERE email = '${email}' AND password = '${password}'`;
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
