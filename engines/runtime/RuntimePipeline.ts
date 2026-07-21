import {
      RuntimeRequest,
        RuntimeResponse,
        } from "./RuntimeTypes";

        import runtimeEngine from "./RuntimeEngine";

        export class RuntimePipeline {

          /**
             * Execute the Runtime pipeline.
                */
                  public async execute(
                      request: RuntimeRequest
                        ): Promise<RuntimeResponse> {

                            try {

                                  return await runtimeEngine.process(request);

                                      } catch (error) {

                                            console.error("[RuntimePipeline]", error);

                                                  return {
                                                          response: "An unexpected error occurred.",
                                                                  success: false,
                                                                          timestamp: new Date(),
                                                                                };

                                                                                    }

                                                                                      }

                                                                                        /**
                                                                                           * Runtime health check.
                                                                                              */
                                                                                                public async isReady(): Promise<boolean> {

                                                                                                    return runtimeEngine.isReady();

                                                                                                      }

                                                                                                      }

                                                                                                      const runtimePipeline = new RuntimePipeline();

                                                                                                      export default runtimePipeline;
