var express = require('express');
var router = express.Router();
module.exports = function(app, Users){
  app.get('/loginedUsers', function (req, res) {
     Users.find({isLogined: true}).sort({name:-1}).exec(function(err, rawContents){ //정렬
       if(err) throw err;
       rawContents.aggregate([{id: '$id'}]);
       return res.status(200).json(rawContents);
      });
  })
}
