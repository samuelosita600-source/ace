import { BrainInput } from "./BrainTypes";
import promptTemplates from "@/config/prompts.json";

export class PromptBuilder {
  /**
   * Build the final prompt sent to the AI.
   */
  public build(input: BrainInput): string {
    const { message, memories = [] } = input.context;

    const { goals = [], emotions = [] } =
      input.context as BrainInput["context"] & {
        goals?: unknown[];
        emotions?: unknown[];
      };

    return [
      `User message:\n${message}`,
      `Relevant memories:\n${JSON.stringify(memories, null, 2)}`,
      `Goals:\n${JSON.stringify(goals, null, 2)}`,
      `Emotional context:\n${JSON.stringify(emotions, null, 2)}`,
      `Instructions:\n${promptTemplates.instructions.map((instruction) => `- ${instruction}`).join("\n")}`,
    ].join("\n\n");
  }

  /**
   * Build a system prompt.
   */
  public buildSystemPrompt(): string {
    return promptTemplates.system;
  }
}

const promptBuilder = new PromptBuilder();

export default promptBuilder;
