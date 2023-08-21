const express = require('express');
const mysql = require('mysql2');
const axios = require('axios');
const router = express.Router();

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
    }
});

// genearate random string of length 'length'
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}

// run query on the sql server
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


// seller login
router.post('/login', async (req, res) => {
    console.log('in login');
    let id = req.body.id;
    let username = req.body.username;
    let password = req.body.password;

    let query = "SELECT * FROM seller WHERE (username = ? OR id = ?) AND pass = ?";
    let values = [username, id, password];

    var result = await getFromServer(query, values);
    
    if(result.length == 0) {
        console.log('in if');
        res.json({ message: 'check seller credentials'});
    } else {
        console.log('in else');
        res.json({ message: 'success', id: result[0].id, name: result[0].name, username: result[0].username, bank_acc: result[0].bank_acc});
    }
});


// seller all order details
router.post('/order/all', async (req, res) => {
    let sid = req.body.id;

    console.log('in all order w seller id: ' + sid);

    let query = "SELECT * FROM eorder WHERE s_id = ?"
    let values = [sid];

    var result = await getFromServer(query, values);
    if(result.length === 0){
        res.send('no orders');
    }else {
        res.send(result);
    }
});

// a single order details
router.post('/order/details', async (req, res) => {
    let oid = req.body.order_id;

    let query = "SELECT * FROM eorder WHERE id = ?";
    let values = [oid];
    
    var result = await getFromServer(query, values);
    if(result.length === 0){
        res.send('no orders');
    }else {
        res.send(result);
    }
});

// seller order accepted
router.post('/order/accept', async (req, res) => {
    let oid = req.body.order_id;

    let query = "UPDATE eorder SET state = -1 WHERE id = ?";
    let values = [oid];

    try {
        var result = await getFromServer(query, values);
        console.log('in accept order w order id: ' + oid);

        query = "SELECT * FROM eorder WHERE id = ?";
        values = [oid];
        
        result = await getFromServer(query, values);
        let sid = result[0].s_id;

        console.log('leavin accept ' + sid);
        res.json(sid);
    }   catch(error) {
        res.send('server error, try again later');
    }
});

// seller order cancelled
router.post('/order/cancel', async (req, res) => {
    let oid = req.body.order_id;

    let query = "UPDATE eorder SET state = 2 WHERE id = ?";
    let values = [oid];

    try {
        var result = await getFromServer(query, values);
        console.log('in cancel order w order id: ' + oid);

        query = "SELECT * FROM eorder WHERE id = ?";
        values = [oid];

        result = await getFromServer(query, values);
        let sid = result[0].s_id;

        res.json(sid);
    }   catch(error) {
        res.send('server error, try again later');
    }
});


// get bank account
router.post('/getBankAcc/', async (req, res) => {
    let userId = req.body.sellerID;
    let query = "SELECT bank_acc FROM seller WHERE id = ?";
    let values = [userId];

    console.log('in get bank acc w user id: ' + userId);
    var result = await getFromServer(query, values);
    console.log(result);

    res.send(result);
});

// get seller id from order_id
router.get('/order/getSellerId/:id', async (req, res) => {
    let orderId = req.params.id;
    let query = "SELECT s_id FROM eorder WHERE id = ?";
    let values = [orderId];
    
    var result = await getFromServer(query, values);

    res.send(result[0].data);
});

// transaction request

module.exports = router;