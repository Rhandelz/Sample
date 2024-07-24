const MONGOURI =
  "mongodb+srv://iannunot:iannunot@cluster0.w99frye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(MONGOURI);

    console.log("Connected to MongoDb ");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
