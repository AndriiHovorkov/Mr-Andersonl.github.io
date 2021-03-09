const express = require('express');
const bodyParser = require('body-parser');

const user = require('./User.js');

const app = express(); // constructor
const port = 7071;
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.static(__dirname + './../'));

app.get('/person', (req, res) => {
    let personObj = user.person
    res.send(personObj);
}); 

app.get('/person/:fieldName', (req, res) => {
    let personObj = user.person
    res.send(personObj[req.params['fieldName']]);
}); 

app.get('/person/post/recipient', (req, res) => {
    let address = user.person.address;
    let name = user.person.name
    let surname = user.person.surname
    let recipient = {
        name,
        surname,
        address
    }
    res.send(recipient);
}); 

app.get('/pers/', user.getField); /* http://localhost:7071/pers/?fields=name,surname,age */

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});