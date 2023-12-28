const express = require('express');
const app = express();

const port = 3060;

//Router for user registering an account with middleware
app.post('/register', (req, res, next) => {

});

// Router (API) for login in Express.js using HTTP Req & Res (POST)
app.post('/login', (req, res, next) => {

    const email = 'example@email.com'
    const password = 'Password123!'
    
    if(!email) res.status(401).send('Invalid email')
    if(!password) res.status(401).send('Invalid password')
    res.status(200).send('Successful login')
});

app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
})
