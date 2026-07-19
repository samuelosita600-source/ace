import {
      StrategyType,
        StrategyResult,
        } from "./StrategyEngine";

        export class StrategyPlanner {
          public plan(message: string): StrategyResult {
              const text = message.toLowerCase();

                  if (
                        text.includes("how") ||
                              text.includes("explain") ||
                                    text.includes("what is")
                                        ) {
                                              return {
                                                      strategy: StrategyType.Explain,
                                                              confidence: 0.95,
                                                                    };
                                                                        }

                                                                            if (
                                                                                  text.includes("teach") ||
                                                                                        text.includes("learn")
                                                                                            ) {
                                                                                                  return {
                                                                                                          strategy: StrategyType.Teach,
                                                                                                                  confidence: 0.95,
                                                                                                                        };
                                                                                                                            }

                                                                                                                                if (
                                                                                                                                      text.includes("help") ||
                                                                                                                                            text.includes("fix") ||
                                                                                                                                                  text.includes("solve")
                                                                                                                                                      ) {
                                                                                                                                                            return {
                                                                                                                                                                    strategy: StrategyType.SolveProblem,
                                                                                                                                                                            confidence: 0.90,
                                                                                                                                                                                  };
                                                                                                                                                                                      }

                                                                                                                                                                                          if (
                                                                                                                                                                                                text.includes("plan") ||
                                                                                                                                                                                                      text.includes("roadmap")
                                                                                                                                                                                                          ) {
                                                                                                                                                                                                                return {
                                                                                                                                                                                                                        strategy: StrategyType.Plan,
                                                                                                                                                                                                                                confidence: 0.90,
                                                                                                                                                                                                                                      };
                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                              if (
                                                                                                                                                                                                                                                    text.includes("sad") ||
                                                                                                                                                                                                                                                          text.includes("hurt") ||
                                                                                                                                                                                                                                                                text.includes("depressed")
                                                                                                                                                                                                                                                                    ) {
                                                                                                                                                                                                                                                                          return {
                                                                                                                                                                                                                                                                                  strategy: StrategyType.Comfort,
                                                                                                                                                                                                                                                                                          confidence: 0.90,
                                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                        return {
                                                                                                                                                                                                                                                                                                              strategy: StrategyType.CasualConversation,
                                                                                                                                                                                                                                                                                                                    confidence: 0.70,
                                                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                          const strategyPlanner = new StrategyPlanner();

                                                                                                                                                                                                                                                                                                                          export default strategyPlanner;
