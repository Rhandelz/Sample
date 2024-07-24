const express = require("express");
const app = express();
const methodOverride = require("method-override");
const connectDb = require("./db/connect");
const cors = require("cors");

const PORT = 3500;

app.use("/img", express.static("img"));

/* MIDDLEWARE */
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cors());

app.use("/file", require("./routes/fileRoute"));

connectDb();

app.listen(PORT, () => {
  console.log(`Connected to Host ${PORT}`);
});
