import { BrainInput } from "./BrainTypes";

export class PromptBuilder {

  /**
     * Build the final prompt sent to the AI.
        */
          public build(
              input: BrainInput
                ): string {

                    const {
                          message,
                                memories = [],
                                      goals = [],
                                            emotions = [],
                                                } = input.context;

                                                    return `
                                                    You are ACE, an intelligent AI assistant.

                                                    User Message:
                                                    ${message}

                                                    Relevant Memories:
                                                    ${JSON.stringify(memories, null, 2)}

                                                    Goals:
                                                    ${JSON.stringify(goals, null, 2)}

                                                    Emotional Context:
                                                    ${JSON.stringify(emotions, null, 2)}

                                                    Instructions:
                                                    - Be accurate.
                                                    - Be helpful.
                                                    - Use memory when appropriate.
                                                    - Think before answering.
                                                    - Respond naturally.
                                                    `;

                                                      }

                                                        /**
                                                           * Build a system prompt.
                                                              */
                                                                public buildSystemPrompt(): string {

                                                                    return `
                                                                    You are ACE.

                                                                    Always:
                                                                    - Think step by step.
                                                                    - Use long-term memory when available.
                                                                    - Stay truthful.
                                                                    - Never invent facts.
                                                                    - Prioritize the user's goals.
                                                                    `;

                                                                      }

                                                                      }

                                                                      const promptBuilder = new PromptBuilder();

                                                                      export default promptBuilder;