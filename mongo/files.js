const mongoose = require("mongoose");
var Binary = require('mongodb').Binary;

var FilesSchema = mongoose.Schema({
  file: {type: Buffer}, //
  name: {type: String}, //
  comment: {type: String}, //
  token: {type: String}, //
});

require('./err')(FilesSchema);
module.exports =  mongoose.model("files", FilesSchema);
