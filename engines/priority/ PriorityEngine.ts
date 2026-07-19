import { ReasoningContext } from "@/engines/reasoning";
import {
  PriorityLevel,
    PriorityResult,
    } from "./PriorityTypes";

    export class PriorityEngine {

      public execute(
          context: ReasoningContext
            ): ReasoningContext {

                context.priority = this.determine(
                      context.message
                          );

                              return context;
                                }

                                  public determine(
                                      message: string
                                        ): PriorityResult {

                                            const text = message.toLowerCase();

                                                if (
                                                      text.includes("urgent") ||
                                                            text.includes("emergency") ||
                                                                  text.includes("critical") ||
                                                                        text.includes("server down")
                                                                            ) {
                                                                                  return {
                                                                                          level: PriorityLevel.CRITICAL,
                                                                                                  confidence: 0.99,
                                                                                                          reason: "Critical request detected.",
                                                                                                                };
                                                                                                                    }

                                                                                                                        if (
                                                                                                                              text.includes("deadline") ||
                                                                                                                                    text.includes("today") ||
                                                                                                                                          text.includes("important")
                                                                                                                                              ) {
                                                                                                                                                    return {
                                                                                                                                                            level: PriorityLevel.HIGH,
                                                                                                                                                                    confidence: 0.95,
                                                                                                                                                                            reason: "High-priority request.",
                                                                                                                                                                                  };
                                                                                                                                                                                      }

                                                                                                                                                                                          if (
                                                                                                                                                                                                text.includes("help") ||
                                                                                                                                                                                                      text.includes("plan") ||
                                                                                                                                                                                                            text.includes("build")
                                                                                                                                                                                                                ) {
                                                                                                                                                                                                                      return {
                                                                                                                                                                                                                              level: PriorityLevel.MEDIUM,
                                                                                                                                                                                                                                      confidence: 0.90,
                                                                                                                                                                                                                                              reason: "Normal working request.",
                                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                            return {
                                                                                                                                                                                                                                                                  level: PriorityLevel.LOW,
                                                                                                                                                                                                                                                                        confidence: 0.85,
                                                                                                                                                                                                                                                                              reason: "General conversation.",
                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                    const priorityEngine = new PriorityEngine();

                                                                                                                                                                                                                                                                                    export default priorityEngine;