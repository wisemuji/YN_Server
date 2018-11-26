const mongoose = require("mongoose");

var UsersSchema = mongoose.Schema({
  id: { type: String }, //
  pw : {type : String}, //
  name: { type: String }, //
  isLogined: { type: Boolean }, //
  permission: { type: String, enum : ['D','A'] } //D가 그룹장, A가 평민
});


require('./err')(UsersSchema);
module.exports =  mongoose.model("users", UsersSchema);
