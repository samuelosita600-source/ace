import { ReasoningContext } from "@/engines/reasoning";
import { PlanningResult } from "@/engines/planning";
import { ExecutionResult } from "./ExecutionTypes";

export class ExecutionEngine {

  public execute(
      context: ReasoningContext
        ): ReasoningContext {

            if (!context.plan) {
                  throw new Error(
                          "ExecutionEngine requires a planning result."
                                );
                                    }

                                        context.execution = this.determineExecution(
                                              context.plan
                                                  );

                                                      return context;
                                                        }

                                                          public determineExecution(
                                                              plan: PlanningResult
                                                                ): ExecutionResult {

                                                                    const nextStep = plan.steps.find(
                                                                          step => !step.completed
                                                                              );

                                                                                  if (!nextStep) {
                                                                                        return {
                                                                                                currentStep: -1,
                                                                                                        completed: true,
                                                                                                                confidence: 1,
                                                                                                                      };
                                                                                                                          }

                                                                                                                              return {
                                                                                                                                    currentStep: nextStep.id,
                                                                                                                                          completed: false,
                                                                                                                                                confidence: 0.95,
                                                                                                                                                    };
                                                                                                                                                      }
                                                                                                                                                      }

                                                                                                                                                      const executionEngine = new ExecutionEngine();

                                                                                                                                                      export default executionEngine;