const Sequelize = require('sequelize')
const db = require('../config/database')

const Siswa = db.define('siswa', {
  siswa_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  nama: {
    type: Sequelize.STRING
  },
  no_absen: {
    type: Sequelize.INTEGER
  }

}, {
  timestamps: false,
  underscored: true,
  freezeTableName: true,
  tableName: 'siswa'
})

module.exports = Siswa
