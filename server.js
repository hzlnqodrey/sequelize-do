const express   = require('express')
const app       = express()
const Sequelize = require('sequelize')
const cors      = require('cors')

// Import Module
const db        = require('./app/models')

// Test Connection to Database
const pingDatabase = async () => {
    try {
        await db.sequelize.authenticate()
        console.log('Connection has been established successfully')
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
pingDatabase()

// Middleware
var corsOptions = {
    origin: "http://localhost:8000"
};
app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
        res.status(200).json({ 
            // db_host: config.HOST,
            // db_username: config.USER,
            // db_pass: config.PASSWORD,
            // db_name: config.DB,
            status: 'success',
            message: 'Welcome to tediApp'
        })
        console.log('ping success to database')
})

PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
})