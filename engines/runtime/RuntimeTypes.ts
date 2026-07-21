export interface RuntimeRequest {

      userId: string;

        message: string;

          conversationId?: string;

          }

          export interface RuntimeResponse {

            response: string;

              success: boolean;

                timestamp: Date;

                }

                export interface RuntimeState {

                  initialized: boolean;

                    ready: boolean;

                    }
