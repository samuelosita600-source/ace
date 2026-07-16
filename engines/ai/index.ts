export interface AIRequest {
  prompt: string;
}

export interface AIResponse {
  text: string;
}

export class AIGateway {
  public async generate(request: AIRequest): Promise<AIResponse> {
    console.log("Sending prompt to AI...");
    console.log(request.prompt);

    return {
      text: "Placeholder response",
    };
  }
}

const aiGateway = new AIGateway();

export default aiGateway;

export { default as claudeConnector } from "./ClaudeConnector";