const express = require('express')
const bodyParser = require('body-parser');
const UserController = require('./controllers/UserController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/v1/users', UserController);
app.get('/', (req, res) => {
    res.send('Hello');
});

module.exports = app;