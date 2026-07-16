import { AIConfig } from "@/config/ai";
import { AIProvider } from "./providers";

import anthropicConnector from "./AnthropicConnector";
import openAIConnector from "./OpenAIConnector";

export interface AIRequest {
  prompt: string;
  }

  export interface AIResponse {
    text: string;
    }

    export class AIGateway {
      public async generate(request: AIRequest): Promise<AIResponse> {
          switch (AIConfig.defaultProvider) {
                case AIProvider.Anthropic:
                        return anthropicConnector.send({
                                  prompt: request.prompt,
                                          });

                                                case AIProvider.OpenAI:
                                                        return openAIConnector.send({
                                                                  prompt: request.prompt,
                                                                          });

                                                                                default:
                                                                                        throw new Error(
                                                                                                  `Unsupported AI provider: ${AIConfig.defaultProvider}`
                                                                                                          );
                                                                                                              }
                                                                                                                }
                                                                                                                }

                                                                                                                const aiGateway = new AIGateway();

                                                                                                                export default aiGateway;
                                                                                                               import googleAIConnector from "./GoogleAIConnector";
                                                                                                               case AIProvider.Google:
                                                                                                                  return googleAIConnector.send({
                                                                                                                      prompt: request.prompt,
                                                                                                                        });