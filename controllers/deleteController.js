const Post = require("../model/Post");

const deleteController = {
	deletePost: async (req,res) => {
		const { id } = req.params;
		try{
			const userPost = await Post.findByIdAndDelete({ _id: id });
			if(!userPost) return res.status(401).send("Error occured!");

			return res.status(200).send("Post deleted!");

		} catch(error){
			return res.status(503).send(error)
		}
	}
} 

module.exports = deleteController;