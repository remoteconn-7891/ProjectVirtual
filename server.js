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

// Route & middleware for registering users using HTTP POST method 
app.post('/register', (req, res) => {
const {email} = req.body
emailRegex = function(email) {
  const exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(exp)) {
    return true;
  } else {
    return false;
    if (!email) {
      res.status(400).json({ error: "Email required! "});
  }
  
  if (email) {
  return res.status(201).json({ message: "Valid email!" })
  } else {
  return res.status(400).json({error: "Invalid email" });
  }
  }
};

const password = "password123!";

bcryptjs.hash(password, 8, (err, hashedPassword) => {
  if (err) {
    return err;
  }

  console.log(hashedPassword);

  bcryptjs.compare(password, hashedPassword, (err, isMatch) => {
    if (err) {
      return err;
    }

    console.log(isMatch);
  })
})
const query = `INSERT INTO loginDB ( email, password) VALUES (' '${email}', '${password}`;
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
try {
  res.status(200).json({message: "Successfully logged out"});
} catch (err) {
  res.status(500).json({
    status: "error",
    message: "internal Server",
  });
}
    
  });
// server is listening on port 3060
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});