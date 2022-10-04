const express   = require('express')
const app       = express()
const Sequelize = require('sequelize')
const cors      = require('cors')

// Import Module
const config    = require('./app/configs/db.config.js')
const db        = require('./app/models')

// Sync Database - Development | dont use this when production
db.sequelize.sync({ force: true })
    .then(() => {
        console.log("Drop and re-Synced to DB.");
    })

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    try {
        // res.send('ping success to database')
        res.status(200).json({ 
            db_host: config.HOST,
            db_username: config.USER,
            db_pass: config.PASSWORD,
            db_name: config.DB,
            status: 'success',
        })
        console.log('ping success to database')
    } catch (error) {
        console.error('error while trying to connect to database')
        res.status(404).json({ message: 'error while trying to connect to database' })
    }
})

PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
})