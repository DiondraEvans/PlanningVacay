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
          'X-RapidAPI-Key': 'e17b8df553mshc7e8429062e0346p15e7a6jsn4c768caabcfd',
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
