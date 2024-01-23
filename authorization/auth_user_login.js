// Router (API) for login in Express.js using HTTP Req & Res (POST)
app.post('/login', (req, res) => {
const { email, password } = req.body
if (!email || !password) {
    return res.status(400).json({message: "Invalid email/passowrd",})
}
    },
);

try {
    const user = await UserActivation.findOne({ email, password })
    if (!user) {
        res.status(400).json({
            message: "Login unsuccessful",
            error: "User with this email/password does not exist",
        })
    } else {
        res.status(200).json({
            message: "Successfully logged in",
            user,
        })
    }
} catch (error) {
    res.status(400).json({
        message: "Error",
        error: error.message,
    })
}
