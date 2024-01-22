// Router (API) for login in Express.js using HTTP Req & Res (POST)
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // Once user is logged in, navigates to their profile
    res.redirect('/profile');
})
