export const AIConfig = {
      openRouter: {
              /**
                       * OpenRouter API Key
                                */
                                        apiKey: process.env.OPENROUTER_API_KEY ?? "",

                                                /**
                                                         * OpenRouter Base URL
                                                                  */
                                                                          baseUrl: "https://openrouter.ai/api/v1",

                                                                                  /**
                                                                                           * Default model used by ACE.
                                                                                                    */
                                                                                                            defaultModel: "openai/gpt-oss-20b:free",

                                                                                                                    /**
                                                                                                                             * Request timeout (milliseconds)
                                                                                                                                      */
                                                                                                                                              timeout: 60000,
                                                                                                                                                  },

                                                                                                                                                      /**
                                                                                                                                                           * Retry failed requests.
                                                                                                                                                                */
                                                                                                                                                                    retryAttempts: 3,

                                                                                                                                                                        /**
                                                                                                                                                                             * Enable request logging.
                                                                                                                                                                                  */
                                                                                                                                                                                      enableLogging: true,

                                                                                                                                                                                          /**
                                                                                                                                                                                               * Automatically switch providers if one fails.
                                                                                                                                                                                                    * (Will become useful when Claude, Gemini, GPT, Kimi, etc. are added.)
                                                                                                                                                                                                         */
                                                                                                                                                                                                             autoFailover: true,

                                                                                                                                                                                                                 /**
                                                                                                                                                                                                                      * Maximum concurrent AI requests.
                                                                                                                                                                                                                           */
                                                                                                                                                                                                                               maxConcurrentRequests: 5,
                                                                                                                                                                                                                               };

export default AIConfig;
