const express = require('express')
const app = express()
const Sequelize = require('sequelize')
const config = require('./app/configs/db.config.js')

// DATABASE CONNECTION

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

app.get('/', (req, res) => {
    try {
        // res.send('ping success to database')
        res.status(200).json({ 
            message: process.env.DB_HOST,
            status: 'success',
            process: process.env
        })
        console.log('ping success to database')
    } catch (error) {
        console.error('error while trying to connect to database')
        res.status(404).json({ message: 'error while trying to connect to database' })
    }
})


sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully')
    })
    .catch((error) => {
        console.error('Unable to connect to the database: ', error)
    })

// Ping Database
const pingConnection = async () => {
    try {
        await db.sequelize.authenticate()
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
pingConnection()

PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
})