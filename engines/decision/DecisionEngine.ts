export enum DecisionType {
      Answer = "answer",
        Clarify = "clarify",
          SearchMemory = "search_memory",
            Reflect = "reflect",
              Plan = "plan",
                GenerateAlternatives = "generate_alternatives",
                }

                export interface DecisionResult {
                  decision: DecisionType;
                    confidence: number;
                    }

                    export class DecisionEngine {
                      public decide(message: string): DecisionResult {
                          console.log(`Making decision for: ${message}`);

                              return {
                                    decision: DecisionType.Answer,
                                          confidence: 1,
                                              };
                                                }
                                                }

                                                const decisionEngine = new DecisionEngine();

                                                export default decisionEngine;
