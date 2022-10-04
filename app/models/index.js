const dbConfig = require('../configs/db.config')
const Sequelize = require('sequelize')

// Create Sequelize instance
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, 
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false, // String based operator alias. Pass object to limit set of aliased operators. Ref: https://www.w3schools.com/sql/sql_alias.asp#:~:text=SQL%20aliases%20are%20used%20to,created%20with%20the%20AS%20keyword.
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
        dialectOptions: {
            socketPath: dbConfig.HOST
        },
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
