export enum IntentType {
      QUESTION = "QUESTION",
        COMMAND = "COMMAND",
          REQUEST = "REQUEST",
            STATEMENT = "STATEMENT",
              GREETING = "GREETING",
                GOODBYE = "GOODBYE",
                  EMOTION = "EMOTION",
                    UNKNOWN = "UNKNOWN",
                    }

                    export interface IntentResult {
                      type: IntentType;
                        confidence: number;
                          reason: string;
                          }
