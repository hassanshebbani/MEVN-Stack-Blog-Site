const express = require("express");
const cors = require("cors");
const path = require("path");

require("./db/mongoose");

const port = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup public folder
app.use(express.static(path.join(__dirname, "./public/uploads")));

app.use("/api/post", require("./routes/routes"))

app.listen(port, () => console.log(`Connected To Sever On Port ${port}`));
