const mongoose = require("mongoose")

const db_name = "authors_db"
mongoose.connect('mongodb://localhost/authors_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Found Mongoose"))
    .catch(err => console.log("lost mongoose"))