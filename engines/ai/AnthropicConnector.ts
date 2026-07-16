export interface AnthropicRequest {
      prompt: string;
      }

      export interface AnthropicResponse {
        text: string;
        }

        export class AnthropicConnector {
          async send(request: AnthropicRequest): Promise<AnthropicResponse> {
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