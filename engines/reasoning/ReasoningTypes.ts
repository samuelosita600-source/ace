export interface ReasoningContext {
      userId: string;
        message: string;

          conversationId?: string;

            memories?: unknown[];

              architectureIntent?: string;
              }

              export interface ReasoningAnalysis {
                intent: string;

                  confidence: number;

                    sentiment?: string;
                    }

                    export interface ReasoningPlan {
                      strategy: string;

                        steps: string[];

                          confidence: number;
                          }

                          export interface ReasoningResult extends ReasoningContext {
                            analysis: ReasoningAnalysis;

                              plan: ReasoningPlan;
                              }
