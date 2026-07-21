export interface ChatRequest {
      userId: string;

        message: string;

          conversationId?: string;
          }

          export interface ChatResponse {
            response: string;

              success: boolean;

                timestamp: Date;
                }

                export interface ChatSession {
                  userId: string;

                    conversationId: string;

                      createdAt: Date;

                        updatedAt: Date;
                        }
