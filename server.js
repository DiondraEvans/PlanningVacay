const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan');
// cross origin access 
const cors = require('cors');
const axios = require("axios");
require('dotenv').config()
//have a model
let accomodation = require('./models/accomodations');
let trip = require('./models/trip');
const app = express();

// access
app.use(cors({
    origin: "*"
}));

// logs the different requests to our server
app.use(logger('dev'))

//parse stringified objects (JSON)
app.use(express.json())

// server build folder
app.use(express.static(path.join(__dirname, 'build')));

//remember to input user and pass variables
let connectionString =`mongodb+srv://${process.env.mongoUsername}:${process.env.mongoPassword}@mongosetupcluster.anqqbl8.mongodb.net/VacationSite?retryWrites=true&w=majority`
//mongoose requirements
mongoose.set('strictQuery', false);
//connect expresss to Mongo
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.get('/test_route', (req, res) => {
    res.send("good route!")
})


app.get('/search', async (req, res) => {
    let where = req.query.location
    let type = req.query.type
    let guests = req.query.guest
    //doing greater than the number the user inputs means they will get the amount of room needed for the amount of people coming
    let data = await accomodation.find({"city": where, "type": type, "max_guests": {$gt : guests}})
    console.log(data)
    res.send(data)
})
app.get('/single/:id', async (req, res) => {
    let id = req.params.id
    let data = await accomodation.findOne({"_id": id}) 
    console.log(data)
    res.send(data)
})
app.post('/create_trip', async (req, res) =>{
    const {tripName: tripName, names: names, date: date, summary: summary, emails: emails, id: id, price: price} = req.body;
    console.log(tripName)
   
    let returnedValue = await trip.create({
        tripName,
        names,
        date,
        summary,
        emails,
        id,
        price
    })
    console.log(id)
    console.log(returnedValue);
    if (returnedValue) {
        console.log("upload complete");
    }
    //sending the returned value from the object we created
    res.send(returnedValue);
})

app.get('/get_trips', async (req, res) => {
    let data = await trip.find({})
    console.log(data)
    res.send(data)
})
app.delete('/delete/:id', async (req, res) => {
    let id = req.params.id
    console.log(id)
    let response = await trip.deleteOne({_id: id});
   console.log(response);
   res.send({data: `deleted ${response.deletedCount} items.`})
})
app.put('/update_trip/:id', async (req, res) => {
    console.log(req.params.id)
    //mongoose needs to be able to assign the variable to a property that matches it's schema.
    //so I just translated the keys to the properties of the schema on the front-end and input the 
    //req.body as an update. whats inside of req.body is an object holding the schema properties and their keys
    const {tripName: tripName} = req.body
    console.log(`this is your variable: ${tripName}`)
      
      const response = await trip.findOneAndUpdate({ _id:  req.params.id}, req.body, { new: true });
    console.log(response)
    res.send(response)
  });
  
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
});
