var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProfileSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Nimi on pakollinen!']
    },
    address: {
        type: String,
        required: [true, 'Osoite on pakollinen!']
    },
    city: {
        type: String,
        required: [true, 'Kaupunki on pakollinen!']
    },
    phone: {
        type: String
    },
    insurances: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }}

, {collection: 'profiles'});



const Profile = mongoose.model('profiles', ProfileSchema);


module.exports = Restaurant;