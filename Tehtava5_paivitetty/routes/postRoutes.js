const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost)
  .put(postControllers.updatePost)
  .delete(postControllers.deletePost);

router.route("/:id").get(postControllers.getPostById);
router.route("/:id").get(postControllers.deletePost);
router.route("/:id").get(postControllers.updatePost);

module.exports = router;
