import express from "express";
import multer from "multer";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import { analyzeTextAI, analyzeImageAI } from "./aiService.js";
import { validateText, validateImage } from "./validators.js";

const app = express();
app.use(express.json());
app.use(cors(
  {
    origin: 'http://localhost:5173'
  }
));
const upload = multer({ storage: multer.memoryStorage() });
// POST /api/analyze-text
app.post("/api/analyze-text", validateText, async (req, res) => {
  const { text, model } = req.body;

  try {
    const result = await analyzeTextAI(
      `
Analyze the following text for credibility, risk, flags.
Return ONLY JSON in structure:
{
 "credibilityScore": number,
 "riskLevel": string,
 "flags": string[],
 "explanation": string,
 "advice": string,
 "truth" : string,
}
 where credibilityScore is 0-100, 
 riskLevel is one of "high", "medium", "low".
TEXT: ${text}
    `,
      model
    );

    res.json(result);
  } catch (err) {
    if (err.message === "AI_TIMEOUT_OR_FAILURE") {
      return res.status(504).json({ error: "AI timeout or failure" });
    }
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/analyze-image
app.post(
  "/api/analyze-image",
  upload.single("image"),
  validateImage,
  async (req, res) => {
    const base64 = req.file.buffer.toString("base64");
    const model = "pro";
    try {
      const result = await analyzeImageAI(base64, model);
      res.json(result);
    } catch (err) {
      if (err.message === "AI_TIMEOUT_OR_FAILURE") {
        return res.status(504).json({ error: "AI timeout or failure" });
      }
      res.status(500).json({ error: "Server error" });
    }
  }
);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
