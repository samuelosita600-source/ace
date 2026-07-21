import { BrainInput, BrainOutput } from "./BrainTypes";

import contextBuilder from "./ContextBuilder";
import promptBuilder from "./PromptBuilder";

import reasoningEngine from "@/engines/reasoning";
import aiGateway from "@/engines/ai";

import memoryEngine from "@/engines/memory";
import reflectionService from "@/engines/reflection";
import learningService from "@/engines/learning";

export class BrainPipeline {

  /**
     * Execute the complete Brain pipeline.
        */
          public async execute(
              input: BrainInput
                ): Promise<BrainOutput> {

                    // Step 1 — Build context
                        const context =
                              await contextBuilder.build(input);

                                  // Step 2 — Run reasoning
                                      const reasoning =
                                            await reasoningEngine.execute(context.context);

                                                // Step 3 — Build prompt
                                                    const prompt =
                                                          promptBuilder.build({
                                                                  context: reasoning
                                                                        });

                                                                            // Step 4 — Generate AI response
                                                                                const response =
                                                                                      await aiGateway.generate({
                                                                                              prompt,
                                                                                                      temperature: 0.7,
                                                                                                              maxTokens: 2048,
                                                                                                                    });

                                                                                                                        // Step 5 — Save conversation memory
                                                                                                                            await memoryEngine.save({
                                                                                                                                  id: crypto.randomUUID(),
                                                                                                                                        content: context.context.message,
                                                                                                                                              type: "conversation",
                                                                                                                                                    timestamp: new Date(),
                                                                                                                                                        });

                                                                                                                                                            // Step 6 — Reflection
                                                                                                                                                                await reflectionService.reflect({
                                                                                                                                                                      userId: context.context.userId,
                                                                                                                                                                            prompt: context.context.message,
                                                                                                                                                                                  response: response.text,
                                                                                                                                                                                      });

                                                                                                                                                                                          // Step 7 — Learning
                                                                                                                                                                                              await learningService.process({
                                                                                                                                                                                                    success: true,
                                                                                                                                                                                                          summary: response.text,
                                                                                                                                                                                                                timestamp: new Date(),
                                                                                                                                                                                                                    });

                                                                                                                                                                                                                        return {
                                                                                                                                                                                                                              response,
                                                                                                                                                                                                                                    context: reasoning,
                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                          const brainPipeline = new BrainPipeline();

                                                                                                                                                                                                                                          export default brainPipeline;