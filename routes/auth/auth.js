var bcrypt = require('bcrypt');
module.exports = (app, Users, rndstring)=>{
  app.post('/signup', async(req,res)=>{
    var data = req.body;
    bcrypt.hash(req.body.pw, 10, function(err, hash) {
      if(err) return res.status(409).json({message:err.message});
      data.pw = hash;
      data.permission = 'A';
      var user = new Users(data);
      var result = user.save();
      return res.status(200).json(result);
    });
  })
  .post('/signin', async(req,res)=>{
    var user = await Users.find({id: req.body.id});
    console.log(req.body.pw);
    bcrypt.compare(req.body.pw, user[0].pw, function(err, result) {
      if(result) {
        user[0].isLogined = true;
        Users.updateOne({id: user[0].id}, user[0],
        function (err, res) {
            if(err) console.log(err);
        });
        return res.status(200).json({message: "success"});
      } else {
        return res.status(400).json({message: 'e.message'});
      }
    });
  })
  .post('/delUser', async (req,res)=>{
    var result = await Users.deleteOne({id : req.body.id });
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    else return res.status(200).json({message : "success!"})
  })
  .post('/aa', async(req,res)=>{
    var result = await Users.find()
    res.send(result)
  })
  .post('/logout', async(req, res) => {
    var result = await Users.findOne(req.body);
    result.isLogined = false;
    if(!result) {
      return res.status(400).json({message: "invaild id or passwd"});
    }
    else{
      Users.updateOne({token: result.token}, result,
      function (err, res) {
          if(err) console.log(err);
      });
      return res.status(200).json({message: "success"});
    }
  });

};
