import { GoogleGenerativeAI } from "@google/generative-ai";

let genAI = null;

const getGenAi = () => {
  if (genAI) return genAI;
  genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  return genAI;
};

export async function analyzeTextAI(prompt, modelVersion) {
  try {
    genAI = getGenAi();
    const model = genAI.getGenerativeModel({
      model: modelVersion == "pro" ? "gemini-2.5-pro" : "gemini-2.5-flash",
    });
    const response = await model.generateContent(prompt);
    const text = response.response.text();

    return parseAIResponse(text);
  } catch (err) {
    console.error("Gemini error:", err);
    throw new Error("AI_TIMEOUT_OR_FAILURE");
  }
}

export async function analyzeImageAI(base64, modelVersion) {
  try {
    genAI = getGenAi();
    const model = genAI.getGenerativeModel({
      model: modelVersion == "pro" ? "gemini-2.5-pro" : "gemini-2.5-flash",
    });

    const response = await model.generateContent([
      {
        inlineData: {
          mimeType: "image/png",
          data: base64,
        },
      },
      {
        text: `
Analyze this image and return JSON containing:
credibilityScore, riskLevel, flags[], explanation, advice, truth.
Return ONLY JSON.
        `,
      },
    ]);

    const text = response.response.text();
    return parseAIResponse(text);
  } catch (err) {
    console.error("Gemini error:", err);
    throw new Error("AI_TIMEOUT_OR_FAILURE");
  }
}

/**
 * Gemini lubi odpowiadać "```json ... ```",
 * więc musimy wyciąć czysty JSON.
 */
function parseAIResponse(rawText) {
  let clean = rawText.trim();
  clean = clean.replace(/```json/gi, "").replace(/```/g, "");

  try {
    const obj = JSON.parse(clean);

    return {
      credibilityScore: obj.credibilityScore ?? 50,
      riskLevel: obj.riskLevel ?? "unknown",
      flags: obj.flags ?? [],
      explanation: obj.explanation ?? "Brak wyjaśnienia.",
      advice: obj.advice ?? "Brak zaleceń.",
      truth: obj.truth ?? "Brak odpowiedzi",
    };
  } catch (err) {
    console.error("Could not parse JSON:", rawText);
    return {
      credibilityScore: 50,
      riskLevel: "unknown",
      flags: ["parse_error"],
      explanation: "Model returned invalid JSON.",
      advice: "Spróbuj ponownie.",
      truth: "unknown",
    };
  }
}
