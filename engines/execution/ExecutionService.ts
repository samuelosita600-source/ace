import type { ReasoningContext } from "@/engines/reasoning";
import executionEngine from "./ExecutionEngine";
import type { ExecutionResult } from "./ExecutionTypes";
import type { PlanningResult } from "@/engines/planning";

export class ExecutionService {
  public determineExecution(plan: PlanningResult): ExecutionResult {
    return executionEngine.determineExecution(plan);
  }

  public execute(context: ReasoningContext): ReasoningContext {
    if (!context.plan) {
      throw new Error("ExecutionEngine requires a planning result.");
    }

    context.execution = this.determineExecution(context.plan);
    return context;
  }
}

export const executionService = new ExecutionService();
export default executionService;
