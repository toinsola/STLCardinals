const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/cardinals", router);

mongoose.connect(
    "mongodb+srv://toinsola:showtime123@cluster0.f8mfvtu.mongodb.net/STLCardinals?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(3001);
  })
  .catch((err) => console.log(err));

