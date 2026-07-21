import type { ReasoningContext } from "@/engines/reasoning";
import { RiskLevel, type RiskResult } from "./RiskTypes";

export class RiskEngine {
  public execute(context: ReasoningContext): ReasoningContext {
    return {
      ...context,
      risk: this.assess(context.message),
    };
  }

  public assess(message: string): RiskResult {
    const text = message.toLowerCase();

    if (
      this.containsAny(text, [
        "delete",
        "drop database",
        "production",
        "shutdown",
      ])
    ) {
      return {
        level: RiskLevel.HIGH,
        confidence: 0.98,
        reason: "Potentially destructive action detected.",
      };
    }

    if (this.containsAny(text, ["deploy", "replace", "overwrite"])) {
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

  private containsAny(text: string, terms: string[]): boolean {
    return terms.some((term) => text.includes(term));
  }
}

const riskEngine = new RiskEngine();

export default riskEngine;
