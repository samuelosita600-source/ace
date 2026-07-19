import { ReasoningContext } from "@/engines/reasoning";
import {
  GoalResult,
    GoalType,
    } from "./GoalTypes";

    export class GoalEngine {

      public execute(
          context: ReasoningContext
            ): ReasoningContext {

                context.goal = this.identify(
                      context.message
                          );

                              return context;
                                }

                                  public identify(
                                      message: string
                                        ): GoalResult {

                                            const text = message.toLowerCase();

                                                if (
                                                      text.includes("build") ||
                                                            text.includes("develop") ||
                                                                  text.includes("create")
                                                                      ) {
                                                                            return {
                                                                                    type: GoalType.CREATE,
                                                                                            confidence: 0.95,
                                                                                                  };
                                                                                                      }

                                                                                                          if (
                                                                                                                text.includes("learn") ||
                                                                                                                      text.includes("study")
                                                                                                                          ) {
                                                                                                                                return {
                                                                                                                                        type: GoalType.LEARN,
                                                                                                                                                confidence: 0.92,
                                                                                                                                                      };
                                                                                                                                                          }

                                                                                                                                                              if (
                                                                                                                                                                    text.includes("improve") ||
                                                                                                                                                                          text.includes("optimize")
                                                                                                                                                                              ) {
                                                                                                                                                                                    return {
                                                                                                                                                                                            type: GoalType.IMPROVE,
                                                                                                                                                                                                    confidence: 0.91,
                                                                                                                                                                                                          };
                                                                                                                                                                                                              }

                                                                                                                                                                                                                  return {
                                                                                                                                                                                                                        type: GoalType.GENERAL,
                                                                                                                                                                                                                              confidence: 0.80,
                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                    const goalEngine = new GoalEngine();

                                                                                                                                                                                                                                    export default goalEngine;