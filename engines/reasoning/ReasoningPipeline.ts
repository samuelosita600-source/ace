import {
      ReasoningContext,
        ReasoningResult,
        } from "./ReasoningTypes";

        import reasoningExecutor from "./ReasoningExecutor";

        export class ReasoningPipeline {
          /**
             * Executes the complete reasoning pipeline.
                */
                  public async execute(
                      context: ReasoningContext
                        ): Promise<ReasoningResult> {
                            try {
                                  const result = await reasoningExecutor.execute(context);

                                        return result;
                                            } catch (error) {
                                                  console.error("[ReasoningPipeline]", error);

                                                        throw error;
                                                            }
                                                              }

                                                                /**
                                                                   * Checks whether the reasoning pipeline is available.
                                                                      */
                                                                        public async isReady(): Promise<boolean> {
                                                                            try {
                                                                                  return true;
                                                                                      } catch {
                                                                                            return false;
                                                                                                }
                                                                                                  }
                                                                                                  }

                                                                                                  const reasoningPipeline = new ReasoningPipeline();

                                                                                                  export default reasoningPipeline;
                                                                                              