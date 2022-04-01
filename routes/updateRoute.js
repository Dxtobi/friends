// Update route file
const router = require("express").Router()
const updateController = require("../controllers/updateController");

router.route("/posts/update/:id")
      .put(updateController.updateUserPost)

// add friends
router.route("/add/friend")
      .put(updateController.addFriends)

module.exports = router;