const Author = require("../models/author.model");

module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => {
            res.json({ results: allAuthors })
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => {
            res.json({ results: newAuthor })
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(foundAuthor => {
            res.json({ results: foundAuthor })
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            res.json({ results: updatedAuthor })
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deletedAuthor => {
            res.json({ results: deletedAuthor })
        })
        .catch(err => {
            res.json({ err: err })
        })
}