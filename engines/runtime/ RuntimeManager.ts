import {
    RuntimeRequest,
      RuntimeResponse,
      } from "./RuntimeTypes";

      import runtimePipeline from "./RuntimePipeline";

      export class RuntimeManager {

        /**
           * Main entry point for the Runtime.
              */
                public async handle(
                    request: RuntimeRequest
                      ): Promise<RuntimeResponse> {

                          return runtimePipeline.execute(request);

                            }

                              /**
                                 * Health check.
                                    */
                                      public async isReady(): Promise<boolean> {

                                          return runtimePipeline.isReady();

                                            }

                                            }

                                            const runtimeManager = new RuntimeManager();

                                            export default runtimeManager;
