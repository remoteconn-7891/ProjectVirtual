const bcryptjs = require('bcryptjs')
const express = require('express')
const router = express.Router()

app.post('/logout', (req, res) => {
    try {
      res.status(200).json({message: "Successfully logged out"});
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: "internal Server",
      });
    }})

    module.exports = router