const Sequelize = require('sequelize')
const db = require('../config/database')

const MataPelajaran = db.define('mata_pelajaran', {
    mata_pelajaran_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    pelajaran: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'mata_pelajaran'
})

module.exports = MataPelajaran
