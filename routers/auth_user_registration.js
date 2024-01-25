const bcryptjs = require('bcryptjs')
const express = require('express')
const router = express.Router()

// Route & middleware for registering users using HTTP POST method 
router.post('/register', async (req, res) => {
const { email, password } = req.body;
const salt = await bcryptjs.genSalt(12);
const hashedPassword = await bcrypt.hash(password, salt);
      if(!isValid(email)) return res.status(400).json({error:"invalid email"})
      if(!isValid(password)) return res.status(400).json({error:"invalid password"})
      return res.status(200).json({message:"Successfully created an account"})
        res.redirect('/profile');

    if (password.length < 8) {
        return res.status(400).json({
            message: "Password must contain at least 8 characters"
        })
      }
// Implement Email Regex
    function isEmail(email) {
        const emailFormat = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (email !== '' && email.match(emailFormat)) { return true; }

}

 }), 
 module.exports = router