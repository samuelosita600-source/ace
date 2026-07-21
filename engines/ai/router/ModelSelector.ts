import ModelConfig from "../config/ModelConfig";
import { AIRequest } from "../interfaces/AIRequest";

export class ModelSelector {

    public select(
        request: AIRequest
    ): string {

        const prompt =
            request.prompt.toLowerCase();

        // Coding

        if (
            prompt.includes("code") ||
            prompt.includes("typescript") ||
            prompt.includes("react") ||
            prompt.includes("bug") ||
            prompt.includes("debug")
        ) {
            return ModelConfig.coding;
        }

        // Reasoning

        if (
            prompt.includes("why") ||
            prompt.includes("reason") ||
            prompt.includes("analyze") ||
            prompt.includes("compare")
        ) {
            return ModelConfig.reasoning;
        }

        // Default

        return ModelConfig.primary;
    }

}

const modelSelector =
    new ModelSelector();

export default modelSelector;