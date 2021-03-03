const express = require('express');
const bodyParser = require('body-parser');

const UsersService = require('./Users.service.js');
const logService = require('./log.service');

const app = express(); // constructor
const port = 7071;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.static(__dirname + './../'));


app.all('*', logService.logMiddleware);

app.get('/users', UsersService.getUsers);

app.get('/users/all', UsersService.getUsersAll);
app.get('/users/:usersName/', UsersService.getUsersByName);
app.get('/users/:usersName/', UsersService.getUsersByName);

app.post('/users/add', UsersService.addUser);
app.put('/users/update', UsersService.updateUserById);

app.delete('/user/remove', logService.userDataDelete);
app.get('/get/log', logService.getLog);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  logService.logData()
});