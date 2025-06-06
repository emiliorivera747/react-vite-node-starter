import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";

config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
