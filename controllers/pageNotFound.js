const pageNotFound = {
	error: async (req,res) => {
		return res.status(404).send("Page not found!");
	}
}

module.exports = pageNotFound