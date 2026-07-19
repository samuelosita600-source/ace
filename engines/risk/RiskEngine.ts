import { ReasoningContext } from "@/engines/reasoning";
import {
  RiskLevel,
    RiskResult,
    } from "./RiskTypes";

    export class RiskEngine {

      public execute(
          context: ReasoningContext
            ): ReasoningContext {

                context.risk = this.assess(
                      context.message
                          );

                              return context;
                                }

                                  public assess(
                                      message: string
                                        ): RiskResult {

                                            const text = message.toLowerCase();

                                                if (
                                                      text.includes("delete") ||
                                                            text.includes("drop database") ||
                                                                  text.includes("production") ||
                                                                        text.includes("shutdown")
                                                                            ) {
                                                                                  return {
                                                                                          level: RiskLevel.HIGH,
                                                                                                  confidence: 0.98,
                                                                                                          reason: "Potentially destructive action detected.",
                                                                                                                };
                                                                                                                    }

                                                                                                                        if (
                                                                                                                              text.includes("deploy") ||
                                                                                                                                    text.includes("replace") ||
                                                                                                                                          text.includes("overwrite")
                                                                                                                                              ) {
                                                                                                                                                    return {
                                                                                                                                                            level: RiskLevel.MEDIUM,
                                                                                                                                                                    confidence: 0.92,
                                                                                                                                                                            reason: "Operation may affect existing systems.",
                                                                                                                                                                                  };
                                                                                                                                                                                      }

                                                                                                                                                                                          return {
                                                                                                                                                                                                level: RiskLevel.LOW,
                                                                                                                                                                                                      confidence: 0.88,
                                                                                                                                                                                                            reason: "Low-risk request.",
                                                                                                                                                                                                                };
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                  }

                                                                                                                                                                                                                  const riskEngine = new RiskEngine();

                                                                                                                                                                                                                  export default riskEngine;