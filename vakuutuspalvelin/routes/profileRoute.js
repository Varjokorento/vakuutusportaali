const express = require('express');
const router = express.Router();
const profiledbservice = require('../databaseServices/profiledbservice');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../config/keys');
const passport = require('passport');
const User = require('../models/User');

//@Route /current
//GET this shows the current profile information
//Private
//TODO THIS WILL CHANGE WHEN AUTHENTICATION IS ADDED

router.get('/current', passport.authenticate('jwt',
{session: false}), (req, res) => {
    profiledbservice.findOneById(req, res)
  });


/*router.get('/current', passport.authenticate('jwt',
{session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email});
})*/

//@Route /omavakuutus/:vakuutusID
//GET this shows the information of one information
//Private

router.get('/omavakuutus/:vakuutusId', (req, res, next) => {
    res.json("This shows insurance")
}) 

router.get('/omavakuutus/paivita', (req, res, next) => {
    res.json("this updates insurance")
})

router.post('/omavakuutus/paivitatietoja', (req, res, next) => {
    res.json("this updates information")
})


router.post('/luoprofiili', (req, res, next) => {
    profiledbservice.AddProfile(req, res);
})

router.post('/login', (req, res) => {
    const errors = {};
    const email = req.body.email;
    const password = req.body.password;

    // Find user by email TODO REPLACE WITH OAUTH
    
    User.findOne({ email }).then(user => {
      // Check for user
      if (!user) {
        console.log("error: user not found")
        return res.status(404);
      }
      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User Matched
          const payload = { id: user.id, name: user.name}; // Create JWT Payload
          // Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            }
          );
        } else {
          errors.password = 'Password incorrect';
          return res.status(400).json(errors);
        }
      });
    });
  });


module.exports = router; 