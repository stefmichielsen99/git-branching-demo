var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hallo Wereld')
})

app.get('/api/helloworld', function (req, res) {
  res.status(200).json({
    message: 'Hello world'
  }).end()
})

app.get('/random', function (req, res) {

  let list = ["bye", "cya", "challas", "doei", "daag", "de meur", "trusten", "goodnight!"];
  let random = list[Math.floor(Math.random() * list.length)];
  res.status(200);
  res.json({
    message: random
  })
})
 
app.listen(3000)