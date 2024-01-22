const bcrypt = require('bcrypt')

// Route & middleware for registering users using HTTP POST method 
app.post('/register', (req, res) => {
const { email, password } = req.body;
      if(!isValid(email)) return res.status(400).json({error:"invalid email"})
      if(!isValid(password)) return res.status(400).json({error:"invalid password"})
      return res.status(200).json({message:"Successfully created an account"})

    const saltRounds = 10;
bcrypt.hash(password, saltRounds, (err, hash) =>{
// Hash gets stored in DB here
});

bcrypt.compare(password, hash, (err, result) => {

});

const password3 = "GHF*$36b5ui";
bcrypt.compare(password3, hash, (err, result) => {
    if (result) {
        console.log("Password matches!")
    }
    else {
        console.log("Password does not match!")
    }
});
    });
