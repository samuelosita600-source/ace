import {
      ChatRequest,
        ChatResponse,
        } from "./ ChatTypes";

        import chatEngine from "./ ChatEngine";

        export class ChatPipeline {

          public async execute(
              request: ChatRequest
                ): Promise<ChatResponse> {

                    return chatEngine.send(request);

                      }

                      }

                      const chatPipeline = new ChatPipeline();

                      export default chatPipeline;