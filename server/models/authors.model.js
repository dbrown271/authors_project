const mongoose = require("mongoose")

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be at least 3 characters long!"]
    },
})

const Authors = mongoose.model("Authors", AuthorsSchema)

module.exports = Authors;