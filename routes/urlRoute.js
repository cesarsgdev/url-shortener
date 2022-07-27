const express = require("express");
const router = express.Router();

const URL = require("../models/urlModel");

// Get all urls => GET /api/urls
router.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "You've gotten all urls" });
});

// Get a single url by :id => GET /api/urls/:id
router.get("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: `You've gotten URL with ID ${req.params.id}`,
  });
});

// Create a new url => POST /api/urls
router.post("/", async (req, res) => {
  console.log(req.body);
  //   res.status(200).json({ success: true, message: "URL created..." });
  try {
    const url = new URL(req.body);
    await url.save();
    res.status(200).json({ success: true, data: url });
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
});

// Modify a single url by :id => PUT /api/urls/:id
router.put("/:id", (req, res) => {
  res.status(200).json({ success: true, message: "URL modified..." });
});

// Delete a single url by :id => DELETE /api/urls/:id
router.delete("/", (req, res) => {
  res.status(200).json({ success: true, message: "URL deleted..." });
});

module.exports = router;
