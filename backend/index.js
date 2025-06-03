const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.get("/api/hello-world", (req, res) => {
  try {
    res.status(200).json({ message: "Hello, World!" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
