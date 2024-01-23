const express = require('express');
const mysql = require('mysql2');
const bcryptjs = require('bcryptjs');
const bodyParser = require('body-parser');
const passwordValidator = require('password-validator');

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

//Route for Home page
app.get('/Home', (req, res) => {
try {
  res.status(200).json({
    status: "success",
    message: "Welcome to Virtualify",
  });
} catch (err) {
  res.status(500).json({
    status: "error",
    message: "Server error",
  });
}
});

app.post('/logout', (req, res) => {
try {
  res.status(200).json({message: "Successfully logged out"});
} catch (err) {
  res.status(500).json({
    status: "error",
    message: "internal Server",
  });
}
    
  });
// Route for setting up profile pages, one for job seeker and the other for the company

  app.get('/profile', (req, res) => {

  }
)
  
// server is listening on port 3060
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});
