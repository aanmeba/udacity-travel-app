var path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('dist'));


const port = 8081;
const server = app.listen(port, () => {
    console.log(`running on localhost: ${port}`);
});

// Initialize the main project folder
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
});

// test route
app.get('/test', function (req, res) {
    res.json({ msg: 'Good!' });
});

// Post Route
app.post('/userText', async(req, res) => {
    console.log('Searching...');

    let userInput = req.body;

    // object to store data
    let projectData = {};

    // API data will be stored
    let geonameData = '';
    let weatherData = '';
    let pixabayData = '';
    
    // GeoName API
    const geo_key = 'ozofoz';
    let geoUrl = `http://api.geonames.org/searchJSON?q=${userInput.city}&maxRows=1&type=json&username=${geo_key}`;

    // get latitute, longitute, countryName, cityName
    await (fetch(encodeURI(geoUrl))
    .then(res => res.json())
    .then(res => geonameData = { 
        lng: res.geonames[0].lng,
        lat: res.geonames[0].lat,
        countryName: res.geonames[0].countryName,
        city: res.geonames[0].toponymName
    })
    .catch(err => {
        console.log(err)
        return err.message
    }))

    // Weatherbit API
    const weather_key = 'bbf3480337fe4a0a90bfebb2598312a2';
    let weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${geonameData.lat}&lon=${geonameData.lng}&key=${weather_key}`;

    // get weather information
    await (fetch(weatherUrl)
    .then(res => res.json())
    .then(res => weatherData = { 
        temp: res.data[0].temp, 
        weather: res.data[0].weather.description, 
        icon: res.data[0].weather.icon 
    })
    .catch(err => {
        console.log(err)
        return err.message
    }))
    
    // Pixabay API
    const pixabay_key = '3682027-5088e48e7ea3921b77615eadb';
    let pixabayUrl = `https://pixabay.com/api/?key=${pixabay_key}&q=${geonameData.city}&orientation=horizontal&category=places&image_type=photo`;

    // get the corresponding image
    await (fetch(pixabayUrl)
    .then(res => res.json())
    .then(res => pixabayData = { 
        img: res.hits[0].webformatURL
    })
    .catch(err => {
        console.log(err)
        return err.message
    }))

    projectData = { 
        temp: weatherData.temp, 
        weather: weatherData.weather, 
        icon: weatherData.icon, 
        cityName: geonameData.city, 
        countryName: geonameData.countryName, 
        date: userInput.date, 
        img: pixabayData.img 
    };

    res.send(projectData);

});

module.exports = app;