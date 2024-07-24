const express = require("express");
const router = express.Router();
const controller = require("../controller/file");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./img");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/post", upload.single("file"), controller.postFile);
router.post("/sendSample", controller.sendSample);
router.get("/getAllData", controller.getAllData);

module.exports = router;
