import { ReasoningContext } from "@/engines/reasoning";
import {
  TaskResult,
    TaskType,
    } from "./TaskTypes";

    export class TaskEngine {

      public execute(
          context: ReasoningContext
            ): ReasoningContext {

                context.task = this.identify(
                      context.message
                          );

                              return context;
                                }

                                  public identify(
                                      message: string
                                        ): TaskResult {

                                            const text = message.toLowerCase();

                                                if (
                                                      text.includes("build") ||
                                                            text.includes("create")
                                                                ) {
                                                                      return {
                                                                              type: TaskType.CREATE,
                                                                                      confidence: 0.95,
                                                                                            };
                                                                                                }

                                                                                                    if (
                                                                                                          text.includes("fix") ||
                                                                                                                text.includes("repair") ||
                                                                                                                      text.includes("debug")
                                                                                                                          ) {
                                                                                                                                return {
                                                                                                                                        type: TaskType.FIX,
                                                                                                                                                confidence: 0.94,
                                                                                                                                                      };
                                                                                                                                                          }

                                                                                                                                                              if (
                                                                                                                                                                    text.includes("explain") ||
                                                                                                                                                                          text.includes("teach") ||
                                                                                                                                                                                text.includes("learn")
                                                                                                                                                                                    ) {
                                                                                                                                                                                          return {
                                                                                                                                                                                                  type: TaskType.LEARN,
                                                                                                                                                                                                          confidence: 0.92,
                                                                                                                                                                                                                };
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                        if (
                                                                                                                                                                                                                              text.includes("plan")
                                                                                                                                                                                                                                  ) {
                                                                                                                                                                                                                                        return {
                                                                                                                                                                                                                                                type: TaskType.PLAN,
                                                                                                                                                                                                                                                        confidence: 0.90,
                                                                                                                                                                                                                                                              };
                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                      return {
                                                                                                                                                                                                                                                                            type: TaskType.GENERAL,
                                                                                                                                                                                                                                                                                  confidence: 0.80,
                                                                                                                                                                                                                                                                                      };
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                        const taskEngine = new TaskEngine();

                                                                                                                                                                                                                                                                                        export default taskEngine;