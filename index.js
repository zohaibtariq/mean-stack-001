/**
 * Created by zohaib on 12/3/2017.
 */

const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');
const port = config.port || 800 || 8080;

//mongoose.createConnection(config.uri, (err) => {
// Database Connection
mongoose.connect(config.uri, {
    useMongoClient: true,
}, (err) => {
    // Check if database was able to connect
    if (err) {
        console.log('Could NOT connect to database: ', err); // Return error message
    } else {
        console.log('Connected to ' + config.db); // Return success message
    }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Provide static directory for front end
app.use(express.static(__dirname + '/client/dist/'));

app.use('/authentication', authentication);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(port, () => {
    console.log('Listening on http://localhost:'+port)
});