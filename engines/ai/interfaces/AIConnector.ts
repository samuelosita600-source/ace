export interface AIRequest {
      prompt: string;
      }

      export interface AIResponse {
        text: string;
        }

        export interface AIConnector {
          send(request: AIRequest): Promise<AIResponse>;
          }
