import { AIConfig } from "./config/AIConfig";
import type { AIRequest } from "./interfaces/AIRequest";
import type { AIResponse } from "./interfaces/AIResponse";

export class AIGateway {
  public async generate(request: AIRequest): Promise<AIResponse> {
    return {
      text: `Gateway handled: ${request.prompt}`,
      provider: AIConfig.defaultProvider,
      model: AIConfig.defaultModel,
    };
  }
}

const aiGateway = new AIGateway();

export default aiGateway;
