const express = require('express');
const router = express.Router();
const generalinformationdbservice = require('../databaseServices/generalInformationDBService');

router.get('/insurancetypes', function(req, res, next) {
  generalinformationdbservice.findAll(req, res);
});

router.post('/insurancetypes', (req, res, next) => {
  generalinformationdbservice.addInsuranceType(req, res);
});

module.exports = router;
