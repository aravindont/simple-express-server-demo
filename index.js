const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.json({ message: "hi" });
});
app.get("/post", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data.slice(0, 20);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
