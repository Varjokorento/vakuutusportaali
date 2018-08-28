const Insurance = require('../models/insurance');

function findOneById(id) {
    return Insurance.findById({_id: id}, (err, insurance) => {
        return insurance;
    });
}

function findAllByUser(userId) {
    let insurances = Insurance.find({userid: userId});
    if (insurances) return insurances;
    else return ["Cannot find user with ID:", userId];
}

function findAll() {
    return Insurance.find({}, (err, insurances) => {
        if (err) throw err;
        return insurances;
    });
}

function addOne(data) {
    return Insurance.create(data)
        .then(createdInsurance => {
            console.log("Insurance created:", createdInsurance);
            return createdInsurance;
        }).catch(error => {
            return error;
    });
}

function updateOneById(data) {
    Insurance.findByIdAndUpdate({_id: data._id}, data, (err, insurance) => {
        console.log("updated:", insurance);
        return insurance;
    });
}

function deleteOneById(id){
    Insurance.remove({_id: id})
        .then(result => {
            return result;
        }).catch(error => {
            return error;
    })
}

module.exports = {findOneById, findAllByUser, findAll, addOne, updateOneById, deleteOneById};

