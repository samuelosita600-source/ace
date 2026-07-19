export enum PriorityLevel {
      LOW = "LOW",
        MEDIUM = "MEDIUM",
          HIGH = "HIGH",
            CRITICAL = "CRITICAL",
            }

            export interface PriorityResult {
              level: PriorityLevel;
                confidence: number;
                  reason: string;
                  }
