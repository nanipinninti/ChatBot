import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON requests

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post("/generate", async (req, res) => {
  try {
    const { prompt ,messages} = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });
    const formattedMessages = messages.map(msg => `${msg.sender}: ${msg.text}`).join("\n");
    const PROMPT = `Previous conversation:\n${formattedMessages}\nCurrent prompt: ${prompt}`;

    const result = await model.generateContent(PROMPT);
    const response = await result.response;
    
    res.json({ response: response.text() });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
