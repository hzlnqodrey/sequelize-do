module.exports = app => {
    const controller_tutorial = require('../controllers/tutorial.controller')

    const router = require("express").Router()

    // Route to Create a new Tutorial controller
    router.post('/', controller_tutorial.create)

    // Route to Retrieve all the Tutoruals controller
    router.get('/', controller_tutorial.findAll)

    // Route to Retrieve a single Tutorial with Id given
    router.get('/:id', controller_tutorial.findOne)

    // Route to Retrieve all published tutorials
    router.get('/publushed', controller_tutorial.findAllPublished)

    // Route to Update a Tutorial with Id given
    router.put('/:id', controller_tutorial.update)

    // Route to Delete a tutorial with Id given
    router.delete('/:id', controller_tutorial.delete)

    // Route to Delete all Tutorials
    router.delete('/', controller_tutorial.deleteAll)

    // Use custom route by chaining to our defined routers
    app.use('/api/tutorials', router)
}