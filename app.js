const express = require('express');
const app = express()

const port = 3050;

// Route (API) for login with Express.js using HTTP Req & Res (POST)
app.post('/login', (req, res, next) => {
    if (email) {
        res.status(200);
    } else {
        res.status(401), {
            error: "invalid email"
        }
    }

    if (password) {
        res.status(200);
    } else {
        res.status(401), {
            error: "Invalid password"
        }
    }
    const loggedIn = {
        email: 'email@example.com',
        password: 'Password!123', 
    };
    res.send('Successful login');
    next();
});

app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});
