const User = require("../model/User");
const Post = require("../model/Post");
const Conversation = require("../model/Conversation")
const Message = require("../model/Message")
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const postController = {
	logAuth: async (req,res) => {
		const { email,password: p } = req.body;
		if(email === "") return res.status(403).send("Email is required!");
		if(p === "") return res.status(403).send("Password is required!");

		try{
			const user = await User.findOne({ email });

			if(!user) return res.status(403).send("Email or password is not correct!");

			const pass = await bcrypt.compare(p,user.password);
			if(!pass) return res.status(403).send("Email or password is not correct!");
			
			return res.status(200).send(user);

		} catch(error){
			return res.status(501).send(error);
		}
		
	},
	createAcount: async (req,res) => {
		const { username,email,number,password } = req.body;
		if(username === "") return res.status(403).send("Full name is required!");
		if(email === "") return res.status(403).send("Email is required!");
		if(number === "") return res.status(403).send("Number is required!");
		if(password === "") return res.status(403).send("Password is required!");

		try{

			const checkIfEmailExit = await User.findOne({ email });
			if(checkIfEmailExit) return res.status(403).send("Email Already Exist!");

			const hashedPassword = await bcrypt.hash(password,13);

			await new User({
				username,
				email,
				number,
				password: hashedPassword
			})
			  .save()
			  .then(data => {
			  	return res.status(200).send("Account created!")
			  })
			   .catch(error => {
			   	return res.status(403).send(error)
			   })
		} catch(error){
			return res.status(503).send(error)
		}
	},
	// POST METHODS
	userPost: async (req,res) => {
		const { id } = req.params;
		try{
			const userInfo = await User.findById({ _id: id });
			if(!userInfo) return res.status(403).send("Invalid User ID");

			await new Post({
				userId: userInfo._id,
				username: userInfo.username,
				profileImage: userInfo.profileImage,
				message: req.body.message,
				emoji: req.body.emoji
			})
			 .save()
			 .then(data => {
			 	return res.status(200).send("Posted!")
			 })
			 .catch(error => {
			 	return res.status(403).send(error)
			 })


		} catch(error){
			return res.status(503).send(error);
		}
	},
	// create a new conversation
	createNewConversation: async (req,res) => {
		try{
			const query = [mongoose.Types.ObjectId(req.body.myId),mongoose.Types.ObjectId(req.body.yourId)];
			
			const findMyId = await Conversation.findOne({ 
			  $and:  [{ members: req.body.myId},{ members: req.body.yourId}]
			});
			if(findMyId){
				// console.log("Not");
				return res.status(200).send(findMyId);
			}

			await new Conversation({
				members: query
			})
			  .save()
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
	 //Save messages in the database
	 saveUserChats: async (req,res) => {
	 	try{
			// const query = ;

	 		await new Message({
	 			conversationId: mongoose.Types.ObjectId(req.body.conversationId),
	 			senderId: mongoose.Types.ObjectId(req.body.senderId),
	 			recieverId: mongoose.Types.ObjectId(req.body.recieverId),
	 			text: req.body.text
	 		})
	 	     .save()
	 	     .then(data => {
	 	     	Conversation.findOneAndUpdate({ _id: req.body.conversationId},{
	 	     		lastMessage: req.body.text
	 	     	})
	 	     	 .then(data => {
	 	     	 	return res.status(200).send(data)
	 	     	 })
	 	     	  .catch(error => {
	 	     	  	return res.status(403).send(error)
	 	     	  })
	 	     })
	 	     .catch(error => {
	 	     	return res.status(403).send(error)
	 	     })
	 	} catch(error){
	 		return res.status(503).send(error)
	 	}
	 }
}

module.exports = postController;