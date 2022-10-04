require('dotenv').config()

module.exports = {
    HOST: process.env.DB_HOST || '127.0.0.1',
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD || '',
    DB: process.env.DB_NAME,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    pool: {
        max: 3,
        min: 0,
        acquire: 30000, //ms
        idle: 10000, //ms
    },
}