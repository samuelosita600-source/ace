import { anthropic } from "@/lib/providers";

import {
  AIConnector,
    AIRequest,
      AIResponse,
      } from "./interfaces/AIConnector";

      export class AnthropicConnector implements AIConnector {
        async send(request: AIRequest): Promise<AIResponse> {
            const response = await anthropic.messages.create({
                  model: "claude-sonnet-4-0",
                        max_tokens: 1024,
                              messages: [
                                      {
                                                role: "user",
                                                          content: request.prompt,
                                                                  },
                                                                        ],
                                                                            });

                                                                                const text =
                                                                                      response.content[0]?.type === "text"
                                                                                              ? response.content[0].text
                                                                                                      : "No response received.";

                                                                                                          return {
                                                                                                                text,
                                                                                                                    };
                                                                                                                      }
                                                                                                                      }

                                                                                                                      const anthropicConnector = new AnthropicConnector();

                                                                                                                      export default anthropicConnector;