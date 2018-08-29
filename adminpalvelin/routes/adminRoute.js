const express = require('express');
const router = express.Router();
const adminDBservice = require('../databaseServices/adminDBservice');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../config/keys');
const passport = require('passport');
const Admin = require('../models/Admin');



router.get('/profile',passport.authenticate('jwt',
{session: false}), (req, res, next) => {
    adminDBservice.findOneById(req, res);
})

router.post('/register', (req, res) => {

    Admin.findOne({email: req.body.email})
        .then(admin => {
            if(admin) {
                error.email = 'Email already exists';
                return res.status(400);
            } else {
        
                const newAdmin = new Admin({
                    email: req.body.email,
                    password: req.body.password
                    
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
                        if(err) throw err;
                        newAdmin.password = hash;
                        newAdmin.save()
                            .then( user => res.json(user))
                            .catch(err => console.log(err));
                        })
                } 
            )
            }
        }
    )
}

)


router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email TODO REPLACE WITH OAUTH
    Admin.findOne({ email }).then(admin => {
      // Check for user
      if (!admin) {
        console.log("error: user not found")
        return res.status(404);
      }
      // Check Password
      bcrypt.compare(password, admin.password).then(isMatch => {
        if (isMatch) {
          // User Matched
          const payload = { id: admin.id, email: admin.email}; // Create JWT Payload
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
          console.log("Password incorrect");
          return res.status(400);
        }
      });
    });
  });


module.exports = router;
