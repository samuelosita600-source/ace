export interface OpenAIRequest {
      prompt: string;
      }

      export interface OpenAIResponse {
        text: string;
        }

        export class OpenAIConnector {
          async send(request: OpenAIRequest): Promise<OpenAIResponse> {
              console.log("OpenAI Request:");
                  console.log(request.prompt);

                      return {
                            text: "OpenAI response placeholder",
                                };
                                  }
                                  }

                                  const openAIConnector = new OpenAIConnector();

                                  export default openAIConnector;
}