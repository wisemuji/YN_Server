const mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient;
var Binary = require('mongodb').Binary;

mongoose.connect('mongodb://localhost/yn', { useNewUrlParser: true }).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("Mongo On"); });

module.exports = db;
