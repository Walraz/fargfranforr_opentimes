var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyParser.json());

var config = {
  host: process.env.DATABASE_URL,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
};

var conn = mysql.createConnection(config);

app.get('/opentimes', function (req, res) {
  conn.query('SELECT * FROM fargfranforr', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
})

app.put('/shop', function (req, res) {
  conn.query('UPDATE fargfranforr SET shop=?', [req.body.text], function (error, results, fields) {
    if (error) throw error;
    res.sendStatus(201);
  });
})

app.put('/cafe', function (req, res) {
  conn.query('UPDATE fargfranforr SET cafe=?', [req.body.text], function (error, results, fields) {
    if (error) throw error;
    res.sendStatus(201);
  });
})

app.listen(process.env.PORT || 3000, function () {})
