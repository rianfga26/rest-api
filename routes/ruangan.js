var express = require('express')
var ruangan = require('../models/ruangan')
var router = express.Router()

router.get('/', (req, res, next) => {
   return ruangan.findAll()
    .then(function(data){
      return res.json({
          'status': 200,
          'message': 'OK',
          'data': data
        })
    })
  .catch((err) => {
    res.json({
        'status' : 400,
        'message' : err,
        'data' : {}
      })
  })
  
  next()
})

router.post('/', (req, res, next) => {
  return ruangan.create({
    ruangan_id : '',
    nama_kelas : req.body.nama
  })
    .then(function (data) {
      return res.json({
        'status': 200,
        'message': 'Success Create',
      })
    })
    .catch((err) => {
      res.json({
        'status': 400,
        'message': err,
        'data': {}
      })
    })

  next()
})

router.delete('/', (req, res, next) => {
    return ruangan.destroy({
    where : {
      ruangan_id : req.body.id
    }
  })
    .then(function (data) {
      return res.json({
        'status': 200,
        'message': 'Delete Successfull',
      })
    })
    .catch((err) => {
      res.json({
        'status': 400,
        'message': err,
        'data': {}
      })
    })

  res.end()
});

router.put('/', (req, res, next) => {
    return ruangan.update({
      nama_kelas : req.body.no_absen
    },{
    where : {
      ruangan_id : req.body.id
    }
  })
    .then(function (data) {
      return res.json({
        'status': 200,
        'message': 'Update is Successfull',
      })
    })
    .catch((err) => {
      res.json({
        'status': 400,
        'message': err,
        'data': {}
      })
    })
});

router.get('/:id', (req,res,next) => {
      return ruangan.findAll({
        where : {
          ruangan_id : req.params.id
        }
      })
        .then(data =>{ res.json({
          'siswa_id' : req.params.id,
          'message' : 'OK',
          'data' : data
            })  
        })
          .catch(err => {
            console.log(err)
            res.sendStatus(500)
          })
   })

module.exports = router
