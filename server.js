var express = require('express')
var app = express()
var port = 3000
var bodyParser = require('body-parser')
var db = require('./config/database')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// cek koneksi
db.authenticate()
  .then(() => console.log('database connetion successfull'))
  .catch((err) => console.error(err))

var routes = require('./routes/route')
routes(app)

app.listen(port)
console.log('server is running on port : ' + port)
