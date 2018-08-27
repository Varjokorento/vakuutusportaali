const express = require('express');
const router = express.Router();
const service = require("../services/insurancedbservice");

router.get("/:id", (req, res) => {
    let insurance = service.findOneById(req.params.id);
    res.json(insurance);
});

router.post("/", (req, res) => {
    console.log("vakuutuksen postausfunktio");
    let insurance = req.body;
    console.log(insurance);
    service.addOne(insurance);
});


module.exports = router;