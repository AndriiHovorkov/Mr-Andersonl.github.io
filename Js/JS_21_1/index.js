const express = require('express');
const app = express(); // constructor
const port = 7071;

app.use(express.static(__dirname + './../')); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

