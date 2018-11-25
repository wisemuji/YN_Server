const mongoose = require("mongoose");

var GroupsSchema = mongoose.Schema({
  title: {type: String}, //
  users: [{
    id: {type: String} //
  }]
});

require('./err')(GroupsSchema);
module.exports =  mongoose.model("groups", GroupsSchema);
