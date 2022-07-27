const { json } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const { update } = require("./models/urlModel");
const URL = require("./models/urlModel");
require("dotenv").config();
const urls = require("./routes/urlRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/urls", urls);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to shortener!" });
});

app.get("/:id", async (req, res) => {
  try {
    const url = await URL.findOneAndUpdate(
      { slug: req.params.id },
      { $inc: { visits: 1 } }
    );
    if (url) {
      res.redirect(url.url);
    } else {
      res.status(200).send("<h1>URL not found</h1>");
    }
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
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
