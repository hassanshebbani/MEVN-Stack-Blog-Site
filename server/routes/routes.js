const express = require("express")
const API = require("../controllers/api")

const router = express.Router();

router.get("/", API.fetchAllPosts)

module.exports = router