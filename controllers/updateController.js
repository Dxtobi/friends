const Post = require("../model/Post");
const User = require("../model/User");


const updateController = {
	updateUserPost: async (req,res) => {
		const { id } = req.params;
		try{

			const findUser = await Post.findByIdAndUpdate({ _id: id },{
				message: req.body.msg
			})
			if(!findUser) return res.status(403).send("Error");

			return res.status(200).send("Post Updated!");

		} catch(error){
			return res.status(503).send(error);
		}
		
	},
	// add friends
	addFriends: async (req,res) => {
		const myId = await User.findById({ _id: req.body.myId });
		const otherId = await User.findById({ _id: req.body.otherId });
		if(!myId) return res.status(403).send("Error!");
		if(!otherId) return res.status(403).send("Error!");

		await User.findByIdAndUpdate({ _id: req.body.myId },{
			$push: { 
                	friendsList: {
        				myFriends: otherId._id
   					}
            }
		})
		 .then(() => {
		 	return res.status(200).send("Added")
		})
		 .catch(error => { 
		 	return res.status(403).send(error)
		 })
	}
}

module.exports = updateController