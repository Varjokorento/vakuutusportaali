const Insurance = require('../models/insurance');

function findAll(req, res) {
    Insurance.find({}, (err, insurances) => {
        res.json(insurances)
    });
}

function findOneById(req, res) {
    Insurance.findById({_id: id}, (err, insurance) => {
        res.json(insurance);
    });
}

function findAndEdit(req, res) {
    Insurance.findOneById({_id: req.body.id}, (err, insurance) => {
        res.json(insurance);
    });
}

function updateOneById(req, res) {
    Insurance.findByIdAndUpdate({_id: req.body.id}, req.body, (err, insurance) => {
        res.send("Insurance updated");
    });
}

<<<<<<< HEAD
module.exports = {findAll, findOneById, findAndEdit, updateOneById};


=======
module.exports = {updateOneById, findAndEdit, findAll, findOneById}
>>>>>>> 1472a0b1a16963edde5658ab913a885426f7f001
