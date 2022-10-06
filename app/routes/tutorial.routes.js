module.exports = app => {
    const controller_tutorial = require('../controllers/tutorial.controller')

    const router = require("express").Router()

    // Route to Create a new Tutorial controller
    router.post('/', controller_tutorial.create)

    
    // Use custom route by chaining to our defined routers
    app.use('/api/tutorials', router)
}