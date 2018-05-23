var mysql = require('mysql');
var express = require('express');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

var selectAll = function(callback) {
    connection.query('SELECT * FROM items', function(err, results, fields) {
        if (err) {
            console.log(err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};
/* UNDER CONSTRUCTION
app.post('/users', function(req, res) {
    // Get sent data.
    var user = req.body;
    // Do a MySQL query.
    var query = connection.query('INSERT INTO users SET ?', user, function(err, result) {
        // Neat!
    });
    res.end('Success');
});

module.exports.selectAll = selectAll;
*/