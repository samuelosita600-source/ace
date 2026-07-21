import { Conversation } from "./ConversationTypes";
import conversationStore from "./ConversationStore";

export class ConversationManager {

  public async save(
      conversation: Conversation
        ): Promise<void> {

            await conversationStore.save(conversation);

              }

                public async get(
                    id: string
                      ): Promise<Conversation | null> {

                          return conversationStore.get(id);

                            }

                            }

                            const conversationManager = new ConversationManager();

                            export default conversationManager;