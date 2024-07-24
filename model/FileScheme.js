const mongoose = require("mongoose");

const fileScheme = new mongoose.Schema(
  {
    fileUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("File", fileScheme);
