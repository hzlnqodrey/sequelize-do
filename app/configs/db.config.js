require('dotenv').config()

module.exports = {
    HOST: process.env.INSTANCE_CONNECTION_NAME,
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD || '',
    DB: process.env.DB_NAME,
    port: process.env.DB_PORT,
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