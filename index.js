/**
 * Created by zohaib on 12/3/2017.
 */

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;

//mongoose.connect(config.uri, (err) => {
mongoose.createConnection(config.uri, (err) => {
    useMongoClient: true;
    if(err)
        console.log('Failed to connect with database : ', err);
    else
        //console.log(config.secret);
        console.log('Connected to database : ' + config.db);
});

app.use(express.static(__dirname + '/client/dist/'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, () => {
    console.log('Listening on http://localhost:8080')
});