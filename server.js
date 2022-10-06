const express   = require('express')
const app       = express()
const cors      = require('cors')

// Import Module
const db        = require('./app/models')

// Test Connection to Sync Database
// In development, you may need to drop existing tables and re-sync database
db.sequelize.sync({ force: true })
    .then(() => {
        console.log("Drop and re-sync db");
    })
    .catch((error) => {
        console.error("Failed to sync to DB", error)
    })

// Middleware
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
        res.status(200).json({ 
            status: 'success',
            message: 'Welcome to tediApp'
        })
        console.log('ping success to database')
})

PORT = parseInt(process.env.PORT) || 8080
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})