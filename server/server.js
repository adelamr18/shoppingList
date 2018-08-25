var express = require('express');
var app1 = express();
var cors = require('cors');
var fs = require("fs");

const bodyParser = require("body-parser");
app1.use(bodyParser.urlencoded({
    extended: true
}));
app1.use(bodyParser.json());
app1.use(cors());
app1.get('/api/products', function (req, res) {
    res.json(JSON.parse(fs.readFileSync("./data.json", { encoding: 'utf-8' })));
})
    .listen(3000);