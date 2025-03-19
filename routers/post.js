const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// Index
router.get("/", postController.getAllPosts);

// Show
router.get("/:id", postController.getPostById);

// Create
router.post("/", postController.createPost);

// Update
router.put("/:id", postController.updatePost);

// Modify
router.patch("/:id", postController.modifyPost);

// Delete
router.delete("/:id", postController.deletePost);

module.exports = router;
