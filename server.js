const express = require('express');
const mysql = require('mysql2');
const bcryptjs = require('bcryptjs');
const bodyParser = require('body-parser');
const register = require('./routers/auth_user_registration.js');
const login = require('./routers/auth_user_login.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the register page route
router.get('/register', (req, res) => {
  res.send('Registered user')
})
// define the login page route
router.get('/login', (req, res) => {
  res.send('Logged in')
})

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

app.post('/logout', (req, res) => {
  try {
    res.status(200).json({message: "Successfully logged out"});
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "internal Server",
    });
    
    request.session.destroy()
    res.redirect('/home')
  }
})
});

// Route for setting up profile pages, one for job seeker and the other for the company

  app.get('/profile', (req, res) => {

  }
)
  
// server is listening on port 3060
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});
