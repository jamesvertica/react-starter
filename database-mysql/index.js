var mysql = require('mysql');
// var express = require('express');
// var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
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
app.post('/', function(req, res) {
    var user = req.body;
    var query = connection.query('INSERT INTO items ('description', quantity) values (input.val(), 1), user, function(err, result) {
    });
    res.end('Success');
});
*/

module.exports.selectAll = selectAll;