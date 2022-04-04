const User = require("../model/User");
const Post = require("../model/Post");
const Conversation = require("../model/Conversation");
const Message = require("../model/Message");

const getController = {
	// Users On the platform
	indexPage: async (req,res) => {
		const users = await User.find();
		try{
			return res.status(200).send(users);
		} catch(err){
			return res.status(501).send(err);
		}
	},
	// profile page base on user
	profileFile: async (req,res) => {
		const { id } = req.params 	
		try{
			const user = await User.findById({ _id: id });
			if(!user) return res.status(403).send("Empty!");
			return res.status(200).send(user);
			// const { password,...others } = userId._doc;
			// return res.status(200).send(user);
			// return console.log(others);
		} catch(err){
			return res.status(501).send(err);
		}
	},
	// Fetch post and display it to the user(s)
	fetchPost: async (req,res) => {
		const posts = await Post.find().skip(req.params.skip).limit(6).sort({ createdAt: -1});
		try{
			return res.status(200).send(posts);

		} catch(error){
			return res.status(503).send(error);
		}
	},
	// fetch post base on user profile
	fetchPostBaseOnUser: async (req,res) => {
		const myId = await Post.find({ userId: req.params.id }).sort({ createdAt: -1});
		if(!myId) return res.status(403).send("Empty!");

		return res.status(200).send(myId);
	},
	// fetch user conversation
	fetchUserConversation: async (req,res) => {
		try{
			await Conversation.find({
				members: {$in: [req.params.id]}
			}).sort({ createdAt: -1 })
			 .populate("members")
			 .then(data => {
			 	return res.status(200).send(data)
			 })
			 .catch(error => {
			 	return res.status(403).send(error)
			 })
		} catch(error){
			return res.status(503).send(error)
		}
	},
	// fetch user messages
	fetchUserMessages: async (req,res) => {
		try{
			const messages = await Message.find({
				conversationId: req.params.id
			})
			// if(!messages) return res.status(403).send("Message not found!");
			
			return res.status(200).send(messages);
		} catch(error){
			return res.status(503).send(error)
		}
	}

}

module.exports = getController;