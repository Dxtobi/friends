const mongoose = require("mongoose");
const EmojiSchema = new mongoose.Schema({
	emojiName: {
		type: String
	}
})

module.exports = mongoose.model("Emoji",EmojiSchema);