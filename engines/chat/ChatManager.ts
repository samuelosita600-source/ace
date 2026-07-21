import {
  ChatRequest,
  ChatResponse,
} from "./ ChatTypes";

import chatPipeline from "./ ChatPipeline";

export class ChatManager {

  public async handle(
    request: ChatRequest
  ): Promise<ChatResponse> {

    return chatPipeline.execute(request);

  }

}

const chatManager = new ChatManager();

export default chatManager;