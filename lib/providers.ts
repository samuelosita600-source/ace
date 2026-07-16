import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";
import { GoogleGenAI } from "@google/genai";

import { AIConfig } from "@/config/ai";

export const anthropic = new Anthropic({
  apiKey: AIConfig.anthropicApiKey,
  });

  export const openAI = new OpenAI({
    apiKey: AIConfig.openAIApiKey,
    });

    export const googleAI = new GoogleGenAI({
      apiKey: AIConfig.geminiApiKey,
      });