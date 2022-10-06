const db = require('../models')
const Tutorial = db.tutorials
const Op = db.Sequelize.Op

// Create and Save new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content cannot be empty!"
        })

        return
    }

    // Create a Tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    // Save a Tutorial in the Database
    tutorial.create(tutorial)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            })
        })
}

// Retrieve All tutorials from the database
exports.findAll = (req, res) => {
    const title = req.body.query
    var condition = title ? { title: { [Op.like]: `%${title}%` }} : null

    Tutorial.findAll({ where: condition })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Tutorial."
            })
        })
}

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id

    Tutorial.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `Cannot find Tutorial with id=${id}.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });
}

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id

    Tutorial.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if ( num  == 1 ) {
                res.send({
                    message: "Tutorial was updated succesfully"
                })
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                })
            }
        })
        .catch(err => {
            res.send({
                message: "Error updating Tutorial with id=" + id
            })
        })
}

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

}

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

}

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

}