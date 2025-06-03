const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.port || 3000;

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

app.post('/api/user', (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) return res.status(400).json({ error: "Username and email are required" });
  res.status(201).json({ message: "User created successfully", user: { username, email } });
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
