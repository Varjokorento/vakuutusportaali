const express = require('express');
const router = express.Router();
const insuranceService = require("../services/insurancedbservice");

router.get("/:id", (req, res) => {
    let insurance = insuranceService.findOneById(req.params.id);
    res.json(insurance);
});

router.get("/user/:id", (req, res) => {
    let insurances = insuranceService.findAllByUser(req.params.id);
    res.json(insurances);
});

router.post("/", (req, res) => {
    let insurance = req.body;
    console.log(insurance);
    insuranceService.addOne(insurance);
});

module.exports = router;