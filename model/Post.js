const mongoose = require("mongoose");
const { Schema } = mongoose;
const PostSchema = new Schema({
	 userId: {
	 	type: String
	 },
     username: {
     	type: String,
     	required: true,
     	unqiue: true
     },
     profileImage: {
     	type: String,
     },
     message: {
     	type: String
     },
     emoji: {
          type: String
     }    	
},{  timestamps: true });


module.exports = mongoose.model("Post",PostSchema);