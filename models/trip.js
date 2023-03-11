const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    tripName: {type: String},
    names: {type: Array},
    date: {type: String},
    summary: {type: String},
    emails: {type: Array},
    id: {type: String},
    price: {type: Number},
    user: {type: String}
});

//make an instance of the fruitSchema
const trips = mongoose.model('activeTrips', tripSchema);

module.exports = trips;