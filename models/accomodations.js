const mongoose = require('mongoose');

const accomodationSchema = new mongoose.Schema({
    accomodation_name: {type: String},
    price: {type: Number},
    city: {type: String, lowercase: true },
    country: {type: String},
    bedrooms: {type: Number},
    baths: {type: Number},
    bed: {type: Number},
    img: {type: String},
    img2: {type: String},
    img3: {type: String},
    img4: {type: String},
    img5: {type: String},
    description: {type: String},
    max_guests: {type: Number},
    type: {type: String}
});

//make an instance of the fruitSchema
const accomodations = mongoose.model('accomodations', accomodationSchema);

module.exports = accomodations;