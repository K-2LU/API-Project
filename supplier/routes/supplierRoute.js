const express = require('express');
const mysql = require('mysql2');
const suppliersRouter = require('./routes/supplierRoute');

const app = express();

app.use(express.json());

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
        app.listen(5000);
        console.log("Listening on port 5000");
    }
});