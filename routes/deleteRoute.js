// DELETE ROUTE
const router = require("express").Router();
const deleteController = require("../controllers/deleteController");

router.route("/del/:id")
      .delete(deleteController.deletePost)

module.exports = router;