const express = require("express")
const API = require("../controllers/api")

const router = express.Router();

// Fetch all posts route
router.get("/", API.fetchAllPosts)

// Fetch post by id route
router.get("/:id", API.fetchPostByID)

// Create post route
router.post("/", API.createPost)

// Update post route
router.patch("/:id", API.updatePost)

// Delete post route
router.delete("/:id", API.deletePost)

module.exports = router