module.exports = (app, Groups, Users, rndstring)=>{
  app.post('/setGroup', async (req,res)=>{
    const data = req.body;
    Groups.findOneAndUpdate({title: data.title}, data, {upsert:true, new: true},
    function (err, res) {
        if(err) console.log(err);
    });
    return res.status(200).json({message: "success"});
  })
  .post('/delGroup', async (req,res)=>{
      Groups.remove({title: req.body.title}, function(err) {
            if (err) {
                console.log(err)
            } else {
                res.end('success');
            }
          }
      );
  })
  .post('/bb', async (req,res)=>{
    var result = await Groups.find()
    res.send(result)
  })
  .post('/addmaster', async (req,res)=>{
    Users.updateOne({id: req.body.id}, {permission: 'D'},
    function (err, res) {
        if(err) console.log(err);
    });
    return res.status(200).json({message: "success"});
  });
};
