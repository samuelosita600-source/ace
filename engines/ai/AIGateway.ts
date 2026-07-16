import { AIConfig } from "@/config/ai";
import { AIProvider } from "./providers";

import anthropicConnector from "./AnthropicConnector";
import openAIConnector from "./OpenAIConnector";
import googleAIConnector from "./GoogleAIConnector";

import {
  AIRequest,
    AIResponse,
    } from "./interfaces/AIConnector";

    export class AIGateway {
      public async generate(request: AIRequest): Promise<AIResponse> {
          switch (AIConfig.defaultProvider) {
                case AIProvider.Anthropic:
                        return anthropicConnector.send(request);

                              case AIProvider.OpenAI:
                                      return openAIConnector.send(request);

                                            case AIProvider.Google:
                                                    return googleAIConnector.send(request);

                                                          default:
                                                                  throw new Error(
                                                                            `Unsupported AI provider: ${AIConfig.defaultProvider}`
                                                                                    );
                                                                                        }
                                                                                          }
                                                                                          }

                                                                                          const aiGateway = new AIGateway();

                                                                                          export default aiGateway;