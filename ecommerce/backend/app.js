const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql2');
const ecommRoutes = require('./routes/ecommRoutes');

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'bank'
});

db.connect((err) => {
    if(err) {
        console.log(err);
    }   else {
        console.log("Connected to MySQL");
        app.listen(4000);
        console.log("Listening on port 4000");
    }
});

app.use('/api/ecomm', ecommRoutes);
