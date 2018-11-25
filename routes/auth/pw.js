module.exports = (app, Users, rndstring)=>{
  app.post('/changepw', async(req,res)=>{
    var result = await Users.findOne({id: req.body.id});
    result.pw = req.body.pw;
    if(!result) {
      return res.status(400).json({message: "invaild id or passwd"});
    }
    else{
      Users.updateOne({id: result.id}, result,
      function (err, res) {
          if(err) console.log(err);
      });
      return res.status(200).json({message: "success"});
    }
  })
  .post('/findpw', async(req,res)=>{
    var result = await Users.findOne({id: req.body.id});
    if(!result) {
      return res.status(400).json({message: "invaild id or passwd"});
    }
    else{
      return res.status(200).json({pw: result.pw});
    }
  })
};
