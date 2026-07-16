export interface ClaudeRequest {
      prompt: string;
      }

      export interface ClaudeResponse {
        text: string;
        }

        export class ClaudeConnector {
          async send(request: ClaudeRequest): Promise<ClaudeResponse> {
              console.log("Claude Request:");
                  console.log(request.prompt);

                      return {
                            text: "Claude response placeholder"
                                };
                                  }
                                  }

                                  const claudeConnector = new ClaudeConnector();

                                  export default claudeConnector;
