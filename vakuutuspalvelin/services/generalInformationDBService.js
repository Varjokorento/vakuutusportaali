const InsuranceType = require('../models/insurancetype');


function findAll (req, res) {
    InsuranceType.find({}, (err, insurances) => {
        res.json(insurances)
    })   //findAllProfile
}

function findOneById(req, res) {
    InsuranceType.findById({_id: id}, (err, insurance) => {
        res.json(insurance);
    });
}

function addInsuranceType(req, res) {
    console.log(req.body);
    InsuranceType.create(req.body)
    .then(res.send("Profile created"));
}


module.exports = {findAll, addInsuranceType, findOneById}
