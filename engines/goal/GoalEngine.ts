import type { ReasoningContext } from "@/engines/reasoning";
import { GoalType, type GoalResult } from "./GoalTypes";

export class GoalEngine {
  public execute(context: ReasoningContext): ReasoningContext {
    return {
      ...context,
      goal: this.identify(context.message),
    };
  }

  public identify(message: string): GoalResult {
    const text = message.toLowerCase();

    if (this.containsAny(text, ["build", "develop", "create"])) {
      return {
        type: GoalType.CREATE,
        confidence: 0.95,
        reason: "The request describes creating or developing something.",
      };
    }

    if (this.containsAny(text, ["learn", "study"])) {
      return {
        type: GoalType.LEARN,
        confidence: 0.92,
        reason: "The request is focused on learning or study.",
      };
    }

    if (this.containsAny(text, ["improve", "optimize"])) {
      return {
        type: GoalType.IMPROVE,
        confidence: 0.91,
        reason: "The request is focused on improving an existing system.",
      };
    }

    return {
      type: GoalType.GENERAL,
      confidence: 0.8,
      reason: "The request does not map to a more specific goal.",
    };
  }

  private containsAny(text: string, terms: string[]): boolean {
    return terms.some((term) => text.includes(term));
  }
}

const goalEngine = new GoalEngine();

export default goalEngine;
