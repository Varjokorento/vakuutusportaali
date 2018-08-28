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

router.get("/", (req, res) => {
    let insurances = insuranceService.findAll();
    console.log(insurances)
    res.json(insurances);
});

router.post("/", (req, res) => {
    let insurance = req.body;
    console.log("Insurance to be created:", insurance);
    insuranceService.addOne(insurance)
        .then(result => {
            if (result.errors) {
                res.status(400);
            } else {
                res.status(201);
            }
            res.send(result);
        });
});

router.put("/", (req, res) => {
    let insurance = req.body;
    console.log("Insurance to be updated:", insurance);
    insuranceService.updateOneById(req.body);
    res.status(200);
    res.send("Updated");
});

router.delete("/:id", (req, res) => {
    res.status(200);
    res.send("Deleted");
});

module.exports = router;