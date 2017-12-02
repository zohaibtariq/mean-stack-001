/**
 * Created by zohaib on 12/3/2017.
 */
const express = require('express');
const app = express();

app.get('*', (req, res) => {
    res.send('hello world...');
});

app.listen(8080, () => {
    console.log('Listening on http://localhost:8080')
});