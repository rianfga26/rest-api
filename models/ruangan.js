const Sequelize = require('sequelize')
const db = require('../config/database')

const Ruangan = db.define('ruangan', {
    ruangan_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nama_kelas: {
        type: Sequelize.STRING
    }

}, {
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'ruangan'
})

module.exports = Ruangan
