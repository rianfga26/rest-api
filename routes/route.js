'use strict';

    var response = require('./res');
    var connection = require('./conn');

exports.users = (req, res) => {
    connection.query('SELECT * FROM siswa', (error, rows, fields) => {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

exports.index = (req, res) => {
    response.ok("hello from the Node JS RESTfull API Side", res);
};

exports.updateUser = (req, res) => {

    var nama = req.body.nama,
        no_absen = req.body.no_absen,
        siswa_id = req.body.siswa_id;

    connection.query("update siswa set nama='" + nama + "',no_absen=" + no_absen + " where siswa_id=" + siswa_id + "", (error, rows, fields) => {
        if (error) {
            console.log(error);
        } else {
            response.ok("Data Berhasil Di Update", res);
        }
    });

};

exports.tambah = (req, res) => {
    var nama = req.body.nama,
        no_absen = req.body.no_absen;

    connection.query("INSERT INTO siswa VALUES('','" + nama + "'," + no_absen + ")", (error, rows, fields) => {
        if (error) {
            console.log(error);
        } else {
            response.ok('Sukses Menambah Siswa', res);
        }
    });

};


exports.hapus = function (req, res) {
    var siswa_id = req.body.siswa_id;

    var id = connection.query('SELECT siswa_id FROM siswa WHERE siswa_id=' + siswa_id, function () {
        return connection;
    });
    connection.query('DELETE FROM siswa WHERE siswa_id=' + siswa_id, function (error, rows, fields) {
        if (error) {
            response.error('data gagal di hapus', res);
        } else {
            response.ok('data berhasil di hapus!', res);
        }


    });
};