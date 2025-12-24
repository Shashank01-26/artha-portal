import { GoogleGenAI } from "@google/genai";

// Initialize the client using the environment variable directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  try {
    // Use the recommended model for basic text tasks (summarization, simple Q&A)
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        // System instruction to define the persona of the TEAP Assistant
        systemInstruction: `
          You are the official AI Assistant for TEAP (Tech Entrepreneurs Association of Pune).
          Your goal is to help visitors understand the mission, events, and membership benefits of TEAP.
          
          Key Information about TEAP:
          - **Mission**: To foster innovation, collaboration, and growth among tech entrepreneurs in Pune.
          - **Location**: Pune, Maharashtra, India.
          - **Primary Color**: Royal Blue (#0539E3).
          - **Activities**: Networking events, hackathons, mentorship programs, investor meetups.
          - **Membership**: Open to founders, co-founders, and C-level executives of tech startups.
          
          Tone: Professional, encouraging, tech-savvy, and welcoming.
          Keep answers concise (under 100 words) unless asked for details.
          If asked about joining, encourage them to visit the 'Join Us' page.
        `,
      }
    });

    // Extracting text output directly from the response property
    return response.text || "I apologize, I couldn't generate a response.";
  } catch (error) {
    console.error("Error generating chat response:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};