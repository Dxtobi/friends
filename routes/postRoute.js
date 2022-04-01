// POST ROUTE
const router = require("express").Router();
const postController = require("../controllers/postController");

// login auth
router.route("/log/auth")
      .post(postController.logAuth)

// sign up
router.route("/create/user/auth")
      .post(postController.createAcount)

// create a conversation
router.route("/conversation")
      .post(postController.createNewConversation)

// save messages into the database route
router.route("/log/message")
      .post(postController.saveUserChats)

// Post Route
router.route("/post/user/:id")
      .post(postController.userPost)

module.exports = router;