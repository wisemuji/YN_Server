var bcrypt = require('bcrypt');
module.exports = (app, Users, rndstring)=>{
  app.post('/changepw', async(req,res)=>{
    console.log(req.body);
    var new_pw;
    bcrypt.hash(req.body.pw, 10, function(err, hash) {
      new_pw = hash;
    });
    Users.updateOne({id: req.body.id}, {pw: hash},
    function (err, res) {
        if(err) console.log(err);
    });
    return res.status(200).json({message: "success"});
  });
  // .post('/findpw', async(req,res)=>{
  //   var result = await Users.findOne({id: req.body.id});
  //   if(!result) {
  //     return res.status(400).json({message: "invaild id or passwd"});
  //   }
  //   else{
  //     return res.status(200).json({pw: result.pw});
  //   }
  // })
};
