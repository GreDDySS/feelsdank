const mongoose = require("mongoose");

const SuggestSchema = new mongoose.Schema({
    author: String,
    message: String,
    date: String,
})

module.exports = mongoose.model("Suggest", SuggestSchema, "Suggests")