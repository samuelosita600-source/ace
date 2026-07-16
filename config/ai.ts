export const AIConfig = {
      defaultProvider:
          process.env.DEFAULT_AI_PROVIDER || "anthropic",

            anthropicApiKey:
                process.env.ANTHROPIC_API_KEY || "",

                  openAIApiKey:
                      process.env.OPENAI_API_KEY || "",

                        geminiApiKey:
                            process.env.GEMINI_API_KEY || "",
                            };
