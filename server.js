const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

mongoose.connect(
  "mongodb+srv://zia:zia123@zia-123-6nro8.mongodb.net/toursz?retryWrites=true&w=majority",
  { useNewUrlParser: true, useCreateIndex: true },
  (req, res) => {
    console.log("db is connected");
  }
);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/tour", require("./routes/tour"));

app.use("/uploads", express.static("uploads"));

app.listen(5000, () => console.log("Server Started..."));
