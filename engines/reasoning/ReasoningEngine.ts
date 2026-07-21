import {
        ReasoningContext,
            ReasoningResult
            } from "./ReasoningTypes";

            import reasoningPipeline from "./ReasoningPipeline";

            export class ReasoningEngine {

                /**
                     * Process a user request through the reasoning system.
                          */
                              public async think(
                                      context: ReasoningContext
                                          ): Promise<ReasoningResult> {

                                                  return reasoningPipeline.execute(context);

                                                      }

                                                          /**
                                                               * Alias for think().
                                                                    */
                                                                        public async execute(
                                                                                context: ReasoningContext
                                                                                    ): Promise<ReasoningResult> {

                                                                                            return this.think(context);

                                                                                                }

                                                                                                    /**
                                                                                                         * Verify the reasoning engine is available.
                                                                                                              */
                                                                                                                  public async isReady(): Promise<boolean> {

                                                                                                                          return reasoningPipeline.isReady();

                                                                                                                              }

                                                                                                                              }

                                                                                                                              const reasoningEngine = new ReasoningEngine();

                                                                                                                              export default reasoningEngine;
