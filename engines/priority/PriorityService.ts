import type { ReasoningContext } from "@/engines/reasoning";
import priorityEngine from "./PriorityEngine";
import type { PriorityResult } from "./PriorityTypes";

export class PriorityService {
  public determine(message: string): PriorityResult {
    return priorityEngine.determine(message);
  }

  public execute(context: ReasoningContext): ReasoningContext {
    return {
      ...context,
      priority: this.determine(context.message),
    };
  }
}

export const priorityService = new PriorityService();
export default priorityService;
