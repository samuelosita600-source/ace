import {
      ChatRequest,
        ChatResponse,
        } from "./ ChatTypes";

        import runtimeManager from "@/engines/runtime";

        export class ChatEngine {

          /**
             * Send a message through ACE.
                */
                  public async send(
                      request: ChatRequest
                        ): Promise<ChatResponse> {

                            return runtimeManager.handle(request);

                              }

                                /**
                                   * Health check.
                                      */
                                        public async isReady(): Promise<boolean> {

                                            return runtimeManager.isReady();

                                              }

                                              }

                                              const chatEngine = new ChatEngine();

                                              export default chatEngine;
