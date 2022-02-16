const mongoose = require("mongoose");

const connectionURI = process.env.MONGODBURI

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
}, () => {
    console.log("Connected to MongoDB Successfully!")
})
