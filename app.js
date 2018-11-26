const express = require("express");
const bodyParser = require("body-parser");
const rndstring = require("randomstring");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const multer = require('multer');
var upload = multer({dest:'./tmp/'}); // multer 경로 설정, 파일이 업로드 되면 먼저 임시 폴더에 저장됨

//서버 생성
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  limit: '1gb',
  extended: false
}));

//module setting
var Users = require("./mongo/users");
var Groups = require("./mongo/groups");
var Files = require("./mongo/files");
const db = require("./mongo");


//서버 실행
const PORT = 10004;
app.listen(PORT, function(){
  console.log('server running');
});

require('./routes/auth/auth')(app, Users, rndstring);
require('./routes/upload/upload')(app, Groups, Files, rndstring);
require('./routes/auth/pw')(app, Users, rndstring);
require('./routes/group/setGroup')(app, Groups, Users, rndstring);
require('./routes/index')(app, Users);
