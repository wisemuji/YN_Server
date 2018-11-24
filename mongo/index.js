import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/yn', { useNewUrlParser: true }).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("Mongo On"); });

var GroupSchema = mongoose.Schema({
  email: {type: String}, //
  token: {type: String},
  passwd: {type: String}, //
  name: {type: String}, //
  users: [{
    token: {type: String} //
  }]
});

var FileSchema = mongoose.Schema({
  file: {type: Blob}, //
  comment: {type: String} //
});

var UserSchema = mongoose.Schema({
  id: { type: String }, //
  token: {type: String},
  pw : {type : String}, //
  name: { type: String }, //
  permission: { type: String, enum : ['D','A','GM'] }, //
  groups: [{
    token: {type: String} //
  }]
});

require('./err')(GroupSchema, FileSchema, UserSchema);

var Groups = mongoose.model("groups", GroupSchema);
var Files = mongoose.model("files", FileSchema);
var Users = mongoose.model("users", UserSchema);

export {Groups, Files, Users};

export default db;
