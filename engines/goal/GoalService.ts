import type { ReasoningContext } from "@/engines/reasoning";
import goalEngine, { type GoalResult } from "./GoalEngine";

export class GoalService {
  public identify(message: string): GoalResult {
    return goalEngine.identify(message);
  }

  public execute(context: ReasoningContext): ReasoningContext {
    context.goal = this.identify(context.message);
    return context;
  }
}

export const goalService = new GoalService();
export default goalService;
