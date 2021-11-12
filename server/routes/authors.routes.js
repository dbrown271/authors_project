const AuthorsController = require("../controllers/authors.controllers")


module.exports = app => {
    app.get("/api/authors", AuthorsController.findAllAuthors)

    app.post("/api/authors", AuthorsController.createAuthor)

    app.get("/api/authors/:id", AuthorsController.findOneAuthor)

    app.put("/api/authors/update/:_id", AuthorsController.updateAuthor)

    app.delete("/api/authors/delete/:_id", AuthorsController.deleteAuthor)

}