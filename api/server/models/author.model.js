const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema({
	title: {type:String, required:[true, "Title is required"], minLength:[3,"Please send more than 3 characters"]},
},{timestamps:true});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;