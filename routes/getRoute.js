const router = require("express").Router();
const getController = require("../controllers/getController");
// Page not found
const pageNotFound = require("../controllers/pageNotFound");

// fetch all the users on the plateform
router.route("/")
      .get(getController.indexPage)

// Fetch user profile
router.route("/profile/:id")
      .get(getController.profileFile)

// fetch all the post on the plateform
router.route("/posts")
      .get(getController.fetchPost)

// fetch post base on user profile by ID
router.route("/profile/post/:id")
      .get(getController.fetchPostBaseOnUser)

// fetch a user conversation
router.route("/conversation/:id")
      .get(getController.fetchUserConversation)


// fetch a user messages
router.route("/message/:id")
      .get(getController.fetchUserMessages)

// Page not found!
router.route("*")
      .get(pageNotFound.error)


module.exports = router;