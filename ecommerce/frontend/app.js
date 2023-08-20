const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const axios = require("axios");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const api = "http://localhost:4000/api/";

app.get("/", (req, res) => {
    res.render("login");
});

app.post("/login", async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password);
    
    var result = await axios.post(`http://localhost:4000/api/ecomm/user/login`, {username, password});
    
    console.log(result.data);

    if(result.data.data === 'success' && result.data.bank_stat === 1) {
        console.log("inside add bank from login");
        res.render("addBank", {username: result.data.username, name: result.data.name, 
            bankStat: result.data.bank_stat, bankAcc: result.data.bank_ac});
    }
    if (result.data.data === 'success') {
        console.log("success");
        res.render("home", {username: result.data.username, name: result.data.name, 
            bankStat: result.data.bank_stat, bankAcc: result.data.bank_acc});
    } else {    
        console.log("fail");
        res.redirect("/");
    }
});

app.post("/addBank", async(req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const bankAcc = req.body.bankAcc;
    const key = req.body.key;

    console.log(username, bankAcc);
    var result = await axios.post(`http://localhost:4000/api/ecomm/user/addBank`, {username, name, bankAcc, key});
    
    console.log(result.message);
    console.log(result.data.message);

    if (result.data.message === 'success') {
        res.render("home", {username: username, name: name, bankAcc: bankAcc});
    } else {
        res.render("addBank", {username: username, name: name, bankAcc: bankAcc});
    }
});

app.get("/history", (req, res) => {
    res.render("history");
});

app.post("/history", async(req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    console.log(username, name);
    var result = await axios.post(`http://localhost:4000/api/ecomm/order/list`, {username, name});

    console.log(result.data);

    res.render("history", {username: username, name: name, history: result.data});
    
});

app.post("/pay", async(req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const key = req.body.key;
    const sellerID = req.body.seller_id;
    const orderID = req.body.orderID;

    console.log(orderID);

    var result = await axios.post(`http://localhost:4000/api/ecomm/user/getInfo`, {username});
    console.log(result.data);
    const from = result.data.bank_acc;

    if(key === result.data.key) {
        try {
        var result = await axios.post('http://localhost:6010/api/supplier/getBankAcc/', {sellerID});
        console.log(result.data);
        const to = result.data[0].bank_acc;
        
        console.log('order id: ', orderID);
        result = await axios.post('http://localhost:4000/api/ecomm/order/details', {orderID});
        console.log(result.data);
        
        const amount = result.data[0].price;

        console.log(from, to, amount);

        result = await axios.post('http://localhost:3000/api/bank/transaction', {from, to, amount});
        console.log('bank transaction');
        } catch(error) {
            console.log(error);
        }

        query = "UPDATE eorder SET state = 3 WHERE id = ?";
        values = [orderID];
        
        result = await axios.post(`http://localhost:4000/api/ecomm/order/update`, {query, values});

        var result = await axios.post(`http://localhost:4000/api/ecomm/order/list`, {username, name});

        console.log(result.data);

        res.render("history", {username: username, name: name, history: result.data});
    }
});

app.get("/home", (req, res) => {
    res.render("home");
});

// place order
app.post("/placeOrder", async(req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const price = parseInt(req.body.total);

    console.log(username, name, price);
    var result = await axios.post(`http://localhost:4000/api/ecomm/order/make`, {username, name, price});

    if(result.message === 'success') {
        console.log("success");
        res.render("home", {username: username, name: name});
    } else {
        res.render("home", {username: username, name: name});
    }
});

app.listen(8999, function () {
    console.log("server is running on port 8999");
});


// var imgDir = "./images/" + toString(id) + ".png";