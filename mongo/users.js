const mongoose = require("mongoose");

var UsersSchema = mongoose.Schema({
  id: { type: String }, //
  pw : {type : String}, //
  name: { type: String }, //
  isLogined: { type: Boolean }, //
  permission: { type: String, enum : ['D','A'] }
});


require('./err')(UsersSchema);
module.exports =  mongoose.model("users", UsersSchema);
