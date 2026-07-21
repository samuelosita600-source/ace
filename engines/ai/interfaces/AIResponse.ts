export interface AIResponse {
      text: string;

          provider: string;

              model: string;

                  promptTokens?: number;

                      completionTokens?: number;

                          totalTokens?: number;

                              finishReason?: string;
                              }
