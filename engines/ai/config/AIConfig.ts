export const AIConfig = {
  openRouter: {
    apiKey: process.env.OPENROUTER_API_KEY ?? "",

    baseUrl: "https://openrouter.ai/api/v1",

    defaultModel: "deepseek/deepseek-chat-v3-0324:free",

    timeout: 60000,
  },
};

export default AIConfig;
