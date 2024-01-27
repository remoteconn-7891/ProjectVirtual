const bcryptjs = require('bcryptjs')
const express = require('express')
const router = express.Router()

router.post('/logout', (req, res) => {
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          res.status(400).send('Logout unsuccessful')
        } else {
          res.status(200).send('Successfully logged out')
        }
      });
    } else {
      res.end()
    }})

    module.exports = router