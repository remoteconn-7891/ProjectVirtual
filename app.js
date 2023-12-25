const express = require('express');
const app = express()

const port = 3060;

function loginUser(req, res, next){
    //retrieve info from req object
    res.locals.loggedIn = true
    console.log("Successful login!")
    next();
}

app.use('/login',loginUser);

//Router for user registering an account with middleware
app.post('/register', (req, res, next) => {

});

// Router (API) for login in Express.js using HTTP Req & Res (POST)
app.post('/login', (req, res, next) => {

    if (email) {
        // Successful response (200) code
        res.status(200);
    } else {
        // Error status (401) code
        res.status(401), {
            error: 'invalid email',
        }
    }

    if (password) {
        res.status(200);
    } else {
        res.status(401), {
            error: 'Invalid password',
        }
    }

    res.send('Successful login');
    console.log(res.locals.loggedIn)

    const loggedIn = {
        email: 'email@example.com',
        password: 'Password!123', 
    };
});

app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
})
