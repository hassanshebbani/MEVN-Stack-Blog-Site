const fs = require("fs");

const Post = require("../models/post");

module.exports = class API {
  // fetch all posts
  static async fetchAllPosts(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (e) {
      res.status(404).json({ err: e });
    }
  }
  // fetch post by ID
  static async fetchPostByID(req, res) {
    try {
      const postID = req.params.id;
      const foundPost = await Post.findById(postID);
      if (!foundPost) {
        return res
          .status(404)
          .json({ message: `no post of id ${postID} found!` });
      }
      res.status(200).json(foundPost);
    } catch (e) {
      res.status(404).json({ err: e });
    }
  }
  // create post
  static async createPost(req, res) {
    const newPost = req.body;
    const imageName = req.file.filename;
    newPost.image = imageName;
    try {
      await Post.create(newPost);
      res.status(201).json({ message: "New Post created successfully!" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ err: e });
    }
  }
  // update post
  static async updatePost(req, res) {
    const postID = req.params.id;
    const foundPost = await Post.findById(postID);
    let newImage = foundPost.image;
    if (req.file) {
      newImage = req.file.filename;
      try {
        fs.unlinkSync(`./public/uploads/${foundPost.image}`);
      } catch (e) {
        console.log(e);
        res.status(404).json({ err: e });
      }
    }
    const newPost = req.body;
    newPost.image = newImage;
    try {
      await Post.findByIdAndUpdate(postID, newPost);
      res
        .status(200)
        .json({ message: `Post of id ${postID} updated successfully` });
    } catch (e) {
      res.status(404).json({ err: e });
    }
  }
  // delete post
  static async deletePost(req, res) {
    const postID = req.params.id;
    const foundPost = await Post.findById(postID);
    if (foundPost) {
      try {
        fs.unlinkSync(`./public/uploads/${foundPost.image}`);
        await Post.findByIdAndDelete(postID);
        return res
          .status(200)
          .json({ message: `Post of id ${postID} deleted successfully!` });
      } catch (e) {
        res.status(404).json({ message: e });
      }
    }
    res.status(404).json({ message: `No Post of id ${postID} found!` });
  }
};
