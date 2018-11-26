var express = require('express');
var router = express.Router();
var loginedUsers = [];
module.exports = function(app, Users){
  app.get('/loginedUsers', function (req, res) {
     Users.find({isLogined: true}).sort({name:-1}).exec(function(err, rawContents){ //정렬
       if(err) throw err;
       rawContents.forEach(function(element) {
        loginedUsers.push(element.id);
      });
      console.log(loginedUsers);
       return res.status(200).send(loginedUsers);
      });
  })
}
