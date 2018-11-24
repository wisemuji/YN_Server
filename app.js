const express = require("express");
const bodyParser = require("body-parser");
const rndstring = require("randomstring");
const mongoose = require("mongoose");

//서버 생성
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  limit: '1gb',
  extended: false
}));

//module setting
import { Groups, Files, Users } from './mongo';
require('./func')

//서버 실행
const PORT = 10004;
app.listen(PORT, function(){
  console.log('server running');
});

require('./routes/auth/auth')(app, Users, rndstring);
