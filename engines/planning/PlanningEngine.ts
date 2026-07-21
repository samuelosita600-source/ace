import type { ReasoningContext } from "@/engines/reasoning";
import type { PlanningResult, PlanningStep } from "./PlanningTypes";

export class PlanningEngine {
  public execute(context: ReasoningContext): ReasoningContext {
    return {
      ...context,
      plan: this.createPlan(context.message),
    };
  }

  public createPlan(message: string): PlanningResult {
    return {
      steps: this.buildPlan(message),
      confidence: 0.95,
    };
  }

  private buildPlan(message: string): PlanningStep[] {
    const text = message.toLowerCase();

    if (this.containsAny(text, ["build", "project", "system"])) {
      return [
        { id: 1, title: "Understand requirements", completed: false },
        { id: 2, title: "Design the solution", completed: false },
        { id: 3, title: "Break into tasks", completed: false },
        { id: 4, title: "Implement the solution", completed: false },
        { id: 5, title: "Review and improve", completed: false },
      ];
    }

    if (this.containsAny(text, ["plan", "roadmap"])) {
      return [
        { id: 1, title: "Define objective", completed: false },
        { id: 2, title: "Create roadmap", completed: false },
        { id: 3, title: "Prioritize tasks", completed: false },
        { id: 4, title: "Execute plan", completed: false },
      ];
    }

    return [
      { id: 1, title: "Understand request", completed: false },
      { id: 2, title: "Generate response", completed: false },
    ];
  }

  private containsAny(text: string, terms: string[]): boolean {
    return terms.some((term) => text.includes(term));
  }
}

const planningEngine = new PlanningEngine();

export default planningEngine;
