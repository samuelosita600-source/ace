import type { ReasoningContext } from "@/engines/reasoning";
import { IntentType, type IntentResult } from "./IntentTypes";

export class IntentEngine {
  public execute(context: ReasoningContext): ReasoningContext {
    return {
      ...context,
      intent: this.identify(context.message),
    };
  }

  public identify(message: string): IntentResult {
    const text = message.toLowerCase();

    if (this.containsAny(text, ["hello", "hi", "hey"])) {
      return {
        type: IntentType.GREETING,
        confidence: 0.9,
        reason: "The message opens with a greeting.",
      };
    }

    if (this.containsAny(text, ["bye", "goodbye", "see you"])) {
      return {
        type: IntentType.GOODBYE,
        confidence: 0.9,
        reason: "The message closes or exits the conversation.",
      };
    }

    if (text.includes("?")) {
      return {
        type: IntentType.QUESTION,
        confidence: 0.92,
        reason: "The message asks for information or clarification.",
      };
    }

    if (
      this.containsAny(text, ["fix", "debug", "build", "create", "develop"])
    ) {
      return {
        type: IntentType.COMMAND,
        confidence: 0.9,
        reason:
          "The message directs the system to perform implementation work.",
      };
    }

    if (
      this.containsAny(text, ["please", "can you", "could you", "would you"])
    ) {
      return {
        type: IntentType.REQUEST,
        confidence: 0.85,
        reason: "The message asks the system to take an action.",
      };
    }

    if (
      this.containsAny(text, [
        "feel",
        "feeling",
        "happy",
        "sad",
        "angry",
        "worried",
      ])
    ) {
      return {
        type: IntentType.EMOTION,
        confidence: 0.82,
        reason: "The message expresses an emotional state.",
      };
    }

    if (text.trim().length > 0) {
      return {
        type: IntentType.STATEMENT,
        confidence: 0.8,
        reason: "The message is a declarative statement.",
      };
    }

    return {
      type: IntentType.UNKNOWN,
      confidence: 0.5,
      reason: "The message does not contain enough signal to classify.",
    };
  }

  private containsAny(text: string, terms: string[]): boolean {
    return terms.some((term) => text.includes(term));
  }
}

const intentEngine = new IntentEngine();

export default intentEngine;
