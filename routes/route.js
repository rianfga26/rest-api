'use strict'

module.exports = function (app) {
  var ruangan = require('./ruangan')
  var mata_pelajaran = require('./mata_pelajaran')
  var siswa = require('./siswa')
  var express = require('express')
  var router = express.Router()

  app.use('/siswa', siswa)
  app.use('/ruangan', ruangan)
  app.use('/mata-pelajaran', mata_pelajaran)
  app.get('/', (req, res) => res.send('coba'))
}
