const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema({
	name: {type:String, required:[true, "name is required"]},
	type: {type:String, required:[true, "type is required"], minLength:[3,"Please send more than 3 characters"]},
	description: {type:String, required:[true, "description is required"], minLength:[3,"Please send more than 3 characters"]},
	skill1: {type:String,},
	skill2: {type:String,},
	skill3: {type:String,},
	likes: {type:Number,},
},{timestamps:true});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;