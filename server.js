const Sequelize = require('sequelize')
const config = require('./app/configs/db.config.js')

// Create Sequelize instance
const sequelize = new Sequelize(
    config.DB, config.USER, config.PASSWORD, 
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorAliases: false, // String based operator alias. Pass object to limit set of aliased operators. Ref: https://www.w3schools.com/sql/sql_alias.asp#:~:text=SQL%20aliases%20are%20used%20to,created%20with%20the%20AS%20keyword.
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
)