import { AIProvider } from "../interfaces/AIProvider";
import { AIRequest } from "../interfaces/AIRequest";
import { AIResponse } from "../interfaces/AIResponse";
import AIConfig from "../config/AIConfig";

export class OpenRouterProvider implements AIProvider {

    /**
     * Provider name.
     */
    public readonly name = "OpenRouter";

    /**
     * Provider type.
     */
    public readonly type = "openrouter";

    /**
     * Provider priority.
     * Lower number = higher priority.
     */
    public readonly priority = 1;

    /**
     * Check whether OpenRouter is available.
     */
    public async isAvailable(): Promise<boolean> {
        return AIConfig.openRouter.apiKey.trim().length > 0;
    }

    /**
     * Generate an AI response.
     */
    public async generate(request: AIRequest): Promise<AIResponse> {

        const response = await fetch(
            `${AIConfig.openRouter.baseUrl}/chat/completions`,
            {
                method: "POST",

                headers: {
                    Authorization: `Bearer ${AIConfig.openRouter.apiKey}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "https://ace.ai",
                    "X-Title": "ACE AI",
                },

                body: JSON.stringify({
                    model: request.model ?? AIConfig.openRouter.defaultModel,

                    messages: [
                        {
                            role: "system",
                            content: request.systemPrompt ?? "",
                        },
                        {
                            role: "user",
                            content: request.prompt,
                        },
                    ],

                    temperature: request.temperature ?? 0.7,
                    max_tokens: request.maxTokens ?? 2048,
                }),
            }
        );

        if (!response.ok) {
            throw new Error(`OpenRouter Error: ${response.status}`);
        }

        const data = await response.json();

        return {
            text: data.choices?.[0]?.message?.content ?? "",

            provider: this.name,

            model: data.model,

            promptTokens: data.usage?.prompt_tokens ?? 0,

            completionTokens: data.usage?.completion_tokens ?? 0,

            totalTokens: data.usage?.total_tokens ?? 0,

            finishReason: data.choices?.[0]?.finish_reason ?? "stop",
        };
    }
}

const openRouterProvider = new OpenRouterProvider();

export default openRouterProvider;