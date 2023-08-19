const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const bankRoutes = require('./routes/bankRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Success');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.use('/api/bank', bankRoutes);

