const mongoose = require("mongoose");
var Binary = require('mongodb').Binary;

var FilesSchema = mongoose.Schema({
  file: {type: Buffer}, //
  name: {type: String}, //
  comment: {type: String}, //
  group_name: {type: String}, //
});

require('./err')(FilesSchema);
module.exports =  mongoose.model("files", FilesSchema);
