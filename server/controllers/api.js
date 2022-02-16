const Post = require("../models/post")

module.exports = class API {
    // fetch all posts
    static async fetchAllPosts(req, res) {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (e) {
            res.status(404).json({err: e})
        }
    }
    // fetch post by ID
    static async fetchPostByID(req, res) {
        res.send("Fetching post by id")
    }
    // create post
    static async createPost(req, res) {
        const newPost = req.body;
        const imageName = req.file.fileName;
        newPost.image = imageName;
        try {
            await Post.create(newPost);
            res.status(201).json({message: "New Post created successfully!"})
        } catch(e) {
            console.log(e)
            res.status(400).json({err: e})
        }
    }
    // update post
    static async updatePost(req, res) {
        res.send("Update Post")
    }
    // delete post
    static async deletePost(req, res) {
        res.send("Delete Post")
    }
}