const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost)
  .put(postControllers.updatePost)
  .delete(postControllers.deletePost);

router.route("/:id").get(getControllers.getPostById);
router.route("/:id").get(getControllers.deletePost);
router.route("/:id").get(getControllers.updatePost);

module.exports = router;
