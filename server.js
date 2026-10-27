
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "2mb" }));

app.get("/", (req, res) => {
  res.json({
    name: "OmegA Store",
    version: "1.0.0",
    author: "NirZon",
    status: "online",
    message: "Welcome to OmegA Store!"
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`OmegA Store API running on port ${PORT}`);
});
