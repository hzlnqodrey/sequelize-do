const dbConfig = require('../configs/db.config')
const Sequelize = require('sequelize')

// Create Sequelize instance
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, 
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        port: dbConfig.port,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
        dialectSocket: {
            socketPath: dbConfig.dialectOptions.socketPath
        },
        operatorAliases: false,
        define: {
            freezeTableName: true
        }
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize)

module.exports = db
