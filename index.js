const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
require("dotenv").config();
const urls = require("./routes/urlRoute");
const redirect = require("./routes/redirectRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/urls", urls);
app.use("/", redirect);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to shortener!" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  try {
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Database connected...`);
  } catch (e) {
    console.log(e.message);
  }
});
