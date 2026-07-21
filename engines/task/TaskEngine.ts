import type { ReasoningContext } from "@/engines/reasoning";
import { TaskResult, TaskType } from "./TaskTypes";

export class TaskEngine {
  public execute(context: ReasoningContext): ReasoningContext {
    return {
      ...context,
      task: this.identify(context.message),
    };
  }

  public identify(message: string): TaskResult {
    const text = message.toLowerCase();

    if (
      this.containsAny(text, [
        "daily",
        "weekly",
        "monthly",
        "every ",
        "recurring",
        "remind",
      ])
    ) {
      return {
        task: TaskType.Recurring,
        confidence: 0.95,
        reason: "The request describes a repeating cadence or reminder.",
      };
    }

    if (
      this.containsAny(text, [
        "project",
        "build",
        "create",
        "develop",
        "implement",
        "system",
      ])
    ) {
      return {
        task: TaskType.Project,
        confidence: 0.9,
        reason:
          "The request describes a deliverable with an implementation scope.",
      };
    }

    if (
      this.containsAny(text, [
        "plan",
        "steps",
        "roadmap",
        "strategy",
        "migrate",
        "workflow",
      ])
    ) {
      return {
        task: TaskType.MultiStep,
        confidence: 0.85,
        reason:
          "The request requires coordinated steps rather than a single action.",
      };
    }

    return {
      task: TaskType.OneTime,
      confidence: 0.75,
      reason: "The request can be handled as a single interaction.",
    };
  }

  private containsAny(text: string, terms: string[]): boolean {
    return terms.some((term) => text.includes(term));
  }
}

const taskEngine = new TaskEngine();

export default taskEngine;
