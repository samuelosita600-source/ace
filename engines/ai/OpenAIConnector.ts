import {
      AIConnector,
        AIRequest,
          AIResponse,
          } from "./interfaces/AIConnector";

          export class OpenAIConnector implements AIConnector {
            async send(request: AIRequest): Promise<AIResponse> {
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