const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

function getCurrentMySQLDatetime() {
    const currentDatetime = new Date();
    const year = currentDatetime.getFullYear();
    const month = String(currentDatetime.getMonth() + 1).padStart(2, '0');
    const day = String(currentDatetime.getDate()).padStart(2, '0');
    const hours = String(currentDatetime.getHours()).padStart(2, '0');
    const minutes = String(currentDatetime.getMinutes()).padStart(2, '0');
    const seconds = String(currentDatetime.getSeconds()).padStart(2, '0');

    const mysqlDatetime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return mysqlDatetime;
}

// express router
const router = express.Router();

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}


const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'bank'
});


db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Mysql is connected in routes");
    }
});

const getFromServer = (query, value) => {
    return new Promise( (resolve, reject) => {
        db.query(query, value, function (error, data) {
            if (error) {
                reject(error);
            }
            else {
                resolve(data);
            }
        });

    });
}

// get id

router.get('/account/:id', async (req, res) => {
    const id = req.params.id;

    let query = "select * from accounts where accNo = ?";
    try {
        var result = await getFromServer(query, id);
        console.log(result);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while fetching account data.' });
    }
});

router.post('/transaction', async (req, res) => {
    console.log('transaction begin');
    const from = req.body.from;
    const to = req.body.to;
    const amount = req.body.amount;

    let query = "select * from accounts where accNo = ?";
    

    var result = await getFromServer(query, from);
    if(result[0].balance < amount){
        console.log('insufficient balance');

        res.send('insufficient balance');
        return;
    }

    query = "update accounts set balance = balance - ? where accNo = ?;";
    try {
        var result = await getFromServer(query, [amount, from]);
        console.log(result);
        // res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while fetching account data.' });
    }

    query = "update accounts set balance = balance + ? where accNo = ?;";
    try {
        var result = await getFromServer(query, [amount, to]);
        console.log(result);
        // res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while fetching account data.' });
    }

    let randomKey = generateRandomString(10);
    
    const datetime = getCurrentMySQLDatetime();

    query = "insert into transaction (`from`, `to`, amount, time, id) values (?, ?, ?, ?, ?)";
    values = [from, to, amount, datetime, randomKey];
    try {
        var result = await getFromServer(query, values);
        console.log(result);
    } catch (error) {
        console.log(error);
    }

    console.log('transaction end');
    res.status(200).json({ message: 'transaction successful' });
});


module.exports = router;