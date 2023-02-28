const express = require('express');
const path = require('path');
const logger = require('morgan');
// cross origin access 
const cors = require('cors');
const axios = require("axios");


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

app.get('/test_route', (req, res) => {
    res.send("good route!")
})

app.get('/search/:id', async (req, res) => {
    let where = req.params.id
    // const response = `You searched for ${where}`
    // console.log(response)
    // res.send(response)
    let result = await axios({
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/locations',
        params: {name: where, locale: 'en-gb'},
        headers: {
          'X-RapidAPI-Key': '999e7af922mshe5ad013045dd463p120e8djsnf042c305c5cf',
          'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
      })
      let data = result.data
    console.log(data)
    res.send(data)
})
app.get('/hotelOptions/:id', async (req, res) => {
    let where = req.params.id
    // const response = `You searched for ${where}`
    // console.log(response)
    // res.send(response)
    let result = await axios({
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
        params: {
          room_number: '1',
          checkout_date: '2023-08-19',
          dest_type: 'city',
          dest_id: where,
          adults_number: '2',
          locale: 'en-gb',
          checkin_date: '2023-08-18',
          order_by: 'popularity',
          filter_by_currency: 'AED',
          units: 'metric',
          page_number: '0',
          children_number: '2',
          include_adjacency: 'true',
          categories_filter_ids: 'class::2,class::4,free_cancellation::1',
          children_ages: '5,0'
        },
        headers: {
          'X-RapidAPI-Key': '999e7af922mshe5ad013045dd463p120e8djsnf042c305c5cf',
          'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    })
    let data = result.data
    console.log(data)
    res.send(data)
})




app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
});
