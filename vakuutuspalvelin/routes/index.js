var express = require('express');
var router = express.Router();
const generalinformationdbservice = require('../services/generalInformationDBService');




//@ Route '/vakuutukset'
// GET insurance page this shows all the available insurances
// PUBLIC
router.get('/vakuutukset', function(req, res, next) {
  generalinformationdbservice.findAll(req, res);
});

router.post('/vakuutukset', (req, res, next) => {
  generalinformationdbservice.addInsuranceType(req, res);
});

//@Route 'vakuutuslaskuri'
//POST calculates the price with the drag and drop feature
//PUBLIC

router.post('/vakuutuslaskuri', (req, res, next) => {
  res.json("This calculates the insurance and displays the cost")
})




module.exports = router;
