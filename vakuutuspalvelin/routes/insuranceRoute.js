const express = require('express');
const router = express.Router();
const insuranceService = require("../services/insurancedbservice");

router.get("/:id", (req, res) => {
    insuranceService.findOneById(req.params.id)
        .then(insurance => {
            res.json(insurance);
        });
});

/* THIS IS A PRELIMINARY PLAN FOR THE FEATURE
router.get("/user/:id", passport.authenticate('jwt',
{session: false}),  (req, res) => {
    if(req.user.role == "ADMIN") {
    insuranceService.findAllByUser(req.params.id)
        .then(insurances => {
            res.json(insurances);
        })
    } else {
        res.send("unauthorized")
    }
});
*/

router.get("/user/:id",  (req, res) => {
    insuranceService.findAllByUser(req.params.id)
        .then(insurances => {
            res.json(insurances);
        })
});

router.get("/", (req, res) => {
    insuranceService.findAll()
        .then (insurances => {
            console.log("Insurances fetched from server:", insurances);
            res.json(insurances);
        });
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