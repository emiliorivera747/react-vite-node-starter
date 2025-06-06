"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
/**
 * POST /api/user
 * Creates a new user with the provided username, email, and optional name.
 */
app.post("/api/user", async (req, res) => {
    try {
        const { username, email, name } = req.body;
        if (!username || !email) {
            return res.status(400).json({ error: "Username and email are required" });
        }
        // Check if user already exists
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [{ username }, { email }],
            },
        });
        if (existingUser) {
            return res.status(409).json({ error: "Username or email already exists" });
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
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
