export interface AIRequest {
    prompt: string;

    systemPrompt?: string;

    model?: string;

    temperature?: number;

    maxTokens?: number;
}