var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var config = {
  host: 'sql8.freemysqlhosting.net',
  user: 'sql8162399',
  password: 'A172SKU8P8',
  database: 'sql8162399'
};

var conn = mysql.createConnection(config);

app.get('/opentimes', function (req, res) {
  conn.query('SELECT * FROM fargfranforr', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
})

app.put('/shop', function (req, res) {
  conn.query('UPDATE fargfranforr SET shop=' + req.body.text, function (error, results, fields) {
    if (error) throw error;
    res.sendStatus(201);
  });
})

app.put('/cafe', function (req, res) {
  conn.query('UPDATE fargfranforr SET cafe=' + req.body.text, function (error, results, fields) {
    if (error) throw error;
    res.sendStatus(201);
  });
})

app.listen(process.env.PORT || 3000, function () {})