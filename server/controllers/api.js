module.exports = class API {
    // fetch all posts
    static async fetchAllPosts(res, req) {
        res.send("Hello From API")
    }
    // fetch post by ID
    static async fetchPostByID(req, res) {
        res.send("Fetching post by id")
    }
    // create post
    static async createPost(req, res) {
        res.send("Create Post")
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