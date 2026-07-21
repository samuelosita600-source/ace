import { Conversation } from "./ConversationTypes";

export class ConversationStore {

  private conversations = new Map<string, Conversation>();

    public async save(conversation: Conversation): Promise<void> {

        this.conversations.set(conversation.id, conversation);

          }

            public async get(id: string): Promise<Conversation | null> {

                return this.conversations.get(id) ?? null;

                  }

                  }

                  const conversationStore = new ConversationStore();

                  export default conversationStore;