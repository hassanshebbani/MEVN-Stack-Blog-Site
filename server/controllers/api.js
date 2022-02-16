module.exports = class API {
    // fetch all posts
    static async fetchAllPosts(res, req) {
        res.send("Hello From API")
    } 
}