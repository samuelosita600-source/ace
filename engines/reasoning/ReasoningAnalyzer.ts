import {
          ReasoningAnalysis,
            ReasoningContext,
            } from "./ReasoningTypes";

            export class ReasoningAnalyzer {

              public async analyze(
                  context: ReasoningContext
                    ): Promise<ReasoningAnalysis> {

                        const message = context.message.toLowerCase();

                            let sentiment = "neutral";

                                if (
                                      message.includes("happy") ||
                                            message.includes("great") ||
                                                  message.includes("good")
                                                      ) {
                                                            sentiment = "positive";
                                                                }

                                                                    if (
                                                                          message.includes("sad") ||
                                                                                message.includes("angry") ||
                                                                                      message.includes("bad")
                                                                                          ) {
                                                                                                sentiment = "negative";
                                                                                                    }

                                                                                                        return {
                                                                                                              intent: "general",
                                                                                                                    confidence: 0.95,
                                                                                                                          sentiment,
                                                                                                                              };

                                                                                                                                }

                                                                                                                                }

                                                                                                                                const reasoningAnalyzer = new ReasoningAnalyzer();

                                                                                                                                export default reasoningAnalyzer;
