import { BrainInput } from "./BrainTypes";
import promptTemplates from "@/config/prompts.json";

export class PromptBuilder {
  /**
   * Build the final prompt sent to the AI.
   */
  public build(input: BrainInput): string {
    const { message, memories = [] } = input.context;

    const { goal, intent, priority, risk, plan, execution, emotion } =
      input.context;

    return [
      `User message:\n${message}`,
      `Relevant memories:\n${JSON.stringify(memories, null, 2)}`,
      `ACE operating context:\n${JSON.stringify(
        { goal, intent, priority, risk, plan, execution, emotion },
        null,
        2,
      )}`,
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
