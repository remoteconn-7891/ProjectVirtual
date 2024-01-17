const express = require('express');
const mysql = require('mysql2');
const bcryptjs = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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

require('dotenv').config()
const db_host = process.env.db_host
const db_user = process.env.db_user
const db_email = process.env.db_email
const db_password = process.env.db_password
const db_dbname = process.env.db_dbname

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
    console.log(req.body.password)

    connection.connect( async (err, connection) => {
        if (err) {
        console.log(err.message)
        res.status(401).json({message: "Error occurred"})}
        const sqlSearch = 'SELECT * FROM loginDB WHERE user = ?'
        const search_query = mysql.format(sqlSearch,[user]);

        const sqlInsert = 'INSERT INTO loginDB VALUES (0,?,?)'
        const insert_query = mysql.format(sqlInsert,[user, hashedPassword]);

        await connection.query (search_query, async (err, result) => {

            if (err) throw (err)
            console.log('------> Search results')
            console.log(result.length)

            if (result.lengh != 0) {
                connection.release()
                console.log('------> User with email/password already exists')
                res.sendStatus(409)
            }
            else {
                await connection.query (insert_query, (err, result) => {
                    connection.release()

                    if (err) throw (err)
                    console.log ('------> Registered new user');
                    console.log(result.insertId);
                    res.sendStatus(201)
                })
            }
        })
    })
})

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
