const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const protectAuth = require("./midileware/protectAuth");
const cors =require("cors")

const app = express();

app.use(express.json());
app.use(cors())

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/poster", protectAuth, upload.single("story-poster"), (req, res) => {
  return res.status(200).json({
    URL: `api/posters/${req.file.originalname}`,
  });
});

app.use("api/posters", express.static("uploads"));
app.use("/api/user", require("./routes/user.routes"));
app.use("/api/stories", require("./routes/stories.routes"));

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(port, () => {
    console.log(`server is running on ${port}`);
  });
  console.log("DataBase is connected");
});
