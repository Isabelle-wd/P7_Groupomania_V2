const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(helmet());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "images")));

const db = require("./models");



db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});