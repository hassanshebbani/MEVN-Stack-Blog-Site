import axios from "axios";

const serverURL = "/api/post";

export default class API {
  // Fetch all the posts from the backend (server)
  static async fetchAllPosts() {
    const response = await axios.get(serverURL);
    return response.data;
  }
  // Fetch the specific post with the provided ID
  static async fetchPostByID(postID) {
    const response = await axios.get(`${serverURL}/${postID}`);
    return response.data;
  }
  // Create a post
  static async createPost(newPost) {
    const response = await axios.post(serverURL, newPost);
    return response.data;
  }
  // Update the specific post with the provided ID
  static async updatePost(postID, updatedPost) {
    const response = await axios.patch(`${serverURL}/${postID}`, updatedPost);
    return response.data;
  }
  // Delete the specific post with the provided ID
  static async deletePost(postID) {
    const response = await axios.delete(`${serverURL}/${postID}`);
    return response.data;
  }
}
