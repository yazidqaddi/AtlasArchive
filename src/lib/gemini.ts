import { GoogleGenAI } from "@google/genai";

// Ensure the API key is passed through exactly as imported from Vite config
const apiKey = process.env.GEMINI_API_KEY;

export const ai = new GoogleGenAI({
  apiKey: apiKey,
});
