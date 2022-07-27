const express = require("express");
const router = express.Router();
const URL = require("../models/urlModel");

router.get("/:slug", async (req, res) => {
  try {
    const url = await URL.findOneAndUpdate(
      { slug: req.params.slug },
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

module.exports = router;
