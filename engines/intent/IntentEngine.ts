import { ReasoningContext } from "@/engines/reasoning";
import {
  IntentResult,
    IntentType,
    } from "./IntentTypes";

    export class IntentEngine {

      public execute(
          context: ReasoningContext
            ): ReasoningContext {

                context.intent = this.identify(
                      context.message
                          );

                              return context;
                                }

                                  public identify(
                                      message: string
                                        ): IntentResult {

                                            const text = message.toLowerCase();

                                                if (
                                                      text.includes("build") ||
                                                            text.includes("create") ||
                                                                  text.includes("develop")
                                                                      ) {
                                                                            return {
                                                                                    type: IntentType.CREATE,
                                                                                            confidence: 0.95,
                                                                                                  };
                                                                                                      }

                                                                                                          if (
                                                                                                                text.includes("fix") ||
                                                                                                                      text.includes("debug")
                                                                                                                          ) {
                                                                                                                                return {
                                                                                                                                        type: IntentType.FIX,
                                                                                                                                                confidence: 0.93,
                                                                                                                                                      };
                                                                                                                                                          }

                                                                                                                                                              if (
                                                                                                                                                                    text.includes("learn") ||
                                                                                                                                                                          text.includes("teach")
                                                                                                                                                                              ) {
                                                                                                                                                                                    return {
                                                                                                                                                                                            type: IntentType.LEARN,
                                                                                                                                                                                                    confidence: 0.92,
                                                                                                                                                                                                          };
                                                                                                                                                                                                              }

                                                                                                                                                                                                                  return {
                                                                                                                                                                                                                        type: IntentType.GENERAL,
                                                                                                                                                                                                                              confidence: 0.80,
                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                    const intentEngine = new IntentEngine();

                                                                                                                                                                                                                                    export default intentEngine;