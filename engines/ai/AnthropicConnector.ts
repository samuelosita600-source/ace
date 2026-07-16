import {
      AIConnector,
        AIRequest,
          AIResponse,
          } from "./interfaces/AIConnector";

          export class AnthropicConnector implements AIConnector {
            async send(request: AIRequest): Promise<AIResponse> {
                console.log("Anthropic Request:");
                    console.log(request.prompt);

                        return {
                              text: "Anthropic response placeholder",
                                  };
                                    }
                                    }

                                    const anthropicConnector = new AnthropicConnector();

                                    export default anthropicConnector;
}