import { ChatRequest, ChatResponse } from "./ChatTypes";

import chatPipeline from "./ChatPipeline";

export class ChatManager {
  /** Public chat boundary used by HTTP and UI adapters. */
  public async sendMessage(request: ChatRequest): Promise<ChatResponse> {
    return chatPipeline.execute(request);
  }
}

const chatManager = new ChatManager();

export default chatManager;
