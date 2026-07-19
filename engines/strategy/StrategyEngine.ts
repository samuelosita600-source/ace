import strategyPlanner from "./StrategyPlanner";

export enum StrategyType {
  Explain = "explain",
    Teach = "teach",
      Comfort = "comfort",
        Encourage = "encourage",
          Brainstorm = "brainstorm",
            Clarify = "clarify",
              SolveProblem = "solve_problem",
                Plan = "plan",
                  Challenge = "challenge",
                    CasualConversation = "casual_conversation",
                    }

                    export interface StrategyResult {
                      strategy: StrategyType;
                        confidence: number;
                        }

                        export class StrategyEngine {
                          public choose(message: string): StrategyResult {
                              return strategyPlanner.plan(message);
                                }
                                }

                                const strategyEngine = new StrategyEngine();

                                export default strategyEngine;