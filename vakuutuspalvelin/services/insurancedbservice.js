const Insurance = require('../models/insurance');

function addOne(data) {
    console.log(data);
    Insurance.create(data)
        .then(promise => {
            console.log("Insurance added");
        })
}

function findAll(req, res) {
    Insurance.find({}, (err, insurances) => {
        res.json(insurances)
    });
}

function findOneById(id) {
    Insurance.findById({_id: id}, (err, insurance) => {
        return insurance;
    });
}

function updateOneById(req, res) {
    Insurance.findByIdAndUpdate({_id: req.body.id}, req.body, (err, insurance) => {
        res.send("Insurance updated");
    });
}

function findAllByUser(userId) {
    let insurances = Insurance.find({userid: userId});
}

module.exports = {addOne, findAll, findOneById, updateOneById};

