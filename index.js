var express = require('express')
var app = express()

var Visitas = require('./app/models/visitas');


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

