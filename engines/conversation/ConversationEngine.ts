import { Conversation } from "./ConversationTypes";
import conversationManager from "./ConversationManager";

export class ConversationEngine {

  public async create(
      conversation: Conversation
        ): Promise<void> {

            await conversationManager.save(conversation);

              }

                public async load(
                    id: string
                      ): Promise<Conversation | null> {

                          return conversationManager.get(id);

                            }

                            }

                            const conversationEngine = new ConversationEngine();

                            export default conversationEngine;