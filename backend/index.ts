import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";

config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

/**
 * POST /api/user
 * Creates a new user with the provided username, email, and optional name.
 */
app.post("/api/user", async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, name } = req.body as { username?: string; email?: string; name?: string };

    if (!username || !email) {
      res.status(400).json({ error: "Username and email are required" });
      return;
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existingUser) {
      res.status(409).json({ error: "Username or email already exists" });
      return;
    }

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        name,
      },
    });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        name: newUser.name,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
