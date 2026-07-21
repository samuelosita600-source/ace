import { BrainInput, BrainOutput } from "./BrainTypes";

import brainEngine from "./BrainEngine";

import memoryEngine from "@/engines/memory";
import reflectionService from "@/engines/reflection";
import learningService from "@/engines/learning";

export class ACEBrain {

  /**
     * Main intelligence entry point.
        */
          public async think(
              input: BrainInput
                ): Promise<BrainOutput> {

                    // Retrieve relevant memories
                        const memories = await memoryEngine.search(
                              input.context.message
                                  );

                                      input.context.memories = memories;

                                          // Process through the Brain Engine
                                              const output =
                                                    await brainEngine.process(input);

                                                        // Learn from the interaction
                                                            await learningService.process({
                                                                  success: true,
                                                                        timestamp: new Date(),
                                                                              summary: output.response.text,
                                                                                  });

                                                                                      // Reflect on the interaction
                                                                                          await reflectionService.reflect({
                                                                                                userId: input.context.userId,
                                                                                                      prompt: input.context.message,
                                                                                                            response: output.response.text,
                                                                                                                });

                                                                                                                    return output;

                                                                                                                      }

                                                                                                                        /**
                                                                                                                           * Health check.
                                                                                                                              */
                                                                                                                                public async isReady(): Promise<boolean> {

                                                                                                                                    return brainEngine.isReady();

                                                                                                                                      }

                                                                                                                                      }

                                                                                                                                      const aceBrain = new ACEBrain();

                                                                                                                                      export default aceBrain;