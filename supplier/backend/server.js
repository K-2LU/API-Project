const express = require('express');
const mysql = require('mysql2');
const supplierRoute = require('./routes/supplierRoute');


const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

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
        app.listen(6010);
        console.log("Listening on port 6010");
    }
});

app.get('/', (req, res) => {});

app.use('/api/supplier', supplierRoute);
