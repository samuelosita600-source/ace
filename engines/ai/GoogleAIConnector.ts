import {
      AIConnector,
        AIRequest,
          AIResponse,
          } from "./interfaces/AIConnector";

          export class GoogleAIConnector implements AIConnector {
            async send(request: AIRequest): Promise<AIResponse> {
                console.log("Google AI Request:");
                    console.log(request.prompt);

                        return {
                              text: "Google AI response placeholder",
                                  };
                                    }
                                    }

                                    const googleAIConnector = new GoogleAIConnector();

                                    export default googleAIConnector;
}