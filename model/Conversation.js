const mongoose = require("mongoose");
const { Schema } = mongoose;
const ConversationSchema = new Schema({
	members:[
	   {
	   	 type: mongoose.Schema.Types.ObjectId,
		 ref: "User"
	   }
	],
	lastMessage: {
		type: String,
		default: ""
	}
},{ timestamps: true });

module.exports = mongoose.model("Conversation",ConversationSchema);