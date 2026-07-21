import { Conversation } from "./ConversationTypes";
import conversationEngine from "./ConversationEngine";

export class ConversationPipeline {

  public async execute(
      conversation: Conversation
        ): Promise<void> {

            await conversationEngine.create(conversation);

              }

              }

              const conversationPipeline = new ConversationPipeline();

              export default conversationPipeline;