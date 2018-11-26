module.exports = (app, Users, rndstring)=>{
  app.post('/signup', async(req,res)=>{
    var user = new Users(req.body);
    user.permission = 'A';
    try {
      var result = await user.save();
    }catch(e){
      if(e instanceof user_duplicate) return res.status(409).json({message:"already exist"});
      if(e instanceof ValidationError) return res.status(400).json({message: e.message});
      if(e instanceof paramsError) return res.status(400).json({message: e.message});
    }
    return res.status(200).json({message: "success"});
  })
  .post('/signin', async(req,res)=>{
    console.log(req.body);
    var result = req.body;
    result.isLogined = true;
    Users.updateOne({id: result.id}, result,
    function (err, res) {
        if(err) console.log(err);
    });
    return res.status(200).json({message: "success"});
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
