const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const urls = require("./routes/urlRoute");

app.use("/api/urls", urls);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to shortener!" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
