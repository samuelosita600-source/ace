import type { ReasoningContext } from "@/engines/reasoning";
import goalEngine from "./GoalEngine";
import type { GoalResult } from "./GoalTypes";

export class GoalService {
  public identify(message: string): GoalResult {
    return goalEngine.identify(message);
  }

  public execute(context: ReasoningContext): ReasoningContext {
    return {
      ...context,
      goal: this.identify(context.message),
    };
  }
}

export const goalService = new GoalService();
export default goalService;
