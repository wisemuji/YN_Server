var MongoClient = require('mongodb').MongoClient;
var Binary = require('mongodb').Binary;

module.exports = (app, Users, rndstring)=>{
  app.post('/upload', async(req,res)=>{
    var data = fs.readFileSync(file_path);
    var insert_data = {};
    insert_data.file_data= Binary(data);
    Files.insert(insert_data, function(err, result){
      console.log(insert_data);
    });
  })

};
