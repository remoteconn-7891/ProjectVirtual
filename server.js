const express = require('express');
const mysql = require('mysql2');
const bcryptjs = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
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

    const user = req.body.email;
    const hashPassword = await bcryptjs.hash(req.body.password, 8);

    decodeBase64.getConnection( async, (err, connection) => {
        if (err) throw (err)

        const sqlSearch = "SELECT * FROM loginDB WHERE user = ?"
        const search_query = mysql.format(sqlSearch,[user])

        const sqlInsert = "INSERT INTO loginDB VALUES (0,?,?)"
        const insert_query = mysql.format(sqlInsert,[user, hashPassword])

         connection.query (search_query, async (err, result) => {
            if (err) throw (err)
            console.log("------> Search Results")
            console.log(result.length)
            if (result.length != 0) {
             connection.release()
             console.log("------> User already exists")
             res.sendStatus(409) 
            } 
            else {
             await connection.query (insert_query, (err, result)=> {
             connection.release()
             if (err) throw (err)
             console.log ("--------> Created new User")
             console.log(result.insertId)
             res.sendStatus(201)
            })
           }
          }) //end of connection.query()
          }) //end of db.getConnection()
          }) //end of app.post()
    
// Router (API) for login in Express.js using HTTP Req & Res (POST)
app.post('/login', (req, res) => {
const {email, password} = req.body;
const query = `SELECT * FROM loginDB WHERE email = '${email}' AND password = '${password}'`
connection.query(query, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
        res.redirect('/home');
    } else {
        res.send('Invalid email/password');
    }
});
});

app.get('/home', (req, res) => {
    res.send('Successful login');
});

// server is listening on port 3060
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});
