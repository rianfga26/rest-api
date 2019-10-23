var express = require('express')
var pelajaran = require('../models/mata_pelajaran')
var router = express.Router()

router.get('/', (req, res, next) => {
    return pelajaran.findAll()
        .then(function (data) {
            return res.json({
                'status': 200,
                'message': 'OK',
                'data': data
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

router.post('/', (req, res, next) => {
    return pelajaran.create({
        mata_pelajaran_id: '',
        pelajaran : req.body.pelajaran
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
    return pelajaran.destroy({
        where: {
            mata_pelajaran_id: req.body.id
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
    return pelajaran.update({
        pelajaran: req.body.pelajaran
    }, {
        where: {
            mata_pelajaran_id: req.body.id
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

router.get('/:id', (req, res, next) => {
    return pelajaran.findAll({
        where: {
            mata_pelajaran_id: req.params.id
        }
    })
        .then(data => {
            res.json({
                'siswa_id': req.params.id,
                'message': 'OK',
                'data': data
            })

            if (req.params.id === String) {
                res.sendStatus(400)
            }
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
})

module.exports = router
