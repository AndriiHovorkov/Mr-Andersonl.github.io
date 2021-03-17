const express = require('express');
const bodyParser = require('body-parser');

const Service = require('./Service');
const app = express(); // constructor
const port = 7071;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static(__dirname + './../'));

app.post('/user/create', Service.userCreate);

app.post("/data/update", Service.userDataUpdate)

app.get("/data/status-check", Service.userData)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});