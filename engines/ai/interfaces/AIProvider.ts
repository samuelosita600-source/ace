import { AIRequest } from "./AIRequest";
import { AIResponse } from "./AIResponse";

export interface AIProvider {
    /**
         * Provider name.
              */
                  readonly name: string;

                      /**
                           * Provider type.
                                */
                                    readonly type: string;

                                        /**
                                             * Lower number = higher priority.
                                                  */
                                                      readonly priority: number;

                                                          /**
                                                               * Check whether this provider is available.
                                                                    */
                                                                        isAvailable(): Promise<boolean>;

                                                                            /**
                                                                                 * Generate an AI response.
                                                                                      */
                                                                                          generate(request: AIRequest): Promise<AIResponse>;
                                                                                          }