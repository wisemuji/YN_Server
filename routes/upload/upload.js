var MongoClient = require('mongodb').MongoClient;
var Binary = require('mongodb').Binary;
const fs = require("fs");
const multer = require("multer");
var file_path = 'uploads/'
const upload = multer({ dest: file_path });

module.exports = (app, Groups, Files, rndstring)=>{
  app.post('/upfile', upload.single('file'), async(req,res)=>{
    res.send('Uploaded! : '+req.file); // object를 리턴함
    console.log(req.file);
    var data = fs.readFileSync(req.file.path);
    var insert_data = {};
    insert_data.file = Binary(data);
    insert_data.name = req.body.originalname;
    insert_data.group_name = req.body.group_name;
    Groups.findOne({group_name: req.body.group_name}, function (err, documents) {
      if(!documents.includes(req.body.id)) return res.status(404).json({message: 'not in group'});
    });
    insert_data.comment = req.body.comment;
    var file = new Files(insert_data);
    try {
      var result = await file.save();
    }catch(e){
      if(e instanceof user_duplicate) return res.status(409).json({message:"already exist"});
      if(e instanceof ValidationError) return res.status(400).json({message: e.message});
      if(e instanceof paramsError) return res.status(400).json({message: e.message});
    }
    Files.findOne({token: insert_data.token}, function (err, documents) {
      console.log(documents);
    });
  })
  .post('/downfile', async(req,res)=>{
    Files.findOne({name: req.body.filename}, function (err, documents) {
      Group.findOne({title: documents[0].group_name}, function (err, docu){
        if(!docu) res.status(404).json({message: 'not in group'});
      });
      res.status(200).send(documents[0].file.buffer);
    });
  });

};
