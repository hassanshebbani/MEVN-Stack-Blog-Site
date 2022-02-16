const multer = require("multer")

// Setup multer middleware
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "../public/uploads")
    },
    filename: function(req, file, cb) {
        cb(null, `${file.fieldname}_${Date.now()}_${file.originalname}`)
    }
})

let upload = multer({
    storage,
}).single("image")

module.exports = upload