import { AIRequest } from "./interfaces/AIRequest";
import { AIResponse } from "./interfaces/AIResponse";

import modelRouter from "./router/ModelRouter";

export class AIGateway {

    /**
     * Generate an AI response.
     */
    public async generate(
        request: AIRequest
    ): Promise<AIResponse> {

        return modelRouter.generate(request);

    }

    /**
     * Check if the AI system is ready.
     */
    public async isReady(): Promise<boolean> {

        try {

            modelRouter.generate({
                prompt: "health check"
            });

            return true;

        } catch {

            return false;

        }

    }

}

const aiGateway = new AIGateway();

export default aiGateway;
