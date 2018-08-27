var express = require('express');
var router = express.Router();
const profiledbservice = require('../services/profiledbservice')
//@Route /admin/dashboard
//GET this shows the profile information
//Private

router.get('/dashboard', function(req, res, next) {
    res.json("Tänne tulee hallintapaneeli");
  })

//@Route /omavakuutus/:vakuutusID
//GET this shows the information of one information
//Private

router.get('/dashboard/:_id', (req, res, next) => {
    console.log("This is id:" + req.params._id);
    profiledbservice.findOneById(req, res);
})


//@Route /admin/dashboard/:clientID
//POST this shows the information of one information
//Private

router.post('/dashboard/:cliendID', (req, res, next) => {
    res.json("This updates a single client")
})

module.exports = router; 