// Route & middleware for registering users using HTTP POST method 
app.post('/register', (req, res) => {
    const {email} = req.body
    emailRegex = function(email) {
      const exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email.match(exp)) {
        return true;
      } else {
        return false;

      }
    
      if(!isValid(email)) return res.status(400).json({error:"invalid email"})
      if(!isValid(password)) return res.status(400).json({error:"invalid password"})
      return res.status(200).json({message:"both email and password are valid"})
  // Once user is logged in, navigates to their profile
  res.redirect('/profile');
    const query = `SELECT * FROM loginDB WHERE email = '${email}' AND password = '${password}'`;

    const password = "password123!";
    
    bcryptjs.hash(password, 8, (err, hashedPassword) => {
      if (err) {
        return err;
      }
    
      console.log(hashedPassword);
    
      bcryptjs.compare(password, hashedPassword, (err, isMatch) => {
        if (err) {
          return err;
        }
        console.log(isMatch);
      })
    })}
  })
