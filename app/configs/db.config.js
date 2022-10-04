require('dotenv').config()

module.exports = {
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD || '',
    DB: process.env.DB_NAME,
    dialect: 'mysql',
    pool: {
        max: 3,
        min: 0,
        acquire: 30000, //ms
        idle: 10000, //ms
    },
    dialectOptions: {
        socketPath: process.env.INSTANCE_CONNECTION_NAME
    }
}