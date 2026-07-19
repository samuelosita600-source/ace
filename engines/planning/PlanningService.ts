import type { ReasoningContext } from "@/engines/reasoning";
import planningEngine from "./PlanningEngine";
import type { PlanningResult } from "./PlanningTypes";

export class PlanningService {
  public createPlan(message: string): PlanningResult {
    return planningEngine.createPlan(message);
  }

  public execute(context: ReasoningContext): ReasoningContext {
    context.plan = this.createPlan(context.message);
    return context;
  }
}

export const planningService = new PlanningService();
export default planningService;
