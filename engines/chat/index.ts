import ace from "@/engines/core/runtime";

export interface ChatResponse {
  message: string;
  }

  export class ChatEngine {
    public async sendMessage(message: string): Promise<ChatResponse> {
        const response = await ace.chat(message);

            return {
                  message: response,
                      };
                        }
                        }

                        const chatEngine = new ChatEngine();

                        export default chatEngine;