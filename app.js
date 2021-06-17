const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();
const axios = require('axios')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var age = req.body.age;
  var sex = req.body.sex;
  var bmi = req.body.bmi;
  var children = req.body.children;
  var smoker = req.body.smoker;
  var region = req.body.region;
  var i1 = age;
  var i2;
  if(sex == "F") {
    i2 = 0;
  }
  else {
    i2 = 1;
  }
  var i3 = bmi;
  var i4 = children;
  var i5;
  if(smoker == "NO") {
    i5 = 0;
  }
  else {
    i5 = 1;
  }
  var i6;
  var i7;
  var i8;
  if(region == "North East") {
    i6 = 0;
    i7 = 0;
    i8 = 0;
  }
  else if (region == "North West") {
    i6 = 1;
    i7 = 0;
    i8 = 0;
  }
  else if (region == "South East") {
    i6 = 0;
    i7 = 1;
    i8 = 0;
  }
  else {
    i6 = 0;
    i7 = 0;
    i8 = 1;
  }
  var pdata = i1 + "," + i2 + "," + i3 + "," + i4 + "," + i5 + "," + i6 + "," + i7 + "," + i8;
  console.log(pdata);
  function axiosTest() {
    return axios.post('https://utk09mf3wb.execute-api.us-east-2.amazonaws.com/Testing/insurancepremium4165', {
      data: pdata
    }).then(response => response.data)
  }
  axiosTest().then(data => {
      res.render('result.ejs', {result: data});
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
