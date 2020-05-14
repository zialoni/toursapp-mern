const express = require("express");
const multer = require("multer");
const { Tour } = require("../models/Tour");
const router = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" || ext !== ".png") {
      return cb(res.status(400).end("only jpg, png are allowed"), false);
    }
    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single("file");

//================================================================
//               Tour
//================================================================

router.post("/uploadImage", (req, res) => {
  //after getting that image from client
  //we need to save it inside node server
  //Multer library

  upload(req, res, (err) => {
    if (err) return res.json({ success: false, err });
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post("/uploadTour", (req, res) => {
  const tour = new Tour(req.body);

  tour.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/getTours", (req, res) => {
  Tour.find().exec((err, tours) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, tours });
  });
});

router.get("/tours_by_id", (req, res) => {
  //saving all the data we got
  let type = req.query.type;
  let tourIds = req.query.id;

  if (type === "array") {
  }
  //we need to find the product information that belong to the product ID

  Tour.find({ _id: { $in: tourIds } })
    .populate("writer")
    .exec((err, tour) => {
      if (err) return req.status(400).send(err);
      return res.status(200).send(tour);
    });
});

module.exports = router;
