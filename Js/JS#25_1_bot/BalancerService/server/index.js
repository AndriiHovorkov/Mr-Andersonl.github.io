const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch')

const app = express(); // constructor
const port = 7071;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.static(__dirname + './../'));

const openWeatherConfig = {
    protocol: 'http://',
    domain: 'api.openweathermap.org',
    resourceBase: '/data/2.5',
    API_KEY: '', // NO SAVE IN REPO
};

const {protocol, domain, resourceBase, API_KEY} = openWeatherConfig;
const openWeatherPath = `${protocol}${domain}${resourceBase}`;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.text());

app.all('*', (req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    
    next();
});

app.get('/current/weather/:city', (req, res) => {
    fetch(`${openWeatherPath}/weather?appid=${API_KEY}&units=metric&q=${req.params.city}`)
        .then(resp => resp.json())
        .then(data => { res.json(data);});
})

app.get('/forecast/weather/:city', (req, res) => {
    fetch(`${openWeatherPath}/forecast?appid=${API_KEY}&units=metric&q=${req.params.city}`)
        .then(resp => resp.json())
        .then(data => { res.json(data); }); 
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});