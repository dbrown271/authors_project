const Authors = require("../models/authors.model")


module.exports.findAllAuthors = (req, res) => {
    Authors.find()
        .then(allAuthors => {
            res.json({results: allAuthors})
        })
        .catch(err => res.json({err}))
}


module.exports.createAuthor = (req, res) => {
    Authors.create(req.body)
    .then(createAuthor => {
            res.json({results: createAuthor})
    })
    .catch(err => res.json({err}))
}

module.exports.findOneAuthor = (req, res) => {
    Authors.findOne({_id:req.params.id})
        .then(foundAuthor => {
            res.json({results: foundAuthor})
        })
        .catch(err => res.json({err}))
}

module.exports.updateAuthor = (req, res) => {
    Authors.findOneAndUpdate({_id: req.params._id}, req.body)
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json({message: "Something Went Wrong With Updating One Author", err: err}))
}


module.exports.deleteAuthor = (req, res) => {
    Authors.deleteOne({_id: req.params._id})
        .then(deletedAuthor => res.json(deletedAuthor))
        .catch(err => res.json({message: "Something Went Wrong With Deleting One Author", err: err}))
}