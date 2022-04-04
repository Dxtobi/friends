const mongoose = require("mongoose");
const { Schema } = mongoose;
const MessageSchema = new Schema({
	conversationId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Conversation"
	},
	senderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	recieverId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	text: {
		type: String
	}
},{ timestamps: true })

module.exports = mongoose.model("Message",MessageSchema);