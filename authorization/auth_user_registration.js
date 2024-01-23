const bcrypt = require('bcrypt')

// Route & middleware for registering users using HTTP POST method 
app.post('/register', (req, res) => {
const { email, password } = req.body;
      if(!isValid(email)) return res.status(400).json({error:"invalid email"})
      if(!isValid(password)) return res.status(400).json({error:"invalid password"})
      return res.status(200).json({message:"Successfully created an account"})

    if (password.length < 8) {
        return res.status(400).json({
            message: "Password must contain at least 8 characters"
        })
      }
// Implement Email Regex
    function isEmail(email) {
        const emailFormat = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (email !== '' && email.match(emailFormat)) { return true; }

        bcrypt.genSalt(12, (err, salt) => {
            bcrypt.hash(plaintextPassword, salt, (err, hash) => {
            })
        })
bcrypt.compare(plaintextPassword, hash, (err, result) => {
    if (result) {

    }
})
    }})