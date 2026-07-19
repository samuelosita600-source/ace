export enum RiskLevel {
      LOW = "LOW",
        MEDIUM = "MEDIUM",
          HIGH = "HIGH",
            CRITICAL = "CRITICAL",
            }

            export interface RiskResult {
              level: RiskLevel;
                confidence: number;
                  reason: string;
                  }
