import aiGateway from "./AIGateway";

import { AIRequest, AIResponse } from "./interfaces/AIConnector";

export class AIManager {
  public async generate(request: AIRequest): Promise<AIResponse> {
    return aiGateway.generate(request);
  }
}

const aiManager = new AIManager();

export default aiManager;
