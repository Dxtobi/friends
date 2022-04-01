const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
    email: {
    	type: String,
        unique: true
    },
    profileImage:{
        type: String,
        default: "default.jpg"
    },
    password: {
    	type: String
    },
    number:{
        type: Number,
    },
    friendsList: {
        myFriends:{ 
            type: String 
        },
    },
    username: {
        type: String
    }
},{  timestamps: true });

module.exports = mongoose.model("User",UserSchema);