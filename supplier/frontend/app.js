const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const axios = require("axios");

var history;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(5000, function () {
    console.log("Server started on port 5000");
});
app.get("/", (req, res) => {
    res.render("login", {page_name: 'Order History'});
});

app.post("/login", async(req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password);
    

    var result = await axios.post(`http://localhost:6010/api/supplier/login`, {username, password});
    
    console.log(result.data);
    if (result.data.message === 'success') {
        console.log("id: ", result.data.id);
        var id = result.data.id;

        console.log(id);
        history = await axios.post(`http://localhost:6010/api/supplier/order/all`, {id});
        console.log(history.data);
        res.render("supplier", {username: result.data.username, name: result.data.name, 
            id: result.data.id, history: history.data, page_name: 'Order History'});
    } else {    
        console.log("fail");
        res.redirect("/");
    }
});

app.post("/home", async(req, res) => {
    var username = req.body.username;
    var name = req.body.name;
    var id = req.body.id;

    console.log(username, name, id);

    var history = await axios.post(`http://localhost:6010/api/supplier/order/all`, {id});
    console.log(history.data);
    res.render("supplier", {username: username, name: name, 
        id: id, history: history.data, page_name: 'Order History'});
});

app.post("/accept", async(req, res) => {
    var order_id = req.body.order_id;
    var username = req.body.username;
    var name = req.body.name;

    console.log(order_id);

    var result = await axios.post(`http://localhost:6010/api/supplier/order/accept`, {order_id});
    console.log(result.data);

    console.log('inside accept');

    var id = result.data;
    history = await axios.post(`http://localhost:6010/api/supplier/order/all`, {id});
    console.log(history.data);
    res.render("supplier", {username: result.data.username, name: name, 
        history: history.data, page_name: 'Order History'});
    // res.render("supplier", {username: username, name: name, history: history});
});

app.post("/cancel", async(req, res) => {
    var order_id = req.body.order_id;
    var username = req.body.username;
    var name = req.body.name;

    console.log(order_id);

    var result = await axios.post(`http://localhost:6010/api/supplier/order/cancel`, {order_id});
    console.log(result.data);
    
    // get s_id from result.data
    

    var id = result.data;
    history = await axios.post(`http://localhost:6010/api/supplier/order/all`, {id});
    console.log(history.data);
    res.render("supplier", {username: username, name: name, 
        history: history.data, page_name: 'Order History'});
});